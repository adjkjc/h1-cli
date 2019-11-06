'use strict';
const ava = require('ava');
const {URL} = require('url');
const Imap = require('imap');

require('../../scope/h1');
const tests = require('../../lib/tests');
const config = require('lib/config');

const active_project = config.get('profile.project.id');

tests.serial('project life cycle', ['project'],  async t => {
    const project = await tests.run(t, `project show --project ${active_project}`);
    const active_organisation = project.organisation;
    const createParams = `--name ${tests.getName('project-life-cycle')} --organisation ${active_organisation}`;

    await tests.resourceLifeCycle('project', {
        createParams: createParams,
        stateCreated: 'Limited',
        skipHistoryCreated: true,
        skipService: true,
        skipTag: true,
        skipFqdn: true,
        skipTransfer: true,
    })(t);
});

tests.serial('project show', ['project'],  async t => {
    const project = await tests.run(t, `project show --project ${active_project}`);
    t.true(project.id === active_project);
});

const getOrganisationForProject = async (t, projectId) => (await tests.run(t, `project show --project '${projectId}'`)).organisation;

ava.skip('project transfer', tests.requireSlaveProject(async (t, projects) => {
    let active_organisation, slave_organisation;
    if (Math.floor(Math.random() * 2) === 0) {
        active_organisation = await getOrganisationForProject(t, active_project);
        slave_organisation = await getOrganisationForProject(t, projects.slave);
    } else {
        active_organisation = await getOrganisationForProject(t, projects.slave);
        slave_organisation = await getOrganisationForProject(t, active_project);
    }

    const project = await tests.run(t, `project create --name ${tests.getName('project-transfer')} --organisation ${active_organisation}`);

    await tests.run(t, `project transfer --project ${project.id} --organisation ${slave_organisation}`);
    const transfer_list = await tests.run(t, `organisation transfer list --organisation ${slave_organisation}`);
    t.true(transfer_list.some(x => x.id === project.id));

    const payment_list = await tests.run(t, `organisation payment list --organisation ${slave_organisation}`);
    const free_payment = payment_list.find(x => !x.project);
    t.true(!!free_payment, `No free payment on organization ${slave_organisation}`);
    await tests.run(t, `organisation transfer accept --organisation ${slave_organisation} --project ${project.id} --payment ${free_payment.id}`);
    const transfered_project = await tests.run(t, `project show --project ${project.id}`);
    t.true(transfered_project.organisation === slave_organisation);

    await tests.remove(t, 'project', project);
}));

tests.serial('project rename', ['project'],  async t => {
    const name = tests.getName('Project for monitoring public API');

    await tests.run(t, `project rename --project '${active_project}' --new-name '${name}'`);

    const project = await tests.run(t, `project show --project ${active_project}`);
    t.true(project.id === active_project);
    t.true(project.name === name);
});

tests.serial('project limits', ['project'],  async t => {
    const limits = await tests.run('project limit');
    t.true(limits.some(d => d.resource === 'vm' && d.limit === 'count'));
});

tests.serial('project list', ['project'],  async t => {
    const list = await tests.run('project list');
    t.true(list.length > 0);
});

tests.serial('project access of user cycle', ['project'],  tests.resourceAccessOfUser('project', `--project ${active_project}`));

tests.serial('project token life cycle', ['project'],  async t => {
    const commonParams = `--project '${active_project}'`;
    const token = await tests.run(t, `project token add ${commonParams} --name ${tests.getName(t.title)}`);

    await tests.subresourceLifeCycle({
        resourceType: 'project',
        resourceId: active_project,
        type: 'token',
        skipRename: false,
    })(t);

    await tests.remove(t, 'project token', token, {
        deleteParams: commonParams,
    });
});

tests.serial('project notification credits edit', ['project'],  async t => {
    const commonParams = `--project ${active_project}`;
    const limit = Math.round(Math.random() * 1000000);

    // Verify randomness of limit
    const limits = await tests.run(t, `project notification credits list ${commonParams}`);
    t.true(!limits.includes(limit));

    // Add limit
    await tests.run(t, `project notification credits add ${commonParams} --limit ${limit}`);

    const new_limits = await tests.run(t, `project notification credits list ${commonParams}`);
    t.true(new_limits.includes(limit));

    // Delete limit (cleanup)
    await tests.run(t, `project notification credits delete ${commonParams} --limit ${limit}`);

    const newest_limits = await tests.run(t, `project notification credits list ${commonParams}`);
    t.true(!newest_limits.includes(limit));
});

const getImapOptions = imapUrl => {
    const parsed_url = new URL(imapUrl);
    return {
        user: parsed_url.username ?
            decodeURIComponent(parsed_url.username) :
            undefined,
        password: parsed_url.password ?
            decodeURIComponent(parsed_url.password) :
            undefined,
        host: parsed_url.hostname,
        port: parsed_url.protocol === 'imaps:' ?
            parsed_url.port || 993 :
            parsed_url.port || 143,
        tls: parsed_url.protocol === 'imaps:',
    };
};

const getLatestImapMessageDate = (query, options) => new Promise((resolve, reject) => {
    const imap = new Imap(options);
    imap.once('ready', () => {
        imap.openBox('INBOX', true, err => {
            if (err) return reject(err);
            const dates = [];
            console.log(new Date().toISOString(), 'Query IMAP', {query});
            imap.search(query, function (err, results) {
                if (err) return reject(err);
                const f = imap.fetch(results, {
                    bodies: ['HEADER.FIELDS (DATE)'],
                });

                f.on('message', msg => {
                    msg.once('body', stream => {
                        let buffer = '';
                        stream.on('data', function (chunk) {
                            buffer += chunk.toString('utf8');
                        });
                        stream.once('end', function () {
                            const date = new Date(Imap.parseHeader(buffer).date[0]);
                            dates.push(date);
                        });
                    });

                });

                f.once('error', reject);
                f.once('end', function () {
                    imap.end();
                    if (!dates) {
                        return reject('No message received');
                    }
                    return resolve(new Date(Math.max.apply(null, dates)));
                });
            });
        });
    });
    imap.once('error', reject);
    imap.connect();
});

const dateDiffMinutes = (date1, date2) => {
    return Math.abs((date1 - date2) / 1000 / 60 / 60);
};


tests.serial('project notification credits integration test', ['project'],  async t => {
    // The total execution time of test should not exceed 300 seconds (5 minutes).
    // Now the maximum timeout is 20 * 1 + 15 * 10 = 20 + 150 = 170
    // Otherwise an following error will occur:
    // Exited because no new tests completed within the last 300000ms of inactivity
    const commonParams = `--project ${active_project}`;
    const project = await tests.run(t, `project show ${commonParams}`);

    const credits = project.billing.credits;
    const limit = credits - 0.01;

    await tests.run(t, `project notification credits add ${commonParams} --limit ${limit}`);
    try {
        await tests.run(t, `reservation create --name ${tests.getName(t.title)} --type '_dev.pico, 1 day'`);
        let charged = false;
        const charge_timeout = 60;
        for (let i = 0; i < charge_timeout; i++) {
            await tests.delay(1000); // to apply charges from the queue
            const charged_project = await tests.run(t, `project show ${commonParams}`);
            const charged_credits = charged_project.billing.credits;
            if (credits !== charged_credits) {
                console.log(`Hit limit ${limit} after charged from ${credits} to ${charged_credits}`);
                charged = true;
                break;
            }
        }
        t.true(charged, `Timeout ${charge_timeout} seconds to apply charges.`);

        const month = new Date().toLocaleString('en-us', {month: 'long'});
        const day = new Date().getDay();
        const year = new Date().getMonth();
        const query = ['ALL',
            ['SINCE', `${month} ${day}, ${year}`],
            ['SUBJECT', 'Osiągnięty próg środków'],
        ];

        const options = getImapOptions(process.env.IMAP_URL);

        let received_mail = false;
        for (let i = 0; i < 10; i++) {
            await tests.delay(15 * 1000); // to delivery messages to mailbox
            const latest_date = await getLatestImapMessageDate(query, options);
            if (dateDiffMinutes(new Date(), new Date(latest_date)) < 5) {
                received_mail = true;
                break;
            }
        }
        t.true(received_mail, `Timeout ${15 * 10} seconds to receive mail.`);
    } finally {
        await tests.run(t, `project notification credits delete ${commonParams} --limit ${limit}`);
    }
});

tests.serial('project token access life cycle', ['project'],  async t => {
    const token = await tests.run(t, `project token add --project ${active_project} --name ${tests.getName(t.title)}`);
    const access = await tests.run(t, `project token access add --project ${active_project} --method POST --path 'vault/' --token ${token.id}`);

    await tests.subresourceLifeCycle({
        resourceId: token.id,
        resourceType: 'project token',
        type: 'access',
        skipRename: true,
        commonParams: `--project ${active_project}`,
    })(t);

    await tests.remove(t, 'project token access', access, {
        deleteParams: `--project ${active_project} --token ${token.id}`,
    });

    await tests.remove(t, 'project token', token);
});

tests.serial('project token env', ['project'],  async t => {
    const token = await tests.run(t, `project token add --project ${active_project} --name ${tests.getName(t.title)}`);
    await tests.run(t, `project token access add --project ${active_project} --method ALL --path '/' --token ${token.id}`);

    const content = await tests.run(t, `project token env --project ${active_project} --token ${token.id} `);
    t.true(content.includes('_PROJECT'));
    t.true(content.includes('_ACCESS_TOKEN_ID'));
    t.true(content.includes('_ACCESS_TOKEN_SECRET'));
    await tests.envOutput(t, content);

    await tests.remove(t, 'project token', token);
});

ava.serial('token was used if environment variable set', async t => {
    const token = await tests.run(t, `project token add --name ${tests.getName('token-validates')} --project ${active_project}`);

    // Clean up default access
    const access_list = await tests.run(t, `project token access list --project ${active_project} --token ${token.id}`);
    for (const access of access_list) {
        await tests.run(t, `project token access delete --token ${token.id} --access ${access.id} --yes`);
    }

    await tests.run(t, `project token access add --token ${token.id} --method GET --path '/vm'`);

    await t.throwsAsync(() => tests.run({
        cmd: 'disk list',
        env: {
            HYPERONE_ACCESS_TOKEN_SECRET: token.id,
        },
    }));

    await tests.remove(t, 'project token', token, {
        deleteParams: `--project ${active_project}`,
    });
});

// tests.serial('project access rule life cycle', ['project'],  async t => {
//     await tests.accessRuleLifeCycle(t, 'project access rule', `--project ${active_project}`);
// });

tests.serial('project select', ['project'],  tests.requireSlaveProject(async (t, projects) => {
    const new_ip = await tests.run('ip create');
    await tests.run(t, `project select --project '${projects.slave}'`);
    const ip_list = await tests.run('ip list');
    await tests.run(t, `project select --project '${projects.master}'`);
    t.true(!ip_list.some(ip => ip.id === new_ip.id));
    await tests.remove(t, 'ip', new_ip);
}));

tests.serial('project credentials life cycle', ['project'],  tests.credentialsLifeCycle('project credentials', {
    createParams: `--project ${active_project}`,
    listParams: `--project ${active_project}`,
}));

ava.todo('project logging');
