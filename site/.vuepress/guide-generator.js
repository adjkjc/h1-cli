'use strict';
const fs = require('fs');

const INCLUDE_RE = /^```guide$(.+?)^```$/sgm;

const quote = "```";

const dump = value => `\n\n${quote}\n${JSON.stringify(value, null, 2)}\n${quote}\n\n`

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
        let content = "";

        if (data.type === "entry") {
            content += "Wybierz pozycje";
        } else if (data.type === "button") {
            content += "Wybierz przycisk";
        } else if (data.type === "tab") {
            content += "Wybierz zakładkę";
        } else if (data.type === 'entry_resource'){
            return 'Kliknij wybrany zasób spośród listy.';
        } else if (data.type === 'entry_tridot'){
            return 'Na poziomie nazwy pozycji z listy kliknij trójkropek.';
        } else {
            content += "Wybierz UNKONWN";
        }
        content += ` <code>${data.label}</code> `;
        if (!data.location) {
            content += `.`
        } else if (data.location === "sidebar") {
            content += `znajdującą się w menu bocznym.`;
        } else {
            content += ` UNKNOWN`;
            throw(new Error(JSON.stringify(data)));
        }
        return content;
    },
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
            content += `<li>${field.name}: <code>${field.value}</code></li>\n`
        }
        content += `</ul>\n`;

        if(data.defined_all){
            content+= 'Pozostaw sugerowane wartości w pozostałych polach\n'
        }

        return content;
    }
};

const replacer = (match, p1, offset, string) => {
    let new_content = '';
    const action_set = JSON.parse(p1);

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
    return new_content;
};

const replace = (content) => {
    return content.replace(INCLUDE_RE, replacer);
};

module.exports = {
    plugin: (md) => {
        md.core.ruler.before('normalize', 'guide_generator', (state) => {
            try{
                state.src = replace(state.src)
            }catch(err){
                console.log({err, state})
            }
        });
    }
};

if (require.main === module) {
    const content = fs.readFileSync(process.argv[2], 'utf-8');
    console.log(replace(content));
}