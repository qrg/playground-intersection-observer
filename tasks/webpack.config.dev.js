const { resolve } = require('path');

const merge = require('webpack-merge');

const { DIST_DIR } = require('./paths');
const commonConfig = require('./webpack.config.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    inline: true,
    hot: true,
    publicPath: '/',
    contentBase: resolve(DIST_DIR),
    watchContentBase: true,
    host: '0.0.0.0',
    disableHostCheck: true
  }
});
