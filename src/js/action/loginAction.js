import {
  IS_LOGIN
} from './actionsTypes';

export function login_form(url) {
    return {
        type:IS_LOGIN,
        url
    }
}