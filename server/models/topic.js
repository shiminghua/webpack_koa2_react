import mongoose from '../lib/ModelMongodb';
let Schema = mongoose.Schema;

let TopicSchema = new Schema({
    user: {
        name: { type: String, required: true },
        email: { type: String, required: true }
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tab: { type: String, required: true },
    pv: { type: Number, default: 0 },
    comment: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

TopicSchema.index({tab: 1, updated_at: -1});
TopicSchema.index({'user.name': 1, updated_at: -1});

let Topic = mongoose.model('Topic', TopicSchema);

class TopicModel extends Topic {

    constructor() {
        super();
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
    getNoReplyTopics () {
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

};

export default TopicModel;