const mix = require('laravel-mix');
const zlib = require("zlib");
const CompressionPlugin = require("compression-webpack-plugin");

mix.sass('static/scss/app.scss', 'css')
	.setPublicPath('dist')
	.browserSync( {
		proxy:'localhost:10003',//replace with local proxy. recommended download https://localwp.com/ for local server mgmt
		files:['static', 'templates', 'dist']
	})
	.autoload({
	    jquery: ['$', 'jQuery']
	})
	.js('static/js/app.js', 'js')
	.webpackConfig({
		plugins: [
			new CompressionPlugin({
				test: /\.js(\?.*)?$/i,
		}),
		],
	})
	.copyDirectory('static/svg', 'dist/svg')
