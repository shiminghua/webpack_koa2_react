'use strict';
import BtnsDispatcher from '../dispatcher/BtnsDispatcher';
import Events, { EventEmitter } from 'events';
import assign from 'object-assign';

// 定义常量
const CHANGE_EVENT = 'change';
const Constants = {
    BTNS_CLICKLIKE = 'BTNS_CLICKLIKE'
};

// 定义数据，点赞数量
let clickData = {
    num: 0, // 点赞数量
    isClick: 0 // 点赞状态：0未点赞，1已点赞
};

/*******************
 * 修改点赞数量
*/
function updateNum(num) {
    clickData.num = num;
    clickData.isClick === 0 ? clickData.isClick = 1 : clickData.isClick = 0;
}

/********************
 * 触发 CHANGE_EVENT 事件
*/
function emitChange() {
    ClickLikeStore.emit(CHANGE_EVENT);
}

/***********************
 * 点赞数据仓库
*/
let ClickLikeStore = assign({}, EventEmitter.prototype, {
    getClickNum: function() {
        return clickNum;
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

/*************************
 * 分发起注册函数
*/
function handleAction(action) {
    let num = action.num;
    switch(action.type) {
        case Constants.BTNS_CLICKLIKE:
            updateNum(num);
            emitChange();
            break;
        default :
            break;
    }
}

/*****************
 * 向分发起注册事件
*/
ClickLikeStore.dispatchToken = BtnsDispatcher.register(handleAction);

// 暴露模块
export default ClickLikeStore;