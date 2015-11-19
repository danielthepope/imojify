var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(cssmin()) // Removes unnecessary classes
    .pipe(gulp.dest('./css'));
});

gulp.task('get-images', function () {
  require('./index.js');
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
  gulp.watch('./index.js', ['get-images']);
});

gulp.task('build', ['get-images', 'sass'])

gulp.task('default', ['sass', 'sass:watch']);
