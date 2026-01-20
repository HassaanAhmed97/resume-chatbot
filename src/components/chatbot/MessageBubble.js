import React from 'react';

const MessageBubble = ({ type, content, isLoading }) => {
  if (type === 'user') {
    return (
      <div className="flex justify-end">
        <div className="bg-gray-900 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-md text-sm">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-sm max-w-2xl">
        {isLoading ? (
          <div className="flex gap-1.5 py-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200" />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-400" />
          </div>
        ) : (
          <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">{content}</p>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
