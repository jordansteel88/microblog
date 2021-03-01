import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import PostForm from "./PostForm";
import PostDetail from "./PostDetail";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPostAPI,
  updatePostAPI,
  removePostAPI,
  addCommentAPI,
  removeCommentAPI,
  voteAPI
} from "../actions/posts";

const Post = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const postId = Number(useParams().postId); 
  const post = useSelector(store => store.posts[postId]);

  useEffect(function loadPostOnChange() {
    const getPost = async () => {
      dispatch(fetchPostAPI(postId));
    }
    if (!post) {
      getPost();
    }
  }, [dispatch, postId, post]);

  const toggleIsEditing = () => {
    setIsEditing(editing => !editing);
  }

  const editPost = ({ title, description, body }) => {
    dispatch(updatePostAPI(
      postId,
      title,
      description,
      body
    ));
    toggleIsEditing();
  }

  const removePost = () => {
    dispatch(removePostAPI(postId));
    history.push('/');
  }

  const addComment = (text) => {
    dispatch(addCommentAPI(postId, text));
  }

  const removeComment = (commentId) => {
    dispatch(removeCommentAPI(postId, commentId))
  }

  const vote = (direction) => {
    dispatch(voteAPI(postId, direction));
  }

  if (!post) return <p>Loading</p>;

  return (
    <div>
      {isEditing
        ? <PostForm post={post} 
                    save={editPost} 
                    cancel={toggleIsEditing} />
        : <PostDetail post={post}
                      removePost={removePost}
                      toggleIsEditing={toggleIsEditing}
                      vote={vote} />}
      
      <div>
        <h4>Comments</h4>
        <CommentList comments={post.comments} 
                     removeComment={removeComment} />
        <CommentForm addComment={addComment} />
      </div>
    </div>
  );
}

export default Post;