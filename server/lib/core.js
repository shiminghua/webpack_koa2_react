import CommentController from './comment';
import TopicController from './topic';
import UserController from './user';

let Core = {
    get $User () {
        return UserController;
    },
    get $Comment () {
        return CommentController;
    },
    get $Topic () {
        return TopicController;
    }
};

export default Core;