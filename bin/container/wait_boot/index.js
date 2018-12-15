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

    const delay = time => new Promise(resolve => setTimeout(resolve, time));

    return Cli.createCommand('wait_boot', {
        description: `Wait to boot ${resource.title}`,
        genericOptions: ['tag'],
        dirname: __dirname,
        plugins: resource.plugins,
        options: options,
        priority: 25,
        handler: args => new Promise(async (resolve, reject) => {

            for (let i = 0; i < 120; i++) {
                try {
                    const text = await args.helpers.api
                        .get(`/vm/${args[resource.name]}/serialport/1`);
                    if (
                        text.includes('Failed running /var/lib/cloud/instance/scripts/runcmd') ||
                        text.includes('FAIL: running modules for final')
                    ) {
                        return reject(text);
                    } else if (text.includes('cloud init done!')) {
                        return resolve(text);
                    }
                    console.log('Waiting to container start');

                } catch (err) {
                    return reject('Unable to get serialport log');
                }
                await delay(1000);
            }

            return resolve('Container unable to start on time!');
        }),
    });
};
