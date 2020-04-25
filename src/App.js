import React from 'react';
import './App.css';
import axios from 'axios';

import { initialState, reducer } from './Reducer'

import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import UserComponent from './components/UserComponent';
import PostsComponent from './components/PostsComponent';

export const StateContext = React.createContext();


function App() {

  const [state, stateDispatch] = React.useReducer(reducer, initialState);

  const getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({data}) => {
        stateDispatch({type: 'getUsers', data: data})
      })
      .catch(err => {
        console.log(err);
      })
  };

  const getPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(({data}) => {
        stateDispatch({type: 'getPosts', data: data});
      })
      .catch(err => console.log(err))
  }
  
  return (
    <Router>
      <div className="App">
        <Link to="/">Users || </Link>
        <Link to="/posts">Posts</Link>
        <br />
        <br />
        <button style={{marginRight: '5px'}} onClick={getUsers}>Get users</button>
        <button onClick={getPosts}>Get Posts</button>
        <hr />
        <StateContext.Provider value={{state: state, stateDispatch: stateDispatch}}>
            <Switch>
              <Route exact path="/">
                <UserComponent />
              </Route>
              <Route path="/posts">
                <PostsComponent />
              </Route>
            </Switch>
        </StateContext.Provider>
      </div>
    </Router>
  )

};

export default App;