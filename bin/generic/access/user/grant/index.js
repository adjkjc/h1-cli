'use strict';

const Cli = require('lib/cli');

const options = {
    email: {
        description: 'User email (eg: user@example.org)',
        type: 'string',
        required: true,
    },
    role: {
        description: 'Role',
        type: 'string',
        choices: ['owner', 'billing', 'user'],
        defaultValue: 'user',
    },
};

module.exports = resource => Cli.createCommand('grant', {
    description: `Grant ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    params: resource.params,
    context: resource.context,
    options: Object.assign({}, resource.options, options),
    handler: async args => {
        const data = {
            id: args.email,
            role: args.role,
        };

        const result = await args.helpers.api
            .post(resource.url(args), data);

        return args.helpers.sendOutput(args, result);
    },
});
