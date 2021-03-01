import React from "react";
import { Button } from "reactstrap";

const Comment = ({ text, id, deleteComment }) => {
  const handleDelete = (evt) => {
    deleteComment(id);
  }

  return (
    <div>
      <p>
        <Button color="danger" 
                className="mr-2"
                onClick={handleDelete}>X</Button>
        (comment text)
      </p>
    </div>
  )
}

export default Comment;