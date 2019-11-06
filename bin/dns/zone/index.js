'use strict';

const genericResource = require('bin/generic');
const defaults = require('bin/generic/defaults');

const resource = {
    name: 'zone',
    defaultQuery: '[].{id:id, name:name, type:flavour, dnsName:dnsName, state:state, tags:join(\',\',keys(tag || `{}`) ) }',
    plugins: defaults.plugins,
    url: () => 'dns/zone',
    title: 'DNS zone',
    commands: ['list', 'show', 'delete', 'tag'],
};

const category = genericResource(resource);

category.addChild(require('./import')(resource));
category.addChild(require('./export')(resource));

module.exports = category;
