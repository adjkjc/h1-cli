const fs = require('fs');
const path = require('path');

const show_directory = (dir, excludes = []) => fs.readdirSync(dir).filter(filename => !excludes.includes(filename)).map(x => `/${dir}/${x}`);

const services_category = {
    title: 'Usługi',
    children: show_directory('services', ['general.md', 'README.md'])
};

const platform_category = {
    title: 'Platforma',
    children: [
        '/platform/general.md',
        '/platform/user.md',
        '/platform/organization.md',
        '/platform/project.md',
        '/platform/resource.md',
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
        '/h1-cli/': show_directory('h1-cli', ['README.md', 'index.md', 'dist', 'docs']),
        '/about-us': [
            '/about-us/contact.md',
        ],
    };

    sidebar['/resource/'] = [
        '/resource/',
        platform_category,
        ...categories.map(category => ({
                title: category.name,
                children: show_directory(`resource/${category.slug}`, ['README.md', 'dist'])
            })),
        services_category,
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
    sidebar['/'] = [
        '/',
    ];
    return sidebar;
};

module.exports = config = {
    title: 'HyperOne',
    markdown: {
        config: md => {
            md.use(require('markdown-it-include'), path.join(__dirname, '../partials'));
            md.use(require('./guide-generator'));
            md.use(require('./cli-link'));
        }
    },
    themeConfig: {
        // logo: '/assets/logo.png',
        sidebar: getSidebar(),
        nav: [
            // {text: 'Pricing', link: '/pricing/'},
            {text: 'Oferta', link: '/resource/'},
            // {text: 'Poradniki', link: '/guide/'},
            // {text: 'Samouczki', link: '/tutorials/'},
            // {text: 'Blog', link: '/blog/'},
            {text: 'CLI', link: '/h1-cli/'},
            {text: 'Rejestracja', link: 'https://panel.hyperone.com/signup'},
            {text: 'Logowanie', link: 'https://panel.hyperone.com'},
            {text: 'Kontakt', link: '/about-us/contact.md'},
            {text: 'Współpraca', link: '/cooperation/'}
        ]
    }
};


if (require.main === module) {
    console.dir(config, {
        depth: null
    });
}

