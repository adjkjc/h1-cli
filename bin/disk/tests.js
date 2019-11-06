'use strict';
const fs = require('fs');
const path = require('path');
const os = require('os');
const fsPromises = require('fs').promises;

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');
const ssh = require('../../lib/ssh');

const now = Date.now();

['archive', 'ssd', 'volume'].forEach(type => {
    const createParams = `--name disk-test-${now} --type ${type} --size 100`;
    tests.serial(`disk life cycle ${type}`, ['disk'], tests.resourceLifeCycle('disk', {
        createParams: createParams,
        stateCreated: 'Detached',
        skipFqdn: true,
    }));
});

// TODO find a way to stop disk upload
ava.todo('disk resume');

tests.serial('disk add & download', ['disk'], async t => {
    const tmp_filename = path.join(os.tmpdir(), `cli-disk-${now}.vhdx`);
    const createParams = `--name disk-test-${now} --size 1 --type ssd`;
    const fresh_disk = await tests.run(t, `disk create ${createParams}`);
    t.true(fresh_disk.created);

    await tests.run(t, `disk download --disk ${fresh_disk.id} --destination-file '${tmp_filename}' --no-progress`);
    await fsPromises.access(tmp_filename);

    await tests.remove(t, 'disk', fresh_disk);

    const recreated_disk = await tests.run(t, `disk create ${createParams} --no-progress --source-file '${tmp_filename}'`);
    t.true(recreated_disk.created);
    await tests.remove(t, 'disk', recreated_disk);

    await fsPromises.unlink(tmp_filename);
    // TODO: Make the test that the re-downloaded disk is identical.
    // Take into account that the file will differ in metadata.
});

tests.serial('disk local upload', ['disk'], async t => {
    const filename = await tests.downloadFile(tests.disk_url);

    const disk = await tests.run(t, `disk create --name disk-upload-${now} --no-progress --type ssd --source-file '${filename}'`);
    t.true(disk.state === 'Detached');
    await tests.remove(t, 'disk', disk);
    fs.unlinkSync(filename);
});

tests.serial('disk resize', ['disk'], tests.resourceResizeCycle('disk', {
    createParams: `--name disk-test-${now} --type ssd`,
}));

['offline', 'online'].forEach(mode => {
    tests.serial(`disk create from other disk - ${mode}`, ['disk'], async t => {
        const osDisk = tests.getName('os-disk', t.title);
        const cloneDisk = tests.getName('disk-clone', t.title);
        const testFilePath = `~/${tests.getName('consistency-test')}.txt`;
        const sshKeyPair = await ssh.generateKey();
        const sshFilename = tests.getRandomFile(sshKeyPair.publicKey);

        const vm = await tests.run(t, `vm create --name ${tests.getName(t.title)} --os-disk ${osDisk},ssd,10 --type a1.nano --image debian --ssh-file ${sshFilename}`);
        const consistent_content = await tests.getToken();
        await ssh.execVm(t, vm, {privateKey: sshKeyPair.privateKey}, `echo '${consistent_content}' > ${testFilePath}; sync;`);
        if (mode === 'offline') {
            await tests.run(t, `vm stop  --vm ${vm.id}`);
        }
        await tests.run(t, `disk create --name ${cloneDisk} --source-disk ${osDisk}`);
        if (mode === 'online') {
            await tests.run(t, `vm stop  --vm ${vm.id}`);
        }
        await tests.run(t, `vm disk detach --disk ${osDisk} --vm ${vm.id}`);
        await tests.run(t, `vm disk attach --disk ${cloneDisk} --vm ${vm.id}`);
        await tests.run(t, `vm start --vm ${vm.id}`);
        const readable_content = await ssh.execVm(vm, {privateKey: sshKeyPair.privateKey},  `cat ${testFilePath}`);

        t.true(readable_content.trim() === consistent_content.trim());

        await tests.remove(t, 'vm', vm);
        await tests.remove(t, 'disk', cloneDisk);
        await tests.remove(t, 'disk', osDisk);
    });
});
