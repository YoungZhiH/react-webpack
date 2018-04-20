import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_ASYNC
} from './actionsTypes';

const increment = () => ({ type: INCREMENT_COUNTER })

const decrement = () => ({ type: DECREMENT_COUNTER })

const onIncrementAsync = () => ({ type: INCREMENT_ASYNC })

export {
    increment,
    decrement,
    onIncrementAsync,
}