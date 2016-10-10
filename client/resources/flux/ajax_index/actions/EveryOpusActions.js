'use strict';
import IndexDispatcher from '../dispatcher/IndexDispatcher';
import MdyIndexConstants from '../constants/MdyIndexConstants';

let EveryOpusActions = {

    initData: function(data) {
        let action = {
            type: MdyIndexConstants.EVERYOPUS_INIT,
            data: data
        };
        IndexDispatcher.dispatch(action);
    },

    updateClickLikeStatus: function(data) {
        let action = {
            type: MdyIndexConstants.EVERYOPUS_UPDATE_CLICK_STATUS,
            data: data
        };
        IndexDispatcher.dispatch(action);
    }

};

export default EveryOpusActions;