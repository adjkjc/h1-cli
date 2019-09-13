'use strict';

const Cli = require('lib/cli');

const options = {
    iso: {
        description: 'ISO name or ID',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('insert', {
    description: `Insert ISO into DVD drive of ${resource.title}`,
    plugins: resource.plugins,
    params: resource.params,
    options: Object.assign({}, resource.options, options),
    dirname: __dirname,
    handler: async args => {
        const result = await args.helpers.api
            .put(args.$node.parent.config.url(args), { iso: args.iso });

        return args.helpers.sendOutput(args, result);
    },
});
