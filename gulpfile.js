var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var webpack = require('gulp-webpack');
//var webpack = require('webpack');

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
    .pipe(plugins.livereload());
});

gulp.task('webpack',function(){
  return gulp.src('./entry.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass:watch',function(){
  gulp.watch('./src/sass/**/*.sass',['sass'])
  gulp.watch('./src/jade/**/*.jade',['jade'])
})

gulp.task('server',function(){
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch("dist/*.html").on('change', browserSync.reload);
})
gulp.task('default',['sass:watch','server'],function(){
  console.log('default');
});
