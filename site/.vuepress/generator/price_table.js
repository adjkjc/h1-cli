const fs = require('fs');
const superagent = require('superagent');
const utils = require('../utils');

const PRICE_TABLE_TAG = /\[PRICE_TABLE="(.+?)"\]/g;

const getPrice = () => superagent
    .get('https://api.hyperone.com/v1/service')
    .then(resp => resp.body);


const replacer = (services) => (match, p1) => {
    const reservations = services.filter(x => x.resource ==='reservation' && x.name.match(p1));

    const rows = reservations.map(reservation => ({
        name: reservation.name,
        price: utils.display_price(reservation.billing.price.PLN),
        period: utils.display_period(reservation.billing.period),
        priceResource: utils.display_price(reservation.data.price.PLN)
    }));
    const content = [];
    content.push('Wariant | Cena rezerwacji (PLN)| Okres | Cena zasobu (PLN)');
    content.push('------- | -------------------: | :---: | ----------------:');
    content.push(...rows.map(line => {
        return Object.values(line).map(x => x.toString()).join(" | ")
    }));
    return content.join("\n");
    // if (type === "price") {
    //     return services[0].billing.price.PLN.toFixed(4)
    // } else if (type === "period") {
    //     const [, value, name] = /^([0-9]+)([a-zA-Z]+)$/g.exec(services[0].billing.period);
    //     return `${value} ${display_name[name.toLowerCase()](value)}`;
    // } else {
    //     throw new Error(`Invalid type of replacer (${type}) in pricing (${p1}).`);
    // }
};

module.exports = (md) => {
    getPrice().then(price => {
        md.core.ruler.before('normalize', 'guide_generator', (state) => {
            state.src = state.src.replace(PRICE_TABLE_TAG, replacer(price));
        });
    });
};

const main = async () => {
    const price = await getPrice();
    const content = fs.readFileSync(process.argv[2], 'utf-8');
    console.log(content.replace(PRICE_TABLE_TAG, replacer(price)));
};

if (require.main === module) {
    main().catch(console.error);
}