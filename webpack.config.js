var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
module.exports = {
  devtool: 'eval',

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('style.css'),
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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
        exclude: [nodeModulesPath]
      }, 
      {
        test: /.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: "css-loader!less-loader"
        })
      }]
    }  
  }