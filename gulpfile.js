var gulp = require('gulp');
var browserify = require('browserify');
var shell = require('gulp-shell');
var livereload = require('gulp-livereload')

gulp.task('clean', shell.task([
    'rm -rfv dist/*'
  ])
);

gulp.task('copy', shell.task([
    'cp -rfv app/index.html app/css app/fonts app/collaborators.json dist'
  ])
);

gulp.task('make-js-dir', shell.task([
    'mkdir dist/js'
  ])
);

gulp.task('react', shell.task([
    'browserify -t [ babelify --presets [ react ] ] app/js/app.js -o dist/js/bundle.js'
  ])
);

gulp.task('default', ['clean', 'copy', 'make-js-dir', 'react'], function() {
  console.log("Build completed");
});

gulp.task('watch', function() {

  // Create LiveReload server
  livereload.listen();

  // Watch jsx file(s) and relaunch browserify
  gulp.watch('app/js/app.js', ['react']);
  gulp.watch('app/js/components/**.js', ['react']);

  // watch static files
  gulp.watch('app/index.html', ['copy']);
  gulp.watch('app/css/**.css', ['copy']);

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/index.html', 'dist/js/bundle.js']).on('change', livereload.changed);

});
