
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackBaseConfig = require('./webpack.base.config');
const config = require('./config');
const debug = require('debug');

let webpackDistConfig = webpackBaseConfig;

// 热加载
webpackDistConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
);

console.log('---------->压缩代码：\r\n', webpackDistConfig);
module.exports = webpackDistConfig;