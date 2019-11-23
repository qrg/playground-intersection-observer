const { resolve } = require('path');

const glob = require('glob');
const merge = require('webpack-merge');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CompressionPlugin = require('compression-webpack-plugin');
const { gzip } = require('@gfx/zopfli');

const { SRC_DIR, FONTS_DIR_GENERATED } = require('./paths');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new PurgecssPlugin({
      paths: () =>
        glob.sync(resolve(SRC_DIR, '**', '*'), {
          nodir: true,
          ignore: FONTS_DIR_GENERATED
        }),
      whitelistPatterns: [/^tippy/],
      whitelistPatternsChildren: [/^tippy/],
      rejected: true
    }),
    new ImageminPlugin({
      optipng: null,
      pngquant: {
        quality: '30-70',
        verbose: true,
        strip: true
      }
    }),
    new CompressionPlugin({
      test: /\.(js|css|html|svg)$/,
      algorithm: gzip
    })
  ]
});
