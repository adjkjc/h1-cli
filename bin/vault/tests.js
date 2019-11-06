'use strict';

const fs = require('fs');

require('../../scope/h1');
const tests = require('../../lib/tests');
const ssh = require('../../lib/ssh');

const now = Date.now();

const createUserCredentials = async (t) => {
    const sshKeyPair = await ssh.generateKey();
    const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);

    const name = tests.getName(t.title, 'user-cred');
    await tests.run(t, `user credentials add --name ${name} --sshkey-file '${sshFilename}'`);
    return {
        file: sshFilename,
        name: name,
        cleanup: async () => {
            fs.unlinkSync(sshFilename);
            await tests.remove(t, 'user credentials', name);
        },
    };
};

tests.serial('vault life cycle', ['vault'],  async t => {
    const ssh = await createUserCredentials(t);

    await tests.resourceLifeCycle('vault', {
        stateCreated: 'Online',
        createParams: `--name ${tests.getName(t.title)} --size 10 --ssh ${ssh.name}`,
        skipTransfer: true,
    })(t);

    await ssh.cleanup();
});


tests.serial('vault stop & start', ['vault'],  async t => {
    const vault = await tests.run(t, `vault create --name ${tests.getName(t.title)} --size 10`);

    await tests.run(t, `vault stop --vault ${vault.id}`);
    const vault_stopped = await tests.run(t, `vault show --vault ${vault.id}`);
    t.true(vault_stopped.state === 'Off');

    await tests.run(t, `vault start --vault ${vault.id}`);
    const vault_started = await tests.run(t, `vault show --vault ${vault.id}`);
    t.true(vault_started.state === 'Online');

    await tests.remove(t, 'vault', vault);

});


tests.serial('vault resize', ['vault'],  tests.resourceResizeCycle('vault', {
    createParams: `--name ${tests.getName('vault-resize')}`,
}));

tests.serial('vault credential credentials life cycle', ['vault'],  async t => {
    const vault = await tests.run(t, `vault create --name ${tests.getName(t.title)} --size 10`);

    await tests.credentialsLifeCycle('vault credential cert', {
        showParams: `--vault ${vault.id}`,
        createParams: `--vault ${vault.id}`,
        listParams: `--vault ${vault.id}`,
        deleteParams: `--vault ${vault.id}`,
        renameParams: `--vault ${vault.id}`,
    })(t);

    await tests.remove(t, 'vault', vault);
});

tests.serial('vault recreate from snapshot', ['vault'],  async t => {
    const name = tests.getName(t.title);
    const password = await tests.getToken();
    const vault = await tests.run(t, `vault create --name ${name} --size 10 --password ${password}`);

    const filename = `my-secret-file-${now}.txt`;
    await ssh.execResource(t, vault, {password}, `touch ~/${filename}`);

    const snapshot = await tests.run(t, `snapshot create --vault ${vault.id} --name snapshot-${name}`);

    const recreated_vault = await tests.run(t, `vault create --name ${name} --size 10 --snapshot ${snapshot.name} --password ${password}`);
    t.true(recreated_vault.created);

    const content = await ssh.execResource(t, recreated_vault, {password}, 'ls -lah ~/');
    t.true(content.includes(filename));

    await tests.remove(t, 'vault', recreated_vault);
    await tests.remove(t, 'snapshot', snapshot);
    await tests.remove(t, 'vault', vault);
});

tests.serial('vault credential password life cycle', ['vault'],  async t => {
    const vault = await tests.run(t, `vault create --name ${tests.getName(t.title)} --size 10`);
    await tests.passwordLifeCycle(t, 'vault', vault);
    await tests.remove(t, 'vault', vault);
});

['project', 'user'].forEach(type => {
    tests.serial(`vault credential ${type} ssh use`, ['vault'],  async t => {
        const name = tests.getName(t.title);
        const sshKeyPair = await ssh.generateKey();
        const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);

        const ssh_name = `${name}-${type}-key`;
        const credentials = await tests.run(t, `${type} credentials add --name ${ssh_name} --sshkey-file '${sshFilename}'`);
        const vault = await tests.run(t, `vault create --name my-vault --size 10 --ssh ${ssh_name}`);

        const list = await tests.run(t, `vault credential cert list --vault ${vault.id}`);
        t.true(list.some(p => p.name === ssh_name));

        await tests.remove(`${type} credentials`, credentials);
        await tests.remove(t, 'vault', vault);

        fs.unlinkSync(sshFilename);
    });
});

['project', 'user'].forEach(type => {
    tests.serial(`vault ssh using ${type} ssh-key`, ['vault'],  async t => {
        const sshKeyPair = await ssh.generateKey();
        const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);

        const name = tests.getName(t.title);
        const ssh_name = `${name}-${type}-key`;

        const credentials = await tests.run(t, `${type} credentials add --name ${ssh_name} --sshkey-file '${sshFilename}'`);

        const vault = await tests.run(t, `vault create --name ${name} --size 10 --ssh ${ssh_name}`);

        const content = await ssh.execResource(t, vault, {
            privateKey: sshKeyPair.privateKey,
        }, 'uptime');
        t.true(content.includes('load average'), content);

        fs.unlinkSync(sshFilename);

        await tests.remove(`${type} credentials`, credentials);
        await tests.remove(t, 'vault', vault);
    });
});

tests.serial('vault ssh using password', ['vault'],  async t => {
    const name = tests.getName(t.title);
    const password = await tests.getToken();

    const vault = await tests.run(t, `vault create --name ${name} --password ${password} --size 10`);

    const content = await ssh.execResource(t, vault, {password}, 'uptime');
    t.true(content.includes('load average'));

    await tests.remove(t, 'vault', vault);
});
