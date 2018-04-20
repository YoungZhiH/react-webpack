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
} from 'redux-saga';

import {
  GET_U_LIKE,
  GET_U_LIKE_RESULT_DATA
} from '../action/actionsTypes';

import { AxiosGet } from '../axiosApi/get'


export function* axiosGet(url){
	try{
		return yield call(AxiosGet, url);
	}catch (err){
		console.log(err)
	}
}


export function* ulikeData() {
    while(true){
        let req = yield take(GET_U_LIKE);
        let res = yield call(axiosGet,req.url);
        console.log(res.data)
        yield put({type:GET_U_LIKE_RESULT_DATA,data:res.data})
    }
}
