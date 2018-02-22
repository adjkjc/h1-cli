'use strict';

const Cli = require('structured-cli');

const path = require('path');
const fs = require('fs');

const logger = require('lib/logger');

const options = {
    name: {
        description: 'Name'
      , type: 'string'
      , required: true
    }
  , sshkey: {
        description: 'Public SSH key Id'
      , type: 'string'
    }
  , 'sshkey-file': {
        description: 'Public SSH key filename'
      , type: 'string'
    }
};

module.exports = resource => Cli.createCommand('add', {
    description: 'Adding public SSH key'
  , plugins: resource.plugins
  , params: resource.params
  , options: options
  , handler: args => {

        if (!args.sshkey && !args['sshkey-file']) {
            return logger('error', 'please set sshkey or sshkey-file');
        }

        const body = {
            name: args.name
          , type: 'ssh'
          , value: args.sshkey
        };

        if (args['sshkey-file']) {
            const filename = path.resolve(args['sshkey-file']);

            if (!fs.existsSync(filename)) {
                throw Cli.error.notFound(`SSH key file not found: ${filename}`);
            }

            body.value = fs.readFileSync(filename, 'utf8');
        }

        return args.helpers.api
            .post(args.$node.parent.config.url(args), body)
            .then(result => args.helpers.sendOutput(args, result));
    }
});