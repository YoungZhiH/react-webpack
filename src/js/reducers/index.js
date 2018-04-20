import { combineReducers } from 'redux';
import { START, STOP, RESET, TIMER} from '../action/actionsTypes';
import  timer from './timer'
import  counter from './counter'
import  counterAsync from './counterAsync'
import  todos from './todos'
import  posts from './posts'
import  cities from './city'
import  Ad from './ad'
import  getUlike from './uLike'
import  getDetail from './detail'
import  isLogin from './login'

const rootReducer = combineReducers({
	timer,
	counter,
	counterAsync,
	todos,
	posts,
	cities,
	Ad,
	getUlike,
	getDetail,
	isLogin
});
export default rootReducer;

// 原始默认state
// const defaultState = {
//   seconds: 0,
//   runStatus: false
// }

// function timer(state = defaultState, action) {
//   switch (action.type) {
//     case START:
//       return { ...state, runStatus: true };
//     case STOP:
//       return { ...state, runStatus: false };
//     case RESET:
//       return { ...state, seconds: 0 };
//     case TIMER:
//       return { ...state, seconds: state.seconds + 1 };
//     default:
//       return state;
//   }
// }

// export default combineReducers({
//     timer
// });