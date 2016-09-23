/**
 * 验证 - 话题
 */
import validator from 'validator';
import TopicError from '../config/error/TopicError';
import CommonError from '../config/error/CommonError';
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

  // 验证ID
  async validateID(ctx, next) {
    ctx.checkParams('id')
      .notEmpty(CommonError.IdNotEmpty);

    if(ctx.errors) {
      ctx.body = help.formatError(ctx.errors[0]);
      return;
    }

    await next();
  }

  // 验证提交内容不能为空
  async validateContent(ctx, next) {
    ctx.checkBody('content')
      .notEmpty(CommonError.ContentNotEmpty);
    
    if(ctx.errors) {
      ctx.body = help.formatError(ctx.errors[0]);
      return;
    }

    await next();
  }

}

export default new TopicValidator();