/**
 * 帮助函数
 */
const Help = {
  /**
   * 格式化成功数据
   * @params obj data
   * @return obj
   */
  formatData: async function(data) {
    return {
      code: 200,
      msg: '请求成功！',
      data: data || null
    };
  },

  /**
   * 初始化返回错误信息
   */
  formatError: function(obj, data = null) {
    let tempError = obj[Object.keys(obj)[0]];  
    let error = tempError || {
      code: 400,
      msg: '未知错误！'
    };
    if (data != null) {
      error.data = data;
    }
    return error;
  },

};

export default Help;