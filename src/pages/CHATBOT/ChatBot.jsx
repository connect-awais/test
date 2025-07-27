import React, { useState, useEffect, useRef } from 'react';
import './ChatBot.css';
import BmwLogo from '../../assets/images/logo-bmw-m.svg';

export default function Chatbot() {
 const [value, setValue] = useState('');
const [loading, setLoading] = useState(false);
const [messages, setMessages] = useState([
  { role: 'system', content: 'You are a helpful assistant knowledgeable about BMW M.' },
  { role: 'chatbot-assistant', content: 'What would you like to know about BMW M?' },
]);

const chatEndRef = useRef(null);

// Auto-scroll when messages change
useEffect(() => {
  chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages, loading]);

const onSend = async () => {
  const text = value.trim();
  if (!text || loading) return;

  const newMessages = [...messages, { role: 'chatbot-user', content: text }];
  setMessages(newMessages);
  setValue('');
  setLoading(true);

  try {
    // Prepare messages for API
    const groqMessages = [
      { role: 'system', content: 'You are a helpful assistant about BMW M.' },
      ...newMessages
        .filter((m) => m.role !== 'system')
        .map((m) => ({
          role: m.role === 'chatbot-user' ? 'user' : 'assistant',
          content: m.content,
        })),
    ];

    // Auto-switch API URL (local or live)
    const API_URL = '/api/chat';


    // Fetch response
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: groqMessages }),
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);

    const aiMessage =
      data.choices?.[0]?.message?.content || 'No response from AI.';

    setMessages((prev) => [
      ...prev,
      { role: 'chatbot-assistant', content: aiMessage },
    ]);
  } catch (err) {
    console.error(err);
    setMessages((prev) => [
      ...prev,
      { role: 'chatbot-assistant', content: 'Error: AI could not respond.' },
    ]);
  } finally {
    setLoading(false);
  }
};

const handleKey = (e) => {
  if (e.key === 'Enter') onSend();
};


  return (
    <div className="chatbot-page">
      {/* Header */}
      <header className="chatbot-header">
        <div className="chatbot-logos">
          <img src={BmwLogo} alt="BMW" className="chatbot-logo" />
        </div>
        <span className="chatbot-beta">Beta Version</span>
      </header>

      {/* Hero */}
      <main className="chatbot-content">
        <section className="chatbot-hero">
          <h1>
            WELCOME TO BMW M.
            <br /> LET&apos;S START THE ENGINE!
          </h1>
        </section>

        {/* Chat Thread */}
        <div className="chatbot-thread">
          {messages.slice(1).map((m, i) => (
            <div key={i} className={`chatbot-msg ${m.role}`}>
              <span>{m.content}</span>            </div>
          ))}
          {loading && <div className="chatbot-msg chatbot-assistant">Thinking...</div>}
          <div ref={chatEndRef}></div>
        </div>
      </main>

      {/* Input */}
      <div className="chatbot-chatbar">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask me anything (about BMW M)..."
          disabled={loading}
        />
        <button className="chatbot-send" onClick={onSend} disabled={loading}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="chatbot-footer">
        <a href="#">Legal Disclaimer</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies</a>
        <a href="#">Imprint</a>
      </footer>
    </div>
  );
}
