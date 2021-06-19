const mix = require('laravel-mix');
const zlib = require("zlib");
const CompressionPlugin = require("compression-webpack-plugin");

mix.sass('static/scss/app.scss', 'css')
	.setPublicPath('dist')
	.browserSync( {
		proxy:'http://sentant.local',//replace with local proxy. recommended download https://localwp.com/ for local server mgmt
		files:['static', 'templates', 'dist']
	})
	.autoload({
	    jquery: ['$', 'jQuery']
	})
	.js('static/js/app.js', 'js')
	.webpackConfig({
		optimization: {
		minimize: false
		},
		plugins: [
			new CompressionPlugin({
				filename: "[path][base].br",
				algorithm: "brotliCompress",
				test: /\.(js|css|html|svg)$/,
				compressionOptions: {
					params: {
						[zlib.constants.BROTLI_PARAM_QUALITY]: 11,
					},
				},
				threshold: 10240,
				minRatio: 0.8,
				deleteOriginalAssets: false,
			}),
		],
	})
	.copyDirectory('static/svg', 'dist/svg')//incl static assets if needed. extends compile time
	// .copyDirectory('static/lottie', 'dist/lottie')
	// .copyDirectory('static/particles', 'dist/particles')
	// .copyDirectory('static/js', 'dist/js')
