'use strict';
const Cli = require('lib/cli');
const options = {
    all: {
        description: 'Include inactive projects',
        type: 'boolean',
        defaultValue: false,
    },
};
module.exports = resource => Cli.createCommand('list', {
    description: `List ${resource.title}`,
    dirname: __dirname,
    plugins: resource.plugins,
    options: options,
    handler: async args => {
        const result = await args.helpers.api
            .get(resource.url(args), args.all ? {} : { active: true });

        return args.helpers.sendOutput(args, result);
    },
});
