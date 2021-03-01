import React from "react";
import PostForm from "./PostForm";
import { useHistory } from "react-router-dom";


const NewPost = () => {
  const history = useHistory();

  const save = ({ title, description, body }) => {
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