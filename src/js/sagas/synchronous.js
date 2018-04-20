import {
  TIMER,
  START,
  STOP,
  INCREMENT_ASYNC,
  COUNT_DOWN,
  INCREMENT_COUNTER,
  ASYNC_OVER
} from '../action/actionsTypes'

import {
  takeEvery,
  delay,
  takeLatest,
  buffers,
  channel,
  eventChannel,
  END
} from 'redux-saga'

import {
  put,
  call,
  take,
  fork,
  select,
  actionChannel,
  cancel,
  cancelled
} from 'redux-saga/effects';


// 相关API参考 https://neighborhood999.github.io/redux-saga/docs/api/index.html
// delay 延迟执行
// takeEvery 监控某个动作，如果该动作被触发，则执行传入的 saga，如果动作被多次触发，则依次执行
// takeLatest 监控某个动作，如果该动作被出发，则执行传入的 saga，如果动作被多次触发，则只执行最新的动作
// buffers 限制存入序列的动作数量  const requestChan = yield actionChannel('REQUEST', buffers.sliding(5))
// channel
// eventChannel 为 Redux Store 以外的事件来源建立一个 Channel
// END 事件，监控的终止

function* incrementAsync(){
  for(let i = 0; i < 3; i++) {
    yield call(delay, 1000);
    yield put({type: COUNT_DOWN})
  }
  yield put({type: ASYNC_OVER})
  yield put({type: INCREMENT_COUNTER})
};

export function* watchIncrementAsync() {
  yield* takeEvery(INCREMENT_ASYNC, incrementAsync)
}

// Timer 逻辑
function* timer() {
  try {
    while(true) {
      yield call(delay, 1000)
      yield put({type: TIMER})
    }
  } finally {
    if (yield cancelled()) {
      console.log('噢，竟然取消了。。。。')
    }
  }
}

export function* watchTimer() {
  while ( yield take(START) ) {
    //去异步无阻塞调用timer
    const bgTask = yield fork(timer)
    yield take(STOP)
    yield cancel(bgTask)
  }
}

