'use strict';
const childProcess = require('child_process');
const shell_quote = require('shell-quote');
require('../scope/h1');
process.env[`${process.env.SCOPE_FULL_NAME.toUpperCase()}_EARLY_ADOPTERS`] = '1';
// const tests = require('../lib/tests');
const fg = require('fast-glob');
const util = require('util');
const fs = require('fs');
const mkDir = util.promisify(fs.mkdir);
const { Readable } = require('stream');
const converter = require('tap-xunit');
const superagent = require('superagent');
const archiver = require('archiver');

const getConfigValue = (name, options = {}) => {
    if (!process.env[name] && typeof options.defaultValue === 'undefined') {
        console.log(process.env);
        throw `${options.label || name} (${name}) variable is unset`;
    }
    const fn = options.parse || (v => v);
    return fn(process.env[name] || options.defaultValue);
};


const stream_promisify = (stream) => new Promise((resolve, reject) => {
    stream.on('end', resolve);
    stream.on('error', reject);
});

const getConfig = () => {
    const specs = {
        HYPERONE_USER: {
            label: 'HyperOne username',
        },
        HYPERONE_PASSWORD: {
            label: 'HyperOne password',
        },
        HYPERONE_PROJECT_MASTER: {
            label: 'HyperOne project ID or name',
        },
        HYPERONE_PROJECT_SLAVE: {
            label: 'HyperOne slave project ID or name',
        },
        MONITORING_NAME: {
            label: 'Name of tests runner',
            defaultValue: 'Unknown',
        },
        MONITORING_GLOB: {
            label: 'Pattern to match test case files',
            defaultValue: './bin/**/tests.js',
        },
        MONITORING_CMD: {
            label: 'Monitored executable',
            defaultValue: 'npx ava --tap',
        },
        MONITORING_TIMEOUT: {
            label: 'Maximum execution time (seconds)',
            parse: v => parseInt(v),
            defaultValue: 60 * 30,
        },
        REPORTPORTAL_URL: {
            label: 'URL of Reportportal.io host',
            defaultValue: 'https://web.demo.reportportal.io',
        },
        REPORTPORTAL_TOKEN: {
            label: 'Hostname of Reportportal.io host',
            defaultValue: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
        },
        REPORTPORTAL_PROJECT: {
            label: 'Project name in Reportportal.io host',
            defaultValue: 'default_personal',
        },
    };

    const config = {};
    Object.entries(specs).forEach(([name, options]) => {
        config[name] = getConfigValue(name, options);
    });
    return config;
};

const sendReport = async (config, { xml, file }) => {
    // curl -X POST --header 'Content-Type: multipart/form-data' \
    // --header 'Accept: application/json' \
    // --header 'Authorization: bearer aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee' \
    // -F file=@foo.zip \
    // 'http://192.168.1.224:8080/'
    console.log({ xml, file });
    const archive = archiver('zip', {
        zlib: { level: 9 },
    });
    const chunks = [];
    archive.on('data', o => chunks.push(o));
    archive.append(xml, { name: `${config.MONITORING_NAME}.xml` });
    const p = stream_promisify(archive);
    archive.finalize();
    await p;
    const resp = await superagent
        .post(`${config.REPORTPORTAL_URL}/api/v1/${config.REPORTPORTAL_PROJECT}/launch/import`)
        .attach('file', Buffer.concat(chunks), `${config.MONITORING_NAME}.zip`)
        .set('Authorization', `bearer ${config.REPORTPORTAL_TOKEN}`);
    return resp.text;
};

const runProcess = async (cmd, env = {}, timeout = 60 * 30) => new Promise((resolve, reject) => {
    console.log(`Started process: ${cmd}`);
    const arg = shell_quote.parse(cmd);

    const proc = childProcess.spawn(arg[0], arg.slice(1), {
        env: Object.assign({}, process.env, env),
        stdio: [null, 'pipe', 'pipe'],
    });
    let output = '';

    const killer = setTimeout(() => {
        proc.kill();
        const error = new Error(`Process ${arg[0]} timed out after ${timeout} seconds.`);
        error.output = output;
        return reject(error);
    }, timeout * 1000);

    proc.on('close', (code) => {
        clearTimeout(killer);
        if (code !== 0) {
            const error = new Error(`Process ${arg[0]} exited with code ${code}.`);
            error.code = code;
            error.output = output;
            return reject(error);
        }
        return resolve(output);
    });

    proc.stdout.on('data', (data) => {
        process.stdout.write(data);
        output += data;
    });

    proc.stderr.on('data', (data) => {
        process.stderr.write(data);
        output += data;
    });
});
const runIsolated = async (config, cmd, options = {}) => {
    const project = options.project || config.H1_PROJECT_MASTER;
    const config_dir = `/tmp/${Math.random()}/`;
    await mkDir(config_dir);
    const envIsolate = { H1_CONFIG_PATH: config_dir };
    await runProcess(`h1 login --username ${config.H1_USER} --password ${config.H1_PASSWORD}`, envIsolate);
    await runProcess(`h1 project select --project ${project}`, envIsolate);
    return runProcess(cmd, envIsolate, config.MONITORING_TIMEOUT);
};

const main = async () => {
    const config = getConfig();
    const files = await fg(config.MONITORING_GLOB);

    const runTest = async test_path => {
        let tap_output;

        try {
            tap_output = await runIsolated(config, `${config.MONITORING_CMD} ${test_path}`);
        } catch (err) {
            tap_output = err.output;
        }
        const xml_outputs = [];
        const xml_stream = Readable.from(tap_output).pipe(converter({}));
        xml_stream.on('data', o => xml_outputs.push(o));
        await stream_promisify(xml_stream);
        return xml_outputs.join('');
    };

    const outputs = await Promise.all(files.map(async file => {
        const xml = await runTest(file);
        return sendReport(config, { xml, file });
    }));
    console.log(outputs);

    // const cleanup = [
    //     runIsolated(config, `./scripts/cleanup_project.sh ${config.H1_PROJECT_MASTER}`),
    //     runIsolated(config, `./scripts/cleanup_project.sh ${config.H1_PROJECT_SLAVE}`),
    //     runIsolated(config, `./scripts/revoke_user.sh ${tests.RECIPIENT.user} ${config.H1_PROJECT_MASTER}`),
    //     runIsolated(config, `./scripts/revoke_user.sh ${tests.RECIPIENT.user} ${config.H1_PROJECT_SLAVE}`),
    // ];
    // await Promise.all(cleanup.map(p => p.catch(() => { })));
};

main().catch((err) => {
    console.error('Something terrible happened.', err);
    process.exit(-1);
});
