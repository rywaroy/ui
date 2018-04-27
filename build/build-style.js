var gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
var sass = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function(){
  gulp.src('../src/packages/styles/index.less')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename('ygui.css'))
    .pipe(gulp.dest('../lib/styles'))
});

gulp.task('iconfont', function () {
  gulp.src('../src/packages/styles/iconfont/*.*')
      .pipe(gulp.dest('../lib/styles/iconfont'));
});

gulp.task('default', ['css', 'iconfont']);