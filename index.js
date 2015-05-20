'use strict';
var _ = require('lodash');


module.exports = {
  common: function() {
    return {
      resolve: {
        extensions: ['.coffee']
      }
    };
  },
  build: function(plugins) {
    var ExtractTextPlugin = plugins.ExtractTextPlugin;

    return {
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
    };
  },
  development: function() {
    return {
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
    };
  },
  functions: {
    url: function(file, fileName) {
        // clean the filename to get the url
        return _.kebabCase(fileName.slice(11), fileName.length - 3);
    }
  },
};
