import React, { useState, useRef, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// Case Studies Data
const caseStudies = [
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation',
    company: 'Beam AI',
    category: 'AI/SaaS • Enterprise',
    icon: '🤖',
    hero: 'Scaling AI agent delivery from 0 to 5+ enterprise clients',
    metrics: [
      { value: '3x', label: 'MAU Growth' },
      { value: '20%', label: 'Churn Reduction' },
      { value: '7', label: 'Agent Features Shipped' },
    ],
    situation: 'Beam AI needed to scale its AI workflow automation platform to serve enterprise clients while maintaining quality and reducing time-to-delivery.',
    task: 'As Sr. Product Manager, I owned the AI workflow automation roadmap and was responsible for aligning C-suite, GTM, and engineering teams to define surface areas and deliver enterprise solutions.',
    action: [
      'Defined and prioritized agent capabilities including evaluation pipelines, workflow orchestration, tool auto-tuning, and third-party integrations',
      'Established LLM/agent evaluation pipeline with SLOs tracking latency, success rate, throughput, and tool-call accuracy',
      'Led multi-phase delivery governance for 10+ enterprise clients ensuring 100% on-time delivery',
      'Documented model behavior and trade-offs; defined prompt strategies and guardrails',
    ],
    result: '3x increase in monthly active users, 20% reduction in churn, and 12% improvement in time-to-delivery. Achieved ~15% above-target adoption in first 90 days for enterprise clients.',
    color: 'from-blue-500 to-indigo-500',
    cardBg: 'from-sky-50 via-blue-50 to-indigo-50',
  },
  {
    id: 'fleet-optimization',
    title: 'Real-Time Fleet Optimization',
    company: 'Swvl',
    category: 'Logistics • Operations Tech',
    icon: '🚐',
    hero: 'Building fleet tracking from scratch for 5,000+ daily rides',
    metrics: [
      { value: '30%', label: 'Efficiency Increase' },
      { value: '22%', label: 'Fewer Service Failures' },
      { value: '60%', label: 'Scheduling Time Cut' },
    ],
    situation: 'Swvl\'s operations team lacked visibility into real-time fleet performance, leading to service failures and inefficient route management across multiple cities.',
    task: 'I took ownership outside my core responsibilities to create a comprehensive fleet tracking and reporting system that would serve vendors, B2B customers, and internal ops teams.',
    action: [
      'Directed rollout of centralized real-time tracking and performance reporting platform',
      'Built fleet optimization platform from scratch enabling B2B scalability',
      'Developed Power BI dashboard to automate route assignments',
      'Led multi-workstream implementation of dynamic routing logic across 3 cities',
    ],
    result: '30% operational efficiency improvement, 22% reduction in service failures across 5,000+ daily rides, 60% reduction in scheduling time, and 25% increase in network coverage.',
    color: 'from-emerald-500 to-teal-500',
    cardBg: 'from-emerald-50 via-teal-50 to-cyan-50',
  },
  {
    id: 'urdu-localization',
    title: 'Urdu Localization for Tier-2 Markets',
    company: 'Daraz (Alibaba)',
    category: 'E-commerce • Growth',
    icon: '🌍',
    hero: 'Translating 100K+ listings to unlock $500K revenue',
    metrics: [
      { value: '$500K', label: 'Revenue Generated' },
      { value: '7%', label: 'Order Volume Uplift' },
      { value: '$200K', label: 'Funding Secured' },
    ],
    situation: 'Daraz\'s tier-2 markets in Pakistan had untapped potential, but language barriers prevented many users from engaging with product listings and reviews.',
    task: 'I initiated and led a high-risk, high-reward project to translate product content into Urdu, requiring buy-in from global Alibaba leadership.',
    action: [
      'Proposed and championed the localization initiative to global leadership',
      'Leveraged Alibaba\'s NLP model to translate 100,000+ product listings and reviews (4.2/5 accuracy)',
      'Secured $200K in funding from global leadership for this expansion project',
      'Coordinated cross-functional delivery across engineering, content, and local ops teams',
    ],
    result: '7% order volume increase in tier-2 markets, generating approximately $500K in revenue. Successfully proved the business case for regional localization.',
    color: 'from-orange-500 to-amber-500',
    cardBg: 'from-amber-50 via-orange-50 to-rose-50',
  },
  {
    id: 'intelligent-agent-setup',
    title: 'Intelligent Agent Setup',
    company: 'Beam AI',
    category: 'AI/SaaS • Product',
    icon: '⚡',
    hero: 'Reducing workflow creation from weeks to hours',
    metrics: [
      { value: '90%', label: 'Fewer Config Errors' },
      { value: '2-3 hrs', label: 'vs 2-3 Weeks' },
      { value: '3x', label: 'MAU Contribution' },
    ],
    situation: 'Users struggled with the complex, manual process of configuring AI workflows, requiring node-by-node setup that took 2-3 weeks and resulted in frequent errors.',
    task: 'Design and ship an intelligent system that could generate complete workflows from natural language input, dramatically simplifying the user experience.',
    action: [
      'Designed intelligent parsing system that generates complete workflows from natural language',
      'Eliminated manual node-by-node configuration entirely',
      'Used Cursor AI to rapidly prototype and validate the feature',
      'Introduced "Create a Blank Agent" button to reduce bounce rates by 30%',
    ],
    result: 'Reduced workflow creation time from 2-3 weeks to 2-3 hours, achieved 90% fewer manual configuration errors, and contributed significantly to 3x increase in monthly active users.',
    color: 'from-violet-500 to-purple-500',
    cardBg: 'from-violet-50 via-purple-50 to-fuchsia-50',
  },
  {
    id: 'ecommerce-optimization',
    title: 'E-Commerce Platform Optimization',
    company: 'Khaadi',
    category: 'Retail • E-commerce',
    icon: '🛍️',
    hero: 'Generating $200K monthly revenue through UX improvements',
    metrics: [
      { value: '$200K', label: 'Monthly Revenue Added' },
      { value: '40%', label: 'Fewer Clicks to Purchase' },
      { value: '1.5%', label: 'Conversion Rate Lift' },
    ],
    situation: 'Khaadi\'s e-commerce platform had a complicated navigation structure that was causing friction in the purchase journey, resulting in lost conversions.',
    task: 'Simplify the shopping experience to reduce friction and improve conversion rates while optimizing inventory and fulfillment systems.',
    action: [
      'Redesigned website navigation to simplify the shopping experience',
      'Delivered enhancements to inventory and order fulfillment systems',
      'Optimized order fulfillment and in-store operations',
      'Expanded assortment in high-demand categories by 30%',
    ],
    result: '40% reduction in clicks to purchase, conversion rate increase from 5% to 6.5% generating additional $200K monthly revenue, and 8% average basket size improvement.',
    color: 'from-rose-500 to-pink-500',
    cardBg: 'from-pink-50 via-rose-50 to-red-50',
  },
];

// Chat Component
function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedPrompts = [
    "What's your AI experience?",
    "Tell me about Beam AI",
    "What makes you unique?",
    "Key achievements?"
  ];

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://resume-chatbot-three.vercel.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();

      if (data.response) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I couldn't process that. Please try again." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-gray-200/50 border border-white/50 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h2 className="text-white font-semibold">Hassaan AI</h2>
            <p className="text-blue-100 text-sm">Ask me anything about my experience</p>
          </div>
        </div>
      </div>

      <div className="h-72 overflow-y-auto p-6">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl">👋</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-sm">
              Hi! I'm an AI assistant that knows everything about Hassaan's professional journey.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(prompt)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-gray-700 text-sm rounded-full border border-blue-100 transition-all hover:shadow-md"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${message.role === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl rounded-br-md'
                  : 'bg-gray-100 text-gray-800 rounded-2xl rounded-bl-md'} px-4 py-3`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my experience..."
            className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-500/25"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

// Home Page
function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-rose-50 to-emerald-100 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto pt-8 sm:pt-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Hassaan Ahmed
          </h1>
          <p className="text-lg text-gray-600">
            Senior Product Manager • AI/SaaS • Operations
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a href="https://www.linkedin.com/in/hassaanriazahmed/" target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:hassaan.riaz97@gmail.com"
               className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Chat Widget */}
        <div className="mb-12">
          <ChatWidget />
        </div>

        {/* Case Studies Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Case Studies</h2>
          <div className="grid gap-4">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                to={`/case-study/${study.id}`}
                className={`group bg-gradient-to-r ${study.cardBg} backdrop-blur-sm rounded-2xl p-6 border border-white/80 hover:shadow-xl hover:shadow-gray-200/50 transition-all hover:-translate-y-1 hover:scale-[1.02]`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{study.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">{study.company}</span>
                      <span className="text-xs text-gray-400">{study.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">{study.hero}</p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {study.metrics.slice(0, 3).map((metric, idx) => (
                        <div key={idx} className="bg-white/60 rounded-lg px-3 py-1.5">
                          <span className={`text-base font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                            {metric.value}
                          </span>
                          <span className="text-xs text-gray-500 ml-1">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-300 group-hover:text-blue-500 transition-colors self-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm py-6">
          Powered by AI • Built with ❤️
        </p>
      </div>
    </div>
  );
}

// Case Study Page
function CaseStudyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-rose-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case study not found</h1>
          <Link to="/" className="text-blue-600 hover:underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-rose-50 to-emerald-100 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto pt-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </button>

        {/* Hero */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className={`bg-gradient-to-r ${study.color} px-8 py-12 text-white`}>
            <span className="text-white/80 text-sm">{study.company} • {study.category}</span>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">{study.title}</h1>
            <p className="text-xl text-white/90">{study.hero}</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 divide-x divide-gray-100 bg-white">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="p-6 text-center">
                <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-r ${study.color} text-white flex items-center justify-center text-sm`}>S</span>
              Situation
            </h2>
            <p className="text-gray-600 leading-relaxed">{study.situation}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-r ${study.color} text-white flex items-center justify-center text-sm`}>T</span>
              Task
            </h2>
            <p className="text-gray-600 leading-relaxed">{study.task}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-r ${study.color} text-white flex items-center justify-center text-sm`}>A</span>
              Action
            </h2>
            <ul className="space-y-3">
              {study.action.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${study.color} mt-2 flex-shrink-0`}></span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-r ${study.color} text-white flex items-center justify-center text-sm`}>R</span>
              Result
            </h2>
            <p className="text-gray-600 leading-relaxed">{study.result}</p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Want to know more about this project?</p>
          <Link
            to="/"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${study.color} text-white rounded-xl font-medium hover:shadow-lg transition-all`}
          >
            Ask Hassaan AI
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm py-8">
          Powered by AI • Built with ❤️
        </p>
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
