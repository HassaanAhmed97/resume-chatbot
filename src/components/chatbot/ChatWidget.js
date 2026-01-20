import React, { useState } from 'react';
import SuggestedPrompts from './SuggestedPrompts';
import MessageBubble from './MessageBubble';

const ChatWidget = () => {
  const [query, setQuery] = useState('');
  const [conversation, setConversation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (question) => {
    const q = question || query;
    if (!q.trim()) return;

    setIsLoading(true);
    setConversation({ question: q, answer: null });

    try {
      const response = await fetch('https://resume-chatbot-three.vercel.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q }),
      });
      const data = await response.json();
      setConversation({ question: q, answer: data.response });
    } catch (error) {
      console.error('Chat error:', error);
      setConversation({
        question: q,
        answer: 'Sorry, something went wrong. Please try again or reach out directly via email.'
      });
    } finally {
      setIsLoading(false);
      setQuery('');
    }
  };

  const handleReset = () => {
    setConversation(null);
    setQuery('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Hassaan AI</h2>
              <p className="text-sm text-gray-500">Ask me anything about Hassaan's experience</p>
            </div>
          </div>

          {/* Conversation or Prompts */}
          {conversation ? (
            <div className="space-y-4 mb-6">
              <MessageBubble type="user" content={conversation.question} />
              <MessageBubble type="ai" content={conversation.answer} isLoading={isLoading} />
              {!isLoading && (
                <button
                  onClick={handleReset}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Ask another question
                </button>
              )}
            </div>
          ) : (
            <SuggestedPrompts onSelect={handleSubmit} />
          )}

          {/* Input - Always visible */}
          <div className="flex gap-3 mt-6">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={conversation ? "Ask a follow-up question..." : "Or type your own question..."}
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            />
            <button
              onClick={() => handleSubmit()}
              disabled={!query.trim() || isLoading}
              className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {isLoading ? (
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                'Send'
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWidget;
