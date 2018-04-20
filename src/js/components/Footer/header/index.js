import React, { Component } from 'react';
import TodoTextInput from '../toolInput/index'

export default class ToolHeader extends Component {
	handleSave = text =>{
		 if (text.length !== 0) {
		 	this.props.addTodo(text)
		 }
	}
  render() {
    return (
    	<div>
    		<h1>记事本</h1>
    		<TodoTextInput  placeholder="添加要去做的事"  onSave={this.handleSave} newTodo/>
    	</div>
    	)
  }
}