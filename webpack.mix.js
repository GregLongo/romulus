const mix = require('laravel-mix');

//new comment


mix.js('static/js/app.js', 'js')
	.sass('static/scss/app.scss', 'css')
	.setPublicPath('dist')
	.browserSync( {
		proxy:'http://localhost:10003/',//replace with local proxy. recommended download https://localwp.com/ for local server mgmt
		files:['static', 'templates', 'dist']
	})
	.autoload({
	    jquery: ['$', 'jQuery']
	})
	// .copyDirectory('static/svg', 'dist/svg');//incl static assets if needed. extends compile time
	//
