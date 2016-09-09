/**
 * 验证 - 登录注册验证
 */
import validator from 'validator';

class AuthorValidator {

  // 登录验证
  async validatePostSignin (ctx, next) {

    ctx.checkBody('name')
      .notEmpty('error name');
    ctx.checkBody('password')
      .notEmpty()
      .len(6, 16, 'error password');

    if(ctx.errors) {
      ctx.body = {
        code: 1002,
        msg: ctx.errors
      };
      return;
    }

    await next();
  }

}

export default new AuthorValidator();