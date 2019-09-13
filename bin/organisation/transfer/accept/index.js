'use strict';

const Cli = require('lib/cli');

const options = {
    project: {
        description: 'Project ID or name',
        type: 'string',
        required: true,
    },
    payment: {
        description: 'Payment ID',
        type: 'string',
        required: true,
    },
};

module.exports = resource => Cli.createCommand('accept', {
    description: `Accept ${resource.title}`,
    resource: resource,
    dirname: __dirname,
    options: Object.assign({}, resource.options, options),
    handler: async args => {
        const result = await args.helpers.api
            .post(`organisation/${args.organisation}/actions`, {
                name: 'transfer_accept',
                data: {
                    project: args.project,
                    payment: args.payment,
                },
            });

        return args.helpers.sendOutput(args, result);
    },
});
