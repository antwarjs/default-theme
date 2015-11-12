module.exports = {
  handlers: {
    sectionIndex: function() {
      return require('./SectionIndex.jsx');
    },
    sectionPage: function() {
      return require('./SectionPage.jsx');
    },
    body: function() {
      return require('./Body.jsx');
    },
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
              'css-loader?minimize!autoprefixer-loader?{browsers:["last 2 version", "ie 10", "Android 4"]}!sass-loader'),
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
          }
        ]
      }
    };
  },
};
