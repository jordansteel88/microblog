import {
  FETCH_POST,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  VOTE
} from "../actions/actionTypes";

export default function rootReducer(state = {}, action) {
  let p = state[action.postId];

  switch (action.type) {

    case FETCH_POST:
      return { ...state, [action.post.id]: action.post };

    case ADD_POST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] }};

    case UPDATE_POST:
      return {
        ...state,
        [action.post.id]: {
          ...action.post,
          comments: state[action.post.id].comments
        }
      };

    case REMOVE_POST:
      let posts = { ...state };
      delete posts[action.postId];
      return posts;

    case VOTE:
      return {
        ...state,
        [action.postId]: { ...p, votes: action.votes }
      };

    case ADD_COMMENT:
      return {
        ...state,
        [action.postId]: { ...p, comments: [...p.comments, action.comment] }
      };

    case REMOVE_COMMENT :
      return {
        ...state,
        [action.postId]: {
          ...p, comments: p.comments.filter(c => c.id !== action.commentId)
        }
      };

    default:
      return state;
  }
}

// const rootReducer = (state = {}, action) => {
//   let postId = state[action.postId];

//   switch (action.type) {
//     case FETCH_POST:
//       return { ...state, 
//         [action.post.id]: action.post 
//       };
    
//     case ADD_POST:
//       return { ...state, 
//         [action.post.id]: {
//           ...action.post, 
//           comments: [] 
//         }
//       };

//     case UPDATE_POST:
//       return { ...state, 
//         [action.post.id]: {
//           ...action.post,
//           comments: state[action.post.id].comments
//         }
//       };

//     case REMOVE_POST:
//       let posts = { ...state };
//       delete posts[action.postId];
//       return posts;

//     case ADD_COMMENT:
//       return {
//         ...state,
//         [action.post.id]: {
//            ...postId, 
//            comments: [ ...postId.comments, action.comment]
//         }
//       };

//     case REMOVE_COMMENT:
//       return {
//         ...state,
//         [action.postId]: {
//           ...postId, 
//           comments: postId.comments.filter(comment => comment.id !== action.commentId) 
//         }
//       }

//     case VOTE:
//       return {
//         ...state,
//         [action.postId]: { 
//           ...postId, 
//           votes: action.votes 
//         }
//       };

//     default:
//       return state;
//   }
// }

// export default rootReducer;