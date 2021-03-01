import React from "react";
import PostForm from "./PostForm";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPostAPI } from "../actions/posts";


const NewPost = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const save = ({ title, description, body }) => {
    dispatch(addPostAPI(title, description, body));
    history.push('/');
  }

  const cancel = () => {
    history.push('/');
  }

  return (
    <div>
      <h1>NewPost</h1>
      <PostForm save={save} cancel={cancel}/>
    </div>
  );
}

export default NewPost;