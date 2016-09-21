/**
 * 验证 - 登录注册验证
 */
import validator from 'validator';
import UserError from '../config/error/UserError';
import help from '../helpers/help';

class AuthorValidator {

  // 登录验证
  async validatePostSignin (ctx, next) {

    ctx.checkBody('name')
      .notEmpty(UserError.NameNotEmpty);
    ctx.checkBody('password')
      .notEmpty()
      .len(6, 16, UserError.PassNotEmpty);

    if(ctx.errors) {
      ctx.body = help.formatError(ctx.errors[0]);
      return;
    }

    await next();
  }

}

export default new AuthorValidator();