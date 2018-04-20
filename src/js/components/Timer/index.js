import React, { Component } from 'react'
import { Link } from 'react-router'
import NotFound from '../404Page/index';
import Header from '../Nav/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TimerActions from '../../action/TimerActions';

class Timer extends Component {
	constructor(props) {
    super(props);
  }
  render() {
  	const { state, actions } = this.props
    return (
      <div className="center-center-column" style={{height: '100vh'}}>
      	<Header/>
      	 {state.seconds} -- ({state.status})
        <span className="font-26">Timer页面</span>
        <button onClick={actions.onStart}  disabled={state.status === 'Running'}>开始</button>
        <button onClick={actions.onStop}  disabled={state.status === 'Stopped'}>停止</button>
        <button onClick={actions.onReset}  disabled={state.status === 'Running'}>重置</button>
      </div>
    )
  }

 componentDidMount() {
    }
}



const mapStateToProps = state => ({
  state: state.timer
})

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...TimerActions}, dispatch)
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)