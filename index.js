'use strict';
var _ = require('lodash');
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
          test: /\.svg$/,
          loader: 'raw-loader',
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
          test: /\.svg$/,
          loader: 'raw-loader',
        },
        {
          test: /\.coffee$/,
          loader: 'react-hot!coffee-loader',
        },
      ]
    }
  },
  functions: {
    url: function(file, fileName) {
        // clean the filename to get the url
        return _.kebabCase(fileName.slice(11), fileName.length - 3);
    }
  },
};
