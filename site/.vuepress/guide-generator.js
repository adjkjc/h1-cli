'use strict';
const fs = require('fs');
const crypto = require('crypto');

const INCLUDE_RE = /^```\s*guide$(.+?)^```\s*$/sgm;

const quote = "```";

const dump = (value, type = '') => {
    if (typeof value === "string") {
        return `\n\n${quote}\n${value}\n${quote}\n\n`;
    }
    return `\n\n${quote}${type}\n${JSON.stringify(value, null, 2)}\n${quote}\n\n`;
};

const actions = {
    click: (data) => {
        //   {
        //     "action_name": "click",
        //     "data": {
        //       "type": "entry",
        //       "location": "sidebar",
        //       "selector": ".nav > li:nth-child(2)",
        //       "label": "Sieci"
        //     }
        //   },
        // Wybierz pozycje ```Sieć``` znajdującą się w menu bocznym.
        let content = [];

        if (data.type === "entry") {
            content.push("Wybierz pozycje")
        } else if (data.type === "button") {
            content.push("Wybierz przycisk");
        } else if (data.type === "tab") {
            content.push("Wybierz zakładkę");
        } else if (data.type === 'entry_resource') {
            content.push("Kliknij wybrany zasób spośród listy");
        } else if (data.type === 'entry_list') {
            content.push("Kliknij wybraną pozycje listy");
        } else if (data.type === 'entry_tridot') {
            content.push('Na poziomie nazwy pozycji z listy kliknij trójkropek');
        } else if (data.type === 'tridot') {
            content.push(`Kliknij trójkropek`);
        } else {
            content.push("Wybierz UNKONWN");
        }

        if (data.label) {
            content.push(`<code>${data.label}</code>`);
        }
        if (!data.location) {
            content.push(`.`)
        } else if (data.location === 'middle_site') {
            content.push(`znajdujący się w środku strony`);
        } else if (data.location === "sidebar") {
            content.push(`znajdującą się w menu bocznym.`);
        } else if (data.location === "section") {
            content.push(`znajdującej się w sekcji "${data.section}".`);
        } else if (data.location === "label") {
            content.push(`znajdujący się na poziomie etykiety`);
            content.push("<code>" + data.label + "</code>");
            content.push(".");
        } else {
            content.push(` UNKNOWN`);
            throw(new Error(JSON.stringify(data)));
        }
        return content.join(" ");
    },
    identity: (data) => `Zidentyfikuj właściwy zasób typu <code>${data.label}</code>`,
    form: (data) => {
        // {
        //     "action_name": "form",
        //     "data": {
        //       "modal": true,
        //       "steps": [
        //         {
        //           "name": "Nazwa",
        //           "type": "name",
        //           "value": "moje-iso"
        //         },
        //         {
        //           "name": "Przestrzeń adresowa",
        //           "type": "text",
        //           "value": "10.21.154.0/24"
        //         },
        //         {
        //           "name": "Brama domyślna",
        //           "type": "text",
        //           "value": "10.21.154.1"
        //         }
        //       ],
        //       "defined_all": true
        //     }
        //   },
        //    3. Wypełnij formularz:
        //
        // * Określ parametr ```nazwa``` dla swojego zasobu.
        // * Określ parametr ```przestrzeń adresowa sieci```.
        // * Określ parametr ```brama domyślna```.
        //
        // Przykładowe wartości:
        //
        //  * Nazwa: ```moja-siec```
        //  * Przestrzeń adresowa: ```10.21.154.0/24```
        //  * Brama domyślna: ```10.21.154.1```
        const types = {
            'name': (field) => `Określ parametr <code>${field.name}</code> dla swojego zasobu.`,
            'text': (field) => `Określ parametr <code>${field.name}</code> . `,
            'choose': (field) => `Wybierz <code>${field.name}</code>.`,
            'number': (field) => `Określ <code>${field.name}</code>.`,
            'password': (field) => `Określ hasło w polu  <code>${field.name}</code>.`
        };

        let content = `Wypełnij formularz:<ul>\n`;
        for (const field of data.steps) {
            if (field.type in types) {
                content += `<li>`;
                content += types[field.type](field);
                if (field.help) {
                    content += `\n\n${field.help}\n\n`;
                }
                content += `</li>\n`
            } else {
                content += `<li>${dump(field)}</li>\n`;
            }
        }
        content += `</ul>\n\n`;
        content += `Przykładowe wartości:\n\n<ul>\n`;
        for (const field of data.steps) {
            const value = field.type === 'password' ? crypto.randomBytes(10).toString('hex') : field.value;
            content += `<li>${field.name}: <code>${value}</code></li>\n`;
        }
        content += `</ul>\n`;

        if (!data.defined_all) {
            content += 'Pozostaw sugerowane wartości w pozostałych polach\n'
        }

        return content;
    }
};

const replacer = (match, p1, offset, string) => {
    let new_content = '';
    try {
        const action_set = JSON.parse(p1.trim());
        new_content += "<ol>";
        for (let action of action_set) {
            new_content += `<li>`;
            if (actions[action.action_name]) {
                new_content += actions[action.action_name](action.data);
            } else {
                new_content += dump(action);
            }
            if (action.after_event) {
                new_content += `\n\n${action.after_event}\n\n`;
            }
            new_content += `</li>\n`;
        }
        new_content += "</ol>";
        new_content += "\n\n```json\n";
        new_content += JSON.stringify(action_set, null, 2);
        new_content += "\n```\n\n";

    } catch (err) {
        new_content += `<code>\n${err.stack.toString()}\n</code>`;
        new_content += dump(p1.trim(), 'json');
    }

    return new_content;
};

module.exports = (md) => {
    md.core.ruler.before('normalize', 'guide_generator', (state) => {
        state.src = state.src.replace(INCLUDE_RE, replacer);
    });
};

if (require.main === module) {
    const content = fs.readFileSync(process.argv[2], 'utf-8');
    console.log(content.replace(INCLUDE_RE, replacer));
}