var path = require('path');
var webpack = require('webpack');

const merge = require('webpack-merge')
const TAEGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname,'dist')
}
const common = {
  entry: './entry.js',
  output: {
    path: PATHS.build,
    filename: "js/bundle.js"
  },
  module: {
    loaders: [
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
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
if(TAEGET==='build'){
  module.exports = merge(common,{});
}

