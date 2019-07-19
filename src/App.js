import React from 'react';
import './App.css';
import  LoginPage from './loginPage/LoginPage';
import UserList from './userList/index';
import UserPage from './userPage/index';
import MessageEditor from './messageEditor/index';
import Chat from './chat/Chat';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component = {UserList} />
          <Route exact path='/user' component = {UserPage} />
          <Route path='/user/:id' component = {UserPage} />
          <Route path='/message/:id' component = {MessageEditor} />
          <Route path='/chat' component = {Chat} />
          <Route path='/login' component = {LoginPage}/>
      </Switch>
    </div>
  );
}

export default App;
