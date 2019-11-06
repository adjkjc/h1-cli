'use strict';

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();


tests.serial('snapshot life cycle', ['snapshot'], async t => {
    const vault = await tests.run(t, `vault create --name vault-snapshot-test-${now} --size 10`);
    const name = `snapshot-test-${now}`;

    await tests.resourceLifeCycle('snapshot', {
        createParams: `--vault ${vault.id} --name ${name}`,
        stateCreated: 'Online',
        skipTransfer: true,
        skipFqdn: true,
    })(t);


    await tests.remove(t, 'vault', vault);
});
