'use strict';

const Cli = require('lib/cli');

const options = {
    vault: {
        description: 'Vault ID or name',
        type: 'string',
        required: true,
    },
    command: {
        description: 'Command to execute',
        type: 'string',
    },
};


module.exports = resource => Cli.createCommand('ssh', {
    description: `Connect to ${resource.title} using SSH`,
    plugins: resource.plugins,
    dirname: __dirname,
    options: Object.assign({}, resource.options, options),
    handler: args => args.helpers.api
        .get(`${resource.url(args)}/${args.vault}`)
        .then(vault => {

            const sshArgs = [
                `${vault._id}@${vault.fqdn}`,
            ];

            if (args.command) {
                sshArgs.push(args.command);
            }

            console.log(`ssh ${sshArgs.join(' ')}`);

            const spawn = require('child_process').spawn;

            return new Promise((resolve, reject) => {
                const ssh = spawn('ssh', sshArgs, { stdio: 'inherit' });

                ssh.on('close', resolve);
                ssh.on('error', reject);
            });
        }),
});
