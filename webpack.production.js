const base = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	...base,
	mode: 'production',
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			'...',
		],
	},
}
