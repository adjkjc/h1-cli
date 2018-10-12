'use strict';
const fs = require('fs');
const semver = require('semver');
/*
cli(1.2.0){
    some content
}
*/
const INCLUDE_RE = /^cli\s*\(\s*([^\n]+?)\s*\)\s*{(.+?)}$/sgm;

module.exports = (md, version) => {
    md.core.ruler.before('normalize', 'if_cli_version', (state) => {
        state.src = state.src.replace(INCLUDE_RE, replacer(version));
    });
};

const replacer = version => (match, p1, p2) => {
    if(semver.gte(version, p1)) return p2;
    return '';
};

if (require.main === module) {
    const content = fs.readFileSync(process.argv[3], 'utf-8');
    console.log(content.replace(INCLUDE_RE, replacer(process.argv[2])));
}