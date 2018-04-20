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
  IS_LOGIN,
  IS_LOGIN_DATA
} from '../action/actionsTypes';

import { AxiosGet } from '../axiosApi/get'


export function* axiosGet(url,data){
	try{
		return yield call(AxiosGet, url);
	}catch (err){
		console.log(err)
	}
}

function cookieData(res){
  localStorage.setItem("token",res[0].token)
    // res[0].token;
}

export function* isLogin() {
    while(true){
        let req = yield take(IS_LOGIN);
        let res = yield call(axiosGet,req.url);
        yield call(cookieData,res.data)
        yield put({type:IS_LOGIN_DATA,data:res.data})
    }
}
