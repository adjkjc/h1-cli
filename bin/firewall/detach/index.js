'use strict';

const Cli = require('lib/cli');

const options = {
    firewall: {
        description: 'Firewall ID or name',
        type: 'string',
        required: true,
    },
};

const handler = async args => {
    const result = await args.helpers.api
        .post(`firewall/${args.firewall}/actions`, { name: 'detach' });

    return args.helpers.sendOutput(args, result);
}
;

module.exports = resource => Cli.createCommand('detach', {
    dirname: __dirname,
    description: `Detach ${resource.title} from network`,
    plugins: resource.plugins,
    handler: handler,
    options: Object.assign({}, resource.options, options),
});
