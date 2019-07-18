import React from 'react';
import './App.css';

import UserList from './userList/index';
import UserPage from './userPage/index';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component = {UserList} />
          <Route exact path='/user' component = {UserPage} />
          <Route path='/user/:id' component = {UserPage} />
      </Switch>
    </div>
  );
}

export default App;
