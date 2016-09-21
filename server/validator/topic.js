/**
 * 验证 - 话题
 */
import validator from 'validator';
import TopicError from '../config/error/TopicError';
import help from '../helpers/help';

class TopicValidator {

  // 登录验证
  async validateCreate (ctx, next) {

    ctx.checkBody('tab')
      .notEmpty(TopicError.TabIsNotEmpty);
    ctx.checkBody('title')
      .notEmpty(TopicError.TitleIsNotEmpty);
    ctx.checkBody('content')
      .notEmpty(TopicError.ContentIsNotEmpty);

    if(ctx.errors) {
      ctx.body = help.formatError(ctx.errors[0]);
      return;
    }

    await next();
  }

}

export default new TopicValidator();