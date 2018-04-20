import React, {Component, PropTypes} from 'react'
import style from './index.scss'
import { Link } from 'react-router-dom'

export default  class Ad extends Component {
	 constructor(props) {
        super(props);
    }
    render() {
    	const { history ,ads } = this.props;
      return (
          <div className={style.container}>
						{ads.haveData ? this.renderComponent(ads.items):'加载中'}
          </div>
      )
  }
  renderComponent(items){
            return items.ad.map((item, index) => {
              return (
              	<div key={index} className={style.singleCell} style={index===2?{backgroundColor:'#ff7658'}:index===3?{backgroundColor:'#55b3df'}:null}>
              		{index == 0 ? <div className={style.leftDiv}>
              			<Link to='/login'><p className={style.name} style={index===0?{color:"#55b3df"}:index>1?{color:'#fff'}:{color:'#ff7658'}}>{item.name}</p></Link>
              			<p className={style.subName} style={index>1?{color:'#fff'}:null}>{item.subName}</p>
              		</div> : <div className={style.leftDiv}>
                    <p className={style.name} style={index===0?{color:"#55b3df"}:index>1?{color:'#fff'}:{color:'#ff7658'}}>{item.name}</p>
                    <p className={style.subName} style={index>1?{color:'#fff'}:null}>{item.subName}</p>
                  </div>
                  }
              		 <div className={style.rightDiv}>
                        <img className={style.imgStyle} src={item.thumbnail}/>
                    </div>
              	</div>
                )
            })
  }
  
}

