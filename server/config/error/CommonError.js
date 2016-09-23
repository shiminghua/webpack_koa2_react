/**
 * 通用错误配置 
 */
const CommonError = {
  get IdNotEmpty() {
    return {
      code: 111001,
      msg: 'ID不能为空！'
    };
  },
  get IdNotStandard() {
    return {
      code: 111002,
      msg: 'ID不符合标准！'
    };
  },
  get ContentNotEmpty() {
    return {
      code: 111003,
      msg: '提交的内容不能为空！'
    };
  }
};

export default CommonError;