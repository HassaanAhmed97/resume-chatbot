import React from 'react';

const prompts = [
  "What's Hassaan's experience with AI products?",
  "Tell me about his work at Beam AI",
  "What makes him unique as a PM?",
  "What are his key achievements?",
];

const SuggestedPrompts = ({ onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt, index) => (
        <button
          key={index}
          onClick={() => onSelect(prompt)}
          className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default SuggestedPrompts;
