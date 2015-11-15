'use strict';

var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    //publicPath: '/build',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: ['babel'],
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        }
      }
    ]
  },
  debug: true,
  devServer: {
    contentBase: "./src"
  }
}
