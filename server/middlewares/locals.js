/**
 * 设置locals参数
 */
export default function setLocals(locals) {
  return async (ctx, next) => {
    ctx.state = locals;
    await next();
  }
};