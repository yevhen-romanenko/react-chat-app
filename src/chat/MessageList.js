import React from 'react';
import { Component } from 'react';
//import { connect } from 'react-redux';


class MessageList extends Component {
  
  render() {
    const { users } = this.props;
    
    return (
      <ul className="Messages-list">
      {users.map(user => (
        <li key = {user.id}>
          <img src={user.avatar} width="40px" height="40px" alt={user.user}></img> 
              message: <b>{user.message}</b> 
          <br></br>
          <i>posted at: {(new Date(user.created_at)).toDateString()}</i>
        </li>
      ))}
    </ul>
    )
  }
}


//const mapStateToProps = (state) => {
  //return {
  //  users: state
 // }
//}

export default MessageList;