import {
  GET_AD,
  GET_AD_RESULT_DATA,
} from '../action/actionsTypes';

const init = {
  haveData: false,
  number: 1,
  items: [],
}


export default function cities(state=init,action) {
    switch (action.type){
        case GET_AD_RESULT_DATA:
            return {
            	number:'zero',
            	haveData:true,
            	items:action.data[0].adData
            };
        default :
            return state;
    }
}