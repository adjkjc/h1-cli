const fs = require('fs');
const path = require('path');

const show_directory = (dir, excludes = []) => fs.readdirSync(dir).filter(filename => !excludes.includes(filename)).map(x => `/${dir}/${x}`);

product_category = {
    title: 'Chmura publiczna',
    children: [
        '/resource/general',
        ...show_directory('resource', ['general.md', 'README.md']).map(x => `${x}/`)
    ]
};

services_category = {
    title: 'Usługi',
    children: show_directory('services', ['general.md', 'README.md'])
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
        sidebar: {
            '/h1-cli/': show_directory('h1-cli', ['README.md', 'index.md', 'dist', 'docs']),
            // '/pricing/': [
            //     {
            //         title: 'Pricing',
            //         children: show_directory('pricing', ['README.md', 'dist'])
            //     },
            // ],
            '/about-us': [
                '/about-us/contact.md',
            ],
            '/resource/compute/': [
                '/resource/',
                product_category,
                {
                    title: 'Moc obliczeniowa',
                    children: show_directory('resource/compute', ['README.md', 'dist'])
                },
            ],
            '/resource/networking/': [
                '/resource/',
                product_category,
                {
                    title: 'Łączność sieciowa',
                    children: show_directory('resource/networking', ['README.md', 'dist'])
                },
            ],
            '/resource/storage/': [
                '/resource/',
                product_category,
                {
                    title: 'Przechowywanie danych',
                    children: show_directory('resource/storage', ['README.md', 'dist'])
                },
            ],
            // '/resource/others/': [
            //     '/resource/general',
            //     product_category,
            //     {
            //         title: 'Pozostałe',
            //         children: show_directory('resource/others', ['README.md', 'dist'])
            //     },
            // ],
            '/resource/': [
                '/resource/',
                product_category,
                services_category,
            ],
            '/services/': [
                '/resource/',
                services_category,
            ],
            '/': [
                '/',
            ],
        },
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

        ]
    }
};


if (require.main === module) {
    console.dir(config, {
        depth: null
    });
}

