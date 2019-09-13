'use strict';

const Cli = require('lib/cli');
const websocketTerminal = require('lib/websocketTerminal');
const options = {
    vm: {
        description: 'Virtual machine ID or name',
        type: 'string',
        required: true,

    },
    port: {
        description: 'Port to connect',
        type: 'string',
        defaultValue: '1',
    },
};

module.exports = resource => Cli.createCommand('console', {
    description: `Connect to ${resource.title} using Serial Console`,
    plugins: resource.plugins,
    params: resource.params,
    options: Object.assign({}, options, resource.options),
    dirname: __dirname,
    handler: async args => {
        const vm = await args.helpers.api.get(`vm/${args.vm}`);
        return websocketTerminal(`/vm/${vm.id}/serialport/${args.port}`);
    },
});



