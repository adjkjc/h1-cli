const fs = require('fs');

const show_directory = (dir, excludes = []) => fs.readdirSync(dir).filter(filename => !excludes.includes(filename));

module.exports = config = {
    title: 'HyperOne',
    themeConfig: {
        sidebar: {
            '/h1-cli/': show_directory('h1-cli', ['README.md', 'index.md']),
            '/pricing/': [
                {
                    title: 'Pricing',
                    children: show_directory('pricing', ['README.md', 'dist'])
                },
            ],
            '/': [
                '/',
                '/pricing/'
            ],

        },
        nav: [
            {text: 'h1-cli', link: '/h1-cli/'},
            {text: 'Pricing', link: '/pricing/'},
        ]
    }
};

if (require.main === module) {
    console.dir(config, {
        depth: null
    });
}

