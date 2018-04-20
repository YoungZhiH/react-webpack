import React, { PropTypes,Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios'

class PersonRoute extends Component {
  constructor(props){
        super(props);
        this.state = {
          loginStat : localStorage.getItem("token"),
        }
    }
  
  render() {
      let  { loginStat_s } =this.props;
      let Token;
        return (
          <Route  render={props => (
              !this.state.loginStat ?
                (<Redirect to={{
                    pathname: '/login',
                    state: { from: props.location}
                  }}/>)
              : 
              (<this.props.component {...props}/>)
            )}/>
          )
    }
  componentDidMount(){
    if(this.state.loginStat != null){
      axios.defaults.headers.common['Authorization'] = this.state.loginStat; //添加token
      axios.get('/islogin',this.state.loginStat).then(res=>{
        //这里你可以让后端返回 超时 或者 token 伪造 的返回结果
        console.log(res)
        console.log('登录超时 (10s执行)');
        setTimeout(()=>{
          localStorage.removeItem("token")
        },10000)
      })
    }else{
      console.log("faile")
    }
  }
   // componentWillReceiveProps(nextProps) {
   //      this.setState({
   //          loginStat: nextProps.loginStat.is_login
   //      });
   //  }
}

const mapStateToProps = state => ({
  loginStat_s:state.isLogin
})

export default connect(
    mapStateToProps,
) (PersonRoute);

