'use strict';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./config');
const copy = require('./copy');
const entry = require('./entry');
const htmlPlugin = require('./htmlPlugin');

// NODE_ENV
const NODE_ENV = process.env.NODE_ENV;

// 设置 webpack.optimize.CommonsChunkPlugin 公共模块抽取时的 name 值
function getCommonsChunkNames() {
    let ConfigureCommonChunks =  config.commonChunk;
    let commonChunkNames = [];

    for(let key in ConfigureCommonChunks) {
        commonChunkNames.push(key);
    }
    return commonChunkNames;
}
console.log('---------->公共模块：\r\n', getCommonsChunkNames());
/*******
 * 插件设置
 */
let pluginsArr = [
    // copy
    // new CopyWebpackPlugin(copy),
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
        name: getCommonsChunkNames(), // 在这些模块中抽取公共模块；name值为 entry 入口文件的 key 值的数组
        filename: 'javascript/commons/[name].min.js'
    }),
    // 单独打包css文件
    new ExtractTextPlugin("style/resources/[name]/index.bundle.css"),
    // 优化计数模块
    new webpack.optimize.OccurenceOrderPlugin(),
    // 报错不退出
    new webpack.NoErrorsPlugin()
]; 

/******** 
 * webpack 基本配置
 */
let webpackBaseConfig = {
    // devtool: 'eval',
    /****
     * 入口文件设置
     */
    entry: entry,
    /****
     * 文件输出配置
     */
    output: {
        // webpack-dev-middleware  用到， 也可能是从 url 访问的情况下的路径
        publicPath: config.http,
        // 文件路径
        path: config.build,
        // 用来配置生成的文件名, 比如 [hash] 用于生成 Hash, [name] 是入口文件 entry 的 key 值
        filename: 'javascript/[name]/index.bundle.js'
    },
    /********
     * 模块
     */
    module: {
        /*******
         * 在 Webpack 中忽略对已知文件的解析
        */
        // noParse: [/node_modules/, /jquery/, /mui/, /vue/],
        /**********
         * 加载器设置
        */
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
                // exclude: /node_modules/,
                // include: /^client\/*/,
                loader: ExtractTextPlugin.extract("style", "css")
                // loaders: [
                //     'file?name=style/[path][name].min.css',
                //     'extract',
                //     'css'
                // ]
            },
            // less 加载
            {
                test: /\.less$/,
                // exclude: /node_modules/,
                // include: /^client\/*/,
                loader: ExtractTextPlugin.extract("style", "css!less")
                // loaders: [
                //     'file?name=style/[path][name].min.css&context=' + path.join(config.client, 'resources/'),
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
    /*********************
     * 外部资源，引入第三方库，不会被打包
    */
    externals: {
        // "react": 'react',
        // 'react-dom': 'react-dom'
    },
    /********************
     * 其它解决方案配置
    */
    resolve: {
        // root: 'E:/github/flux-example/src', //绝对路径
        // alias: {
        //     AppStore : 'js/stores/AppStores.js',
        //     ActionType : 'js/actions/ActionType.js',
        //     AppAction : 'js/actions/AppAction.js'
        // },
        // 别名
        alias: {
            // react: 'react/dist/react.js'
        },
        // 扩展名 
        extensions: ['', '.js', '.css', '.html', '.less', '.jsx']
    },
    /********************
     * 插件
    */
    plugins: pluginsArr.concat(htmlPlugin)
};

console.log('---------->基本配置文件：\r\n', webpackBaseConfig);

module.exports = webpackBaseConfig;