var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var deps =[
  'jquery/dist/jquery.min.js',
]
var config= {
  devtool: 'eval',

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    alias: {}
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
}),
  ],
  module: {
    noParse: [],
    loaders: [{
        test: /.jsx?$/,
        loaders: 'babel-loader',
        exclude: [nodeModulesPath],
        query: {
          presets: ['es2015', 'stage-3','react']
        }
      },
      {
        test: path.resolve(nodeModulesPath, deps[0]),
         loader: 'expose-loader?jQuery'}, 
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

deps.forEach(function (dep) {
  var depPath = path.resolve(nodeModulesPath, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports =  config;