import React, { useState } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! I'm Hassaan's AI assistant. Ask me anything about his background, experience, or how he might fit a specific role!"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!inputText.trim()) return;

    const userMessage = { type: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    const currentInput = inputText;
    setInputText('');

    try {
      const response = await fetch('https://resume-chatbot-three.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: currentInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const botMessage = { type: 'bot', text: data.response };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { 
        type: 'bot', 
        text: 'Sorry, I encountered an error. Please try again later.' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Hassaan Ahmed
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Senior Product Manager | AI Product Development | Agile Methodologies | Program Manager
          </p>
          <p className="text-gray-500">
            Ask me anything about Hassaan's background, skills, and experience!
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-lg shadow-xl p-6 h-96 flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Hassaan's experience, skills, or role fit..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSubmit}
              disabled={isLoading || !inputText.trim()}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Send
            </button>
          </div>
        </div>

        {/* Sample Questions */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Try asking questions like:
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "What experience does Hassaan have with AI products?",
              "How would Hassaan fit as a Senior Product Manager?",
              "Tell me about Hassaan's achievements at Beam AI",
              "What skills does Hassaan have in data analytics?",
              "How has Hassaan contributed to revenue growth?",
              "What's Hassaan's experience with Agile methodologies?"
            ].map((question, index) => (
              <button
                key={index}
                onClick={() => setInputText(question)}
                className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors border border-gray-200"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500">
          <p>Connect with Hassaan: 
            <a href="https://www.linkedin.com/in/hassaanriazahmed/" className="text-blue-500 hover:underline ml-1">LinkedIn</a> | 
            <a href="https://hassaanahmed.designfolio.me/" className="text-blue-500 hover:underline ml-1">Portfolio</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
