'use strict';

const Cli = require('structured-cli');
const tabula = require('tabula');

const params = {
    id: {
        description: 'Resource identifier'
      , type: 'string'
      , required: true
    }
};

const logMetrics = (type, resource, ws, callback) => ws.on('message', message => {
    const metrics = { };

    message = JSON.parse(message);
    message.forEach(({target, datapoints}) => {
        const metric = target.split('.').pop();
        metrics[metric] = datapoints[0];
    });

    callback(metrics);
});

const combineMetrics = async (api, type, resource, all) => {
    const ws = await api.wsMetrics(`${type}/${resource._id}/metrics`);
    all[type] = all[type] || [];

    const obj = {
        resource: resource
    };

    logMetrics(type, resource, ws, metrics => obj.metrics = metrics);

    all[type].push(obj);
};

module.exports = resource => Cli.createCommand('metrics', {
    description: 'Get Live Metrics'
  , plugins: resource.plugins
  , params: params
  , options: resource.options
  , handler: async args => {

        const vm = args.helpers.api.get(`${resource.url(args)}/${args.id}`);
        const hdds = args.helpers.api.get(`${resource.url(args)}/${args.id}/hdd`);
        const netadps = args.helpers.api.get(`${resource.url(args)}/${args.id}/netadp`);

        const all = {};

        await combineMetrics(args.helpers.api, 'vm', await vm, all);

        for (const netadp of await netadps) {
            await combineMetrics(args.helpers.api, 'netadp', netadp, all);
        }

        for (const hdd of await hdds) {
            await combineMetrics(args.helpers.api, 'disk', hdd.disk, all);
        }

        return new Promise(() => setInterval(() => {

            console.log('\x1Bc');
            console.log(new Date());
            Object.entries(all).forEach(([ type, resources ]) => {
                resources = resources.filter(r => r.metrics);

                console.log(`\n\n${type}\n`);

                if (resources.length === 0) {
                    return;
                }

                const columns = [
                    { name: 'Name', lookup: 'name' }
                  , ...Object
                        .keys(resources[0].metrics)
                        .map(name => ({ name: name, lookup: name, align: 'right' }))
                ];

                tabula(
                    resources.map(data => Object.assign({ name: data.resource.name }, data.metrics))
                  , { columns: columns }
                );
            });

        }, 1000));
    }
});
