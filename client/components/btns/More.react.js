'use strict';
import React, {Component} from 'react';

/*
 * 页面加载更多组件
 * */
class More extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: 0
        };
    }

    /******************
     * componentWillReceiveProps
    */
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.isLoading);
        this.setState({
            isLoading: nextProps.isLoading
        });
    }

    handleTouchStart(event) {

        if(this.props.loadMore) {
            this.props.loadMore();
        }

    }

    render() {

        return (
            <div className="page-more">
                <button type="button" className="mui-btn mui-btn-danger mui-icon iconfont icon-lower brad-1" onTouchStart={ this.handleTouchStart.bind(this) }>加载更多{this.state.isLoading ? '...' : ''}</button>
            </div>
        );

    }

}

export default More;