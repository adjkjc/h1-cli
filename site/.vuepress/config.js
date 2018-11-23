const fs = require('fs');
const path = require('path');

const show_directory = (dir, excludes = []) => fs.readdirSync(dir).filter(filename => !excludes.includes(filename)).map(x => `/${dir}/${x}`);

const services_category = {
    title: 'Usługi',
    children: show_directory('services', ['general.md', 'README.md'])
};

const top_platform = ['resource.md', 'payments.md', 'organization.md', 'project.md', 'general.md', 'user.md',  'terms-of-services.md', 'privacy-policy.md'];

const platform_category = {
    title: 'O platformie',
    children: [
        ...top_platform.map(fn => `/platform/${fn}`),
        ...show_directory('platform', top_platform)
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
    sidebar['/blog/'] = [
        {
            title: "Wpisy",
            children: show_directory(`blog/posts`),
        },
    ];
    sidebar['/api/'] = [
        '/api/'
    ];

    sidebar['/tutorials/'] = [
        {
            title: 'Dysk',
            children: show_directory(`tutorials/ip-address`)
        },
        {
            title: 'DNS',
            children: show_directory(`tutorials/dns`)
        },
        {
            title: 'Zapora sieciowa',
            children: show_directory(`tutorials/virtual-machine`)
        },
        {
            title: 'Adres IP',
            children: show_directory(`tutorials/ip-address`)
        },
        {
            title: 'Adapter sieciowy',
            children: show_directory(`tutorials/netadp`)
        },
        {
            title: 'Brama sieciowa',
            children: show_directory(`tutorials/netgw`)
        },
        {
            title: 'Sieć',
            children: show_directory(`tutorials/network`)
        },
        {
            title: 'Dziennik',
            children: show_directory(`tutorials/log-archive`)
        },
        {
            title: 'Vault',
            children: show_directory(`tutorials/vault`)
        },
        {
            title: 'Wirtualna maszyna',
            children: show_directory(`tutorials/virtual-machine`)
        }
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
            md.use(require('./generator').price_table);
            md.use(require('./cli-link'));
            md.use(require('./price-tag'));
        }
    },
    plugins: [
        '@vuepress/google-analytics'
    ],
    ga: 'UA-127062275-1',
    themeConfig: {
        debug: !(process.env.NODE_ENV === 'production'),
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
            {text: 'Blog', link: '/blog/'},
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

