var ExtractTextPlugin = require('extrat-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname + "/dist",
    filename: "js/bundle.js"
  },
  module: {
        loaders: [
                

                //{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },

                {   test: /\.(css)$/,
                    loader: ExtractTextPlugin.extract("style-loader",
                        "css-loader")
                },
                {
                    test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
                    loader: 'file?name=./fonts/[hash].[ext]'

                },
                {
                    test: /\.(ico|gif|png|jpe?g)$/,
                    loader: 'file?name=./images/[hash].[ext]'

                }
        ]
  },
  plugins: [

        new ExtractTextPlugin("styles.css", {
            allChunks: true
        })

  ]
}
