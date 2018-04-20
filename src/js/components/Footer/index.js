import React, { Component } from 'react';
import Header from '../Nav/index';
import ToolHeader from './header/index';
import MainSection from './MainSection/index';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as TodoActions  from '../../action/todoActions'

class Footer extends Component {

  render() {
   const { todos , actions } = this.props
    return (
    	<div>
    		<Header/>
 				<span>
 					<ToolHeader {...actions}/>
 					<MainSection todos={todos} {...actions} />
 				</span>
 			</div>
    )
  }
}




const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Footer)