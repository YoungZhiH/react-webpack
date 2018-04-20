import React, { Component } from 'react';
import TodoItem from '../todoItem/index'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../../action/actionsTypes'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_COMPLETED]: item => item.completed,
  [SHOW_ACTIVE]: item => !item.completed
}
class MainSection extends Component {
		state = {
	    filter: SHOW_ALL
	  }
 		constructor(props) {
      super();
    }
    renderToggleAll(completedCount){
    	
    }
	  render() {
	  const { todos, completeTodo, deleteTodo, editTodo } = this.props
	  const { filter } = this.state;
	  const filteredTodos =  todos.filter(TODO_FILTERS[filter]);
	  const completedCount = todos.filter(item => item.completed === true).length
    return (
    	<section>
    		<ul>
    				{filteredTodos.map(item =>
    						<TodoItem 
    						  key={item.id}
    							todo={item}
    						/>
    					)}
    		</ul>
    		
    	</section>
    	)
  }
}

export default MainSection;