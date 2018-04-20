import {
  IS_LOGIN,
  IS_LOGIN_DATA
} from '../action/actionsTypes';

const init = {
  is_login: false,
  token :null
}

export default function isLogin(state=init,action) {
    switch (action.type){
        case IS_LOGIN_DATA:
            return {
              is_login:action.data[0].isLogin,
              token:action.data[0].token
            }
        default :
            return state;
    }
}