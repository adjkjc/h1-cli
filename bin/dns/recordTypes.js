'use strict';

module.exports = {
    a: {
        value: '8.8.3.3',
        to_bind: content => ({
            ip: content,
        }),
        to_content: record => record.ip,
    },
    // aaaa: {
    //     to_bind: content => ({
    //         ip: content,
    //     }),
    //     to_content: record => record.ip
    // },
    cname: {
        value: 'cname-example.com',
        to_bind: content => ({
            alias: content,
        }),
        to_content: record => record.alias,
    },
    txt: {
        value: '"some-text-value"',
        to_bind: content => ({
            txt: content,
        }),
        to_content: record => record.txt,
    },
    mx: {
        value: '10 mail.example.com',
        to_bind: content => ({
            preference: content.split(' ')[0],
            host: content.split(' ')[1],
        }),
        to_content: record => `${record.preference} ${record.host}`,
    },
    ns: {
        value: 'ns1.example.com',
        to_bind: content => ({
            host: content,
        }),
        to_content: record => record.host,
    },
    srv: {
        value: '10 5 11 s1.example.com.',
        to_bind: content => ({
            priority: content.split(' ')[0],
            weight: content.split(' ')[1],
            port: content.split(' ')[2],
            target: content.split(' ')[3],
        }),
        to_content: record => `${record.priority} ${record.weight} ${record.port} ${record.target}`,
    },
};
