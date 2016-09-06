import coCache from 'co-cache';
import { Topic } from '../models/index';

const cache = coCache({
    expire: 10 * 1000
});

class TopicController {

    constructor() {
        // super();
    }

    /***
     * 新建一个话题
     */
    addTopic (data) {
        return Topic.create(data);
    }

    /**
     * 通过ID获取一个话题，并增加PV 1
     */
    getTopicById (id) {
        return Topic.findByIdAndUpdate(id, {$inc: {pv: 1}}).exec();
    }

    /**
     * 通过标签和页码获取10个话题
     */
    getTopicsByTab (tab, p) {
        let query = {};
        if (tab) {
            query.tab = tab;
        }
        return Topic.find(query).skip((p - 1) * 10).sort('-updated_at').limit(10).select('-content').exec();
    }

    /**
     * 获取用户所有话题
     */
    getTopicsByName (name) {
        return Topic.find({'user.name': name}).sort('-updated_at').exec();
    }

    /**
     * 通过ID增加一个话题的评论数
     */
    incCommentById (id) {
        return Topic.findByIdAndUpdate(id, {$inc: {comment: 1}}).exec();
    }

    /**
     * 获取5条最新未评论的话题
     */
    getNoReplayTopics () {
        return Topic.find({comment: 0}).sort('-updated_at').limit(5).select('title').exec();
    }

    /**
     * 获取不同标签的话题数
     */
    getTopicsCount (tab) {
        let query = {};
        if (tab) {
            query.tab = tab;
        }
        return Topic.count(query).exec();
    }

}

export default TopicController;