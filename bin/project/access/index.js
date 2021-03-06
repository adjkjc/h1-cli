'use strict';

const Cli = require('lib/cli');

module.exports = (resource) => {

    const category = Cli.createCategory('access', {
        description: `Manage your ${resource.title} access rights`,
        defaultQuery: '[].{id:id,role:role}',
        url: args => `${resource.url(args)}/accessrights`,
        params: resource.params,
    });

    category.addChild(require('./grant')(resource));
    category.addChild(require('./revoke')(resource));

    category.addChild(require('bin/generic/list')(resource));

    return category;
};
