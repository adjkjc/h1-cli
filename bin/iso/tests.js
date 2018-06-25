'use strict';

const ava = require('ava');

require('../../scope/h1');
const tests = require('../../lib/tests');

const now = Date.now();

ava.test.serial('iso life cycle', tests.resourceLifeCycle('iso', `--name iso-test-${now} --source-url ${tests.iso_url}`));

ava.test.serial('iso rename', tests.resourceRename('iso', `--name iso-test-${now} --source-url ${tests.iso_url}`));

ava.test.todo('iso access');
