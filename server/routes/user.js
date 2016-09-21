import koaRouter from 'koa-router';
import User from '../controllers/user';

let router = new koaRouter();
let user = new User();

// index
router.get('/user/:name', user.userIndex);

module.exports = router;
// export default router;