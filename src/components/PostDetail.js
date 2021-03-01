import React from "react";
import { Button } from "reactstrap";

const PostDetail = ({ post, vote, removePost, toggleIsEditing }) => {
  return (
    <div>
      <div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{post.body}</p>
        <Button className="mx-1" color="primary" onClick={toggleIsEditing}>Edit</Button>
        <Button className="mx-1" color="danger" onClick={removePost}>Delete</Button>
      </div>

      <div className="mt-4">
        <b>{post.votes} votes:</b>
        <Button 
            outline color="success"
            onClick={evt => vote("up")}
            className="mx-1">
            <b>:)</b>
        </Button>
        <Button 
            outline color="danger"
            onClick={evt => vote("down")}
            className="mx-1">
            <b>:(</b>
        </Button>
      </div>
    </div>
  );
}

export default PostDetail;