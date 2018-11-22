const fs = require('fs');
const superagent = require('superagent');

const utils = require('./utils');

const PRICE_TAG_RE = /\[PRICE="(.+?)"\]/g;
const PERIOD_TAG_RE = /\[PERIOD="(.+?)"\]/g;

const getPrice = () => superagent
    .get('https://api.hyperone.com/v1/service')
    .then(resp => resp.body);

const replacer = (price, type) => (match, p1) => {
    const [resource, name] = p1.split(":");
    const services = price.filter(x => x.resource === resource && x.name === name);

    if (services.length === 0) {
        throw new Error(`Missing service (${p1}) for pricing.`);
    }

    if (services.length > 1) {
        throw new Error(`Ambiguous service (${p1}) for pricing.`);
    }

    if (type === "price") {
        return utils.display_price(services[0].billing.price.PLN)
    } else if (type === "period") {
        return utils.display_period(services[0].billing.period)
    } else {
        throw new Error(`Invalid type of replacer (${type}) in pricing (${p1}).`);
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