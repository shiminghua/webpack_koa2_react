'use strict';
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackBaseConfig = require('./webpack.base.config');
const config = require('./config');
const debug = require('debug');
const webpackHotConfig = require('./webpack.hot.config')

new webpackDevServer(webpack(webpackHotConfig), {
    publicPath: webpackHotConfig.output.publicPath,
    contentBase: config.build,
    outputPath: config.build,
    hot: true,
    noInfo: false,
    historyApiFallback: true,
    inline: true,
    progress: true,
    stats: {
        colors: true
    },
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}).listen(8080, '127.0.0.1', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Webpack Listening at 127.0.0.1:8080');
});