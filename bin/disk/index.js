'use strict';

const genericDefaults = require('bin/generic/defaults');
const genericResource = require('bin/generic');

const resource = {
    name: 'disk'
  , defaultQuery: '[].{id:_id,name:name,type:type,size:size,state:state,processing:processing}'
  , url: () => 'disk'
  , plugins: genericDefaults.plugins
  , extraCommands: ['rename']
};

const category = genericResource(resource);

category.addChild(require('./create')(resource));
category.addChild(require('bin/generic/resume')(resource));
category.addChild(require('bin/generic/resize')(resource));
category.addChild(require('./download')(resource));

module.exports = category;
