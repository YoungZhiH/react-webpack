import {
  GET_CITY_DATA,
  RESOLVE_CITY_DATA,
} from './actionsTypes';

export function getCity(url) {
    return{
        type: GET_CITY_DATA,
        url
    }
}