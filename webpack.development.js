const base = require('./webpack.common.js');

module.exports = {
	...base,
	mode: 'development',
	devServer: {
		contentBase: './dist',
		hot: true,
	},
};
