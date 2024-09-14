import React, { useState } from 'react';
import Message from './Message';
import ChatSettings from './ChatSettings';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages([...messages, { name: 'You', img: 'https://image.flaticon.com/icons/svg/145/145867.svg', side: 'right-msg', text: input }]);
    setInput('');

    // Bot response
    const botMessages = [
      "Hi, how are you?",
      "Ohh... I can't understand what you're trying to say. Sorry!",
      "I like to play games... But I don't know how to play!",
      "Sorry if my answers are not relevant. :))",
      "I feel sleepy! :("
    ];
    const botResponse = botMessages[Math.floor(Math.random() * botMessages.length)];
    setTimeout(() => {
      setMessages([...messages, { name: 'You', img: 'https://image.flaticon.com/icons/svg/145/145867.svg', side: 'right-msg', text: input }, { name: 'Bot', img: 'https://image.flaticon.com/icons/svg/327/327779.svg', side: 'left-msg', text: botResponse }]);
    }, 500);
  };

  return (
    <section className="msger">
      <header className="msger-header">
        <div className="msger-header-title">
          <i className="fas fa-comment-alt"></i> MedHub Chat
        </div>
        <ChatSettings />
      </header>
      <main className="msger-chat">
        {messages.map((msg, index) => (
          <Message key={index} name={msg.name} img={msg.img} side={msg.side} text={msg.text} />
        ))}
      </main>
      <form className="msger-inputarea" onSubmit={handleSubmit}>
        <input
          type="text"
          className="msger-input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="msger-media-btns">
          <label htmlFor="file-upload"><i className="fas fa-image"></i></label>
          <input type="file" id="file-upload" style={{ display: 'none' }} accept="image/*" />
          
          <label htmlFor="audio-upload"><i className="fas fa-microphone"></i></label>
          <input type="file" id="audio-upload" style={{ display: 'none' }} accept="audio/*" />
        </div>
        <button type="submit" className="msger-send-btn">Send</button>
      </form>
    </section>
  );
};

export default Chat;
