const fs = require('fs');
const path = require('path');

const show_directory = (dir, excludes = []) => fs.readdirSync(dir).filter(filename => !excludes.includes(filename)).map(x => `/${dir}/${x}`);

product_category = {
    title: 'Kategorie',
    children: show_directory('resource', ['general.md', 'README.md']).map(x => `${x}/`)
};

module.exports = config = {
    title: 'HyperOne',
    markdown: {
        config: md => {
            md.use(require('markdown-it-include'), path.join(__dirname, '../partials'));
        }
    },
    themeConfig: {
        sidebar: {
            '/h1-cli/': show_directory('h1-cli', ['README.md', 'index.md']),
            '/pricing/': [
                {
                    title: 'Pricing',
                    children: show_directory('pricing', ['README.md', 'dist'])
                },
            ],
            '/resource/compute/': [
                '/resource/general',
                product_category,
                {
                    title: 'Moc obliczeniowa',
                    children: show_directory('resource/compute', ['README.md', 'dist'])
                },
            ],
            '/resource/networking/': [
                '/resource/general',
                product_category,
                {
                    title: 'Łączność sieciowa',
                    children: show_directory('resource/networking', ['README.md', 'dist'])
                },
            ],
            '/resource/storage/': [
                '/resource/general',
                product_category,
                {
                    title: 'Przechowywanie danych',
                    children: show_directory('resource/storage', ['README.md', 'dist'])
                },
            ],
            '/resource/': [
                '/resource/',
                '/resource/general',
                product_category,
            ],
            '/': [
                '/',
            ],
        },
        nav: [
            {text: 'h1-cli', link: '/h1-cli/'},
            {text: 'Pricing', link: '/pricing/'},
            {text: 'Produkty', link: '/resource/'},
        ]
    }
};


if (require.main === module) {
    console.dir(config, {
        depth: null
    });
}

