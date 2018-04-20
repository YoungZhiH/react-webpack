import React, { Component } from 'react';

class Person extends Component{
constructor(props, context){
    super(props);
    this.state = {
      initialDone: true
    }
  }
  componentDidMount() {
    console.log("person")
  }
  render() {
    return(
        <div>
          个人中心
        </div>
      )
  }
}

export default Person;