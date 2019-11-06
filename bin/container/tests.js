'use strict';
const request = require('superagent');

const tests = require('../../lib/tests');

const now = Date.now();

const name = `container-test-${now}`;
const createParams = '--image nginx --type b1.nano';

tests.serial('container life cycle', ['container'], tests.resourceLifeCycle('container', {
    createParams: `--name ${name} ${createParams}`,
    stateCreated: 'Running',
    skipTransfer: true,
}));

tests.serial('container start stop', ['container'], async t => {
    const container = await tests.run(t, `container create --name ${tests.getName(t.title)} ${createParams}`);
    try {
        await tests.run(t, `container stop --container ${container.name}`);
        const container_stop = await tests.run(t, `container show --container ${container.name}`);
        t.true(container_stop.state === 'Off');

        await tests.run(t, `container start --container ${container.name}`);
        const container_start = await tests.run(t, `container show --container ${container.name}`);
        t.true(container_start.state === 'Running');
    } finally {
        await tests.remove(t, 'container', container);
    }
});

tests.serial('container restart', ['container'], async t => {
    const container = await tests.run(t, `container create --name ${tests.getName(t.title)} ${createParams}`);
    try {
        await tests.run(t, `container restart --container ${container.name}`);
        const container_restart = await tests.run(t, `container show --container ${container.name}`);
        t.true(container_restart.state === 'Running');
    } finally {
        await tests.remove(t, 'container', container);
    }
});

tests.serial('container process list', ['container'], async t => {
    const container = await tests.run(t, `container create --name ${tests.getName(t.title)} ${createParams}`);
    try {
        await tests.run(t, `container process list --container ${container.name}`);
        const ps = await tests.run(t, `container process list --container ${container.name}`);
        t.true(ps.length > 1);
    } finally {
        await tests.remove(t, 'container', container);
    }
});

tests.serial('container log', ['container'], async t => {
    const container = await tests.run(t, `container create --name ${tests.getName(t.title)} ${createParams} --expose 80:80`);
    try {
        await tests.logStreamProcess(t, 'container', container,
            (id_request) => tests.get(`http://${container.fqdn}/?${id_request}`)
        );
    } finally {
        await tests.remove(t, 'container', container);
    }
});

tests.serial('container create with volume', ['container'], async t => {
    const volume = await tests.run(t, `volume create --name ${tests.getName(t.title, 'volume')} --type volume --size 1`);
    try {
        const container = await tests.run(t, `container create --name ${tests.getName(t.title)} ${createParams} --expose 80:80 --volume ${volume.id}/path:/usr/share/nginx/html`);
        try {
            const res = await request.get(`http://${container.fqdn}/`).ok(res => res.status === 403);
            t.true(res.status === 403);
        } finally {
            await tests.remove(t, 'container', container);
        }
    } finally {
        await tests.remove(t, 'volume', volume);
    }
});
