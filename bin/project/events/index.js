'use strict';

const Cli = require('lib/cli');

const format = {
    refresh: (msg) => ({
        msg_type: 'refresh',
        type: msg.resource.type,
        name: msg.resource.data.name,
        id: msg.resource.id,
    }),
    event: (msg) => {
        const stage = msg.message.data.stage ? `${msg.message.data.stage.current}/${msg.message.data.stage.count}` : undefined;
        return {
            msg_type: 'event',
            type: msg.resource.type,
            name: msg.resource.data.name,
            id: msg.resource.id,
            state: msg.resource.data.state,
            event_state: msg.message.data.state,
            event_name: msg.message.data.name,
            event_stage: stage,
        };
    },
    delete: (msg) => ({
        msg_type: 'delete',
        type: msg.resource.type,
        name: msg.resource.data.name,
        id: msg.resource.id,
    }),
    create: (msg) => ({
        msg_type: 'create',
        type: msg.resource.type,
        name: msg.resource.data.name,
        id: msg.resource.id,
    }),
};

const options = {
    type: {
        description: 'Message type',
        type: 'string',
        append: true,
        choices: ['refresh', 'event', 'delete', 'create'],
        defaultValue: ['event'],
    },
    raw: {
        type: 'boolean',
        description: 'Raw output',
    },
};

module.exports = resource => Cli.createCommand('events', {
    description: `Track activity in ${resource.title}`,
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/api'),
    ],
    earlyAdoptersOnly: true,
    options: Object.assign({}, resource.options, options),
    handler: async args => {
        const ws = await args.helpers.api.getWS(`?${resource.name}=${args.project}`);
        return new Promise((resolve, reject) => {
            ws.on('message', data => {
                let msg = JSON.parse(data);
                if (!args.type.includes(msg.message.type)) {
                    return;
                }
                let content;
                if (!args.raw) {
                    msg = format[msg.message.type](msg);
                    content = Object.values(msg).join('\t');
                } else {
                    content = JSON.stringify(msg);
                }
                console.log(content);
            });
            ws.on('close', resolve);
            ws.on('error', reject);
        });
    },
});
