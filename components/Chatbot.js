// components/Chatbot.js
import React, { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });
      const data = await response.json();
      setMessages([...messages, { sender: 'You', text: userInput }, { sender: 'Chatbot', text: data.response }]);
      setUserInput('');
    }
  };

  const handleLogout = async () => {
    const response = await fetch('/api/logout', {
      method: 'GET',
    });
    const data = await response.json();
    alert(data.message);
    location.reload();
  };

  return (
    <div id="chat-window" >
      <div id="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>{`${message.sender}: ${message.text}`}</div>
        ))}
      </div>
      <div >
          <input
            type="text"
            className='w-full'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button className='w-8' onClick={handleSendMessage}>Send</button>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
