'use strict';
const webpack = require('webpack');
const path = require('path');

// NODE_ENV
const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development';

const webpackConfig = {
    entry: {
        todo: ['./client/resources/todo/index.js'],
        test: ['./client/resources/test/index.js'],
        index: ['./client/resources/index/index.js'],
        react: ['react', 'react-dom']
    },
    output: {
        path: './build',
        filename: 'javascript/resources/[name]/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
            },
            {
                test: /\.html$/,
                loader: 'html?attrs[]=img:src'
            },
            // 图片加载
            {
                test: /\.(png|jpeg|jpg|gif)$/, // (png|jpe?g|gif)
                exclude: /node_modules/,
                loader: 'url?limit=8192&name=images/[path][name].[ext]&context=./client'
                // loaders: process.env.NODE_ENV === 'development' ? 
                //     ['url?limit=8192&name=images/[path][name].[ext]&context=' + config.client] : 
                //     ['url?limit=8192&name=images/[path][name].[ext]&context=' + config.client, 
                //     'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css', '.html', '.less', '.jsx']
    },
    plugins: [
        // 设置开发模式
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),
        // 公共模块
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: Infinity, // 2 Infinity
            // chunks: commonChunkNames,
            name: ['react'], // 在这些模块中抽取公共模块；name值为 entry 入口文件的 key 值的数组
            filename: 'javascript/commons/[name].min.js'
        }),
        // 优化计数模块
        new webpack.optimize.OccurenceOrderPlugin(),
        // 报错不退出
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = webpackConfig;