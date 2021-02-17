const path = require('path');
const { version } = require('./package');
const getWebpack = require('./node_modules/react-scripts-mdx/config/webpack.config.js');

module.exports = {
  title: 'Style Guide',
  components: 'src/styleguide/components/*.js',
  version,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/theme/ThemeWrapper'),
    // StyleGuideRenderer: path.join(__dirname, 'src/pages/ThemeWrapper'),
  },
  webpackConfig: getWebpack('development'),
};
