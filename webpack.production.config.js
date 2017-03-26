var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
module.exports = {
  devtool: 'source-map',

  entry:'./index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: 'babel-loader',
      exclude: [nodeModulesPath],
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.css?$/,
      loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      exclude: [nodeModulesPath]
    }
    ]
  }
}