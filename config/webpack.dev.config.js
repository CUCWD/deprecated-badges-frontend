'use strict';

// This is the dev Webpack config. All settings here should prefer a fast build
// time at the expense of creating larger, unoptimized bundles.
const Merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const apiEndpoints = require('../src/data/services/endpoints.js');
const commonConfig = require('./webpack.common.config.js');

const targetUrl = 'http://courses.edx.devstack.lms:18000';

module.exports = Merge.smart(commonConfig, {
  mode: 'development',
  // entry: [
  //   // enable react's custom hot dev client so we get errors reported in the browser
  //   require.resolve('react-dev-utils/webpackHotDevClient'),
  //   // path.resolve(__dirname, '../src/index.jsx'),
  // ],
  module: {
    // Specify file-by-file rules to Webpack. Some file-types need a particular kind of loader.
    rules: [
      // The babel-loader transforms newer ES2015+ syntax to older ES5 for older browsers.
      // Babel is configured with the .babelrc file at the root of the project.
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        loader: 'babel-loader',
        options: {
          // Caches result of loader to the filesystem. Future builds will attempt to read from the
          // cache to avoid needing to run the expensive recompilation process on each run.
          cacheDirectory: true,
        },
      },
      // We are not extracting CSS from the javascript bundles in development because extracting
      // prevents hot-reloading from working, it increases build time, and we don't care about
      // flash-of-unstyled-content issues in development.
      {
        test: /(.scss|.css)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]',
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: () => [
                /* eslint-disable global-require */
                require('autoprefixer'),
                require('../src/utils/matches-prefixer.js'),
                require('postcss-pseudo-class-any-link'),
                require('postcss-initial')(),
                require('postcss-prepend-selector')({ selector: '#root.BFE ' }),
                /* eslint-enable global-require */
              ],
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true,
              includePaths: [
                path.join(__dirname, '../node_modules'),
                path.join(__dirname, '../src'),
              ],
            },
          },
        ],
      },
      // Webpack, by default, uses the url-loader for images and fonts that are required/included by
      // files it processes, which just base64 encodes them and inlines them in the javascript
      // bundles. This makes the javascript bundles ginormous and defeats caching so we will use the
      // file-loader instead to copy the files directly to the output directory.
      {
        test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  // Specify additional processing or side-effects done on the Webpack output bundles as a whole.
  plugins: [
    // Generates an HTML file in the output directory.
    new HtmlWebpackPlugin({
      inject: true, // Appends script tags linking to the webpack bundles at the end of the body
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['progress'],
      filename: 'progress.html',
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      MOCK_LMS_API: false,
      BASE_URL: 'localhost:1991',
      LMS_BASE_URL: 'http://localhost:18000',
      LOGIN_URL: 'http://localhost:18000/login',
      LOGOUT_URL: 'http://localhost:18000/logout',
      CSRF_TOKEN_API_PATH: '/csrf/api/v1/token',
      REFRESH_ACCESS_TOKEN_ENDPOINT: 'http://localhost:18000/login',
      ACCESS_TOKEN_COOKIE_NAME: 'edx-jwt-cookie-header-payload',
      USER_INFO_COOKIE_NAME: 'edx-user-info',
    }),
    // when the --hot option is not passed in as part of the command
    // the HotModuleReplacementPlugin has to be specified in the Webpack configuration
    // https://webpack.js.org/configuration/dev-server/#devserver-hot
    new webpack.HotModuleReplacementPlugin(),
  ],
  // This configures webpack-dev-server which serves bundles from memory and provides live
  // reloading.
  devServer: {
    host: '0.0.0.0',
    port: 1991,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    hot: true,
    inline: true,
    overlay: true,
    proxy: Object.keys(apiEndpoints).reduce(
      (map, endpoint) => {
        map[apiEndpoints[endpoint]] = { // eslint-disable-line no-param-reassign
          target: targetUrl,
        };
        return map;
      }, {}),
  },
});
