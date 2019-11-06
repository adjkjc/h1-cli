'use strict';
const {Client} = require('pg');

require('../../scope/h1');
const tests = require('../../lib/tests');
const mysql = require('mysql2/promise');

const mysqlQuery = async (database, password, query) => {
    console.log(new Date(), `Execute query '${query}' on database '${database.fqdn}'`);
    const connection = await mysql.createConnection({
        host: database.fqdn,
        user: database.id,
        password: password,
        database: database.id,
    });
    try {
        const [results, fields] = await connection.execute(query);
        return {results, fields};
    } finally {
        await connection.end();
    }
};

const pgQuery = async (database, password, query) => {
    console.log(new Date(), `Execute query '${query}' on database '${database.fqdn}'`);
    const client = new Client({
        user: database.id,
        password: password,
        database: database.id,
        host: database.fqdn,
    });
    await client.connect();
    try {
        const {rows: results, fields} = await client.query(query);
        return {results, fields};
    } finally {
        await client.end();
    }
};

const query = {
    'postgres:11': pgQuery,
    'mysql:5.7': mysqlQuery,
};

['postgres:11', 'mysql:5.7'].forEach(flavour => {
    tests.serial(`database life cycle - ${flavour}`, ['database'],  tests.resourceLifeCycle('database', {
        createParams: `--name ${tests.getName('database-life-cycle')} --type ${flavour} `,
        stateCreated: 'Running',
    }));

    tests.serial(`database stop & start - ${flavour}`, ['database'],  async t => {
        const password = await tests.getToken();
        const database = await tests.run(t, `database create --name ${tests.getName(t.title)} --type ${flavour}`);
        await tests.run(t, `database credential password add --name ${tests.getName(t.title)} --database ${database.id}  --password ${password}`);
        await query[flavour](database, password, 'SELECT 1');
        await tests.run(t, `database stop --database ${database.id}`);
        await t.throwsAsync(() => query[flavour](database, password, 'SELECT 1'));
        const stopped_database = await tests.run(t, `database show --database ${database.id}`);
        t.true(stopped_database.state === 'Off');
        await tests.run(t, `database start --database ${database.id}`);
        await query[flavour](database, password, 'SELECT 1');
        const started_database = await tests.run(t, `database show --database ${database.id}`);
        t.true(started_database.state === 'Running');
        await tests.remove(t, 'database', database);
    });
});

['mysql:5.7'].forEach(flavour => {
    tests.serial(`database credentials password life cycle - ${flavour}`, ['database'],  async t => {
        const database = await tests.run(t, `database create --name ${tests.getName(t.title)} --type ${flavour}`);

        await tests.passwordLifeCycle(t, 'database', database);

        await tests.remove(t, 'database', database);
    });
    tests.serial(`database reachable - ${flavour}`, ['database'],  async t => {
        const password = await tests.getToken();
        const database = await tests.run(t, `database create --name ${tests.getName(t.title)} --type ${flavour}`);
        await tests.run(t, `database credential password add --name ${tests.getName(t.title)} --database ${database.id}  --password ${password}`);

        try {
            const {results, fields} = await mysqlQuery(database, password, 'SELECT NOW()');
            t.true(!!results);
            t.true(!!fields);

            const {results: results_self_ssl, fields: fields_self_ssl} = await mysqlQuery(database, password, 'SELECT NOW()', {
                ssl: {rejectUnauthorized: false},
            });
            t.true(!!results_self_ssl);
            t.true(!!fields_self_ssl);

            const {results: results_ssl, fields: fields_ssl} = await mysqlQuery(database, password, 'SELECT NOW()', {
                ssl: {},
            });
            t.true(!!results_ssl);
            t.true(!!fields_ssl);
        } finally {
            await tests.remove(t, 'database', database);
        }
    });
});

['postgres:11'].forEach(flavour => {
    tests.serial(`database reachable - ${flavour}`, ['database'],  async t => {
        const password = await tests.getToken();
        const database = await tests.run(t, `database create --name ${tests.getName(t.title)} --type ${flavour}`);
        await tests.run(t, `database credential password add --name ${tests.getName(t.title)} --database ${database.id}  --password ${password}`);
        try {
            const {results, fields} = await pgQuery(database, password, 'SELECT NOW()');
            t.true(!!results);
            t.true(!!fields);
        } finally {
            await tests.remove(t, 'database', database);
        }
    });
});
