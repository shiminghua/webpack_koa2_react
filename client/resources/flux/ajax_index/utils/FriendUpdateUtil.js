'use strict';
import FriendUpdateActions from '../actions/FriendUpdateActions';
import '../../../browser/javascript/mui';

let total = 1;

function getFriendUpdateData(pageno) {

    mui.ajax('/index/getFriendsUpdateWorks/' + pageno, {
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            // console.log(data);
            if(data.code  === 200) {
                FriendUpdateActions.initData(data.data.list);
                total = data.data.total;
            }
        },
        error: function(xhr, type, errorThrown) {
            //异常处理；
		    console.log(type);
        }
    });

}

function loadMore(pageno) {
    if(pageno <= total) {
        mui.ajax('/index/getFriendsUpdateWorks/' + pageno, {
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function(data) {
                // console.log(data);
                if(data.code  === 200) {
                    FriendUpdateActions.addData(data.data.list);
                    total = data.data.total;
                }
            },
            error: function(xhr, type, errorThrown) {
                //异常处理；
                console.log(type);
            }
        });
    }
}

export default {
    getFriendUpdateData: getFriendUpdateData,
    loadMore: loadMore
};