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

const index = require('./server/routes/index');
router.use('/', index.routes(), index.allowedMethods());


app.on('error', function(err, ctx) {
    console.log(err);
    logger.error('server error', err, ctx);
});

// app.listen(3000, () => {
//     console.log(11111);
// });
module.exports = app;