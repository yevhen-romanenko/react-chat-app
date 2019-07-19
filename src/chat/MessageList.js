import React from 'react';
import { Component } from 'react';
//import { connect } from "react-redux";
//import * as actions from "./actions";
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';


class MessageList extends Component {
  
  constructor(props) {
    super(props);
    this.onEdit = this.onEdit.bind(this);
    
  }

  onEdit(id) {
    this.props.history.push(`/message/${id}`);
  }

  render() {
    const { users } = this.props;
    
    return (
      <ul className="Messages-list">
      {users.map(user => (
        <li key = {user.id}>
          <b>: {user.user}</b>  <img src={user.avatar} width="40px" height="40px" alt={user.user}></img> 
              message: <b>{user.message}</b> 
          <br></br>
          <i>posted at: {(new Date(user.created_at)).toDateString()}</i>
          <button
                        onClick = {this.onEdit}
                        style = {{margin: "4px", width: "50px", height: "25px", fontSize: "8px"}}
                    >
                        Edit message   
                    </button>
        </li>
      ))}
    </ul>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.object
};



export default MessageList;