'use strict';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ReactHotLoaderMatches = /View.coffee|Pages\//;


module.exports = {
  common: {
    resolve: {
      extensions: ['.coffee']
    }
  },
  build: {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
            'style-loader',
            'css-loader!autoprefixer-loader?{browsers:["last 2 version", "ie 10", "Android 4"]}!sass-loader'),
        },
        {
          test: /\.coffee$/,
          loader: 'coffee-loader'
        }
      ]
    }
  },
  development: {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader',
            'autoprefixer-loader?{browsers:["last 2 version", "ie 10", "Android 4"]}',
            'sass-loader',
          ],
        },
        {
          test: /\.coffee$/,
          exclude: ReactHotLoaderMatches,
          loader: 'react-hot!coffee-loader',
        },
        {
          test: ReactHotLoaderMatches,
          loader: 'react-hot!coffee-loader',
        },
      ]
    }
  }
};
