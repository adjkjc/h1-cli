const display_name = {
    'y': value => value >= 5 ? 'lat': (value > 2 ? 'lata' : 'rok'),
    'm': value => value >= 5 ? 'miesięcy': (value > 2 ? 'miesiące' : 'miesiąc'),
    'h': value => value >= 5 ? 'godzin': (value > 2 ? 'godziny' : 'godzina')
};

const display_period = (period) => {
    const [, value, name] = /^([0-9]+)([a-zA-Z]+)$/g.exec(period);
    return `${value} ${display_name[name.toLowerCase()](value)}`;
};

const display_price =(price) => {
    return price.toFixed(4)
};

module.exports = {
    display_period,
    display_price
};

