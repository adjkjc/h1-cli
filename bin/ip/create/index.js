'use strict';

const Cli = require('lib/cli');
const genericDefaults = require('bin/generic/defaults');

const handler = (args) => args.helpers.api
    .post('ip', {
        tag: require('lib/tags').createTagObject(args.tag),
    })
    .then(result => args.helpers.sendOutput(args, result));

module.exports = resource => Cli.createCommand('create', {
    dirname: __dirname,
    genericOptions: ['tag'],
    description: `Create ${resource.title}`,
    plugins: genericDefaults.plugins,
    handler: handler,
});
