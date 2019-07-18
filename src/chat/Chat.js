import React, {Component} from 'react';
import '../App.css';

import MessageInput from './MessageInput';
import Header from './Header';
import MessageList from './MessageList';


class Chat extends Component {
  
  constructor(props) {
      super(props)
      this.state = {
        users: [],
        isLoading: false,
    };
  }

    componentDidMount() {
      fetch('https://api.myjson.com/bins/1hiqin')
          .then(response => response.json())
          .then(data => {
              this.setState({
                users: data,
                isLoading: true
              })
          })
          .catch(error => console.log(error))
    }

  
render() {  
      
    const { users, isLoading } = this.state;

    if (!isLoading) {
          return <div>Loading ...</div>;
        } 
    else {
      return (
        
        <div className="Chat">
          <Header users={users}></Header>
          <MessageList users={users}></MessageList>
          <MessageInput onSendMessage={this.onSendMessage}/>
        </div>
      );
    }
}

onSendMessage = (message) => {
  const messages = this.state.users
  messages.push({
    text: message,
    user: this.state.user
  });
  this.setState({messages: messages})
}
}

export default Chat;

