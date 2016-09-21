import koaRouter from 'koa-router';
import Topic from '../controllers/topic';
import TopicValidator from '../validator/topic';

let router = new koaRouter({
    prefix: '/topic'
});;
let topic = new Topic();

// 创建话题
router.post('/create', TopicValidator.validateCreate, topic.create);
// 话题发表页面
router.get('/create', topic.getCreate);
// 话题详情页
router.get('/:id', topic.getInfo);

module.exports = router;
// export default router;