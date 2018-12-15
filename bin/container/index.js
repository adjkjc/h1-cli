'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'container',
    defaultQuery: '[].{id:_id,name:name,type:flavour,state:state,tags:join(\',\',keys(tag || `{}`) ) }',
    commands: ['show', 'delete', 'rename', 'list', 'history', 'tag', 'service', 'transfer'],
    plugins: genericDefaults.plugins,
    url: () => 'vm',
    // dirname: __dirname,
    earlyAdoptersOnly: true,
    title: 'container',
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('./ip')(resource));
category.addChild(require('./wait_boot')(resource));

module.exports = category;
