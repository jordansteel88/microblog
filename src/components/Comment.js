import React from "react";
import { Button } from "reactstrap";

const Comment = ({ text, id, removeComment }) => {
  const handleDelete = (evt) => {
    removeComment(id);
  }

  return (
    <div>
      <p>
        <Button color="danger" 
                className="mr-2"
                onClick={handleDelete}>X</Button>
        {text}
      </p>
    </div>
  )
}

export default Comment;