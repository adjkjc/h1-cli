'use strict';
require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

tests.serial('ip life cycle', ['ip'], tests.resourceLifeCycle('ip', {
    createParams: '',
    skipRename: true,
    stateCreated: 'Unallocated',
}));

tests.serial('ip ptr update', ['ip'], async t => {
    const fresh_ip = await tests.run(t, 'ip create');
    const updated_ip = await tests.run(t, `ip ptr --ip ${fresh_ip.id} --value mail.host.example.com`);
    t.true(updated_ip.ptrRecord === 'mail.host.example.com');
    await tests.remove(t, 'ip', updated_ip);
});

tests.serial('ip create with initial ptr', ['ip'], async t => {
    const ip = await tests.run(t, 'ip create --ptr-record mail.host.example.com');
    t.true(ip.ptrRecord === 'mail.host.example.com');
    await tests.remove(t, 'ip', ip);
});


tests.serial('ip associate & disassociate', ['ip'], async t => {
    const ip = await tests.run(t, 'ip create');

    const password = await tests.getToken();

    const network = await tests.run(t, `network create --name net-ip-test-${now}`);
    const vm = await tests.run(t, `vm create --type a1.nano --no-start --name vm-ip-test-${now} --network ${network.id} --password ${password}`);
    const nic_list = await tests.run(t, `vm nic list --vm ${vm.id}`);
    const ip_private = nic_list[0].ip[0];

    const result = await tests.run(t, `ip associate --ip ${ip.address} --private-ip ${ip_private.id}`);

    t.true(result.state === 'Associated');

    const disassociated = await tests.run(t, `ip disassociate --ip ${ip.address}`);
    t.true(disassociated.state === 'Unallocated');

    await tests.remove(t, 'vm', vm);
    await tests.remove(t, 'network', network);

    await tests.remove(t, 'ip', ip);
});
