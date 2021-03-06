/**
 * 话题
 */
import TopicModel from '../models/topic';
import Controller from '../lib/controller';
import ErrorCode from '../config/ErrorCode';
import { formatData } from '../helpers/help';
import CommentModel from '../models/comment';

let topicModel = new TopicModel();
let commentModel = new CommentModel();
/**
 * 首页 
 */

class Topic extends Controller {

    constructor() {
        super();
    }

    // 发表话题
    async create(ctx) {
      let data = ctx.request.body;
      data.user = ctx.session.user;
      let topicInfo = await topicModel.addTopic(data);
      
      let returnData = {
        _id: topicInfo._id
      };
      // 不能直接为 formatData 传值 topicInfo ，会报调用栈超出的错误 
      let result = super.formatData(returnData);
      ctx.body = result;
    }

    // 话题发表页
    async getCreate(ctx) {
      if (!ctx.session.user) {
        ctx.redirect('/author/signin');
        return;
      }
      // 获取未回复的话题
      let noReplyTopics = await topicModel.getNoReplyTopics();
      await ctx.render('topic/create', {
        noReplyTopics
      });
    }

    // 话题详情页
    async getInfo(ctx) {
      // 获取话题详情
      let id = ctx.params.id;
      let topic = await topicModel.getTopicById(id);
      // 获取未回复的话题
      let noReplyTopics = await topicModel.getNoReplyTopics();
      // 获取话题的评论
      let comments = await commentModel.getCommentsByTopicId(id);

      await ctx.render('topic/topic', { 
          noReplyTopics, 
          topic,
          comments
      });
    }

    // 提交评论
    async addComment(ctx) {
      let data = ctx.request.body;
      data.user = ctx.session.user;

      await commentModel.addComment(data);
      await topicModel.incCommentById(data.topic_id);

      ctx.redirect('back');
    }
    
};

export default Topic;