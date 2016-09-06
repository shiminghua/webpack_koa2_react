import { Comment } from '../models/index';

class CommentController {
    
    constructor() {
        // super();
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

}

export default CommentController;