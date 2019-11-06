'use strict';

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

const name = `volume-test-${now}`;
const createParams = `--name ${name} --type volume --size 10`;

tests.serial('volume life cycle', ['volume'], tests.resourceLifeCycle('volume', {
    createParams: createParams,
    stateCreated: 'Detached',
    skipFqdn: true,
    skipTransfer: true,
}));
