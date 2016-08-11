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

const config = require('./config/config.server.js'); // 配置文件

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

/************
 * 常量
 */
const isDev = app.env !== 'production';

/***************************
 * webpack 配置
 */
if (isDev) {

    // app.reload = true;

    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackBaseConfig = require('./webpack/webpack.base.config');

    let compiler = webpack(webpackBaseConfig);

    // attach to the compiler & the server
    // app.use(webpackDevMiddleware(compiler, {
    //     publicPath: webpackBaseConfig.output.publicPath, // public path should be the same with webpack config
    //     noInfo: true,
    //     stats: {
    //         colors: true
    //     }
    // }));
    // app.use(webpackHotMiddleware(compiler));

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
app.use(router.routes()).use(router.allowedMethods());

/*********
 * 网站路由
 */
const index = require('./server/routes/index');
router.use('/', index.routes(), index.allowedMethods());



app.on('error', function(err, ctx) {
    console.log(err);
    logger.error('server error', err, ctx);
});

module.exports = app;