'use strict';
import IndexDispatcher from '../dispatcher/IndexDispatcher';
import Events, { EventEmitter } from 'events';
import assign from 'object-assign';
import MdyIndexConstants from '../constants/MdyIndexConstants';

const CHANGE_EVENT = 'change';

let dataEveryOpus = {};

function initData(data) {
    let id = 0;
    let i = 0, len = data.length;
    for(; i < len; i++) {
        id = new Date().getTime() + '-' + Math.floor(Math.random() * 999999);
        dataEveryOpus[id] = data[i];
        dataEveryOpus[id].isClick = 0; // 是否已点赞：0未点赞；1已点赞
    }
}

function updateClickLikeStatus(data) {
    let i = 0, len = data.length, item;
    for(; i < len; i++) {
        item = data[i];
        for(let key in dataEveryOpus) {
            if(dataEveryOpus[key].id === item.id) {
                dataEveryOpus[key].isClick = item.status;
            }
        }
    }
}

function emitChange() {
    EveryOpusStore.emit(CHANGE_EVENT);
}

let EveryOpusStore = assign({}, EventEmitter.prototype, {

    getAll: function() {
        return dataEveryOpus;
    },
    getAllIds: function() {
        let workIds = [];
        // let i = 0;
        for(let key in dataEveryOpus) {
            workIds.push(dataEveryOpus[key].id);
            // workIds[key] = dataEveryOpus[key].id;
            // i++;
        }
        return workIds;
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

function handleAction(action) {
    let data = action.data;
    switch(action.type) {
        case MdyIndexConstants.EVERYOPUS_INIT:
            if(data.length > 0) {
                initData(data);
                emitChange();
            }
            break;
        case MdyIndexConstants.EVERYOPUS_UPDATE_CLICK_STATUS:
            updateClickLikeStatus(data);
            emitChange();
            break;
        default :
            break;
    }

}

EveryOpusStore.dispatchToken = IndexDispatcher.register(handleAction);


export default EveryOpusStore;