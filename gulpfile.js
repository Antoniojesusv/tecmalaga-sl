const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const minify = require('gulp-minify');
const npmDist = require('gulp-npm-dist');
const connect = require('gulp-connect');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10',
];

gulp.task('copy:libs', () => {
  gulp
    .src(npmDist(), {
      base: './node_modules',
    })
    .pipe(gulp.dest('./dist/libs'));
});

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

gulp.task('default', ['watch', 'connect', 'copy:libs']);
