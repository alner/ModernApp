'use strict';

var path = require('path');
var webpack = require('webpack');

var SRC_PATH = path.join(__dirname, 'src');

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    publicPath: '/static/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: SRC_PATH
      }
    ]
  },
  devServer: {
    contentBase: "./src"
  }
}
