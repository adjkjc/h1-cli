const fs = require('fs');
const superagent = require('superagent');

const PRICE_TAG_RE = /\[PRICE="(.+?)"\]/g;
const PERIOD_TAG_RE = /\[PERIOD="(.+?)"\]/g;

const getPrice = () => superagent
    .get('https://api.hyperone.com/v1/service')
    .then(resp => resp.body);

const display_name = {
    'y': value => value >= 5 ? 'lat': (value > 2 ? 'lata' : 'rok'),
    'm': value => value >= 5 ? 'miesięcy': (value > 2 ? 'miesiące' : 'miesiąc'),
    'h': value => value >= 5 ? 'godzin': (value > 2 ? 'godziny' : 'godzina')
};

const replacer = (price, type) => (match, p1) => {
    const [resource, name] = p1.split(":");
    const service = price.filter(x => x.resource === resource && x.name === name);

    if (!service) {
        throw new Error(`Missing service (${p1}) for pricing.`);
    }
    if (service.length > 1) {
        throw new Error(`Ambiguous service (${p1}) for pricing.`);
    }

    if (type === "price") {
        return service[0].billing.price.PLN.toFixed(4)
    } else if (type === "period") {
        const [, value, name] = /^([0-9]+)([a-zA-Z]+)$/g.exec(service[0].billing.period);
        return `${value} ${display_name[name.toLowerCase()](value)}`;
    } else {
        throw new Error(`Invalid type of replacer in pricing.`);
    }
};

module.exports = (md) => {
    getPrice().then(price => {
        md.core.ruler.before('normalize', 'guide_generator', (state) => {
            state.src = state.src.replace(PRICE_TAG_RE, replacer(price, 'price'));
            state.src = state.src.replace(PERIOD_TAG_RE, replacer(price, 'period'));
        });
    });
};

const main = async () => {
    const price = await getPrice();
    const content = fs.readFileSync(process.argv[2], 'utf-8');
    content.replace(PRICE_TAG_RE, replacer(price));
};

if (require.main === module) {
    main().catch(console.error);
}