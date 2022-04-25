const base = require('./webpack.common.js');

module.exports = {
	...base,
	mode: 'development',
	devServer: {
		static: './dist',
		hot: true,
	},
};
