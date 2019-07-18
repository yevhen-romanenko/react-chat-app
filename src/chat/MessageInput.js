import { Component } from "react";
import React from 'react';

class MessageInput extends Component {
  constructor() {
      super()
      this.state = {
          value: ''
      }
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ 
      value: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ value: '' });
    this.props.onSendMessage(this.state.value);
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit= { e => this.onSubmit(e) }>
          <input
            onChange={ e => this.onChange(e) }
            value={this.state.value}
            type='text'
            placeholder='Enter message'
            autoFocus= {true}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default MessageInput;