import {
  GET_U_LIKE,
  GET_U_LIKE_RESULT_DATA
} from './actionsTypes';

export function getLike(url) {
    return{
        type:GET_U_LIKE,
        url
    }
}