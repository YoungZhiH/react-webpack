import {
  GET_U_LIKE,
  GET_U_LIKE_RESULT_DATA
} from '../action/actionsTypes';

// const init = [{
//   haveData: false,
//   number: 1,
//   items: [],
// }]
let init =[
  // {
  //   haveData: false,
  // }
]
let listItem = [];

export default function getUlike(state=init,action) {
    switch (action.type){
        case GET_U_LIKE_RESULT_DATA:
        // console.log(...action.data[0].guessULike)
        // console.log({
        //       haveData:false ,
        //       items:[...action.data]
        //     })
        // console.log(...action.data)
        return [...state,...action.data[0].guessULike];
        // return [...action.data[0].guessULike]
            // return {
            //   haveData:true ,
            //   items:[...action.data[0].guessULike]
            // };
        default :
            return state;
    }
}