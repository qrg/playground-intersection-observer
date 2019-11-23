'use strict';

const { resolve } = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { SRC_DIR, DIST_DIR } = require('./paths.js');

module.exports = {
  entry: {
    main: resolve(SRC_DIR, 'scripts/index.ts')
  },
  output: {
    path: DIST_DIR,
    filename: 'scripts/[name].[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
    new HtmlWebpackPlugin({
      template: resolve(SRC_DIR, 'index.html')
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.sass', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV === 'development',
              url: true
            }
          }
        ]
      }
    ]
  }
};
