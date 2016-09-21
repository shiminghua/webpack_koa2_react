/**
 * 控制器基类
 */
class Controller {
  
  constructor() {

  }

  /**
   * 格式化成功数据
   * @params obj data
   * @return obj
   */
  formatData(data = null) {
    return {
      code: 200,
      msg: '请求成功！',
      data: data
    };
  }

  /**
   * 初始化返回错误信息
   */
  formatError(code, msg) {
    return {
      code: code || 400,
      msg: msg || '请求错误！'
    };
  }

};

export default Controller;