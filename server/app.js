import koa from 'koa';
import path from 'path';
import views from 'koa-views';
import convert from 'koa-convert';
import json from 'koa-json';
import errorHandler from 'koa-errorhandler';
import bodyparser from 'koa-bodyparser';
import logger from 'koa-logger';
// import koaStatic from 'koa-static2';
import koaStatic from 'koa-static';
import scheme from 'koa-scheme';
// import locales from 'koa-locales';
// import session from 'koa-session2';
import session from 'koa-generic-session';
import redisStore from 'koa-redis';
import flash from 'koa-flash';
import routerCache from 'koa-router-cache';
import gzip from 'koa-gzip';

const app = new koa();
app.keys = config.keys;

import config from './config/config'; // 配置文件
import schemeConfig from './scheme/scheme'; // 验证配置文件 
// import Store from './config/Store';

/***********
 * 错误处理中间件，放在所有中间件之前
 * errorhandler放到最上面，才能捕获下游抛出的错误。
 */
app.use(convert(errorHandler()));

/****
 * 配置中间件
 */
app.use(bodyparser());
app.use(logger());
app.use(json());

/*******
 * redis session 
 */
app.use(convert(
    session({
        key: "SESSIONID",
        store: redisStore(config.db.redis),
        expires: 24 * 3600 * 1000,
        maxAge: 3600 * 1000
    })
));
// app.use(session({
//     key: "SESSIONID",
//     store: new Store(),
//     expires: 24 * 3600 * 1000,
//     maxAge: 3600 * 1000
// }));
app.use(convert(flash())); // flash 基于session实现，需要放在session之后

/*******************
 * mongodb 
*/
// const mongoose = require('mongoose'); // mongodb
// mongoose.connect(config.db.mongodb, {
//     server: { poolSize: 20 }
// }, err => {
//     if (err) {
//         process.exit(1);
//     }
// });


/********************* 
 * middlewares 
*/
app.use(convert(scheme(schemeConfig, { debug: true })));

/***
 * 路由缓存，放在router前
 */
app.use(convert(routerCache(app, config.cache.router)));
/***
 * gzip 放在routerCache后，缓存的是gzip压缩后的内容。
 */
// app.use(convert(gzip()));

app.use(convert(koaStatic(path.join(__dirname, '/public'))));
app.use(views(config.server.path + 'views', {
    extension: 'ejs'
}));

// app.use(async (ctx, next) => {
//     ctx.state = {
//         name: 'aaa'
//     };
//     await next();
// });

/*********
 * 网站路由
 */
import initRoutes from './routes/router';
initRoutes(app);

// app.on('error', function(err, ctx) {
//     console.log(err);
//     logger.error('server error', err, ctx);
// });

// export default app;
module.exports = app;