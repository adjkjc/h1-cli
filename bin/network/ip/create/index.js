'use strict';

const Cli = require('lib/cli');

const options = {
    address: {
        description: 'IP address',
        type: 'string',
        required: false,
    },
};

module.exports = resource => Cli.createCommand('create', {
    dirname: __dirname,
    description: `Create ${resource.title}`,
    plugins: resource.plugins,
    genericOptions: ['tag'],
    options: Object.assign({}, resource.options, options),
    handler: async args => {
        const body = {
            tag: require('lib/tags').createTagObject(args.tag),
            network: args.network,
        };

        if (args.address) {
            body.address = args.address;
        }

        const result = await args.helpers.api
            .post('ip', body);

        return args.helpers.sendOutput(args, result);
    },
});
