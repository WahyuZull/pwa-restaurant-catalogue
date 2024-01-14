/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[c|a]ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/**'],
          },
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [{
        urlPattern: /\.(?:js)$/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'assets',
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 14,
          },
        },
      }],
    }),
    new WebpackPwaManifest({
      name: 'Doyan Makan Apps',
      short_name: 'Doyan Makan',
      description: 'Catalogue Restaurants Web App',
      fingerprints: false,
      theme_color: '#cc704b',
      background_color: '#e8c07d',
      display: 'standalone',
      start_url: './index.html',
      publicPath: './',
      icons: [
        {
          src: path.resolve('src/public/icons/icon.png'),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512],
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: path.resolve('src/public/icons/maskable-icon.png'),
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    }),
    // new BundleAnalyzerPlugin({}),
  ],
};
