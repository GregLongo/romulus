const mix = require('laravel-mix');

mix.sass('static/scss/app.scss', 'css')
	.setPublicPath('dist')
	.browserSync( {
		proxy:'http://sentant.local',//replace with local proxy. recommended download https://localwp.com/ for local server mgmt
		files:['static', 'templates', 'dist']
	})
	.autoload({
	    jquery: ['$', 'jQuery']
	})
	.copyDirectory('static/svg', 'dist/svg')//incl static assets if needed. extends compile time
	.copyDirectory('static/lottie', 'dist/lottie')
	.copyDirectory('static/particles', 'dist/particles')
