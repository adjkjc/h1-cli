'use strict';

const Cli = require('lib/cli');

const interactive = require('lib/interactive');

module.exports = resource => Cli.createCommand('eject', {
    description: `Eject ISO from DVD drive of ${resource.title}`,
    plugins: [
        ...resource.plugins,
        require('bin/_plugins/confirmYes'),
    ],
    params: resource.params,
    options: resource.options,
    dirname: __dirname,
    handler: async args => {
        const eject = async () => {
            const result = await args.helpers.api
                .put(args.$node.parent.config.url(args), { });

            return args.helpers.sendOutput(args, result);
        };

        if (args.yes) {
            return eject();
        }

        const answer = await interactive
            .confirm('Are you sure you want to eject ISO ?');

        if (answer.value === true) {
            return eject();
        }

        throw Cli.error.cancelled('Canceled', undefined);
    },
});
