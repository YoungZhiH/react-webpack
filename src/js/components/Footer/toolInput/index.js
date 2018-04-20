import React, { Component } from 'react';

export default class TodoTextInput extends Component {
	constructor(props){
    super(props);
    this.state = {
    	text: this.props.text || ''
  	}
  }
  handleSubmit =  val =>{
  	const text = val.trim()
  	this.props.onSave(text)
  }
	render(){
		return(
			<div>
			<input placeholder = {this.props.placeholder}   type="text"  ref={ node =>{ this.textInput=node }}/>
			{this.props.newTodo && 
				<button onClick={() => this.handleSubmit(this.textInput.value)}>添加</button>
			}
			</div>
			)
	}
}