'use strict';
const webpack = require('webpack');
const path = require('path');
const config = require('./config');

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
// 定义插件 webpack.DefinePlugin 的开发模式的值 - process.env.NODE_ENV
let definePlugin_NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';
// 设置 webpack.optimize.CommonsChunkPlugin 公共模块抽取时的 name 值
let ConfigureCommonChunks = config.commonChunk;
let commonChunkNames = [];

for (let key in ConfigureCommonChunks) {
    commonChunkNames.push(key);
}

const baseConfig = {
    entry: {
        page1: ['eventsource-polyfill', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000','./client/page1'],
        page2: ['eventsource-polyfill', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000','./client/page2']
    },
    output: {
        filename: './[name]/[name].bundle.js',
        path: config.build,
        publicPath: config.publicPath
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
            },
            {
                test: /\.less&/,
                loader: 'style!css!less'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    'presets': ['es2015', 'stage-0']
                },
                // include: './server'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = baseConfig;