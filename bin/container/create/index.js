'use strict';
const yaml = require('js-yaml');
const Cli = require('lib/cli');
const path = require('path');

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
        action: 'append',
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
    // log: {
    //     type: 'string',
    //     description: 'Log ID or name',
    //     required: false,
    // },
    // 'log-password': {
    //     type: 'string',
    //     description: 'Log ID or name',
    //     required: false,
    // },
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
    network: {
        description: 'Network ID or name to attach',
        type: 'string',
    },
    ip: {
        description: 'IP address for Virtual machine',
        type: 'string',
    },
};

// const syslog_content = (logArchive) => `
// template(name="HyperOneTemplate" type="string" string="<%pri%>%protocol-version% %timestamp:::date-rfc3339% %HOSTNAME% %app-name% %procid% %msgid% [${logArchive._id}:${logArchive.password}@HyperOne tag=\\"Rsyslog\\"] %msg%\\n")
//
// action(type="omfwd" protocol="tcp" target="${logArchive._id}.log.pl-waw-1.hyperone.com" port="6514" template="HyperOneTemplate")
// `;

// const save_file = (path, content) => {
//     const content_b64 = Buffer.from(content).toString('base64');
//     return `echo '${content_b64}' | openssl base64 -d > ${path}`;
// };

// const logArchiveService = (logArchive) => [
//     save_file('/etc/rsyslog.d/60-logArchive.conf', syslog_content(logArchive)),
//     'service rsyslog restart',
// ];

const dockerService = [
    'curl -fsSL https://get.docker.com -o /tmp/get-docker.sh',
    'sh /tmp/get-docker.sh',
];

const containerService = (container) => {
    const args = ['docker', 'run', '-d', '--network', 'host'];
    container.mountpoints.map(mountpoint => ['-v', `${path.join('/data/', mountpoint.host)}:${mountpoint.container}`]).forEach(args => args.push(...args));
    container.envs.map(env => ['-e', env]).forEach(args => args.push(...args));

    if (container.entrypoint) {
        args.push('--entrypoint', container.entrypoint);
    }

    args.push(container.image);
    if (container.args) {
        args.push(container.args);
    }
    return [
        args,
    ];
    // return `docker run -d --network host -v /tmp/init.sql:/docker-entrypoint-initdb.d/init.sql --log-driver syslog -v /data/mysql_datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=${root_password} mysql:5.7 --bind-address=0.0.0.0`;
};
// const mysqlService = (rootPassword) => [
//     // Default root user have no remote access.
//     save_file('/tmp/init.sql', `GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '${root_password}' WITH GRANT OPTION;`),
//     `docker run -d --network host -v /tmp/init.sql:/docker-entrypoint-initdb.d/init.sql --log-driver syslog -v /data/mysql_datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=${root_password} mysql:5.7 --bind-address=0.0.0.0`,
// ];


const generate_cloudinit = (container) => {
    const extraCmd = [];

    // if (logArchive) {
    //     extraCmd.push(...logArchiveService(logArchive));
    // }

    // extraCmd.push(...[
    //     ...logArchiveService,
    // ]);

    extraCmd.push(
        ...dockerService,
        ...containerService(container)
    );

    return {
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
        runcmd: [
            'mount -a',
            ...extraCmd,
        ],
    };
};


module.exports = resource => Cli.createCommand('create', {
    description: `Create ${resource.title}`,
    genericOptions: ['tag'],
    dirname: __dirname,
    plugins: resource.plugins,
    options: options,
    priority: 25,
    handler: args => {
        console.log(args);

        const container = {
            image: args.image,
            mountpoints:args.mountpoint.map(mountpoint => {
                const parts = mountpoint.split(':');
                return {
                    host: parts[0],
                    container: parts[1],
                };
            }),
            envs: args.env,
            entrypoint: args.entrypoint,
            args: args.args,
        };
        const logArchive = {};

        const config = generate_cloudinit(container, logArchive);

        console.log(config);

        const metadata = `#cloud-config\n${yaml.safeDump(config)}`;

        const newVM = {
            name: args.name,
            service: args.type,
            tag: require('lib/tags').createTagObject(args.tag),
            userMetadata: Buffer.from(metadata).toString('base64'),
            image: 'ubuntu:18.04',
            sshKeys: ['my-ssh'],
        };

        if (args.network || args.ip) {
            const netadp = {};

            if (args.network) {
                netadp.network = args.network;
                netadp.service = 'private';
            } else {
                netadp.service = 'public';
            }

            if (args.ip) {
                netadp.ip = args.ip;
            }

            newVM.netadp = [netadp];
        }

        const disk = [
            {
                name: `${args.name}-os`,
                size: args['os-size'],
                service: 'ssd',
            },
        ];
        console.log({
            mountpoint: args.mountpoint > 0,
            data: !args['data-disk'],
        });
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
                disk.push({
                    name: `${args.name}-data`,
                    service: dataDisk[0],
                    size: dataDisk[1],
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
