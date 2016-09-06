const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const config = require('./config');


// NODE_ENV
const NODE_ENV = process.env.NODE_ENV;

const webpackBase = {
    // 生成sourcemap的方式，eval不支持IE8
    devtool: 'eval',
    // 入口文件
    entry: {
        'test': [path.join(config.client, 'resources/test/index.js')],
        'react': ['react', 'react-dom']
    },
    // 输出配置
    ourput: {
        publicPath: config.http,
        path: config.build,
        filename: path.normalize('javascript/[name]/index.bundle.js')
    },
    // 配置
    module: {
        // 在 Webpack 中忽略对已知文件的解析
        // noParse: [/node_modules/, /jquery/, /mui/, /vue/],
        // 加载器
        loaders: [
            // jsx 加载器
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                // include: /resources/,
                // loader: 'react-hot!babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
                loaders: [
                    'react-hot',
                    'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
                ]
            },
            // js 加载器
            {
                test: /\.js$/,
                exclude: /(node_modules|jquery|mui)/,  // 必须，否则报错：Uncaught ReferenceError: webpackJsonp is not defined
                loaders: [
                    'react-hot',
                    'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
                ]
            },
            // css 加载
            {
                test: /\.css$/,
                exclude: /node_modules/,
                // include: /^client\/*/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
                // loaders: [
                //     'file?name=style/[name]/[name]-.min.css',
                //     'extract',
                //     'css'
                // ]
            },
            // less 加载
            {
                test: /\.less$/,
                exclude: /node_modules/,
                // include: /^client\/*/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'less-loader')
                // loaders: [
                //     'file?name=style/[path][name]/index.min.css&context=' + path.join(config.client, 'resources/'),
                //     'extract',
                //     'css',
                //     'less'
                // ]
            },
            // html 加载
            {
                test: /\.html$/,
                exclude: /node_modules/,
                // include: /client/,
                loader: 'html?attrs[]=img:src&attrs[]=link:href'
            },
            // 字体加载
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=style/fonts/[name].bundle.[ext]'
            },
            // 图片加载
            {
                test: /\.(png|jpeg|jpg|gif)$/, // (png|jpe?g|gif)
                exclude: /node_modules/,
                // loader: 'url?limit=4096&name=images/[path]/[name].[ext]&context=' + config.client
                loaders: ['url?limit=4096&name=images/[path][name].[ext]&context=' + config.client, 
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}']
            }
        ]
    },
    resolve: {
        // root: 'E:/github/flux-example/src', //绝对路径
        // 别名
        alias: {
            // react: 'react/dist/react.js'
        },
        // 扩展名 
        extensions: ['', '.js', '.css', '.html', '.less', '.jsx']
    },
    // 插件
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
        new webpack.NoErrorsPlugin(),
        // 单独打包css文件
        new ExtractTextPlugin('style/resources/[name]/[name].bundle.css')
    ]
};

module.exports = webpackBase;