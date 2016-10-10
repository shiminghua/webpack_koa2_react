'use strict';
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackBaseConfig = require('./webpack.base.config');
const config = require('./config');
const debug = require('debug');

let webpackHotConfig = webpackBaseConfig;

// 热加载
webpackHotConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

// 入口文件
let webpackEntrys = webpackBaseConfig.entry;
for (let key in webpackEntrys) {
    webpackEntrys[key].unshift('webpack-dev-server/client?' + config.http, 'webpack/hot/dev-server');
}
webpackHotConfig.entry = webpackEntrys;

// webpack-dev-server 配置
webpackHotConfig.devServer = {
    hot: true,
    host: config.host,
    port: config.port,
    inline: true,
    progress: true,
    contentBase: config.build,
    outputPath: config.build,
    publicPath: webpackHotConfig.output.publicPath,
    stats: {
        color: true
    },
    historyApiFallback: true
};

console.log('---------->热替换配置文件：\r\n', webpackHotConfig);
module.exports = webpackHotConfig;