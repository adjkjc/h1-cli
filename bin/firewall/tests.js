'use strict';

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const name = `firewall-test-${now}`;
const createParams = `--name ${name}`;

tests.serial('firewall life cycle', ['firewall'], tests.resourceLifeCycle('firewall', {
    createParams: createParams,
    stateCreated: 'Detached',
    skipFqdn: true,
}));

tests.serial('firewall attach & detach', ['firewall'], async t => {
    const network = await tests.run(t, `network create --name network-${name}`);

    const firewall = await tests.run(t, `firewall create ${createParams}`);
    await tests.run(t, `firewall attach --firewall ${firewall.id} --network ${network.id}`);

    const refreshed = await tests.run(t, `firewall show --firewall ${firewall.id}`);
    t.true(refreshed.state === 'Attached');
    t.true(refreshed.network === network.id);

    await tests.run(t, `firewall detach --firewall ${firewall.id}`);

    await tests.remove(t, 'firewall', firewall);
    await tests.remove(t, 'network', network);
});

['ingress', 'egress'].forEach(table => {
    tests.serial(`firewall rule ${table} life cycle`, ['firewall'], async t => {
        const firewall = await tests.run(t, `firewall create ${createParams}`);
        const name = `${now}-${table}`;

        const rule = await tests.run(t, `firewall ${table} add --firewall ${firewall.id} --action allow --priority 300 --filter tcp:80 --external 0.0.0.0/0 --internal 10.177.2.2 --name ${name}`);

        const added_list = await tests.run(t, `firewall ${table} list --firewall ${firewall.id}`);
        t.true(added_list.some(r => r.name === name));

        const refreshed_rule = await tests.run(t, `firewall ${table} show --firewall ${firewall.id} --${table} ${rule.id}`);
        t.true(refreshed_rule.name === rule.name && refreshed_rule.id === rule.id);

        await tests.run(t, `firewall ${table} delete --firewall ${firewall.id} --rule ${rule.id}`);

        const clean_list = await tests.run(t, `firewall ${table} list --firewall ${firewall.id}`);
        t.true(!clean_list.some(r => r.name === name));

        await tests.remove(t, 'firewall', firewall);
    });
});
