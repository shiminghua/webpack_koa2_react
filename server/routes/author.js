import koaRouter from 'koa-router';
import Signup from '../controllers/signup';

let router = new koaRouter({
    prefix: '/author'
});
let signup = new Signup();

router.get('/signup', signup.getSignupPage);

module.exports = router;
// export default router;