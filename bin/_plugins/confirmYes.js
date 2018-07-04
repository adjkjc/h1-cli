'use strict';

const options = {
    yes: {
        description: 'confirm yes',
        type: 'boolean',
    },
};

module.exports = {
    options: options,
    onBeforeConfigure: context => Object.entries(options).forEach(([k, v]) => context.node.addOption(k, v)),
};
