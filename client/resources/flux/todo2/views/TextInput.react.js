/**
 * TextInput
 */
import React, { Component, PropTypes } from 'react';

/**
 * es2016+规范的写法
 * 生命周期函数
 */
class TextInput extends Component {

  /**
   * 构造函数
   */
  constructor(props) {
    super(props);
  }

  /**
   * mixins 在组件规范中是个数组
   * 在es2016+语法中不推荐使用，使用高阶组件包裹本组件，或者使用装饰器
   */
  // static mixins = [SetIntervalMixin];

  /**
   * 静态属性的新写法
   * 为属性添加类型检查，= propTypes
   */
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  /**
   * 设置组件默认状态，this.props
   * 等同于函数 getDefaultProps
   */
  static defaultProps = {
    num: 0
  };

  /**
   * 实例属性的新写法
   * 设置组件状态，= getInitialState
   */
  state = {
    inputValue: ''
  };

  /**
   * 使用属性函数可以在调用时省掉bind(this)，目前只支持 => 函数
   * 输入框change事件
   */
  handleInputValueChange = (event) => {
    let newInputValue = event.target.value;
    this.setState({
      inputValue: newInputValue
    });
  };

  /**
   * 使用属性函数可以在调用时省掉bind(this)，目前只支持 => 函数
   * 表单提交事件
   */
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form is submited.', this.state.inputValue);
    this.props.onSubmit(this.state.inputValue);
    console.log(this.props.num);
  };

  /**
   * 在初始渲染前执行
   */
  componentWillMount() {
    console.log('componentWillMount');
  }

  /**
   * 在组件被渲染成DOM后调用
   */
  componentDidMount() {
    console.log('componentDidMount');
    // this.setInterval(this.tick, 1000);
  }

  tick() {
    console.log(1);
  }

  /**
   * 每次有属性改变时执行，但第一次渲染时不会执行
   * 参数是新属性的对象
   */
  componentWillReceiveProps(nextProps) {
    // 通过this.props访问当前的属性
    // 可以为this.props 和 nextProps 做任意逻辑比较
    console.log('componentWillReceiveProps');
  }

  /**
   * 该函数在组件渲染前被调用，每次属性改变或者状态被回复都会调用。
   * 在初始渲染前或者是使用forceUpdate时不会被调用
   * 必须返回true或false;返回false会跳过渲染函数render,并且会跳到生命周期的下一步，即：componentWillUpdate 和 componentDidUpdate
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  /**
   * 组件更新渲染时就调用，无法使用 setState
   * 组件初次渲染时不会调用
   */
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  /**
   * DOM的所有渲染更新被处理完后执行
   */
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  /**
   * 组件卸载时调用
   */
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  /**
   * 必须，渲染函数
   */
  render() {
    return (
      <form>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputValueChange} placeholder={this.props.placeholder} />
        <input type="submit" value="提交" onClick={this.handleFormSubmit} />
      </form>
    );
  }

}

export default TextInput;


/**
 * mixins 的使用 - 定时器例子
 */
let SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};

let TickTock = React.createClass({
  mixins: [SetIntervalMixin],
  componentDidMount: function() {
    this.setInterval(this.tick, 1000);
  },
  tick: function() {
    console.log(1111);
  },
  render: function() {
    return (
      <div>mixins test</div>
    );
  }
});