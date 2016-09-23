import mongoose from '../lib/ModelMongodb';

let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

let CommentSchema = new Schema({
    topic_id: { type: ObjectId, required: true },
    user: {
        name: { type: String, required: true },
        email: { type: String, required: true }
    },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

CommentSchema.index({topic_id: 1, updated_at: 1});

let Comment = mongoose.model('Comment', CommentSchema);

class CommentModel extends Comment {

    constructor() {
        super();
    }

    /**
     * 添加一条评论
     */
    addComment (data) {
        return Comment.create(data);
    }

    /**
     * 根据话题ID获取对应评论
     */
    getCommentsByTopicId (id) {
        return Comment.find({topic_id: id}).sort('updated_at').exec();
    }

};

export default CommentModel;