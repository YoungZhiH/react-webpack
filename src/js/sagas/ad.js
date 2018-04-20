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
  GET_AD,
  GET_AD_RESULT_DATA,
} from '../action/actionsTypes';

import { AxiosGet } from '../axiosApi/get'


export function* axiosGet(url){
	try{
		return yield call(AxiosGet, url);
	}catch (err){
		console.log(err)
	}
}


export function* getAdData() {
    while(true){
        let req = yield take(GET_AD);
        yield call(delay, 2000);
        let res = yield call(axiosGet,req.url);
        yield put({type:GET_AD_RESULT_DATA,data:res.data})
    }
}
