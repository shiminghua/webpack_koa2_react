/**
 * 用户模块验证错误码 
 */
const UserError = {
  // 用户名或密码错误
  get NameOrPassError() {
    return {
      code: 100000,
      msg: '用户名或密码错误!'
    }
  },
  // 用户名不能为空
  get NameNotEmpty() {
    return {
      code: 100001,
      msg: '用户名不能为空！'
    }
  },
  // 密码不能为空
  get PassNotEmpty() {
    return {
      code: 100002,
      msg: '密码不能为空！'
    }
  },
  // 用户名已存在
  get NameIsExist() {
    return {
      code: 100003,
      msg: '用户名已存在！'
    }
  },
  // 图片验证码错误
  get ImgCodeIsError() {
    return {
      code: 100004,
      msg: '图片验证码错误！'
    }
  },
  // 图片验证码不能为空
  get ImgCodeNotEmpty() {
    return {
      code: 100005,
      msg: '图片验证码不能为空！'
    }
  },
  // 手机验证码错误
  get PhoneCodeIsError() {
    return {
      code: 100006,
      msg: '手机验证码错误！'
    }
  },
  // 手机验证码不能为空
  get PhoneCodeNotEmpty() {
    return {
      code: 100007,
      msg: '手机验证码不能为空！'
    }
  }
};

export default UserError;