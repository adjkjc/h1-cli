'use strict';
const Cli = require('lib/cli');
const text = require('lib/text');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${text.toTitleCase(resource.title)} ID or name`,
            type: 'string',
            required: true,
        },
    };


    return Cli.createCommand('ip', {
        description: `Get IPs of ${resource.title}`,
        genericOptions: ['tag'],
        dirname: __dirname,
        plugins: resource.plugins,
        options: options,
        priority: 25,
        handler: args => {
            args.query = args.query || '[].{id:_id,address:address,state:state}';

            return args.helpers.api
                .get(`/vm/${args[resource.name]}/netadp`)
                .then(result => result.filter(x => x.ip).map(x => x.ip))
                .then(result => args.helpers.sendOutput(args, result));
        },
    });
};
