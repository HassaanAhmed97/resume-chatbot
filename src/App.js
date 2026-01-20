import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ChatWidget from './components/chatbot/ChatWidget';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <ChatWidget />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
