/**
 * todo Header
 */
import React, { Component, PropTypes } from 'react';
import TextInput from './TextInput.react';
import TodoActions from '../actions/TodoActions';

class Header extends Component {

  state = {
    num: 0
  };
  
  render() {
    return (
      <div>
        <h1>todos</h1>
        <TextInput id="id" placeholder="What needs to be done?" onSubmit={this.handleSubmit} num={this.state.num} />
      </div>
    );
  }

  componentDidMount() {
    let _this = this;
    setTimeout(function() {
      _this.setState({
        num: 1
      });
    }, 3000);
  }

  /**
   * 表单提交事件
   */
  handleSubmit = (text) => {
    console.log('----->', text);
    if (text.trim()) {
      TodoActions.create(text);
    }
    console.log('button is clicked');
  };

}

export default Header;