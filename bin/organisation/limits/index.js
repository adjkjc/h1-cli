'use strict';

const Cli = require('lib/cli');

const defaults = require('bin/generic/defaults');

module.exports = resource => Cli.createCommand('limit', {
    description: 'Cloud limits set for project',
    plugins: defaults.plugins,
    dirname: __dirname,
    params: resource.params,
    options: resource.options,
    handler: async args => {
        args.query = args.query || '[].{resource:resource,limit:limit,value:value}';

        const result = await args.helpers.api
            .get(`${resource.url(args)}/limit`)
            .then(result => Object
                .entries(result)
                .map(([resource, limits]) => Object
                    .entries(limits)
                    .map(([limit, value]) => ({resource, limit, value}))
                )
            );

        return args.helpers.sendOutput(args, result);
    },
});
