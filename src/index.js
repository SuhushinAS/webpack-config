const {merge} = require('webpack-merge');
const asset = require('./configs/asset');
const base = require('./configs/base');
const html = require('./configs/html');
const optimization = require('./configs/optimization');
const script = require('./configs/script');
const style = require('./configs/style');
const svg = require('./configs/svg');

module.exports = {
    configs: {
        asset,
        base,
        html,
        optimization,
        script,
        style,
        svg,
    },
    merge,
};
