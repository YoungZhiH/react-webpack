import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../action/actionsTypes'

const init = {
  isFetching: false,
  items: [],
  id :[{
    "login": "mojombo",
    "id": 1,
  },
  {
    "login": "mojombo",
    "id": 2,
  }]
}

export default function posts(state=init, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}