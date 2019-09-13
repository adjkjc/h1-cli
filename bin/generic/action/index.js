'use strict';

const Cli = require('lib/cli');

const text = require('lib/text');

module.exports = (resource, action) => Cli.createCommand(action, {
    description: `${text.toTitleCase(action)} ${resource.title}`,
    dirname:  `${resource.dirname || __dirname}/${action}/`,
    resource: resource,
    handler: async args => {
        const result = await args.helpers.api
            .post(`${resource.url(args)}/actions/${action}`, { });

        return args.helpers.sendOutput(args, result);
    },
});
