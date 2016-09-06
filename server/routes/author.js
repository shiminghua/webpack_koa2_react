import koaRouter from 'koa-router';
import User from '../controllers/user';

let router = new koaRouter({
    prefix: '/author'
});
let user = new User();

// 获取注册页面
router.get('/signup', user.getSignupPage);
// 用户注册
router.post('/signup', user.postSignup);
// 退出
router.get('/logout', user.logout);
// 登录页面
router.get('/signin', user.getSignin);
// 登录
router.post('/signin', user.postSignin);

module.exports = router;
// export default router;