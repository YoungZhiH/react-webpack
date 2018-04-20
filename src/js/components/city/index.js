import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import BackIcon from './back.png';
import style from './index.scss';
import * as getCity from '../../action/cityActions';
import '../../serverData/MockData'
import {LoadingCenter} from '../common/loading/index'


class City extends Component {
	constructor(props){
        super(props);
        this.state = {
    		}

    }
	 render() {
	 	 		const { history  , cities } = this.props;
        let data = this.props.location.state || {id:null,age:null};
        return (
	          <div className={style.container}>

		          <div className={style.headerContainer}>
		          	<img src={BackIcon} onClick={()=>history.goBack()}/>
		          	<span>
				            选择城市
				        </span>
		          </div>
		          <div className={style.gpsCity}>
                  <span>非明文传递的参数  id:{data.id}-{data.age}</span>
                  GPS定位
              </div>
							<p className={style.hotCity}>热门城市</p>
								<div className={style.hotCityContainer}>
									{cities.haveData ?  cities.items.map((item,index)=>{
                        return (
                            <div key={index} className={style.hotCityName} >
                            {item.login}
                            </div>
                        )
                    }) : <LoadingCenter ></LoadingCenter>
                  }
							 	</div>
						</div>
        )
    }
  componentDidMount(){
    console.log("city页面")
    // let data = this.props.location.state;
    // console.log(data)
    console.log(this.id)
    console.log(this.props.match)
  	this.props.getCities.getCity('https://api.github.com/users');
    
	}
}

const mapStateToProps = state => ({
  cities:state.cities
})

const mapDispatchToProps = dispatch => ({
  getCities: bindActionCreators(getCity, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
) (City);


