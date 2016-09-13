/**
 * 控制器基类
 */
class Controller {
  
  constructor() {

  }

  /**
   * 初始化返回成功数据
   */
  formatData(data) {
    return {
      code: 200,
      msg: '请求成功！',
      data: data || []
    };
  }

  /**
   * 初始化返回错误信息
   */
  formatError(code, msg) {
    return {
      code: code || 400,
      msg: msg || '请求错误！',
      data: null
    };
  }

};

export default Controller;