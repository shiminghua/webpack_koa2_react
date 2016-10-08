/**
 * counter
 */
import React, { Component, PropTypes } from 'react';

class Counter extends Component {

  static propTypes = {
    //increment必须为fucntion,且必须存在
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    //counter必须为数字，且必须存在
    counter: PropTypes.number.isRequired
  }

  render() {
    console.log(this.props);
    // 从组件的 props 属性中导入4个方法和一个变量
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    // console.log(increment);
    // 渲染组件，包括一个数字，四个按钮
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => { incrementAsync(); }}>Increment async</button>
      </p>
    );
  }
}

export default Counter;