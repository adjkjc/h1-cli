const fs = require('fs');

const LINK_RE = /\[CLI="(.+?)"\]/g;

const replacer = (match, p1, offset, string) => {
    // Source: [CLI="network ip delete"]
    // Target: [h1 network ip delete](/h1-cli/network.md#network-ip-delete)
    const file = p1.split(" ")[0];
    const section = p1.replace(/ /g, "-");
    return `[h1 ${p1}](/h1-cli/${file}.md#${section})`;
};

module.exports = (md) => {
    md.core.ruler.before('normalize', 'guide_generator', (state) => {
        state.src = state.src.replace(LINK_RE, replacer);
    });
};

if (require.main === module) {
    const content = fs.readFileSync(process.argv[2], 'utf-8');
    console.log(content.replace(LINK_RE, replacer));
}