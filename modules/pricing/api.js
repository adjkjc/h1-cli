'use strict';

const fs = require('fs');
const path = require('path');

const request = require('superagent');
const jmespath = require('jmespath');

const displayRow = (row, config = {}) => {
    const separator = config.seperator || '|';
    return `${separator} ${row.join(` ${separator} `)} ${separator}`;
};

const table = (rows, config = {}) => {
    if (rows.length === 0) throw 'At least one row is required to generate a table.';
    const header = config.header || Object.keys(rows[0]);
    const newline = config.newline || '\n';

    const results = [];
    results.push(header);
    results.push(header.map(el => '-'.repeat((el || ' re').length)));
    results.push(...rows.map(row => header.map(x => row[x])));

    const content = results.map(el => displayRow(el, config)).join(newline);
    return `\n${content}\n`;
};

const priceLists = [
    {
        name: 'Virtual machines',
        filter: row => row.resource === 'vm' && row.type === 'flavour',
        row: row => Object.assign({
                'Name': row.name,
                'Max IPv4': row.data.vm.maxIPv4,
                'Max disk count': row.data.vm.maxhdd,
                'Max network adapters count': row.data.vm.maxNetAdp,
                'vCPU': row.data.vm.cpu,
                'Memory (MB)': row.data.vm.memory,
                'Period': row.billing.period,
                'Quantity': row.billing.quantity
            },
            row.billing.price)
    },
    {
        name: 'Support',
        filter: row => row.resource === 'project' && row.type === 'support',
        row: row => Object.assign({
                'Name': row.name,
                'Types': row.data.types.join(", "),
                'Messages': row.data.messages.join(", "),
                'Period': row.billing.period,
                'Quantinity': row.billing.quantity
            },
            row.billing.price
        )
    },
    {
        name: 'Disk',
        filter: row => row.resource === 'disk' && row.type === 'flavour',
        row: row => Object.assign({
            'Name': row.name,
            'Maximum size (GiB)': row.data.sizeMax,
            'Minimum size (GiB)': row.data.sizeMin,
            'Period': row.billing.period,
            'Quantity': row.billing.quantity,
            'IOPS limit': row.data.maximumIOPS,
        }, row.billing.price)
    },
    {
        name: 'Network adapters',
        filter: row => row.resource === 'netadp' && row.type === 'flavour',
        row: row => Object.assign({
            'Name': row.name,
            'Period': row.billing.period,
            'Quantity': row.billing.quantity
        }, row.billing.price)
    },
    {
        name: 'Licenses',
        filter: row => row.resource === 'vm' && row.type === 'license',
        row: row => Object.assign({
            'Name': row.name,
            'Period': row.billing.period,
            'Quantity': row.billing.quantity
        }, row.billing.price)
    },
    {
        name: 'Reservations',
        filter: row => row.resource === 'reservation' && row.type === 'flavour',
        row: row => Object.assign({
            'Name': row.name,
            'One time': (row.billing.oneTime === true ? 'yes': row.billing.oneTime),
            'Period': row.billing.period,
            'Quantity': row.billing.quantity
        }, row.billing.price)
    },

];

priceLists.push({
    name: 'Services', // All others
    filter: priceLists.map(priceItem => priceItem.filter).reduce((a, b) => (x => a(x) && !b(x)), () => true),
    row: row => Object.assign({
        'Name': row.name,
        'Period': row.billing.period,
        'Quantity': row.billing.quantity
    }, row.billing.price)
});

const get_filename = (name) => `${name}.md`.toLowerCase().replace(/\s/, '-');

const main = async () => {
    if (process.argv.length < 3) {
        throw `Missing argument. Usage: ${process.argv[0]} ${process.argv[1]} [output_dir]`;
    }
    const output_dir = process.argv[2];

    const res = await request.get('https://api.hyperone.com/v1/service');
    const pricing = res.body;

    priceLists.forEach(priceItem => {
        const filename = get_filename(priceItem.name);
        const rows = pricing.filter(priceItem.filter).map(priceItem.row);
        console.log(priceItem.name, rows);
        const pricing_table = table(rows);

        const content = `---
title: ${priceItem.name}
---
# ${priceItem.name}\n${pricing_table}`;

        fs.writeFileSync(path.join(output_dir, filename), content);
        console.log('Saved', filename);
    });

    let content = `# Pricing\n`;

    priceLists.forEach(priceItem => {
        const filename = get_filename(priceItem.name);
        content += `* [${priceItem.name}](${filename})\n`;
    });

    fs.writeFileSync(path.join(output_dir, "README.md"), content);
    console.log('Saved', "README.md");


};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1);
});
