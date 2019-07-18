import React from 'react';
import { Component } from 'react';
import '../App.css';


class Header extends Component {
    
    render() {
        const { users } = this.props;
        console.log (users);
        
        return (
            <div className="Chat-header">
                <div class="header-left">
                    <h1>My Chat</h1>
                </div>
                
                <div class="header-left">
                    <h2>participants: </h2>
                </div>
                <div class="header-left">
                    <h2>messages: </h2>
                </div>
                <div class="header-right">
                    <h2>last message at: </h2>
                </div>
               
            </div>
            
        )
    }
}

export default Header;