import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const CommentForm = ({ save }) => {
  const [comment, setComment] = useState();

  const handleChange = (evt) => {
    setComment(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    save(comment);
    setComment("")
  }

  return (
    <Form className="mb-4 mx-5" onSubmit={handleSubmit}>
      <FormGroup>
      <Input id="comment"
             placeholder="Add a comment..."
             name="comment"
             value={comment}
             type="text" 
             onChange={handleChange} />
      </FormGroup>
      <Button color="primary" className="mx-1">Add</Button>
    </Form>
  );  
}

export default CommentForm;