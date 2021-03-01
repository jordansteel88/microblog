import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const PostForm = ({post, save, cancel}) => {
  const [postData, setPostData] = useState({
    title: post.title,
    description: post.description,
    body: post.body
  });

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setPostData(data => ({
      ...data,
      [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    save(postData);
  }

  return (
    <Form className="mb-4 mx-5" onSubmit={handleSubmit}>
      <FormGroup>
      <Label for="title">Title:</Label>
      <Input id="title"
             name="title"
             value={postData.title}
             type="text" 
             onChange={handleChange} />
      </FormGroup>

      <FormGroup>
      <Label for="description">Description:</Label>
      <Input id="description"
             name="description"
             value={postData.description} 
             type="text"
             onChange={handleChange} />
      </FormGroup>

      <FormGroup>
      <Label for="body">Body:</Label>
      <Input id="body"
             name="body"
             rows={10}
             value={postData.body} 
             type="textarea"
             onChange={handleChange} />
      </FormGroup>

      <Button color="primary" className="mx-1">Save</Button>
      <Button color="danger" className="mx-1" onClick={cancel} >Cancel</Button>
    </Form>
  );  
}

PostForm.defaultProps = {
  post: { title: "", description: "", body: "" },
};

export default PostForm;
