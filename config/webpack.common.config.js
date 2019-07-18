'use strict';

// This is the common Webpack config. The dev and prod Webpack configs both
// inherit config defined here.
const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.jsx'),
    progress: path.resolve(__dirname, '../src/progressIndex.jsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
