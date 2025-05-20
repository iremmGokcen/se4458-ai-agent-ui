import React, { useState } from 'react';
import './ChatInterface.css';

function ChatInterface() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    // Kullanıcı mesajı
    const newHistory = [...chatHistory, { sender: 'user', text: message }];
    setChatHistory(newHistory);

    try {
      const res = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      const responseText = data.response || data.error || 'No response';
      setChatHistory([...newHistory, { sender: 'bot', text: responseText }]);
    } catch (error) {
      setChatHistory([...newHistory, { sender: 'bot', text: error.message || 'An error occurred.' }]);

    } finally {
      setMessage('');
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {chatHistory.map((msg, idx) => (
          <div key={idx} className={`chat-bubble ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <textarea
        className="chat-input"
        placeholder="Type a message..."
        rows="2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="send-button" onClick={sendMessage} disabled={loading}>
        {loading ? 'Sending...' : 'Send'}
      </button>
    </div>
  );
}

export default ChatInterface;
