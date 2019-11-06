'use strict';

require('../../scope/h1');
const tests = require('../../lib/tests');
const ssh = require('../../lib/ssh');

const now = Date.now();

const name = `agent-test-${now}`;
const createParams = '--type container';

tests.serial('agent life cycle', ['agent'], tests.resourceLifeCycle('agent', {
    createParams: `--name ${name} ${createParams}`,
    stateCreated: 'Unknown',
    skipFqdn: true,
    skipTransfer: true, // must be 'Online'
}));

tests.serial('create agent with credentials', ['agent'], async t => {
    const sshKeyPair = await ssh.generateKey();
    const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);

    const agent = await tests.run(t, `agent create --name ${tests.getName(t.title)} --type container --ssh-file ${sshFilename}`);

    const credentials = await tests.run(t, `agent credential cert list --agent ${agent.id}`);
    t.true(credentials.length > 0);

    await tests.remove(t, 'agent', agent);
});
