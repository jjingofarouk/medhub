import React, { useState } from 'react';
import './Chat.css'; // Import the CSS file

const ChatComponent = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [settingsVisible, setSettingsVisible] = useState(false);

    const BOT_MSGS = [
        "Hi, how are you?",
        "Ohh... I can't understand what you're trying to say. Sorry!",
        "I like to play games... But I don't know how to play!",
        "Sorry if my answers are not relevant. :))",
        "I feel sleepy! :("
    ];

    const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
    const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
    const BOT_NAME = "Bot";
    const PERSON_NAME = "You";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        setMessages([...messages, { name: PERSON_NAME, img: PERSON_IMG, side: 'right-msg', text: message }]);
        setMessage('');
        botResponse();
    };

    const botResponse = () => {
        const randomIndex = Math.floor(Math.random() * BOT_MSGS.length);
        const msgText = BOT_MSGS[randomIndex];
        const delay = msgText.split(" ").length * 100;

        setTimeout(() => {
            setMessages([...messages, { name: PERSON_NAME, img: PERSON_IMG, side: 'right-msg', text: message }, { name: BOT_NAME, img: BOT_IMG, side: 'left-msg', text: msgText }]);
        }, delay);
    };

    return (
        <div className="msger">
 

            <main className="msger-chat">
                {messages.map((msg, index) => (
                    <div key={index} className={`msg ${msg.side}`}>
                        <div className="msg-img" style={{ backgroundImage: `url(${msg.img})` }}></div>
                        <div className="msg-bubble">
                            <div className="msg-text">{msg.text}</div>
                        </div>
                    </div>
                ))}
            </main>

            <form className="msger-inputarea" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="msger-input" 
                    placeholder="Type your message..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="msger-media-btns">
                    <label htmlFor="file-upload"><i className="fas fa-image"></i></label>
                    <input type="file" id="file-upload" style={{ display: 'none' }} accept="image/*" />
                    <label htmlFor="audio-upload"><i className="fas fa-microphone"></i></label>
                    <input type="file" id="audio-upload" style={{ display: 'none' }} accept="audio/*" />
                </div>
                <button type="submit" className="msger-send-btn">Send</button>
            </form>

            {settingsVisible && (
                <div className="settings-modal">
                    <div className="settings-content">
                        <button className="settings-close-btn" onClick={() => setSettingsVisible(false)}>&times;</button>
                        <h2>Settings</h2>
                        <label>
                            <input type="checkbox" id="notifications" />
                            Enable Notifications
                        </label>
                        <label>
                            <input type="checkbox" id="save-chat-history" />
                            Save Chat History
                        </label>
                        <h3>Theme</h3>
                        <div className="theme-selector">
                            <div className="theme-option">
                                <input type="radio" id="theme-light" name="theme" value="light" defaultChecked />
                                <label htmlFor="theme-light" style={{ background: 'var(--light-yellow)' }}></label>
                                Light
                            </div>
                            <div className="theme-option">
                                <input type="radio" id="theme-dark" name="theme" value="dark" />
                                <label htmlFor="theme-dark" style={{ background: 'var(--dark-teal)' }}></label>
                                Dark
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatComponent;
