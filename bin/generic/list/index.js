'use strict';

const Cli = require('lib/cli');

module.exports = resource => Cli.createCommand('list', {
    description: `List ${resource.title}`,
    dirname: __dirname,
    resource: resource,
    handler: async args => {
        const result = await args.helpers.api
            .get(resource.url(args));

        return args.helpers.sendOutput(args, result);
    },
});
