import React, {Component, PropTypes} from 'react'
import style from './index.scss'
import { AdHeader } from "../../common/AdHeader/index";
import { ListCell } from "../../common/ListCell/index";
import  LoadMore  from "../../common/loadingMored/index";

export default class Ulike extends Component {
	 constructor(props) {
        super(props);
    }
    render() {
    	 const {data , loadData } = this.props;
        return (
            <div className={style.container}>
              <span className={style.totalTag}>猜你喜欢</span>
              <div>
               {this.renderListCell(data) }
                <LoadMore loadMore= { loadData } />
              </div>
            </div>
        )
    }
 
  componentDidMount(){
    // <ListCell item={item} key={index}></ListCell>
    // {data.haveData ?  this.renderListCell(data.items[0].guessULike) :'加载中'}
    //<LoadMore loadMore= { loadData }/>
  	//{data.haveData ? <LoadMore loadMore= {loadMore}/> : null }
    // <LoadingMore isLoading={isLoading} loadMore={loadMore}/>
  	//<ListCell item={data.items.guessULike}></ListCell>
    // <div key={index}>{index+1}</div>

  }
	renderListCell(data){
		return data.map((item,index)=>{
            return(
               <ListCell item={item} key={index} skipToDetail={this.props.skipToDetail}></ListCell>
            )
        })
	}
}