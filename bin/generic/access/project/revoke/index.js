'use strict';

const Cli = require('lib/cli');

const genericDefaults = require('bin/generic/defaults');
const text = require('lib/text');

module.exports = (resource) => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
        project: {
            description: 'Project name or ID',
            type: 'string',
            required: true,
        },
    };

    return Cli.createCommand('revoke', {
        dirname: __dirname,
        description: `Revoke access rights for ${resource.title}`,
        plugins: genericDefaults.plugins,
        params: resource.params,
        options: Object.assign({}, resource.options, options),
        resource: resource,
        handler: async args => {
            const result = await args.helpers.api
                .delete(`${resource.name}/${args[resource.name]}/accessrights/${args.project}`);

            return args.helpers.sendOutput(args, result);
        },
    });
};
