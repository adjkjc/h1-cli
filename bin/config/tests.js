'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');
const api = require('../../lib/api');

const now = Date.now();

ava.serial('config set & get & show & unset', async t => {
    const key = 'vm.create.name';
    const value = `my-home-${now}`;
    await tests.run(t, `config set --key ${key} --value ${value}`);

    const result = await tests.run(t, `config get --key ${key}`);
    t.true(result === value);

    const content = await tests.run(t, 'config show');
    t.true(content.vm.create.name === value);

    await tests.run(t, `config unset --key ${key}`);
    const missing = await tests.run(t, `config get --key ${key}`);
    t.true(missing === 'key not set');
});

tests.serial('test websocket message', ['ip'], async t => {
    // TODO: Move to proper monitoring system
    const resource = await tests.run(t, 'ip create');
    const ws = await api.getWS();
    t.true(!!ws);
    const promise = new Promise((resolve, reject) => {
        ws.on('message', msg => {

            msg = JSON.parse(msg);

            if (msg.message.type !== 'event') {
                return;
            }

            const event = msg.message.data;

            if (resource.id === msg.resource.data.id) {
                if (event.state === 'finished') {
                    return resolve(resource);
                } else if (event.state === 'error') {
                    return reject(resource);
                }
            }
        });
    }).finally(() => ws.close());
    await tests.remove(t, 'ip', resource);
    await promise;
});
