'use strict';
const yaml = require('js-yaml');
const Cli = require('lib/cli');
const path = require('path');
const shell_quote = require('shell-quote');

const options = {
    name: {
        description: 'Name of log archive',
        type: 'string',
        required: true,
    },
    image: {
        description: 'Docker image path',
        type: 'string',
        required: true,
    },
    env: {
        description: 'Environment variable as NAME=VALUE',
        type: 'string',
        action: 'append',
        defaultValue: [],
    },
    entrypoint: {
        description: 'Overwrite the default ENTRYPOINT of the image',
        type: 'string',
    },
    args: {
        description: 'Extra arguments on run of image',
        type: 'string',
    },
    'os-size': {
        description: 'Size of OS disk. Default: 10 GB',
        type: 'string',
        defaultValue: 10,
    },
    'data-disk': {
        type: 'string',
        description: 'Data disk: "type,size" or "id"',
    },
    log: {
        type: 'string',
        description: 'Log ID or name',
        required: false,
    },
    'log-password': {
        type: 'string',
        description: 'Log ID or name',
        required: false,
    },
    mountpoint: {
        type: 'string',
        description: "Mountpoint of disk keep persistence as 'disk_path:container_path'",
        action: 'append',
        defaultValue: [],
    },
    type: {
        description: 'Virtual machine type name or ID',
        type: 'string',
        required: true,
    },
    ip: {
        description: 'IP address for Virtual machine',
        type: 'string',
    },
};

const syslog_content = (logArchive) => `
template(name="HyperOneTemplate" type="string" string="<%pri%>%protocol-version% %timestamp:::date-rfc3339% %HOSTNAME% %app-name% %procid% %msgid% [${logArchive.id}:${logArchive.password}@HyperOne tag=\\"Rsyslog\\"] %msg%\\n")

action(type="omfwd" protocol="tcp" target="${logArchive._id}.log.pl-waw-1.hyperone.com" port="6514" template="HyperOneTemplate")
`;

const save_file = (path, content) => {
    const content_b64 = Buffer.from(content).toString('base64');
    return `echo '${content_b64}' | openssl base64 -d > ${path}`;
};

const logArchiveService = (logArchive) => [
    save_file('/etc/rsyslog.d/60-logArchive.conf', syslog_content(logArchive)),
    'service rsyslog restart',
];

const dockerService = [
    // 'curl -fsSL https://get.docker.com -o /tmp/get-docker.sh',
    // 'sh /tmp/get-docker.sh',
];

const containerService = (container) => {
    const args = ['docker', 'run', '-d', '--network', 'host'];
    container.mountpoints.map(mountpoint => ['-v', `${path.join('/data/', mountpoint.host)}:${mountpoint.container}`]).forEach(arg => args.push(...arg));
    container.envs
        .map(env => ['-e', env])
        .forEach(arg => args.push(...arg));

    if (container.entrypoint) {
        args.push('--entrypoint', container.entrypoint);
    }
    if (container.log) {
        args.push('--log-driver', 'syslog');
    }

    args.push(container.image);
    if (container.args) {
        args.push(...shell_quote.parse(container.args));
    }
    return [
        args,
    ];
};

const generate_cloudinit = (container, disk_enable = false, logArchive={}) => {
    const extraCmd = [];

    if (logArchive.log) {
        extraCmd.push(...logArchiveService(logArchive));
    }

    extraCmd.push(
        ...dockerService,
        ...containerService(container)
    );

    const config = {};
    if (disk_enable) {
        Object.assign(config, {
            disk_setup: {
                data_disk: {
                    table_type: 'gpt',
                    layout: true,
                    overwrite: false,
                },
            },
            fs_setup: [
                {
                    filesystem: 'ext4',
                    device: '/dev/sdb',
                    partition: 'auto',
                    overwrite: false,
                },
            ],
            mounts: [
                [
                    'sdb',
                    '/data',
                ],
            ],
        });
    }

    return Object.assign(config, {
        final_message: 'cloud init done!',
        runcmd: [
            'mount -a',
            ...extraCmd,
        ],
    });
};


module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    genericOptions: ['tag'],
    dirname: __dirname,
    plugins: resource.plugins,
    options: options,
    priority: 25,
    handler: args => {
        const container = {
            image: args.image,
            mountpoints: args.mountpoint.map(mountpoint => {
                const parts = mountpoint.split(':');
                return {
                    host: parts[0],
                    container: parts[1],
                };
            }),
            envs: args.env,
            entrypoint: args.entrypoint,
            args: args.args,
            log: !!args.log,
        };

        console.log({container});
        const logArchive = {};
        if ((!args.log || !args['log-password']) && (args.log || args['log-password'])) {
            console.log({log: args.log, 'log-password': args['log-password']});
            throw Cli.error.cancelled('The \'--log-password\' parameter is required if \'--log\' is specified');
        } else if (args.log) {
            logArchive.id = args.log;
            logArchive.password = args['log-password'];
        }
        console.log({logArchive});
        const disk_enable = args['data-disk'];

        const config = generate_cloudinit(container, disk_enable, logArchive);
        console.dir({config}, {depth:null});
        const metadata = `#cloud-config\n${yaml.safeDump(config)}`;
        const newVM = {
            name: args.name,
            service: args.type,
            tag: Object.assign(
                {},
                require('lib/tags').createTagObject(args.tag),
                {
                    container: 'true',
                }
            ),
            userMetadata: Buffer.from(metadata).toString('base64'),
            image: '5c13dc97bc411d75c5b291cb', // ubuntu-container-os
            sshKeys: ['my-ssh'],
        };

        if (args.ip) {
            newVM.netadp = [{
                ip: args.ip,
            }];
        }

        const disk = [
            {
                name: `${args.name}-os`,
                size: args['os-size'],
                service: 'ssd',
            },
        ];

        if (args.mountpoint.length > 0 && !args['data-disk']) {
            throw Cli.error.cancelled('The \'--data-disk\' parameter is required if \'--mountpoint\' is specified');
        }

        if (args['data-disk']) {
            const dataDisk = args['data-disk'].split(',');
            if (dataDisk.length === 1) {
                disk.push({
                    id: args['data-disk'],
                });
            } else {
                console.log(dataDisk);
                disk.push({
                    name: `${args.name}-data`,
                    size: parseInt(dataDisk[0]),
                    service: dataDisk[1],
                });
            }
        }

        newVM.disk = disk;

        console.dir({newVM}, {depth: null});
        return args.helpers.api
            .post(resource.url('/vm'), newVM)
            .then(result => args.helpers.sendOutput(args, result));
    },
});
