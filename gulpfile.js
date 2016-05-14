var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var jade = require('gulp-jade');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var webpack = require('gulp-webpack');
var compass = require('gulp-compass');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");


gulp.task("webpack",function(callback){
    //var compiler = webpack(require('./webpack.config.js'));
    var config = require('./webpack.config');
    new WebpackDevServer(webpack(config), {
      publicPath: config.output.publicPath,
      hot: true,
      noInfo: false,
      historyApiFallback: true,
      stats: {
        colors: true
      }

        // server and middleware options
    }).listen(3000, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task('sass',function(){
  return gulp.src('./src/sass/*.scss')
   .pipe(compass({
        config_file: './config.rb',
        css: 'dist/css',
        sass: 'src/sass'
    }))
    .on('error',function(error){
      console.log(error); 
    })
   //.pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('jade',function(){
  var YOUR_LOCALS = {};
  gulp.src('./src/jade/**/*.jade')
    .pipe(jade({locals: YOUR_LOCALS}))
    .pipe(gulp.dest('./dist/'))
    .pipe(plugins.livereload());
});

gulp.task('webpack1111',function(){
  return gulp.src('./entry.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass:watch',function(){
  gulp.watch('./src/sass/**/*.scss',['sass'])
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
gulp.task('default',['sass:watch','webpack'],function(){
  console.log('default');
});
