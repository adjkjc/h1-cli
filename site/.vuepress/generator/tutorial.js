'use strict';
const fs = require('fs');
const yaml = require('js-yaml');
const utils = require('./utils');

const INCLUDE_RE = /^```\s*yaml\n\s*#\s*render=tutorial\s*\n(.+?)^```\s*$/sgm;

const escapeTemplate = key => key.replace('\{\{', '\\{\\{').replace('\}\}', '\\}\\}');

const shell_explain = (cmd) => {
    let content = "";
    content += utils.dump(cmd, 'bash');
    if (!cmd.trim().includes("\n")) {
        const url = "https://www.explainshell.com/explain?cmd=" + encodeURIComponent(cmd.trim());
        content += `Możesz zapoznać się z [objaśnieniem polecenia na explainshell.com](${url}).\n\n`;
    }
    return content;
};

const task_name_for_task = task => Object.keys(tasks).find(task_name => task_name in task);
const task_data_for_task = task => task[task_name_for_task(task)];

const partials = {
    apt_initialize: (data, prev, next, ctx) => {
        if (!ctx.apt_updated) {
            ctx.apt_updated = true;
            return `Uaktualnij indeks pakietów w repozytoriach:` +
                shell_explain(`sudo apt-get update`);
        }
        return '';
    },
    mysql_initialize: (data, prev, next) => {
        if (!prev || !task_name_for_task(prev).startsWith("mysql_")) {
            return '';
        }
        return "Uruchom interaktywną konsolę MySQL:" + shell_explain(`sudo mysql`);
    },
    mysql_finish: (data, prev, next) => {
        if (!next || !task_name_for_task(next).startsWith("mysql_")) {
            return "Zamknij interaktywną konsolę MySQL:" + utils.dump(`exit`);
        }
        return '';
    },
    editor_initialize: (data, prev, next) => {
        if (!prev || task_data_for_task(prev).path !== data.path) {
            return `Otwórz do edycji plik ${data.path} wykonując następujące polecenie:` +
                shell_explain(`sudo nano ${data.path}`);
        }
        return '';
    },
    editor_finish: (data, prev, next) => {
        if (!next || task_data_for_task(next).path !== data.path) {
            return "Zapisz wprowadzone zmiany i zamknij edytor.\n";
        }
        return '';

    },
    powershell_initialize: (data, prev) => {
        if (!prev || !task_name_for_task(prev).startsWith("powershell")) {
            return `Otwórz powłokę Powershell.\n`;
        }
        return '';
    },
    powershell_finish: (data, prev, next) => {
        if (!next || (task_name_for_task(next) && !task_name_for_task(next).startsWith("powershell"))) {
            return "Zamknij powłokę Powershell.\n";
        }
        return '';
    },


};

const tasks = {
    template: (data, prev, next) => {
        let content = `Utwórz nowy plik konfiguracyjny:`;
        content += shell_explain(`sudo nano ${data.dest}`, 'bash');
        content += `Wklej poniższą zawartość:\n`;
        content += utils.dump(data.content, data.syntax);
        return content;
    },
    service: (data, prev, next) => {
        let content = "";
        if (data.state === "restarted") {
            content += `W celu zrestartowania usługi wykonaj następujące polecenie:`;
            content += shell_explain(`sudo systemctl restart ${data.name}`);
        } else {
            throw new Error("Not implemented yet");
        }
        return content;
    },
    shell: (data, prev, next) => {
        let content = `Wykonaj następujące polecenie:`;
        content += shell_explain(data.cmd);
        return content;
    },
    guide: (data, prev, next) => `W celu wykonania operacji postępuj [zgodnie z przewodnikiem](${data.path}).\n\n`,
    cron: (data, prev, next) => {
        let content = `Wykonaj następujące polecenie:`;
        content += shell_explain('crontab -e');
        content += `W otwartym edytorze dopisz wiersz:`;
        if (data.special_time) {
            content += utils.dump(`@${data.special_time} ${data.job}`);
        } else {
            throw new Error("Not implemented yet");
        }
        content += 'Zapisz wprowadzone zmiany. ';
        content += 'Od teraz to polecenie będzia automatycznie, regularnie wykonywane.';
        return content;
    },
    apt: (data, prev, next, ctx) => {
        let content = partials.apt_initialize(data, prev, next, ctx);
        const state = data.state || 'present';
        if (state === 'present') {
            content += `Zainstaluj wymagane pakiety wykonując następujące polecenie:`;
            content += shell_explain(`sudo apt-get install ${data.name}`);
        } else if (state === 'absent') {
            content += `Usuń pakiety wykonując następujące polecenie:`;
            content += shell_explain(`sudo apt-get remove ${data.name}`);
        } else {
            throw new Error("Not implemented yet");
        }
        return content;
    },
    yum: (data, prev, next, ctx) => {
        let content = '';
        const state = data.state || 'present';
        if (state === 'present' || state === 'installed') {
            content += `Zainstaluj wymagane pakiety wykonując następujące polecenie:`;
            content += shell_explain(`yum install ${data.name}`);
        } else if (state === 'absent') {
            content += `Usuń pakiety wykonując następujące polecenie:`;
            content += shell_explain(`yum remove ${data.name}`);
        } else {
            throw new Error("Not implemented yet");
        }
        return content;
    },

    mysql_db: (data, prev, next, ctx) => {
        let content = partials.mysql_initialize(data, prev, next, ctx);
        content += `Wykonaj w interaktywnej konsoli MySQL następujące polecenie:`;
        content += utils.dump(`CREATE DATABASE ${data.name};`, 'sql');
        content += `Powyższe polecenie tworzy nową bazę danych o nazwie ${utils.quote}${data.name}${utils.quote}.\n`;
        content += partials.mysql_finish(data, prev, next, ctx);
        return content;
    },
    mysql_user: (data, prev, next, ctx) => {
        let content = partials.mysql_initialize(data, prev, next, ctx);
        content += `Wykonaj w interaktywnej konsoli MySQL następujące polecenie:`;
        const [selector, grants] = data.priv.split(":");
        content += utils.dump(`GRANT ${grants} PRIVILEGES ON ${selector} TO "${data.name}"@"${data.host}" IDENTIFIED BY "${data.password}";'`, 'sql');
        content += `Powyższe polecenie tworzy nowego użytkownika i nadaje mu wymagane uprawnienia.\n`;
        content += partials.mysql_finish(data, prev, next);
        return content;
    },
    apache2_module: (data, prev, next) => {
        let content = `Wykonaj następujące polecenie:`;
        const state = data.state || 'present';
        if (state === 'present') {
            content += shell_explain(`sudo a2enmod ${data.name}`);
        } else if (state === 'absent') {
            content += shell_explain(`sudo a2dismod ${data.name}`);
        } else {
            throw new Error("Not implemented yet");
        }
        return content;
    },
    apache2_conf: (data, prev, next) => {
        let content = `Wykonaj następujące polecenie:`;
        const state = data.state || 'present';
        if (state === 'present') {
            content += shell_explain(`sudo a2enconf ${data.name}`);
        } else if (state === 'absent') {
            content += shell_explain(`sudo a2disconf ${data.name}`);
        } else {
            throw new Error("Not implemented yet");
        }

        return content;
    },
    copy: (data, prev, next) => {
        let content = '';
        if (data.src.startsWith("http://") || data.src.startsWith("https://") || data.src.startsWith("ftp://")) {
            content += `Skasuj plik \`${data.dest}\` wykonując następujące polecenie:`;
            content += shell_explain(`wget ${data.src} -O ${data.dest}`);
            content += `Powyższe polecenie pobiera plik z zdalnego serwera i zapisuje go do \`${data.dest}\`\n`;
        } else if (data.recursive === true) {
            content += `Skopiuj plik z \`${data.src}\` do \`${data.dest}\` wykonując następujące polecenie:`;
            content += shell_explain(`cp ${data.src} ${data.dest}`);
        } else {
            content += `Skopiuj pliki z \`${data.src}\` do \`${data.dest}\` wykonując następujące polecenie:`;
            content += shell_explain(`cp -r ${data.src} ${data.dest}`);
        }

        return content;
    },
    file: (data, prev, next) => {
        let content = '';
        if (data.state === "absent") {
            content += `Skasuj plik \`${data.dest}\` wykonując następujące polecenie:`;
            content += shell_explain(`sudo rm ${data.dest}`);
        } else {
            throw new Error("Not implemented yet");
        }
        return content;
    },
    unarchive: (data, prev, next) => {
        let content = `Wypakuj plik \`${data.src}\` do \`${data.dest}\`\n wykonując następujące polecenie:`;
        content += shell_explain(`sudo tar xvzf ${data.src} -C ${data.dest}`);
        return content;
    },
    identify_disk: (data, prev, next) => {
        let content = '';
        if (data.value === 'path') {
            content += `W celu zidentyfikowania właściwego dysku przeanalizuj wynik następującego polecenia:`;
            content += shell_explain(`lsblk`);
            content += "Zwróć szczególną uwagę na ścieżkę do dysku (będzie ona wymagana w kolejnym etapie) i jego rozmiar.\n";
        } else if (data.value === 'uuid') {
            content += `W celu zidentyfikowania właściwego dysku przeanalizuj wynik następujące polecenie:`;
            content += shell_explain(`blkid`);
            content += "Zwróć szczególną uwagę na UUID dla dysku (będzie ona wymagana w kolejnym etapie) oraz ściężkę.\n";
        } else {
            throw new Error("Not implemented yet");
        }
        return content;
    },
    identify_partition: (data, prev, next) => {
        let content = '';
        const dev = data.dev || '/dev/sdb';
        if (data.value === 'position') {
            content += `W celu zidentyfikowania właściwej partycji przeanalizuj wynik następującego polecenia:`;
            content += shell_explain(`parted ${dev} print`);
            content += "Zwróć szczególną uwagę na numer partycji (będzie ona wymagana w kolejnym etapie) i jego rozmiar.";
        } else if (data.value === 'path') {
            content += `W celu zidentyfikowania właściwej partycji przeanalizuj wynik następującego polecenia:`;
            content += shell_explain(`sfdisk -l ${dev}`);
            content += "Zwróć szczególną uwagę na ścieżkę partycji (będzie ona wymagana w kolejnym etapie) i rozmiar.";
        } else {
            throw new Error("Not implemented yet");
        }
        return content;
    },
    parted: (data, prev, next) => {
        let content = '';
        const dev = data.dev || '/dev/sdb';
        const pos = data.position || '1';
        if (data.action === 'resizepart') {
            content += `Zweryfikuj czy system plików jest odmontowany:`;
            content += shell_explain(`findmnt ${dev}${pos} || echo 'System plików odmontowany'`);
            content += `Zalecane jest zweryfikowanie poprawności systemu plikow przed dokonaniem operacji tj. rozszerzenie. W tym celu odmontuj go.\n`;
            content += `Zweryfikuj poprawność systemu plików na partycji wykonując następujące polecenie:`;
            content += shell_explain(`fsck ${dev}${pos}`);
            content += `W celu zmiany rozmiaru partycji wykonaj następujące polecenie:`;
            content += shell_explain(`parted ${dev} resizepart ${pos} 100%`);
        } else {
            throw new Error("Not implemented yet");
        }
        return content;
    },
    identify_vm: (data, prev, next) => {
        let content = '';
        if (data.value === 'ip') {
            content += `W celu zidentyfikowania *Adresu IP* *Wirtualnej maszyny* przejdź do widoku właściwości *Wirtualnej maszyny* w panelu.\n`;
        } else {
            throw new Error("Not implemented yet");
        }
        return content;
    },
    filesystem: (data, prev, next) => {
        if (data.fstype !== 'ext4' && !data.resizefs) throw new Error("Not implemented yet");
        let content = '';
        if (data.resizefs) {
            content += `Rozszerz istniejący system plików do pełnego rozmiaru partycji wykonując następujące polecenie:`;
            content += shell_explain(`resize2fs ${data.dev}`);
            content += `Zweryfikuj poprawność systemu plików na partycji wykonując następujące polecenie:`;
            content += shell_explain(`fsck ${data.dev}`);
            if (data.mounted) {
                content += `Zamontuj ponownie odmontowane systemy plików:`;
                content += shell_explain(`mount -a`);
            }
        } else {
            content += `Utwórz system plików ext4 na właściwym dysku / partycji wykonując następujące polecenie:`;
            content += shell_explain(`mkfs.ext4 ${data.dev}`);
        }
        return content;
    },
    mount: (data, prev, next) => {
        let content = '';
        if (data.state === 'mounted') {
            content += `Zamontuj odpowiedni dysk w ścieżce ${data.path} poprzez wykonanie następujące polecenie:`;
            content += shell_explain(`mount ${data.src} ${data.path}`);
        } else if (data.state === 'present') {
            content += `Dodaj dysk do domyślnej konfiguracji montowania poprzez wykonanie następującego polecenia:`;
            content += shell_explain("sudo nano /etc/fstab");
            content += `W otwartym edytorze dopisz wiersz:`;
            content += utils.dump(`${data.src}    ${data.path}    ext4    defaults    1    1`);
            content += 'Zapisz wprowadzone zmiany.\n';
            content += 'Od teraz dysk będzie automatycznie montowany po restarcie serwera.\n';
        }
        return content;
    },
    lineinfile: (data, prev, next, ctx) => {
        const state = data.state || 'present';
        let content = '';
        content += partials.editor_initialize(data, prev, next, ctx);
        if (state === 'present' && data.regexp) {
            content += `Odszukaj wiersz pasujący do wzorca \`${data.regexp}\` i zastąp go następującym:`;
            content += utils.dump(data.line);
        } else if (state === 'present') {
            content += `Dopisz na końcu pliku następujący wiersz:`;
            content += utils.dump(data.line);
        } else {
            throw new Error("Not implemented yet");
        }
        content += partials.editor_finish(data, prev, next, ctx);
        return content;
    },
    powershell: (data, prev, next, ctx) => {
        let content = '';
        content += partials.powershell_initialize(data, prev, next, ctx);
        content += "Wykonaj w powłoce Powershell następujące polecenie:";
        content += utils.dump(data.cmd, 'powershell');
        content += partials.powershell_finish(data, prev, next, ctx);
        return content;
    },
    sysctl: (data, prev, next, ctx) => {
        // /etc/sysctl.d/99-sysctl.conf
        let content = '';
        if (data.state === 'present') {
            content += "Wykonaj następujące polecenie, aby wprowadzić trwale zmiany w sysctl:";
            content += shell_explain(`sed 's/#*${data.name}=.*/${data.name}=${data.value}/g' /etc/sysctl.d/99-sysctl.conf -i`);
        } else if (data.state === 'applied') {
            content += "Wykonaj następujące polecenie:";
            content += shell_explain(`sysctl ${data.name}=${data.value} -w`);
        } else {
            throw new Error("Not implemented yet");
        }
        return content;
    },
    dig: (data, prev, next) => {
        let content = '';
        const type = data.type || 'A';
        content += "W przypadku Windows na lokalnym komputerze uruchom Powershell i wykonaj następujące polecenie:";
        content += utils.dump(`nslookup -querytype=${type} ${data.name}`, 'powershell');
        content += "W przypadku Linux na lokalnym komputerze uruchom konsolę i wykonaj następujące polecenie:";
        content += utils.dump(`dig ${type} ${data.name}`, 'bash');
        return content;
    },
    browser: (data, prev, next) => {
        let content = '';
        if (data.state === 'opened') {
            content += "Otwórz w przeglądarce adres";
            content += utils.dump(data.url);
        }
        return content;
    },
    after_event: (event) => `${event.text}\n`,
    free_text: (free_text, prev, next) => `${free_text.text}\n`,
};


tasks.guide_firewall_rule = (data, prev, next) => {
    let content = `Dodaj regułę zapory sieciowej o następujących parametrach:\n`;
    content += `* kierunek: ${utils.quote}${data.type === 'ingress' ? 'przychodzący (ingress)' : 'wychodzący (egress)'}${utils.quote}\n`
    content += `* priorytet: ${utils.quote}${data.priority}${utils.quote}\n`;
    content += `* filter: ${utils.quote}${data.filter}${utils.quote}\n`;
    content += `* strefa zewnętrzna:${utils.quote} ${data.external}${utils.quote}\n`;
    content += `* strefa wewnętrzna: ${utils.quote}${data.internal}${utils.quote}\n`;
    content += `* nazwa: ${utils.quote}${data.name}${utils.quote}\n\n`;

    return content + tasks.guide(data);
};

const get_content_for_task_list = (task_list, depth = 2, ctx) => {
    let new_content = '';
    for (const i in task_list) {
        const task = task_list[i];
        if (task.name) {
            const prefix = "#".repeat(depth);
            new_content += `${prefix} ${task.name}\n\n`;
        }
        if (task.block) {
            new_content += get_content_for_task_list(task.block, depth + 1, ctx)
        } else {
            try {
                const cur_task_name = task_name_for_task(task);
                if (!cur_task_name) {
                    console.log("Unknown task name", task);
                    throw new Error("Unknown task name");
                }
                const data = task[cur_task_name];
                new_content += tasks[cur_task_name](
                    data,
                    task_list[parseInt(i) - 1],
                    task_list[parseInt(i) + 1],
                    ctx
                );
                if (data.variables) {
                    new_content += `Zastąp poniższe wartości:\n\n`;
                    Object.keys(data.variables).forEach(key => {
                        const replaced = `{${key}}`;
                        new_content += ` * \`${escapeTemplate(replaced)}\` - ${data.variables[key]}\n`;
                        if (data.content && !data.content.includes(replaced)) {
                            throw new Error(`Missing ${replaced} in content of file`);
                        }
                    });
                }
                new_content += "\n";
            } catch (e) {
                console.log(e);
                new_content += utils.dump(task);
            }
        }
    }
    return new_content;
};
const replacer = (match, p1) => {
    let new_content = '';
    try {
        // const action_set = JSON.parse(p1.trim());
        // new_content += "<ol>";
        // for (let action of action_set) {
        //     new_content += `<li>`;
        //     if (actions[action.action_name]) {
        //         new_content += actions[action.action_name](action.data);
        //     } else {
        //         new_content += dump(action);
        //     }
        //     if (action.after_event) {
        //         new_content += `\n\n${action.after_event}\n\n`;
        //     }
        //     new_content += `</li>\n`;
        // }
        // new_content += "</ol>";
        const task_list = yaml.safeLoad(p1.trim());
        new_content += get_content_for_task_list(task_list, 2, {});
        new_content += `<DebugContent>${utils.dump(task_list)}</DebugContent>`;
    } catch (err) {
        new_content += `<code>\n${err.stack.toString()}\n</code>`;
        new_content += utils.dump(p1.trim(), 'json');
    }

    return new_content;
};

module.exports = (md) => {
    md.core.ruler.before('normalize', 'tutorial-generator', (state) => {
        state.src = state.src.replace(INCLUDE_RE, replacer);
    });
};

if (require.main === module) {
    const content = fs.readFileSync(process.argv[2], 'utf-8');
    console.log(content.replace(INCLUDE_RE, replacer));
}