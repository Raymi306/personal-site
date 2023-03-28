const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/script.js',
	resolve: {
		alias: {
			assets: path.resolve(__dirname, './assets'),
		},
	},
	plugins : [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: true,
		}),
		new HtmlWebpackPlugin({
			template: './src/about.html',
			minify: true,
			inject: false,
			filename: 'about.html',
		}),
		new HtmlWebpackPlugin({
			template: './src/resume.html',
			minify: true,
			inject: false,
			filename: 'resume.html',
		}),
		new HtmlWebpackPlugin({
			template: './src/tutorials/basic-dns.html',
			minify: true,
			inject: false,
			filename: 'tutorials/basic-dns.html',
		}),
        new HtmlWebpackPlugin({
			template: './src/tutorials/website-hosting.html',
			minify: true,
			inject: false,
			filename: 'tutorials/website-hosting.html',
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
};
