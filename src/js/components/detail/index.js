import React, {Component, PropTypes} from 'react'
import style from './index.scss'
import ReactSwipe from 'react-swipe';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import * as getDetail from '../../action/detailAction'
import { ShouldKnow } from "./ShouldKnow";


class Detail extends Component {
    constructor(props) {
        super(props);
        let data = [];
    }
     render() {
     	let { details } = this.props;
     	return (
     		<div  className={style.container}>
     			{Header(this.props.history)}
     			<div className={style.relative}>
     				{details.haveData ? this.renderSwipe(details.item) :'加载中'}
     				 <div className={style.imgIntroduce}>
                  <p className={style.meiminger}>没名儿生煎</p>
                  <p className={style.int}>仅售19.9元！最高价值44元的清爽夏日生煎套餐，建议2人使用。</p>
              </div>
              </div>
    			<div className={style.proceDivCon}>
                <div className={style.priceDivTop}>
	                    <div>
	                        <span>19.9</span>
	                        <span>44</span>
	                    </div>
	                    <div>
	                        卖光了
	                    </div>
	                </div>
	                <div className={style.priceDivBottom}>
	                    <span>
	                        <span>随时可退</span>
	                    </span>
	                    <span>
	                        <span>过期自动退</span>
	                    </span>
	                </div>
                </div>
                 <div className={style.notifyDiv}>
                    <p>
                        变更通知
                    </p>
                    <p>
                        【7月11日更新】【分店暂停接待】没名儿生煎（五道口店）店有效期内无法接待团购用户，您可前往其他分店消费。给您带来不便，深表歉意。
                    </p>
                </div>
                {details.haveData ?  <ShouldKnow info={details.item} /> :'加载中'}
                 <div className={style.getButton}>
                    <div>
                        卖光了
                    </div>
                </div>
								 <div className={style.recommendsContainer}>
                    <p>看了此团购的人也看了</p>
                    {details.haveData ? 
                    	 details.item[0].recommends.map((item,index)=>{
                    	 var count = details.item[0].recommends.length;
                            return(
                                <div key={index} className={index == (count-1)? style.recommendsCell+" "+style.recommendsCellNorbo : style.recommendsCell } >
                                    <img src={item.thumbnail}/>
                                    <div>
                                        <div className={style.recommendsName}>{item.name}</div>
                                        <p>
                                            <span className={style.recommendsPrice}>{item.price}</span>
                                            <span className={style.recommendsExPrice}>{item.exPrice}</span>
                                        </p>
                                    </div>
                                </div>
                            )
                        }): '加载中'
                    }
                </div>
                <div className={style.bottomButton}>
                    <div>
                        <a style={{color:'#fff'}} href="http://evt.dianping.com/synthesislink/5237.html?dealid=25587220">
                            APP下单返积分抵现金
                        </a>
                    </div>
                </div>

     		</div>
     		)
     }
    	componentDidMount() {

			//orderDetail={orderDetail}
    		// {
     		// 	this.data.map((item,index)=>{
							// <div key={index}>222</div>
     		// 	})
     		// }


    	
    	this.props.getDetails.getDetail('/detail','123');
    	
    }
     	renderSwipe(arr) {
     		return  (
		 			<ReactSwipe>
	 						 {arr[0].imgs.map((item,index)=>
                      <div className={style.cell} key={index}>
                       	<img className={style.swipeImg} src={item} alt=""/>
                      </div>
                  )}
	     		</ReactSwipe>
     )
    }
}

const Header = (props) => (
    <div className={style.header} >
        <span className={style.backSpan} onClick={() => props.goBack()}>
            《
        </span>
        团购详情
    </div>
);


const mapStateToProps = state => ({
  	details: state.getDetail
})


const mapDispatchToProps = dispatch => ({
  getDetails: bindActionCreators(getDetail, dispatch),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Detail);
