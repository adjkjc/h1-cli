'use strict';

const Cli = require('lib/cli');

const options = {
    tag: {
        description: 'Tag',
        type: 'string',
        required: true,
    },
};

module.exports = (resource, subresource) => Cli.createCommand('delete', {
    dirname: __dirname,
    description: `Delete a tag of ${resource.title}`,
    plugins: subresource.plugins,
    params: subresource.params,
    resource: resource,
    options: Object.assign({}, options, subresource.options),
    handler: async args => {
        const result = await args.helpers.api
            .delete(`${args.$node.parent.config.url(args)}/${args.tag.split('=')[0]}`);

        return args.helpers.sendOutput(args, result);
    },
});
