require('es6-promise').polyfill();
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractPlugin = require('extract-text-webpack-plugin');
var production = process.env.NODE_ENV === 'production';

var plugins = [
  new ExtractPlugin('app.bundle.css'),
  new webpack.optimize.CommonsChunkPlugin({
    name:       'main',
    children:   true,
    minChunks:  2,
  }),
];

if (production) {
  plugins = plugins.concat([
    new CleanPlugin('dist'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200,
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle:   true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      __SERVER__:       !production,
      __DEVELOPMENT__:  !production,
      __DEVTOOLS__:     !production,
      'process.env':    {
        BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    })
  ]);
}

module.exports = {
  debug:  !production,
  devtool: production ? false : 'eval',
  entry:  './src',
  output: {
    path:           'dist',
    filename:       production ? '[name]-[hash].js' : 'app.bundle.js',
    chunkFilename:  '[name]-[chunkhash].js',
    publicPath:     'dist/',
  },
  plugins: plugins,
  module: {
    preLoaders: [
      {
        test: /\.js/,
        loader: 'eslint'
      },
      {
        test: /\.js/,
        loader: 'baggage?[file].html=template&[file].scss'
      }
    ],
    loaders: [
      {
        test:     /\.js/,
        loader:   'babel',
        include:  __dirname + '/src'
      },
      {
        test:     /\.scss/,
        loader:  ExtractPlugin.extract('style', 'css!sass'),
      },
      {
        test:     /\.html/,
        loader:   'html',
      },
      {
        test:     /\.(png|gif|jpe?g|svg)$/i,
        loader:   'url?limit=10000'
      }
    ],
  }
};
