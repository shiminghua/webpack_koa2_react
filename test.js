import koa from 'koa';
import views from 'koa-views';
import convert from 'koa-convert';
import json from 'koa-json';
import onerror from 'koa-onerror';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
import koaStatic from 'koa-static';


import webpack from 'webpack';
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware';
import webpackBaseConfig from './webpack/webpack.hot.config';

const app = new koa();

const config = require('./server/config/config'); // 配置文件

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
if (isDev) {

    let compile = webpack(webpackBaseConfig);
    app.use(devMiddleware(compile, {
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
    app.use(hotMiddleware(compile, {
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
app.use(convert(koaStatic(config.server.path + 'public')));
app.use(views(config.server.path + 'views', {
    extension: 'ejs'
}));
console.log('-----配置', config);

/*********
 * 网站路由
 */
// app.use(router.routes()).use(router.allowedMethods());
import index from './server/routes/index';
app.use(index.routes()).use(index.allowedMethods());




app.on('error', function(err, ctx) {
    console.log(err);
    logger.error('server error', err, ctx);
});

module.exports = app;