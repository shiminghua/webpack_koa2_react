/**
 * 通用头部
 */
import React, { Component } from 'react';

class HeaderReact extends Component {

  // componentWillMount
  constructor(props) {
    super(props);
  }

  // getDefaultProps
  static defaultProps = {
    isLogin: 0
  }

  // propTypes
  static propTypes = {
    isLogin: React.PropTypes.number.isRequired
  }

  // getInitialState
  state = {
    title: 'header'
  }

  // render
  render() {

    let loginStr = [];
    if (this.props.isLogin === 1) {
      loginStr.push(<a href="/author/logout" key='0' className="item">登出</a>);
    }
    else {
      loginStr.push(<a href="/author/signup" key='1' className="item">注册</a>);
      loginStr.push(<a href="/author/signin" key='2' className="item">登录</a>);
    }

    return (
      <div className="ui fixed menu navbar">
        <div className="container">
          <a href="/" className="item">koa2-react</a>
          <div className="item">koa2+react测试</div>
          <div className="right menu">
              { loginStr }
          </div>
        </div>
      </div>
    );
  }

}

export default HeaderReact;