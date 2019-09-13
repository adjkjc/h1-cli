'use strict';

const Cli = require('lib/cli');

const genericDefaults = require('bin/generic/defaults');

module.exports = (resource) => Cli.createCommand('list', {
    dirname: __dirname,
    description: `List ${resource.title}`,
    plugins: genericDefaults.plugins,
    options: resource.options,
    resource: resource,
    handler: async args => {
        const result = await args.helpers.api
            .get(resource.url(args));

        return args.helpers.sendOutput(args, result);
    },
});
