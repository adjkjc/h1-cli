'use strict';

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

tests.serial('netgw life cycle', ['netgw'], async t => {
    const ip = await tests.run(t, 'ip create');
    await tests.resourceLifeCycle('netgw', {
        createParams: `--name netgw-test-${now} --ip ${ip.id}`,
        stateCreated: 'Detached',
        skipFqdn: true,
        skipTransfer: true,
    })(t);
    await tests.remove(t, 'ip', ip);
});

tests.serial('netgw attach & detach', ['netgw'], async t => {
    const ip = await tests.run(t, 'ip create');
    const network = await tests.run(t, `network create --name netgw-test-${now}`);
    const netgw = await tests.run(t, `netgw create --name netgw-test-${now} --ip ${ip.id}`);

    await tests.run(t, `netgw attach --netgw ${netgw.id} --network ${network.id}`);

    const attached_netgw = await tests.run(t, `netgw show --netgw ${netgw.id}`);
    t.true(attached_netgw.state == 'Attached');
    t.true(attached_netgw.network === network.id);

    await tests.run(t, `netgw detach --netgw ${netgw.id}`);

    await tests.remove(t, 'netgw', netgw);
    await tests.remove(t, 'network', network);
    await tests.remove(t, 'ip', ip);
});
