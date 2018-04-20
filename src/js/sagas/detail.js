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
  GET_ORDER_DETAIL,
  RESOLVE_ORDER_DETAIL_DATA
} from '../action/actionsTypes';

import { AxiosGet } from '../axiosApi/get'


export function* axiosGet(url,data){
	try{
		return yield call(AxiosGet, url);
	}catch (err){
		console.log(err)
	}
}


export function* getDetail() {
    while(true){
        let req = yield take(GET_ORDER_DETAIL);
        let res = yield call(axiosGet,req.url,req.data);
        yield put({type:RESOLVE_ORDER_DETAIL_DATA,data:res.data})
    }
}
