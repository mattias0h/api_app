import  * as types from '../config/types';

const initialState = {
  error: false,
  fetching: false,
  posts: [],
  post: {},
  message: null,
  alertClass: null
};

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_POSTS:
    case types.GET_POST:
    case types.DELETE_POST: {
      return {
        ...state,
        error: false,
        fetching: true,
        message: null
      };
    }
    case types.POSTS_FETCHED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false,
        posts: action.response,
        message: 'Posts here!!'
      };
    }
    case types.POST_FETCHED: {
      return {
        ...state,
        error: false,
        fetching: false,
        post: action.response
      };
    }
    case types.POST_DELETED: {
      console.log(action);
      return {
        ...state,
        error: false,
        fetching: false,
        post: action.response,
        message: 'Post deleted!',
        alertClass: 'danger'
      };
    }
    case types.FETCH_POSTS_FAILED:
    case types.FETCH_POST_FAILED:
    case types.DELETE_POST_FAILED: {
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
