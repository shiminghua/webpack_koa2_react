import mongoose from 'mongoose';
import config from '../config/config';

import User from './user';
import Topic from './topic';
import Comment from './comment';

mongoose.connect(config.db.mongodb.url, err => {
    if (err) {
        console.log('connect to %s error: ', config.db.mongodb.url, err.message);
        process.exit(1);
    }
});

let db = mongoose.connection;

export default {
    User: User,
    Topic: Topic,
    Comment: Comment
};