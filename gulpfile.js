var gulp = require('gulp');
var elixir = require('laravel-elixir');
var ghPages = require('gulp-gh-pages');
	
elixir(function(mix) {

	mix.sass([
		'./src/sass/app.scss', 
		'./node_modules/materialize-css/sass/ghpages-materialize.scss'
		], './dist/main.css');

	mix.scripts([
		
		], './dist/main.js');

	mix.copy('./src/index.html', './dist/index.html');

});
 
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
