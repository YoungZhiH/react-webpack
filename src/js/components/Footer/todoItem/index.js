import React, { Component} from 'react'

export default class TodoItem extends Component {
	constructor(props) {
      super();
    }
 render() {
 	const { todo, completeTodo, deleteTodo } = this.props
 	return(
 		<li><span>{todo.text}??</span></li>
 		)
 }
}