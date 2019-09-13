'use strict';

const Cli = require('lib/cli');


module.exports = resource => {
    const options = {
        [resource.parameter_name]: Object.assign(
            {},
            {
                description: `Deleted ${resource.title}`,
                required: true,
            },
            resource.extra_parameter
        ),
    };

    return Cli.createCommand('delete', {
        description: `Delete ${resource.title}`,
        dirname: __dirname,
        plugins: resource.plugins,
        resource: resource,
        options: Object.assign({}, resource.options, options),
        handler: async args => {
            const value_current = await args.helpers.api
                .get(resource.url(args));

            const values = await args.helpers.api.put(
                resource.url(args),
                value_current.filter(x => x !== args[resource.parameter_name])
            );

            return args.helpers.sendOutput(args, values);
        },
    });
};
