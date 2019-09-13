'use strict';

const Cli = require('lib/cli');


module.exports = resource => {
    const options = {
        firewall: Object.assign(
            {},
            {
                description: 'Firewall ID or name',
                required: true,
            },
        ),
    };

    return Cli.createCommand('add', {
        description: `Add firewall to ${resource.title}`,
        dirname: __dirname,
        plugins: resource.plugins,
        resource: resource,
        options: Object.assign({}, options, resource.options),
        handler: async args => {
            const result = await args.helpers.api
                .post(`${resource.url(args)}/actions/firewall_add`, {firewall: args.firewall});

            return args.helpers.sendOutput(args, result);
        },
    });
};
