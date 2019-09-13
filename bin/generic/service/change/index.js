'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');

const options = {
    ['new-type']: {
        description: 'New type',
        type: 'string',
        required: true,
    },
};

module.exports = (resource) => Cli.createCommand('change', {
    description: `Change type of ${resource.title}`,
    plugins: genericDefaults.plugins,
    options: Object.assign({}, resource.options, options),
    params: resource.params,
    resource: resource,
    dirname: __dirname,
    handler: async args => {
        const result = await args.helpers.api
            .post(`${resource.url(args)}/actions`, {
                name: 'flavour',
                data: {
                    service: args['new-type'],
                },
            });

        return args.helpers.sendOutput(args, result);
    },
});
