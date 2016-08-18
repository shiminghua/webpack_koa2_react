const koa = require('koa'); // koa2
const router = require('koa-router')(); // 路由
const views = require('koa-views'); // 视图
const convert = require('koa-convert'); // 转换
const json = require('koa-json'); // json
const onerror = require('koa-onerror'); // 错误
const bodyparser = require('koa-bodyparser'); // bodyparser
const logger = require('koa-logger'); // 日志
const koaStatic = require('koa-static');

const app = new koa();

const config = require('./server/config/config.server.js'); // 配置文件

/*******************
 * mongodb 
*/
const mongoose = require('mongoose'); // mongodb
mongoose.connect(config.db, {
    server: { poolSize: 20 }
}, err => {
    if (err) {
        process.exit(1);
    }
});

// 常量
const isDev = app.env !== 'production';

// webpack 配置
// if (isDev) {
if (isDev) {

    // app.reload = true;

    const webpack = require('webpack');
    // const webpackDevMiddleware = require('koa-webpack-dev-middleware');
    // const webpackHotMiddleware = require('koa-webpack-hot-middleware');
    const koaWebpackMiddle = require('koa-webpack-middleware');
    // import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware';
    const webpackBaseConfig = require('./webpack/webpack.base.config');

    // console.log(webpackBaseConfig);

    let compile = webpack(webpackBaseConfig);

    // attach to the compiler & the server
    // app.use(koaWebpackMiddle.devMiddleware(compiler, {
    //     publicPath: webpackBaseConfig.output.publicPath, // public path should be the same with webpack config
    //     noInfo: true,
    //     stats: {
    //         colors: true
    //     }
    // }));
    // app.use(koaWebpackMiddle.hotMiddleware(compiler));
    app.use(koaWebpackMiddle.devMiddleware(compile, {
        // display no info to console (only warnings and errors)
        noInfo: false,

        // display nothing to the console
        quiet: false,

        // switch into lazy mode
        // that means no watching, but recompilation on every request
        lazy: true,

        // watch options (only lazy: false)
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },

        // public path to bind the middleware to
        // use the same as in webpack
        publicPath: webpackBaseConfig.output.publicPath,

        // custom headers
        headers: { "X-Custom-Header": "yes" },

        // options for formating the statistics
        stats: {
            colors: true
        }
    }));
    app.use(koaWebpackMiddle.hotMiddleware(compile, {
    // log: console.log,
    // path: '/__webpack_hmr',
    // heartbeat: 10 * 1000
    }));

}

/********************* 
 * middlewares 
*/
app.use(convert(bodyparser()));
app.use(json());
app.use(logger());
app.use(convert(koaStatic(config.server.path + '/public')));
app.use(views(config.server.path + '/views', {
    extension: 'ejs'
}));


/*********
 * 网站路由
 */
const index = require('./server/routes/index');
app.use(router.routes()).use(router.allowedMethods());




app.on('error', function(err, ctx) {
    console.log(err);
    logger.error('server error', err, ctx);
});

module.exports = app;