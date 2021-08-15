const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/script.js',
	resolve: {
		alias: {
			assets: path.resolve(__dirname, './assets'),
		},
	},
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	plugins : [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: true,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
	output: {
		clean: true,
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.woff2$/i,
				type: 'asset/resource',
			},
		],
	},
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
			'...',
		],
	},
};
