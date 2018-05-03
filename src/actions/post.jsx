import * as types from '../config/types';
import Api from '../config/api';

export function fetchPosts() {
  return (dispatch, getState) => {
    dispatch(getPosts());
    return Api.get(`/posts`, null).then(resp => {
      dispatch(postsFetched(resp));
    }).catch((ex) => {
      dispatch(fetchPostsFailed());
      console.log(ex);
    });
  }
}

export function fetchPost(id) {
  return (dispatch, getState) => {
    dispatch(getPost());
    return Api.get(`/posts/${id}`, null).then(resp => {
      dispatch(postFetched(resp));
    }).catch((ex) => {
      dispatch(fetchPostFailed());
      console.log(ex);
    });
  }
}

function getPosts() {
  return {
    type: types.GET_POSTS,
  }
}

function postsFetched(response) {
  return {
    type: types.POSTS_FETCHED,
    response
  }
}

function fetchPostsFailed() {
  return {
    type: types.FETCH_POSTS_FAILED
  }
}

function getPost() {
  return {
    type: types.GET_POST,
  }
}

function postFetched(response) {
  return {
    type: types.POST_FETCHED,
    response
  }
}

function fetchPostFailed() {
  return {
    type: types.FETCH_POST_FAILED
  }
}
