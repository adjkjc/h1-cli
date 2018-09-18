'use strict';
const md = require('markdown-it')();
const fs = require('fs');

const accentMap = {
    'ą': 'a',
    'ę': 'e',
    'ł': 'l',
    'ń': 'n',
    'ż': 'z',
    'ź': 'z'
};

const slugify = text => text
    .toLowerCase()
    .replace(/./g, x => [x] || x)
    .replace(/[^a-z0-9]/g, '-');

const generateSectionMap = tokens => {
    const sections = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].type === "heading_open") {
            const find_close = tokens.slice(i).findIndex(x => x.type === "heading_close");
            sections.push({
                open: i,
                title: tokens[i + 1].content,
                level: parseInt(tokens[i].tag.replace('h', '')),
            });
            i += find_close;
        }
    }
    sections.forEach((section, index) => {
        const next_section = sections.slice(index + 1).find(x => x.level === section.level);

        section.close = next_section ? next_section.open : tokens.length - 1;
        // console.log({
        //     section: section,
        //     index: index,
        //     close: section.close
        // })
    });
    return sections;
};

const findSections = (keywords, sections, level = 1) => {
    let searched_sections = sections;
    const keyword = keywords[0];
    const matches = searched_sections.filter(section =>
        (keyword === "*" || slugify(keyword) === slugify(section.title)) &&
        section.level === level
    );
    if (keywords.length <= 1) {
        return matches;
    }

    const new_matches = [];
    for (const match of matches) {
        searched_sections = sections.filter(x => x.open <= match.close && x.close >= match.open);
        new_matches.push(...findSections(
            keywords.slice(1),
            searched_sections,
            level + 1
        ));
    }
    return new_matches

};


const readFileAsync = (path, options) => new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
        if (err) return reject(err);
        return resolve(data);
    });
});

const main = async () => {
    const pattern = process.argv[2];
    const keywords = pattern.split(".");
    const files = process.argv.slice(3);
    for (const file of files) {
        const content = await readFileAsync(file, 'utf-8');
        const lines = content.split("\n");
        const tokens = md.parse(content, {});
        const sections = generateSectionMap(tokens);
        const matches = findSections(keywords, sections);
        // console.log(sections);
        matches.forEach(match => {
            const section_token_mappable = tokens
                .slice(match.open, match.close)
                .filter(x => x.map);
            // console.log(match);
            // console.log(section_token_mappable);
            const line_start = Math.min(...section_token_mappable.map(x => x.map[0]));
            const line_end = Math.max(...section_token_mappable.map(x => x.map[1])) - 1;
            lines.slice(line_start, line_end).forEach(line => {
                console.log(`${file}: ${line}`);
            });
            console.log("----");
        });
    }
};

main().catch(console.err);
