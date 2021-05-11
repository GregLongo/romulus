const mix = require('laravel-mix');
// require('laravel-mix-icomoon');

//new comment


mix.js('static/js/app.js', 'js')
	.sass('static/scss/app.scss', 'css')
	.setPublicPath('dist')
	.browserSync( {
		proxy:'http://sentant.local',//replace with local proxy. recommended download https://localwp.com/ for local server mgmt
		files:['static', 'templates', 'dist']
	})
	.autoload({
	    jquery: ['$', 'jQuery']
	})
// 	.icomoon({
//     inputPath: 'static/icomoon',
//     publicPath: 'dist',
//     output: 'fonts',
//     cssFile: 'static/scss/base/_fonts.scss',
//     reload: true,
//     debug: true
// });
	// .copyDirectory('static/svg', 'dist/svg');//incl static assets if needed. extends compile time
	//
