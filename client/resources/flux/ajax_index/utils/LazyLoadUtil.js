'use strict';
import '../../../browser/javascript/mui';
import '../../../browser/javascript/mui/mui.lazyload';
import '../../../browser/javascript/mui/mui.lazyload.img';

let arrStatus = {
    slider: 0,
    every: 0,
    artist: 0,
    teacher: 0
};

let isLogin = 0;
if(window.NODE_VALUE && window.NODE_VALUE.isLogin) {
    isLogin = window.NODE_VALUE.isLogin;
}

if(isLogin === 1) {
    arrStatus['friend'] = 0;
}

function lazyLoad() {
    window.lazyLoadApi = $(document).imageLazyload({
        placeholder: require('../../../browser/images/loading.png'),
        autoDestroy: false,
        diff: 0
    });
}

export default {
    setStatus: function(obj) {
        let status = true;
        for(let key in obj) {
            arrStatus[key] = obj[key];
        }
    },
    initLazyLoad: function() {
        let status = true;
        for(let key in arrStatus) {
            if(arrStatus[key] === 0) {
                status = false;
            }
        }

        if(status) {
            // console.log('loading');
            lazyLoad();
        }
        else {
            // console.log('not loading');
        }

    }
};