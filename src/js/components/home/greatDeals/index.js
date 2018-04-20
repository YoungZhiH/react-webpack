import React, {Component, PropTypes} from 'react'
import style from './index.scss'
import { AdHeader } from "../../common/AdHeader/index";
import { AdCell } from "../../common/AdCell/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


export default class CheapOrReducers extends Component {
    constructor(props) {
        super(props);
    }
 		render() {
 			const  { data,type }  = this.props;
        return (
        	<div className={style.cellItem}>
        		<AdHeader title={type===1?'超值优惠':'天天立减'} type={type}/>
        		<div className={style.cellContainer}>
        		 	{data.haveData ? ( type == 1 ? this.renderAdCell(data.items.cheap) : this.renderAdCell(data.items.reduces) ) : '加载中'}
        		 </div>
        	</div>
        	)
      }
      renderAdCell(arr){
      	return arr.map((item,index)=>{
            return(
            	<AdCell key={index} data={item} types={this.props.type} indexs={index}></AdCell>
            )
        })
      }
      componentDidMount() {
      }
   }


