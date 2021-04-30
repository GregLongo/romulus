const mix = require('laravel-mix');


mix.js('static/js/app.js', 'js')
	.sass('static/scss/app.scss', 'css')
	.setPublicPath('dist')
	.browserSync( {
		proxy:'http://sentant.local/about',
		files:['static', 'templates']
	})
	.autoload({
	    jquery: ['$', 'jQuery']
	})
	.copyDirectory('static/svg', 'dist/svg');
