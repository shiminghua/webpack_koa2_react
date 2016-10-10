'use strict';
import Events, { EventEmitter } from 'events';
import assign from 'object-assign';
import IndexDispatcher from '../dispatcher/IndexDispatcher';
import MdyIndexConstants from '../constants/MdyIndexConstants';
import WebUtil from '../utils/webutil';

const CHANGE_EVENT = 'change';

let dataFriend = {};

function initData(data) {
    // console.log(1111);
    dataFriend = WebUtil.initData(data);
}

function addData(data) {
    dataFriend = assign(dataFriend, WebUtil.initData(data));
}

function emitChange() {
    FriendUpdateStore.emit(CHANGE_EVENT);
}

let FriendUpdateStore = assign({}, EventEmitter.prototype, {

    getAll: function() {
        return dataFriend;
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

function handleAction(action) {

    let data = action.data;

    switch (action.type) {
        case MdyIndexConstants.FRIEND_UPDATE_INIT:
            if(data.length > 0) {
                initData(data);
                emitChange();
            }
            break;

        case MdyIndexConstants.FRIEND_UPDATE_ADD:
            if(data.length > 0) {
                addData(data);
                emitChange();
            }
            break;
    
        default:
            break;
    }

}

FriendUpdateStore.dispatchToken = IndexDispatcher.register(handleAction);

export default FriendUpdateStore;