'use strict';

const Cli = require('lib/cli');

module.exports = resource => Cli.createCommand('show', {
    description: `Show ${resource.title}`,
    dirname: __dirname,
    plugins: [
        require('bin/_plugins/loginRequired'),
        require('bin/_plugins/api'),
        require('bin/_plugins/outputFormat'),
    ],
    options: resource.options,
    handler: async args => {
        const result = await args.helpers.api
            .get(resource.url(args));

        return args.helpers.sendOutput(args, result);
    },
});
