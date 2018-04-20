import {
  GET_AD,
  GET_U_LIKE
} from './actionsTypes';

export function getAd(url) {
    return {
        type:GET_AD,
        url
    }
}