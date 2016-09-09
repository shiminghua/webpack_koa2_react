/**
 * 获取session中user信息，判定用户是否登录
 */

export default function setUser() {
  return async (ctx, next) => {
    let user = ctx.session.user;
    ctx.state.user = user;
    await next();
  }
};
