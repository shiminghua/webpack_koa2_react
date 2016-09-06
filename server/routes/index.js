import koaRouter from 'koa-router';
import IndexController from '../controllers/index';
let router = koaRouter();
let indexController = new IndexController();

router.get('/', indexController.index);

module.exports = router;
// export default router;