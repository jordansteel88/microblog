import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments=[], removeComment }) => {
  return (
    comments.map(comment => (
      <Comment
        key={comment.id}
        id={comment.id}
        text={comment.text}
        removeComment={removeComment}
      />
    ))
  );
}

export default CommentList;