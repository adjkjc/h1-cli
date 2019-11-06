'use strict';

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

tests.serial('network life cycle', ['network'], tests.resourceLifeCycle('network', {
    createParams: `--name network-test-${now}`,
    skipTransfer: true,
    skipFqdn: true,
}));

tests.serial('network ip life cycle', ['network'], async t => {
    const network = await tests.run(t, `network create --name network-test-${now}`);
    await tests.resourceLifeCycle('network ip', {
        createParams: `--network ${network.id}`,
        listParams: `--network ${network.id}`,
        showParams: `--network ${network.id}`,
        deleteParams: `--network ${network.id}`,
        tagParams: `--network ${network.id}`,
        serviceListParams: `--network ${network.id}`,
        serviceShowParams: `--network ${network.id}`,
        skipHistory: true,
        stateCreated: 'Unallocated',
        schemaRef: '#/components/schemas/ip',
        skipTransfer: true,
        skipFqdn: true,
        skipRename: true,
    })(t);
    await tests.remove(t, 'network', network);
});

tests.serial('network using custom ip', ['network'], async t => {
    const private_ip = '10.214.180.10';
    const name = `my-ip-network-${now}`;
    const network = await tests.run(t, `network create --name ${name}  --address 10.214.180.0/24 --gateway ${private_ip}`);

    await tests.run(t, `network ip create --network ${name} --address ${private_ip}`);

    const list = await tests.run(t, `network ip list --network ${name}`);
    t.true(list.some(x => x.address === private_ip));

    await tests.remove(t, 'network', network);
});

tests.serial('network firewall', ['network'], async t => {
    const network = await tests.run(t, `network create --name ${tests.getName(t.title)}`);
    const firewall = await tests.run(t, `firewall create --name ${tests.getName(t.title)}`);

    await tests.run(t, `network firewall add --firewall ${firewall.name} --network ${network.name}`);
    const network_with_firewall = await tests.run(t, `network show --network ${network.id}`);
    t.true(network_with_firewall.firewall === firewall.id);

    await tests.run(t, `network firewall remove --network ${network.name}`);

    await tests.remove(t, 'network', network);
    await tests.remove(t, 'firewall', firewall);
});
