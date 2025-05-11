'use client';

import { useState, useEffect, useRef } from 'react';

export default function ChatWidget({ darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: 'Hello! How can I help you with selling your software licenses today?',
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    setTimeout(() => {
      let botResponse;
      const lowercaseInput = input.toLowerCase();

      if (lowercaseInput.includes('how') && lowercaseInput.includes('sell')) {
        botResponse = {
          text: 'To sell your license, simply fill out our contact form with details about your license. Our team will evaluate it and provide a quote within 24 hours.',
          sender: 'bot',
        };
      } else if (
        lowercaseInput.includes('price') ||
        lowercaseInput.includes('worth') ||
        lowercaseInput.includes('value')
      ) {
        botResponse = {
          text: 'The value of your license depends on several factors including software type, remaining term, and current market demand. After you submit your details, our experts will provide a fair market valuation.',
          sender: 'bot',
        };
      } else if (
        lowercaseInput.includes('time') ||
        lowercaseInput.includes('long') ||
        lowercaseInput.includes('process')
      ) {
        botResponse = {
          text: 'Our process is quick! Once you submit your license details, you\'ll receive a valuation within 24 hours. If you accept our offer, payment is typically processed within 2-3 business days.',
          sender: 'bot',
        };
      } else {
        botResponse = {
          text: 'Thanks for your message. For specific questions about your license, please fill out our contact form and a team member will get back to you shortly.',
          sender: 'bot',
        };
      }

      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={`fixed bottom-5 right-5 z-10 `}>
      {isOpen && (
        <div className={`${darkMode ? 'bg-gray-700 dark-card text-white' : 'bg-blue-600'} shadow-xl rounded-lg w-80 sm:w-96 mb-4 overflow-hidden`}>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-600'} text-white p-4 flex justify-between items-center`}>
            <h3 className="font-medium">SoftSell Assistant</h3>
            <button onClick={toggleChat} className="text-white">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div ref={chatRef} className={`chat-window ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-4`}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === 'user'
                    ? `user-message ${darkMode ? 'text-white user-message-dark' : 'text-black'}`
                    : `bot-message ${darkMode ? 'bot-message-dark' : 'text-black'}`
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className={`p-3 flex border-t border-gray-200  ${darkMode ? 'bg-gray-600':'bg-white'}` }>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className={`flex-grow px-3 py-2 rounded-l-md border border-r-0 focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? 'text-white dark-input' : 'text-black border-gray-300'}`}
            />
            <button
              type="submit"
              className={`px-4 rounded-r-md border ${darkMode ? 'bg-blue-600 text-white border-blue-700' : 'bg-blue-500 text-white border-blue-600'}`}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={toggleChat}
          className={`${darkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors`}
        >
          <i className="fas fa-comment-dots text-2xl"></i>
        </button>
      )}
    </div>
  );
}
