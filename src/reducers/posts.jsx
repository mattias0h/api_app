import  * as types from '../config/types';

const initialState = {
  error: false,
  fetching: false,
  posts: [],
  post: {}
};

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_POSTS:
    case types.GET_POST: {
      return {
        ...state,
        error: false,
        fetching: true
      };
    }
    case types.POSTS_FETCHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false,
        posts: action.response
      };
    }
    case types.POST_FETCHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false,
        post: action.response
      };
    }
    case types.FETCH_POSTS_FAILED:
    case types.FETCH_POST_FAILED: {
      return {
        ...state,
        error: true,
        fetching: false
      };
    }
    default:
      return state;
  }
};
