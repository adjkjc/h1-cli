'use strict';
const Cli = require('lib/cli');

const options = {
    ip: {
        description: 'IP address or ID of public IP',
        type: 'string',
        required: true,
    },

};

module.exports = resource => Cli.createCommand('persistent', {
    description: `Persistent ${resource.title}`,
    plugins: resource.plugins,
    options: Object.assign({}, resource.options, options),
    dirname: __dirname,
    handler: async args => {
        const result = await args.helpers.api
            .post(`ip/${args.ip}/actions`,
                {
                    name: 'allocate',
                }
            );

        return args.helpers.sendOutput(args, result);
    },
});
