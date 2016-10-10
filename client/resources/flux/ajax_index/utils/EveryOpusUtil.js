'use strict';
import EveryOpusActions from '../actions/EveryOpusActions';
import EveryOpusStore from '../stores/EveryOpusStore';
import '../../../browser/javascript/mui';

function getEveryOpusData() {

    mui.ajax('/index/getWorksRecommended', {
        type: 'GET',
        data: {},
        dataType: 'json',
        success: function(data) {
            if(data.code  === 200) {
                EveryOpusActions.initData(data.data);
                getClickLikeStatus();
            }
        },
        error: function(xhr, type, errorThrown) {
            //异常处理；
		    console.log(type);
        }
    });

}

function getClickLikeStatus() {

    let ids = EveryOpusStore.getAllIds();
    if(ids.length > 0) {

        mui.ajax('/ajax/clicklike/quryIsClickedLikeListByUid', {
            type: 'POST',
            data: {
                workIds: ids,
                type: 1
            },
            dataType: 'json',
            traditional: true, // 已不加 [] 的方式提交数据
            success: function(data) {
                if(data.code  === 200) {
                    EveryOpusActions.updateClickLikeStatus(data.data);
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
    getEveryOpusData: getEveryOpusData
    // getClickLikeStatus: getClickLikeStatus
};