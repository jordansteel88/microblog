import {
  FETCH_TITLES,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  VOTE
} from "../actions/actionTypes";

// const sortByVotes = (posts) => {
//   return posts.sort((a, b) => b.votes - a.votes);
// }

// const makeTitleFromPost = ({id, title, description, votes}) => {
//   return {id, title, description, votes};
// }

// const rootReducer = (state = [], action) => {
//   switch (action.types) {
//     case FETCH_TITLES:
//       return sortByVotes([...action.titles]);

//     case ADD_POST:
//       return sortByVotes([...state, makeTitleFromPost(action.post)]);

//     case UPDATE_POST:
//       return state.map(title => title.id !== action.postId
//         ? makeTitleFromPost(action.post)
//         : title
//       );  

//     case REMOVE_POST:
//       return state.filter(title => title.id !== action.postId);

//     case VOTE:
//       return sortByVotes(state.map(
//         title => title.id === action.portId 
//           ? { ...title, votes: action.votes }
//           : title 
//       ));

//     default:
//       return state;    
//   }
// }

// export default rootReducer;

function sortByVote(posts) {
  return posts.sort((a, b) => b.votes - a.votes);
}

function makeTitleFromPost({id, title, description, votes}) {
  return {id, title, description, votes};
}

export default function rootReducer(state = [], action) {
  switch (action.type) {

    case FETCH_TITLES:
      return sortByVote([...action.titles]);

    case ADD_POST:
      return sortByVote([...state, makeTitleFromPost(action.post)]);

    case REMOVE_POST:
      return state.filter(title => title.id !== action.postId);

    case UPDATE_POST:
      return state.map(title => title.id === action.post.id
        ? makeTitleFromPost(action.post)
        : title);

    case VOTE:
      return sortByVote(state.map(
          title => title.id === action.postId ? { ...title, votes: action.votes } : title));

    default:
      return state;
  }
}