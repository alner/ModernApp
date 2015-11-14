'use strict';

var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    //publicPath: '/build',
    //path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: ['babel'],
        query: {
          presets: ["es2015"],
        }
      }
    ]
  },
  debug: true,
  devServer: {
    contentBase: "./src"
  }
}
