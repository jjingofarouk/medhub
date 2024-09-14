import React from 'react';

const Message = ({ name, img, side, text }) => {
  return (
    <div className={`msg ${side}`}>
      <div className="msg-img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="msg-bubble">
        <div className="msg-text">{text}</div>
      </div>
    </div>
  );
};

export default Message;
