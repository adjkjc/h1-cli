'use strict';

const Cli = require('lib/cli');


module.exports = resource => {

    const options = {
        [resource.parameter_name]: Object.assign(
            {},
            {
                description: `New ${resource.title}`,
                required: true,
            },
            resource.extra_parameter
        ),
    };


    return Cli.createCommand('add', {
        description: `Add ${resource.title}`,
        dirname: __dirname,
        plugins: resource.plugins,
        resource: resource,
        options: Object.assign({}, resource.options, options),
        handler: async args => {
            const result = await args.helpers.api
                .get(resource.url(args))
                .then(value => [
                    ...value,
                    args[resource.parameter_name],
                ])
                .then(value => args.helpers.api.put(resource.url(args), value));

            return args.helpers.sendOutput(args, result);
        },
    });
};
