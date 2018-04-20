import React, { Component } from 'react';
import  Timer  from './components/Timer/index';
import  Home   from './components/Home/index';
import  Detail   from './components/detail/index';
import  NotFound   from './components/404Page/index';
import  Login   from './components/login/index';
import  Person   from './components/person/index';
import { Provider } from 'react-redux';
import helloSaga from './projectStore/configureStore'
// PrivateRoute ,
import  PersonRoute   from './auth-wrapper'
import {
  BrowserRouter ,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import City from './components/city/index';

// import Footer from './components/Footer/index';
// import User from './components/user/index'
//<PrivateRoute path='/timer' component={Timer}/>
 //  <Route path='/person' component={Person}/>     
 //       <PersonRoute />


class Root extends Component{
constructor(props, context){
    super(props);
    this.state = {
      initialDone: true,
      unsaved: false,
    }
  }
  
  render() {
    let Routes = (
      <Switch>
        <Route path='/' exact component={Home}  />
        <Route path='/city'  exact component={City}/>
        <Route path='/detail/:id'exact  component={Detail}/>
        <Route path='/login' exact component={Login}/>
        <PersonRoute  path='/person'  component={Person}/>
        <Route component={NotFound}/>
      </Switch>
    );

    return(
	      <BrowserRouter>
	      {this.state.initialDone ? Routes : (<div>加载中...</div>)}
	      </BrowserRouter>
      )
  }
 
}

export default Root;