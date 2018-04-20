import React,{Component} from 'react';
import Header from '../Nav/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  Footer  from '../Footer/index'
import * as CounterActions from '../../action/CounterActions'


// class NotFound extends Component{
//   constructor(props, context){
//     super(props, context);
    
//   }
//   render(){
//     const { counter , actions , counterAsync ,asyncBool} = this.props
//     return (
//       <div>
//       <h1>404页面</h1>
//         <Header/>
//         （{counter})
//     //<br/>
//         // <button onClick={actions.increment} >
//         //       +
//         //     </button>
//         //      <br/>
//         //     <button onClick={actions.decrement} >-</button>
//         //     <br/>
//         //     <button  onClick={this.incrementIfOdd}>如果是偶数则加1?</button>
//         //      <button disabled={counterAsync.asyncBool} onClick={actions.onIncrementAsync}>
//         //       {counterAsync.asyncCountDown}秒后+1
//         //     </button>
//       </div>
//     );
//   }
//   // incrementIfOdd = ()=>{
//   //   if(this.props.counter %2 ===0) {
//   //     this.props.actions.increment()
//   //   }
//   // }

    
// }

// const select = state => ({
//   // counter: state.counter,
//   // counterAsync :  state.counterAsync,
//   // asyncBool: state.counterAsync.asyncBool,
// })

// const mapDispatchToProps = dispatch => ({
//   // actions: bindActionCreators(CounterActions, dispatch)
// })

// export default connect(select,mapDispatchToProps)(NotFound)



class NotFound extends Component{
constructor(props, context){
    super(props);
    this.state = {
      initialDone: true
    }
  }
  render() {
    return(
        <div>
          <h1>404页面</h1>
        </div>
      )
  }
}

const select = state => ({
  // counter: state.counter,
  // counterAsync :  state.counterAsync,
  // asyncBool: state.counterAsync.asyncBool,
})

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(CounterActions, dispatch)
})



export default connect(select,mapDispatchToProps)(NotFound)
