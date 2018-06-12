const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merger(common, {
	mode: 'production'
})
