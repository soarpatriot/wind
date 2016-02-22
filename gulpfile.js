var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');


gulp.task('sass',function(){
  return gulp.src('./src/sass/main.sass')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('jade',function(){
  var YOUR_LOCALS = {};
  gulp.src('./src/jade/**/*.jade')
    .pipe(jade({locals: YOUR_LOCALS}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('sass:watch',function(){
  gulp.watch('./src/sass/**/*.sass',['sass'])
  gulp.watch('./src/jade/**/*.jade',['jade'])
})
gulp.task('default',['sass:watch'],function(){
  console.log('default');
});
