import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments=[] }) => {
  return (
    comments.map(comment => (
      <Comment
        key={comment.id}
        id={comment.id}
        text={comment.text}
      />
    ))
  );
}

export default CommentList;