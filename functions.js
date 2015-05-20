var _ = require('lodash');

module.exports = {
    url: function(file, fileName) {
        // clean the filename to get the url
        return _.kebabCase(fileName.slice(11), fileName.length - 3);
    }
};
