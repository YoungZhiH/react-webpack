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
  GET_CITY_DATA,
  RESOLVE_CITY_DATA,
} from '../action/actionsTypes';

import { AxiosGet } from '../axiosApi/get'

export function* getCities (url) {
    // yield put({type:wrapActionTypes.START_FETCH});
    try {
        return yield  call(AxiosGet,url)
    }catch (err){
        // yield put({type:wrapActionTypes.FETCH_ERROR});
    }finally {
        // yield put({type:wrapActionTypes.FETCH_END});
    }
}
export function* getCitiesFlow() {
    while(true){
        let req = yield take(GET_CITY_DATA);
        yield call(delay, 2000);
        let res = yield call(getCities,req.url);
        yield put({type:RESOLVE_CITY_DATA,data:res.data})
    }
}