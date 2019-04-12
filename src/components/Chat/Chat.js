import React from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageInput: ''
    };
  }

  changeInputMessage(event) {
    this.setState({ messageInput: event.target.value });
  }

  sendMessageOnEnter(event) {
    if (!event) {
      return;
    }

    const { messageInput, messages } = this.state;

    if (event.key === 'Enter') {
      this.setState({
        messages: [...messages, { text: messageInput }]
      });
    }
  }

  render() {
    const { messageInput, messages } = this.state;

    return (
      <div className="chat">
        <input
          onChange={this.changeInputMessage.bind(this)}
          onKeyPress={this.sendMessageOnEnter.bind(this)}
          value={messageInput}
          className="input-message"
        />

        {messages.map((item, index) => (
          <Message text={item.text} key={index} />
        ))}
      </div>
    );
  }
}

export default Chat;
