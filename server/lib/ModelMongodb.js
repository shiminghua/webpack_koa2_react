/**
 * 连接mongodb数据库
 */
import mongoose from 'mongoose';
import config from '../config/config';

/** 
 * 连接
 */
mongoose.connect(config.db.mongodb.url);
/**
 * 连接成功
 */
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection open to ' + config.db.mongodb.url);
});
/**
 * 连接异常
 */
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected');
});

export default mongoose;