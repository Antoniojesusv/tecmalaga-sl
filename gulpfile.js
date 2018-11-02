const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const minify = require('gulp-minify');
const connect = require('gulp-connect');
const AUTOPREFIXER_BROWSERS = require('./build/gulp.constants');

gulp.task('html', () => {
  gulp
    .src(['./index.html'])
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      }),
    )
    .pipe(gulp.dest('./dist/src'))
    .pipe(connect.reload());
});

gulp.task('css', () => {
  gulp
    .src('./src/**/*.css')
    .pipe(
      autoprefixer({
        browsers: AUTOPREFIXER_BROWSERS,
      }),
    )
    .pipe(csso())
    .pipe(gulp.dest('./dist/src'))
    .pipe(connect.reload());
});

gulp.task('jsmain', () => {
  gulp
    .src('./index.js')
    .pipe(minify())
    .pipe(gulp.dest('./dist/src'))
    .pipe(connect.reload());
});

gulp.task('js', () => {
  gulp
    .src('./src/**/*.js')
    .pipe(minify())
    .pipe(gulp.dest('./dist/src'))
    .pipe(connect.reload());
});

gulp.task('connect', () => {
  connect.server({
    root: './dist/src',
    livereload: true,
  });
});

gulp.task('watch', () => {
  gulp.watch(
    ['./index.html', './src/**/*.css', './app.js', './src/**/*.js'],
    ['html', 'css', 'jsmain', 'js'],
  );
});

gulp.task('default', ['watch', 'connect']);
