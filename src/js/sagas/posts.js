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
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../action/actionsTypes'

function fetchPostsApi(url) {
  return fetch(`https://api.github.com/users`)
    .then(response => response.json() )
    // .then(json => json.map(item => item.url))
    // .then(url => url.map(item => fetch(item).then(response => response.json())))
    // .then(pro => Promise.all(pro))
}

function* fetchPosts() {
  // yield call(delay, 3000)
  const posts = yield call(fetchPostsApi)
  yield put({type: RECEIVE_POSTS, posts})
  // , receivedAt: moment().format("HH:mm:ss")
}

export function* watchPost() {
		yield take(REQUEST_POSTS)
    yield fork(fetchPosts)

}