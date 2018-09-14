'use strict';
const yaml = require('js-yaml');

const dump = (value, type = undefined, format="yaml") => {
    let content = value;
    if (typeof value !== "string"){
        if(format === "yaml"){
            content = yaml.safeDump(value, {
                lineWidth: -1
            }).trim()
        }else{
            content = JSON.stringify(value, null, 2);
        }
        if(type === undefined){
            type = format
        }
    }else{
        type = type || '';
    }
    return `\n\n${quote}${type}\n${content}\n${quote}\n\n`;
};

const quote = "```";

module.exports = {
    dump,
    quote
};
