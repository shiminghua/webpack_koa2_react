'use strict';
const webpack = require('webpack');
const path = require('path');
const config = require('./config');

const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
// 定义插件 webpack.DefinePlugin 的开发模式的值 - process.env.NODE_ENV
let definePlugin_NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';
// 设置 webpack.optimize.CommonsChunkPlugin 公共模块抽取时的 name 值
let ConfigureCommonChunks =  config.commonChunk;
let commonChunkNames = [];

for(let key in ConfigureCommonChunks) {
    commonChunkNames.push(key);
}

const baseConfig = {
    entry: {
        page1: ['./client/page1', hotMiddlewareScript],
        page2: ['./client/page2', hotMiddlewareScript]
    },
    output: {
        filename: './[name]/[name].bundle.js',
        path: config.build,
        publicPath: config.publicPath
    },
    // devtool: {

    // },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'url?limit=8192&context=client&name=[path][name].[ext]'
            },
            {
                test: /\.less&/,
                loader: 'style!css!less'
            }
        ]
    },
    plugins: [
        // 设置开发模式
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(definePlugin_NODE_ENV)
            }
        }),
        // 公共模块
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: Infinity, // 2 Infinity
            // chunks: commonChunkNames,
            name: commonChunkNames, // 在这些模块中抽取公共模块；name值为 entry 入口文件的 key 值的数组
            filename: 'javascript/commons/[name].min.js'
        }),
        // 优化计数模块
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 报错不退出
        new webpack.NoErrorsPlugin()
    ]
};
// console.log(baseConfig);
module.exports = baseConfig;