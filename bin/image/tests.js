'use strict';
const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const name = `image-test-${now}`;

const get_vm = async () => {
    const image = await tests.getImage();
    const password = await tests.getToken();
    return await tests.run(`vm create --name image-test-${now} --password ${password} --os-disk os-disk-0,ssd,10 --type a1.nano --image ${image._id}`);
};

ava.test.serial('image rename', async t => {
    const vm = await get_vm();

    await tests.resourceRename('image', {
        createParams: `--vm ${vm._id} --name ${name}`,
    })(t);

    await tests.remove('vm', vm);
});

ava.test.serial('image disk list', async t => {
    const vm = await get_vm();
    const image = await tests.run(`image create --vm ${vm._id} --name ${name}`);

    const list = await tests.run(`image disk --image ${image._id}`);
    t.true(list.some(d => d.type === 'ssd' && d.size === 10));

    await tests.remove('vm', vm);
    await tests.remove('image', image);
});

ava.test.todo('image access');
