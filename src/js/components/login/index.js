import React, {Component, PropTypes} from 'react'
import style from './index.scss'
import axios from 'axios'
import * as login_form from '../../action/loginAction'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { fakeAuth } from '../../auth-wrapper';
import {
  Redirect,
} from 'react-router-dom'

class Login extends Component {
	 constructor(props) {
      super(props);

      this.state = {
        redirectToReferrer: false,
        // token:this.props.loginStat.token
      }
    }
    componentDidMount() {
      console.log(this.props.location.state)
    }
    login = () => {
      this.props.isLogin.login_form('/login')
    }
    render() {
    	const { history ,loginStat } = this.props;
      return (
        <div>
        {loginStat.token ?
          (<Redirect to={{pathname: this.props.location.state.from.pathname}}/>)  :
          <div className={ style.container }>
              <div><h1>登陆页面</h1></div>
              <button onClick={this.login}>登陆</button>
            </div>
           }
        </div>
          
      )


  }

}

const mapStateToProps = state => ({
  loginStat:state.isLogin
})

const mapDispatchToProps = dispatch => ({
  isLogin: bindActionCreators(login_form, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Login);