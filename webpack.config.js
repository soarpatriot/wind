var path = require('path');
var webpack = require('webpack');

const merge = require('webpack-merge')
const TAEGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname,'dist')
}
const common = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  //'./entry.js',
  output: {
    path: PATHS.build,
    filename: "js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot','babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { test: /\.jade$/, loader: "jade-loader" }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/sass")]
  }
 
}
if(TAEGET==='start' || !TAEGET){
  module.exports = merge(common,{
    devServer:{
      contentBase: PATHS.build,
      historyApiFallback:true,
      hot:true,
      inline:true,
      progress:true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
  });
}
if(TAEGET==='build'){
  module.exports = merge(common,{});
}

