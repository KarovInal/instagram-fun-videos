'use strict'

var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'build.js',
    path: __dirname + '/public'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        inlcude: __dirname,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["ie >= 8","ff > 20","last 3 versions","> 2%"]}'
      }, {
        test: /\.(png|jpg|svg|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },

  devtool: 'source-map',

  watch: true
}
