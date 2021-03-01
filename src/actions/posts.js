import axios from "axios";
import {
  FETCH_POST,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  VOTE
} from "./actionTypes";

const BASE_URL = "http://localhost:5000/api/posts";

//POST ACTIONS

const fetchPost = (post) => {
  return {
    type: FETCH_POST,
    post
  };
}

const addPost = (post) => {
  return {
    type: ADD_POST,
    post
  };
}

const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    post
  };
}

const removePost = (post) => {
  return {
    type: REMOVE_POST,
    post
  };
}

const addComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  };
}

const removeComment = (postId, commentId) => {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId
  };
}

const vote = (postId, votes) => {
  return {
    type: VOTE,
    postId,
    votes
  };
}

//API FUNCTIONS

export const fetchPostAPI = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    console.log('***********data from fetchPostAPI*********');
    console.log(data);
    console.log('***********data from fetchPostAPI*********');
    return dispatch(fetchPost(data));
  };
} 

export const addPostAPI = (title, description, body) => {
  return async (dispatch) => {
    const { data } = await axios.post(`${BASE_URL}`, {
      title,
      description, 
      body
    });
    return dispatch(addPost(data));
  };
}

export const updatePostAPI = (id, title, description, body) => {
  return async (dispatch) => {
    const { data } = await axios.put(`${BASE_URL}/${id}`, {
      title,
      description,
      body
    });
    return dispatch(updatePost(data));
  };
}

export const removePostAPI = (id) => {
  return async (dispatch) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return dispatch(removePost(id));
  };
}

export const addCommentAPI = (postId, text) => {
  return async (dispatch) => {
    const { data } = await axios.post(`${BASE_URL}/${postId}/comments`, 
      {text});
    return dispatch(addComment(postId, data));
  };
}

export const removeCommentAPI = (postId, commentId) => {
  return async (dispatch) => {
    await axios.delete(`${BASE_URL}/${postId}/comments/${commentId}`);
    return dispatch(removeComment(postId, commentId))
  };
}

export const voteAPI = (id, direction) => {
  return async (dispatch) => {
    const { data } = await axios.post(`${BASE_URL}/${id}/vote/${direction}`);
    return dispatch(vote(id, data.votes));
  };
}

// import axios from "axios";
// import {
//   REMOVE_POST,
//   ADD_POST,
//   UPDATE_POST,
//   VOTE,
//   ADD_COMMENT,
//   REMOVE_COMMENT,
//   FETCH_POST
// } from "./actionTypes";

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";


// export function fetchPostAPI(id) {
//   return async function (dispatch) {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return dispatch(fetchPost(response.data));
//   };
// }

// function fetchPost(post) {
//   return {
//     type: FETCH_POST,
//     post,
//   };
// }

// export function addPostAPI(title, description, body) {
//   return async function (dispatch) {
//     const response = await axios.post(`${API_URL}`, {
//       title,
//       description,
//       body
//     });
//     return dispatch(addPost(response.data));
//   };
// }

// function addPost(post) {
//   return {
//     type: ADD_POST,
//     post
//   };
// }

// export function removePostAPI(id) {
//   return async function (dispatch) {
//     await axios.delete(`${API_URL}/${id}`);
//     return dispatch(removePost(id));
//   };
// }

// function removePost(postId) {
//   return {
//     type: REMOVE_POST,
//     postId
//   };
// }

// export function updatePostAPI(id, title, description, body) {
//   return async function (dispatch) {
//     const response = await axios.put(`${API_URL}/${id}`, {
//       title,
//       description,
//       body
//     });
//     return dispatch(updatePost(response.data));
//   };
// }

// function updatePost(post) {
//   return {
//     type: UPDATE_POST,
//     post,
//   };
// }

// export function voteAPI(id, direction) {
//   return async function (dispatch) {
//     const response = await axios.post(`${API_URL}/${id}/vote/${direction}`);
//     return dispatch(vote(id, response.data.votes));
//   };
// }

// function vote(postId, votes) {
//   return {
//     type: VOTE,
//     postId: postId,
//     votes: votes,
//   };
// }

// export function removeCommentAPI(postId, commentId) {
//   return async function (dispatch) {
//     await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
//     return dispatch(removeComment(postId, commentId));
//   };
// }

// function removeComment(postId, commentId) {
//   return {
//     type: REMOVE_COMMENT,
//     postId,
//     commentId,
//   };
// }

// export function addCommentAPI(postId, text) {
//   return async function (dispatch) {
//     const result = await axios.post(`${API_URL}/${postId}/comments/`, { text });
//     return dispatch(addComment(postId, result.data));
//   };
// }

// function addComment(postId, comment) {
//   return { type: ADD_COMMENT, postId, comment };
// }