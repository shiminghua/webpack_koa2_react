import TopicModel from '../models/topic';
import Controller from '../lib/controller';
import ErrorCode from '../config/ErrorCode';

let topicModel = new TopicModel();
/**
 * 首页 
 */

class Index extends Controller {

    constructor() {
        super();
    }

    async index(ctx) {
        // console.log('process----->', process);
        // 获取未回复的话题
        let noReplyTopics = await topicModel.getNoReplyTopics();
        // 获取tabs
        let tab = ctx.query.tab;
        let p = ctx.query.p || 1;
        let topics = await topicModel.getTopicsByTab(tab, p);

        let count = await topicModel.getTopicsCount(tab);
        await ctx.render('index', { 
            noReplyTopics, 
            topics, 
            tab: tab, 
            count: count,
            p: p
        });
    }

    /**
     * 获取未回复的话题
     */
    async getNoReplyTopics (ctx) {
        let topics = await topicModel.getNoReplyTopics();
        ctx.body = super.formatData(topics);
    }
    
};

export default Index;