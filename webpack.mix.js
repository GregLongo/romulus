const mix = require('laravel-mix');


mix.js('static/js/app.js', 'js')
	.sass('static/scss/app.scss', 'css')
	.setPublicPath('dist')
	.browserSync( {
		proxy:'http://sentant.local',
		files:['static', 'templates']
	}).autoload({
	    jquery: ['$', 'jQuery']
	})
