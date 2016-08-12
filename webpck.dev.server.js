'use strict';
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackBaseConfig = require('./webpack/webpack.base.config');
const debug = require('debug');

new webpackDevServer(webpack(webpackBaseConfig), {
    publicPath: webpackBaseConfig.output.publicPath,
    hot: true,
    noInfo: false,
    historyApiFallback: true,
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