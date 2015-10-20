const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sassLoaders = [
  'css?sourceMap',
  'autoprefixer?browsers=last 2 version',
  'sass?sourceMap&' +
    'includePaths[]=' +
      encodeURIComponent(path.resolve(__dirname, './src/styles')) + '&' +
    'includePaths[]=' +
      encodeURIComponent(path.resolve(__dirname, './node_modules')),
];

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract('style', sassLoaders.join('!')),
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel?optional=es7.classProperties', 'eslint'],
      },
      {
        test: /\.html$/,
        loaders: ['file-loader?name=[path][name].[ext]&context=./public'],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true}),
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.scss'],
    modulesDirectories: ['src', 'node_modules', 'public'],
  },
};
