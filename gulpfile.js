var gulp = require('gulp');
var elixir = require('laravel-elixir');
var ghPages = require('gulp-gh-pages');
	
elixir(function(mix) {

	mix.styles([
		'./node_modules/materialize-css/dist/css/materialize.min.css',
		// './node_modules/materialize-css/sass/ghpages-materialize.scss',
		'./src/sass/app.scss'
	], './src/main.css');
    //
	// mix.scripts([
	// 	'./node_modules/jquery/dist/jquery.min.js',
	// 	'./node_modules/materialize-css/dist/js/materialize.min.js'
	// ], './src/main.js');
	//
	mix.copy('./src/index.html', './dist/index.html');
	mix.copy('./src/img', './dist/img');
	mix.copy('./src/main.css', './dist/main.css');
	mix.copy('./src/main.css.map', './dist/main.css.map');
	mix.copy('./node_modules/materialize-css/fonts/roboto', './fonts/roboto');
	// mix.copy('./src/main.js', './dist/main.js');
	// mix.copy('./src/main.js.map', './dist/main.js.map');

});
 
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
