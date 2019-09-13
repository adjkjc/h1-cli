'use strict';

const Cli = require('lib/cli');

module.exports = resource => {
    const options = {
        [resource.name]: {
            description: `${resource.title} ID or name`,
            type: 'string',
            required: true,
        },
        command: {
            description: 'Command to execute',
            type: 'string',
        },
    };


    return Cli.createCommand('ssh', {
        description: `Connect to ${resource.title} using SSH`,
        plugins: resource.plugins,
        dirname: __dirname,
        resource: resource,
        options: Object.assign({}, resource.options, options),
        handler: async args => {
            const resource2 = await args.helpers.api
                .get(`${resource.url(args)}/${args[resource.name]}`);

            const sshArgs = [
                `${resource2.id}@${resource2.fqdn}`,
            ];

            if (args.command) {
                sshArgs.push(args.command);
            }

            console.log(`ssh ${sshArgs.join(' ')}`);

            const spawn = require('child_process').spawn;

            return new Promise((resolve, reject) => {
                const ssh = spawn('ssh', sshArgs, {stdio: 'inherit'});

                ssh.on('close', resolve);
                ssh.on('error', reject);
            });
        },
    });
};
