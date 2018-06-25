'use strict';

const Cli = require('lib/cli');
const addTrailingDot = require('../../lib').addTrailingDot;

const options = {
    name: {
        description: 'DNS zone name',
        type: 'string',
        required: true,
    },
};

const handle = (args) => {

    const url = `${args.$node.parent.config.url(args)}`;

    return args.helpers.api.post(url, {
        name: addTrailingDot(args.name),
    }).then(x => {
        // Temporary workaround for https://github.com/hyperonecom/h1-cli/issues/70
        x._id = x.id;
        return x;
    }).then(result => args.helpers.sendOutput(args, result));
};

module.exports = (resource) => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    plugins: resource.plugins,
    options: Object.assign({}, options, resource.options),
    handler: handle,
});
