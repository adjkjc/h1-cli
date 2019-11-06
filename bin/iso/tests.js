'use strict';

const fs = require('fs');

require('../../scope/h1');
const tests = require('../../lib/tests');

const createParams = `--source-url ${tests.iso_url}`;

tests.serial('iso life cycle', ['iso'], tests.resourceLifeCycle('iso', {
    createParams: `--name ${tests.getName('iso-life-cycle')}  ${createParams}`,
    stateCreated: 'Online',
    skipFqdn: true,
}));

for (const [name, project] of Object.entries(tests.access_test_case)) {
    tests.serial(`iso access: ${name}`, ['iso'], tests.resourceAccessCycle('iso', project, `--name ${tests.getName('iso-access')}  ${createParams}`));
}


tests.serial('iso local upload', ['iso'], async t => {
    const filename = await tests.downloadFile(tests.iso_url);
    await tests.resourceLifeCycle('iso', {
        stateCreated: 'Online',
        createParams: `--name ${tests.getName(t.title)} --source-file ${filename}`,
        skipFqdn: true,
    })(t);
    fs.unlinkSync(filename);
});

tests.serial('iso use in vm local uploaded', ['iso'], async t => {
    const filename = await tests.downloadFile(tests.iso_url);

    const iso = await tests.run(t, `iso create --name ${tests.getName(t.title)} --source-file ${filename}`);
    const secret = await tests.getToken();

    const vm = await tests.run(t, `vm create --name ${tests.getName(t.title)} --type a1.nano --password ${secret} --no-start`);
    await tests.run(t, `vm dvd insert --vm ${vm.id} --iso ${iso.id}`);

    await tests.run(t, `vm start --vm ${vm.id}`);
    const vm_started = await tests.run(t, `vm show --vm ${vm.id}`);

    t.true(vm_started.state === 'Running');
    await tests.run(t, `vm dvd eject --yes --vm ${vm.id}`);

    await tests.remove(t, 'iso', iso);
    await tests.remove(t, 'vm', vm);
    fs.unlinkSync(filename);
});
