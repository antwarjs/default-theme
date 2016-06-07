module.exports = {
  layouts: function() {
    return require('./layouts');
  },
  webpack: {
    build: function(plugins) {
      var ExtractTextPlugin = plugins.ExtractTextPlugin;

      return {
        module: {
          loaders: [
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract(
                'style-loader',
                'css-loader?postcss-loader!sass-loader'),
            }
          ]
        },
        postcss: function () {
          return [
            require('autoprefixer')
          ];
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
                'postcss-loader',
                'sass-loader',
              ],
            }
          ]
        },
        postcss: function () {
          return [
            require('autoprefixer')
          ];
        }
      };
    }
  }
};
