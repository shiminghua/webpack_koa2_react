import TopicModel from '../models/topic';

let topicModel = new TopicModel();
/**
 * 首页 
 */

class Index {

    constructor(props) {

    }

    async index(ctx) {
        let noReplyTopics = await topicModel.getNoReplyTopics();
        await ctx.render('index', { noReplyTopics });
    }

    /**
     * 获取未回复的话题
     */
    async getNoReplyTopics (ctx) {
        let topics = await topicModel.getNoReplyTopics();
        ctx.body = {
            code: 200,
            msg: '请求成功',
            data: topics
        };
    }
    
};

export default Index;