'use strict';
import React, {Component} from 'react';
import More from '../../../components/btns/More.react';
import FriendUpdateStore from '../stores/FriendUpdateStore';
import FriendUpdateActions from '../actions/FriendUpdateActions';
import FriendUpdateUtil from '../utils/FriendUpdateUtil';
import WebUtil from '../utils/webutil';
import LazyLoadUtil from '../utils/LazyLoadUtil';

let pageno = 1;
FriendUpdateUtil.getFriendUpdateData(pageno);

let liStyle1 = {
            'padding': '.5rem',
            'backgroundColor': '#fff',
            'border': '1px solid #EAEAEA',
            'width': '48%',
            'marginTop': '4%',
            'textAlign': 'initial',
            marginRight: '4%'
        };
let liStyle2 = {
            'padding': '.5rem',
            'backgroundColor': '#fff',
            'border': '1px solid #EAEAEA',
            'width': '48%',
            'marginTop': '4%',
            'textAlign': 'initial'
        };

function getStateData() {
    return FriendUpdateStore.getAll()
}

let isLoading = 0;

/*********
 * 好友更新
*/
class IndexFriendUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: getStateData(),
            isLoading: 0
        };
    }

    componentDidMount() {
        FriendUpdateStore.addChangeListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        FriendUpdateStore.removeChangeListener(this.onChange.bind(this));
    }

    onChange() {        
        this.setState({
            data: getStateData(),
            isLoading: 0
        });
        LazyLoadUtil.setStatus({
            friend: 1
        });
        LazyLoadUtil.initLazyLoad();
    }

    handleLoadMore() {
        pageno++;
        FriendUpdateUtil.loadMore(pageno);
        this.setState({
            isLoading: 1
        });
    }

    render() {

        let data = this.state.data;
        let items = [], friendData, i = 0;
        // console.log(data);
        for(let key in data) {
            friendData = data[key];
            let url = WebUtil.initUrl(friendData.worksImage.path);
            items.push(
                <li className="mui-table-view-cell mui-media mui-col-xs-6" style={ !(i%2) ? liStyle1 : liStyle2 } key={key}>
                    <a href={ 'javascript:;' } style={{ 'margin': '0px','padding': '0px' }}>
                        <img className="mui-media-object" src={url} style={{ 'width': '100%','height': '7.875rem' }}/>
                        <div className="mui-media-body" style={{ 'color': '#3E3E3E','fontSize': '12px','textAlign': 'center' }}>
                            {friendData.title}
                        </div>
                    </a>
                </li>);
            i++;
        }

        return (
            <div className="c-friend" style={{ 'backgroundColor': '#f8f8f8' }}>
                <div className="mui-text-center c-list-t">
                    <p>NEW FRIENDS</p>
                    <h5>好友更新</h5>
                </div>
                <ul className="mui-table-view mui-grid-view" style={{ 'padding': '10px','backgroundColor': '#f8f8f8' }}>
                    {items}
                </ul>

                <More isLoading={this.state.isLoading} loadMore={this.handleLoadMore.bind(this)} />

            </div>
        );

    }

}


export default IndexFriendUpdate;