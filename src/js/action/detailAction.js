import {
  GET_ORDER_DETAIL,
  RESOLVE_ORDER_DETAIL_DATA
} from './actionsTypes';

export function getDetail(url,data) {
    return{
        type:GET_ORDER_DETAIL,
        url,
        data
    }
}