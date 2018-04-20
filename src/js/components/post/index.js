import React, { Component } from 'react'

class Post extends Component {
		constructor(props) {
			super(props);
		}
		render(){
			const { id , items  } = this.props
			var numbers = items;
		return(
			 <div>
			 遍历
				{
					items.map(item => {
						return <div key ={item.id}>
						<p className="font-28">昵称：{item.login}</p>
						<p className="font-28">粉丝：{item.id}</p>
						</div>
					})
				}
			 </div>
			)
	}
}

export default Post