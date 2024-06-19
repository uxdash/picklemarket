import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MessagesPage = () => {
  const { conversationId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages from backend
    const fetchMessages = async () => {
      const response = await fetch(`/api/messages/${conversationId}`);
      const data = await response.json();
      setMessages(data);
    };

    fetchMessages();
  }, [conversationId]);

  const sendMessage = async () => {
    const senderId = 'PLACEHOLDER_SENDER_ID'; // Replace with actual sender ID
    const response = await fetch(`/api/messages/${conversationId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ senderId, content: newMessage }),
    });
    const data = await response.json();
    setMessages([...messages, data]);
    setNewMessage('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Messages</h1>
      <div className="mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="border-b p-2">{msg.content}</div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Type a message"
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white p-2">Send</button>
      </div>
    </div>
  );
};

export default MessagesPage;
