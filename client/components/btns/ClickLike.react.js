'use strict';

import React, {Component} from 'react';
import '../../browser/javascript/mui';

// 定义样式
let spanStyle = { 'marginLeft': '0px','paddingRight': '5px' };
let spanStyleClicked = {marginLeft: '0', paddingRight: '5px', color: 'red'};

let isClicking = 0; // 0为可以点赞；1未正在点赞中，不能重复点赞；过滤重复点击事件
// console.log(mui.os());
/*************************
 * 点赞按钮
 * */
class ClickLike extends Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            num: props.clickLikeNum || 0, // 点赞数量
            isClick: props.isClick || 0 // 点赞状态：0未点赞，1已点赞
        };
    }
    /*****************
     * 组件接受属性时执行 - props
     * 每次属性改变时函数被执行，但是第一次渲染时不会执行
    */
    componentWillReceiveProps(nextProps) {
        this.setState({
            num: nextProps.clickLikeNum || 0, // 点赞数量
            isClick: nextProps.isClick || 0 // 点赞状态：0未点赞，1已点赞
        });
    }
    // 点赞事件
    handleClick(event) {
        // 阻止冒泡
        event.preventDefault();
        event.stopPropagation();
        // 正在请求接口时返回
        if(isClicking === 1) {
            return;
        }
        // 动画显示字符
        let str = '+1';
        // 登录时
        if(window.NODE_VALUE.isLogin === 1) {
            let numClick = this.state.num;
            let isClick = this.state.isClick === 0 ? 1 : 0;
            if(this.state.isClick === 1) {
                numClick--;
                str = '-1';
            }
            else {
                numClick++;
                str = '+1';
            }
            this.setState({
                num: numClick,
                isClick: isClick
            });
            if(this.props.onClickLike) {
                this.props.onClickLike(event, numClick);
            }
            this.ajaxClickLike();

            this.animateClick(str);
            // mui.toast('点赞成功！');
        }
        // 未登录时
        else {
            mui.alert('请先登录后再点赞！');
        }

    } 

    // 动画
    animateClick(str) {
        
        let elem = this.refs.clickAnimate;
        elem.innerHTML = str;
        elem.className = 'click-animate';
        setTimeout(function() {
            elem.className = '';
            elem.innerHTML = '';
        }, 1000);

    }

    // 调用后台接口
    ajaxClickLike() {

        if(isClicking === 1) {
            return;
        }

        isClicking = 1;

        mui.ajax('/ajax/clicklike/clickAndCancelClickLike', {
            type: 'post',
            data: {
                obj_id: this.props.objId,
                own_user_id: this.props.ownUserId,
                work_title: this.props.workTitle,
                obj_type: this.props.objType,
                comments_content: this.props.commentsContent
            },
            dataType: 'json',
            success: function(body) {
                if(body.code === 200) {
                    console.log('click like is success');
                }
                else {
                    console.log(body.message);
                }
                isClicking = 0;
            },
            error: function() {
                console.log('click like is have a error.');
                isClicking = 0;
            }
        });
    }

    componentDidMount() {
        // console.log(this.refs.clickAnimate);
    }

    render() {
        
        return (
            <div className="mui-pull-right">
                <span className="mui-icon iconfont icon-like icon-like-aux"
                    style={ this.state.isClick === 0 ? spanStyle : spanStyleClicked } 
                    onClick={ this.handleClick.bind(this) }><i ref='clickAnimate'></i></span>
                <span>{this.state.num}</span>
            </div>
        );
    }
}

ClickLike.propType = {
    clickLikeNum: React.PropTypes.number.isRequired
};

export default ClickLike;