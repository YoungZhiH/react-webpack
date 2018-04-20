import {
  GET_CITY_DATA,
  RESOLVE_CITY_DATA,
} from '../action/actionsTypes';

const init = [{"login": "默认吧"}]

const inits = {
  haveData: false,
  number: 1,
  items: [],
}


export default function cities(state=inits,action) {
    switch (action.type){
        case RESOLVE_CITY_DATA:
            return {
            	haveData : true,
            	number: 2,
            	items:action.data
            };
            
            // return action.data;
        default :
            return state;
    }
}