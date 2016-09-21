/**
 * 话题模块验证错误码 
 */
const TopicError = {
  get TabIsNotEmpty() {
    return {
      code: 101000,
      msg: '话题板块不能为空！'
    };
  },
  get TitleIsNotEmpty() {
    return {
      code: 101001,
      msg: '话题标题不能为空！'
    };
  },
  get ContentIsNotEmpty() {
    return {
      code: 101002,
      msg: '话题内容不能为空！'
    };
  }
};

export default TopicError;