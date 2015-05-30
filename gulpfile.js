var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');

gulp.task('js', function () {
  return browserify('./source/js/app.js')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('build', function () {
  return browserify()
        .add('./source/js/app.js')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function () {
  gulp.watch('./source/js/**/*.js', ['js']);
});

gulp.task('default', ['watch', 'js']);
