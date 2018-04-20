import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_ASYNC
} from '../action/actionsTypes';


export default function counter(state = 3, action) {
	switch (action.type) {
    case INCREMENT_COUNTER:
      return state+1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}