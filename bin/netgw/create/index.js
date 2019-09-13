'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');
const {pickBy} = require('lib/transform');

module.exports = resource => Cli.createCommand('create', {
    description: 'Network gateway create',
    plugins: genericDefaults.plugins,
    dirname: __dirname,
    genericOptions: ['tag'],
    options: Object.assign(
        {},
        resource.options,
        pickBy(resource.schema, field => field.onCreate && !field.virtual)
    ),
    params: resource.params,
    handler: async args => {
        const result = await args.helpers.api
            .post('netgw', {
                name: args.name,
                public: { ip: args.ip },
                tag: require('lib/tags').createTagObject(args.tag),
            });

        return args.helpers.sendOutput(args, result);
    },
});
