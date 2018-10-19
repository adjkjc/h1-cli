const fs = require('fs');
const path = require('path');

const show_directory = (dir, excludes = []) => fs.readdirSync(dir).filter(filename => !excludes.includes(filename)).map(x => `/${dir}/${x}`);

const services_category = {
    title: 'Usługi',
    children: show_directory('services', ['general.md', 'README.md'])
};

const platform_category = {
    title: 'O platformie',
    children: [
        '/platform/general.md',
        '/platform/user.md',
        '/platform/organization.md',
        '/platform/project.md',
        '/platform/resource.md',
        '/platform/terms-of-services.md',
        '/platform/privacy-policy.md'
    ]
};

const categories = [
    {
        name: 'Moc obliczeniowa',
        slug: 'compute'
    },
    {
        name: 'Łączność sieciowa',
        slug: 'networking'
    },
    {
        name: 'Przechowywanie danych',
        slug: 'storage'
    }
];

const getSidebar = () => {
    const sidebar = {
        '/h1-cli/': show_directory('h1-cli', ['README.md', 'index.md', 'dist', 'docs', 'package.json']),
        '/about-us': [
            '/about-us/contact.md',
        ],
    };

    sidebar['/resource/'] = [
        '/resource/',
        ...categories.map(category => ({
            title: category.name,
            children: show_directory(`resource/${category.slug}`, ['README.md', 'dist'])
        })),
        services_category,
        platform_category,
    ];
    sidebar['/platform/'] = sidebar['/resource/'];
    sidebar['/services/'] = sidebar['/resource/'];
    sidebar['/guide/'] = sidebar['/resource/'];
    sidebar['/cooperation/'] = [
        '/cooperation/internship.md',
        {
            title: "Oferty pracy",
            children: show_directory(`cooperation/jobs`),
        }
    ];
    sidebar['/tutorials/'] = [
        {
            title: 'Dysk',
            children: show_directory(`tutorials/ip-address`)
        },
        {
            title: 'Vault',
            children: show_directory(`tutorials/vault`)
        },
        {
            title: 'Sieć',
            children: show_directory(`tutorials/network`)
        },
        {
            title: 'Adres IP',
            children: show_directory(`tutorials/ip-address`)
        },
        {
            title: 'Dziennik',
            children: show_directory(`tutorials/log-archive`)
        },
        {
            title: 'Wirtualna maszyna',
            children: show_directory(`tutorials/virtual-machine`)
        },
    ].sort((a, b) => a.title > b.title);

    sidebar['/'] = [
        '/',
    ];
    return sidebar;
};


module.exports = {
    title: 'HyperOne',
    markdown: {
        config: md => {
            md.use(require('markdown-it-include'), path.join(__dirname, '../partials'));
            md.use(require('./condition'), require('./../h1-cli/package.json').version);
            md.use(require('./generator').guide);
            md.use(require('./generator').tutorial);
            md.use(require('./cli-link'));
            md.use(require('./price-tag'));
        }
    },
    plugins: [
        '@vuepress/google-analytics'
    ],
    ga: 'UA-127062275-1',
    themeConfig: {
        // logo: '/assets/logo.png',
        sidebar: getSidebar(),
        nav: [
            // {text: 'Pricing', link: '/pricing/'},
            {text: 'Oferta', link: '/resource/'},
            // {text: 'Poradniki', link: '/guide/'},
            {text: 'Samouczki', link: '/tutorials/'},
            // {text: 'Blog', link: '/blog/'},
            {text: 'CLI', link: '/h1-cli/'},
            {
                text: 'Rejestracja',
                link: 'https://panel.hyperone.com/signup',
                skipOutgoingIcon: true
            },
            {
                text: 'Logowanie',
                link: 'https://panel.hyperone.com',
                skipOutgoingIcon: true
            },
            {text: 'Kontakt', link: '/about-us/contact.md'},
            {text: 'Współpraca', link: '/cooperation/'},
            {
                icon: 'fab fa-twitter',
                link: 'https://twitter.com/hyperone_com',
                skipOutgoingIcon: true
            }
        ]
    }
};


if (require.main === module) {
    console.dir(module.exports, {
        depth: null
    });
}

