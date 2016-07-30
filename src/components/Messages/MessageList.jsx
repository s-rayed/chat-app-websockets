import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';


class MessageList extends Component {

  render(){
    return(
      <div className="well">
        <h3>Messages</h3>
        {
          this.props.messages.map((message, index) => {
            return <Message message={message} key={index} /> 
          })
        }
      </div>
    )
  }
}

export default MessageList;