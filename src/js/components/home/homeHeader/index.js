import React, {Component, PropTypes} from 'react';
import style from './index.scss'
import userIcon from './usered.png'
import arrow_down from './arrow_down.png'
import { Link } from 'react-router-dom'
class HomeHeader extends Component {
	  constructor(props){
        super(props);
    }
    componentDidMount() {
    }
	 render() {
	 		let  { history }  = this.props
	 		var data = {id:3,age:36};  
			var path = {  
			  pathname:'/city',  
			  state:data
			} 
			
        return (
	              <div className={style.homeHeaderContainer}>
	               <div className={style.cityDiv} onClick={()=>history.push(path)}>
	                    <span>深圳</span>
	                    <img className={style.arrowDown} src={arrow_down} alt=""/>
	                </div>
	                 <div className={style.searchDiv}>
	                 		<input className={style.searchInput} placeholder='请输入关键字' type="text"/>
	                 </div>
	                 <div>
	                 		<Link to="/person"><img className={style.userIcon} src={userIcon} alt=""/></Link>
	                 </div>
	              </div>
        )
    }
}
export default HomeHeader;