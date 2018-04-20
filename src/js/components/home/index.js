import React, {Component, PropTypes} from 'react';
import HomeHeader from "./homeHeader/index";
import HomeItems from './homeItems/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { LoadingCenter } from '../common/loading/index'
import AdBox from './Ad/index';
import CheapOrReducers from './greatDeals/index';
import Ulike from './Ulike/index';
import style from './index.scss';
import * as getAd from '../../action/adActions';
import * as getLike from '../../action/Ulike';


import { Lifecycle } from 'react-router'


class Home extends Component {
	 constructor(props){
        super(props);
        this.state = {
            initialDone: this.props.Ad.haveData,
        }
        this.loadMore = this.loadMore.bind(this);
        this.skipToLocation = this.skipToLocation.bind(this);
    }

	 render() {
	 	const { history ,Ad , Ulikes , getAdAction ,hashHistory } = this.props;
        let  isLoading = false;
        return (
            <div>
            {
                !this.state.initialDone ?  <LoadingCenter ></LoadingCenter> : <div  className={style.bg}>
                    <HomeHeader history={history} ></HomeHeader>
                        <div className={style.homePage_mar}>
                             <HomeItems></HomeItems>
                        </div>
                    <AdBox ads={Ad}></AdBox>
                    <CheapOrReducers data={Ad} type={1}></CheapOrReducers>
                    <CheapOrReducers data={Ad} type={2}></CheapOrReducers>
                    <Ulike data={Ulikes} loadData={this.loadMore} isLoading={isLoading}  skipToDetail={this.skipToLocation}/>
                </div>
            }
            </div>
         
        )
    }
    componentDidMount() {
        this.props.getAdAction.getAd('/data')
        this.props.getLikeAction.getLike('/ulike');

    }
     componentWillReceiveProps(nextProps) {
        this.setState({
            initialDone: nextProps.Ad.haveData
        });
    }
    skipToLocation (id){
        this.props.history.push(`/detail/${id}`);
    }
    loadMore(){
        this.props.getLikeAction.getLike('/ulike');
        console.log("滚动到底部了")
    }
}

const mapStateToProps = state => ({
  Ad:state.Ad,
  Ulikes : state.getUlike
})

const mapDispatchToProps = dispatch => ({
  getAdAction: bindActionCreators(getAd, dispatch),
  getLikeAction: bindActionCreators(getLike, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Home);

