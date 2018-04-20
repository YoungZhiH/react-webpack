import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PostActions from '../../action/PostActions'
import Post from '../post/index';

class User extends Component {
	constructor(props) {
    super(props);
  }
  componentDidMount(){
  	this.props.actions.onRequestPosts()
  }
	render(){
		const { state , actions }  = this.props;
		return(
			 <Post
              {...state}
              {...actions}
            />
			)
	}
}

const mapStateToProps = state => ({
  state: state.posts
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(PostActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)