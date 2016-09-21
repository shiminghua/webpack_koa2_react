import koaRouter from 'koa-router';
const router = koaRouter();

/*******
 * 路由文件数组
 */
const arrRouters = [
    './index', // 首页路由
    './test', // 测试页路由
    './author', // 登录注册
    './user', // 用户中心
    './topic', // 话题
];

/*********
 * 初始化路由规则函数
 */
function initRoutes(app) {
    arrRouters.forEach(function(path) {
        let router = require(path);
        app.use(router.routes()).use(router.allowedMethods());
    });
}

export default initRoutes;