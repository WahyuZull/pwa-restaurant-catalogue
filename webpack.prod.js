/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 25000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minify: CssMinimizerPlugin.cleanCssMinify,
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                quality: 80,
              },
              webp: {
                lossless: true,
              },
              avif: {
                lossless: true,
              },
              png: {},
              gif: {},
            },
          },
        },
      }),
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
        minify: TerserPlugin.terserMinify,
        extractComments: true,
        terserOptions: {
          compress: true,
        },
      }),
    ],
  },
  plugins: [
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
  ],
});
