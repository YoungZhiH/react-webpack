import React, {Component} from 'react'
import style from './index.scss'

export default class LoadMore extends Component {
    constructor(props) {
        super(props);
    }
    render(){
    	const { loadMore }  = this.props;
    	return (
    			<div ref='loadMore' className={style.loadMoreContainer} >
                <span>点击加载更多</span>
          </div>
    		)
    }
    componentDidMount(){
    	let timeoutId;
    	let that = this;
    	function callBack(){
    		let tag = that.refs.loadMore;
    		if(tag){
    			let top = tag.getBoundingClientRect().top;
    			let height = document.documentElement.clientHeight;
    			 if(top<height){
              that.props.loadMore()
            }
    		}
    	}
    	window.addEventListener('scroll', function () {
    		if(timeoutId){
            clearTimeout(timeoutId);
         	}
        timeoutId = setTimeout(callBack,50)
    	}.bind(this), false)
    }
  }