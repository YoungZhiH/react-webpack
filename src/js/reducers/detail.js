import {
  GET_ORDER_DETAIL,
  RESOLVE_ORDER_DETAIL_DATA
} from '../action/actionsTypes';

// const init = [{
//   haveData: false,
//   number: 1,
//   items: [],
// }]
let init =
  {
    haveData: false,
  }

let listItem = [];

export default function getDetail(state=init,action) {
    switch (action.type){
        case RESOLVE_ORDER_DETAIL_DATA:
        // console.log(...action.data[0].guessULike)
        // console.log({
        //       haveData:false ,
        //       items:[...action.data]
        //     })
        // console.log(...action.data)
        return {
          haveData:true,
          item:action.data
        };
        default :
            return state;
    }
}