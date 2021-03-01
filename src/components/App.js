import React from 'react';
import './App.css';
import { Route, NavLink, Switch } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import NewPost from './NewPost';
import Homepage from './Homepage';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <Jumbotron className="py-3">
        <h2>Microblog</h2>
        <NavLink className="mx-3" exact to='/'>Blog</NavLink>
        <NavLink className="mx-3" exact to='/new'>Add a New Post</NavLink>
      </Jumbotron>

      <Switch>
        <Route exact path="/new">
          <NewPost />
        </Route>        
        <Route exact path="/">
          <Homepage />
        </Route>        
        <Route exact path="/:postId">
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
