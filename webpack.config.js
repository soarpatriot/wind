var path = require('path');
var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge')
const TAEGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname,'dist'),
  publicPath: path.join(__dirname,'dist')
}
const common = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './entry.js'
    //index:['webpack/hot/dev-server','./entry.js'],
    //page2:['webpack/hot/dev-server','./page2.js']
  ],
  //'./entry.js',
  output: {
    publicPath: 'http://localhost:3000/dist/',
    path: PATHS.build,
    filename: "js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot','babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.jade$/, loader: "jade" }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/sass")]
  }
 
}
if(TAEGET==='start' || !TAEGET){
  module.exports = merge(common,{
    devServer:{
      publicPath: 'http://localhost:3000/dist/',
      contentBase: PATHS.build,
      historyApiFallback:true,
      hot:true,
      inline:true,
      noInfo: false,
      progress:true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['dist'] }
      })
    ]
  });
}
if(TAEGET==='build'){
  module.exports = merge(common,{});
}
