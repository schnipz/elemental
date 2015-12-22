var gulp = require('gulp');
var shell = require('gulp-shell');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');

gulp.task('scripts', function() {
  gulp.src(['src/js/**/*.js', '!src/js/build.js', '!src/js/imports/third-party/**/*.js'])
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-js', shell.task([
  'r.js -o src/js/build.js'
]));

gulp.task('develop', ['scripts', 'build-js'], function() {
  gulp.watch(['src/js/**/*.js', '!src/js/imports/third-party/**/*.js'], ['scripts', 'build-js']);
});
