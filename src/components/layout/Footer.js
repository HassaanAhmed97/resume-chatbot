import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
          Let's Build Something Together
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Always interested in discussing AI products, operations challenges, or new opportunities.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:hassaan.riaz97@gmail.com"
            className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium"
          >
            Get in Touch
          </a>
          <a
            href="https://linkedin.com/in/hassaan-ahmed97"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            PMP Certified | MBA from IBA Karachi
          </p>
          <p className="text-xs text-gray-300 mt-2">
            Powered by Hassaan AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
