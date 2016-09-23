/**
 * 统一的错误码配置文件
 * 防止返回的错误码不统一
 */
import CommonError from './error/CommonError';
import UserError from './error/UserError';
import CommentError from './error/CommentError';
import TopicError from './error/TopicError';

const ErrorCode = {
  // 通用错误类型
  get CommonError() {
    return CommonError;
  },
  // 用户错误类型
  get UserError() {
    return UserError;
  },
  // 评论错误类型
  get CommentError() {
    return CommentError;
  },
  // 话题错误类型
  get TopicError() {
    return TopicError;
  }
};

export default ErrorCode;