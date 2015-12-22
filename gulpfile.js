var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');

gulp.task('styles', function() {
  gulp.src(['src/scss/**/*.scss', '!src/scss/imports/_normalize.scss'])
    .pipe(scsslint({
      'config': '.scss-lint.yml'
    }))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/includes/css/'));
});

gulp.task('lint-scripts', function() {
  gulp.src(['src/js/**/*.js', '!src/js/build.js', '!src/js/imports/third-party/**/*.js'])
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('scripts', ['lint-scripts'], shell.task([
  'r.js -o src/js/build.js'
]));

gulp.task('develop', ['styles', 'scripts'], function() {
  gulp.watch(['src/scss/**/*.scss'], ['styles']);
  gulp.watch(['src/js/**/*.js', '!src/js/imports/third-party/**/*.js'], ['scripts']);
});
