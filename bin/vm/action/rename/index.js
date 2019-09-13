'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    'new-name': {
        description: 'New name',
        type: 'string',
        required: true,
    },
};

module.exports = (resource) => Cli.createCommand('rename', {
    description: `Rename ${resource.title}`,
    plugins: genericDefaults.plugins,
    options: Object.assign({}, resource.options, options),
    params: resource.params,
    dirname: __dirname,
    handler: async args => {
        const result = await args.helpers.api
            .post(`vm/${args[resource.name]}/actions`, {
                name: 'rename',
                data: {
                    newname: args['new-name'],
                },
            });

        return args.helpers.sendOutput(args, result);
    },
});
