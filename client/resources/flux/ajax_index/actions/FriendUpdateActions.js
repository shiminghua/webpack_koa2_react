'use strict';
import IndexDispatcher from '../dispatcher/IndexDispatcher';
import MdyIndexConstants from '../constants/MdyIndexConstants';

let FriendUpdateActions = {

    initData: function(data) {
        let action = {
            type: MdyIndexConstants.FRIEND_UPDATE_INIT,
            data: data
        };
        IndexDispatcher.dispatch(action);
    },

    addData: function(data) {
        
        let action = {
            type: MdyIndexConstants.FRIEND_UPDATE_ADD,
            data: data
        };
        IndexDispatcher.dispatch(action);

    }

};

export default FriendUpdateActions;