import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';

const PAGE_BG = 'min-h-screen bg-slate-50';
const RESUME_URL = `${process.env.PUBLIC_URL || ''}/Hassaan-Ahmed-Resume.pdf`;
const LOGO_BASE = `${process.env.PUBLIC_URL || ''}/logos`;
const FEATURED_CASE_STUDY_IDS = [
  'autoleap-conversational-ai',
  'beam-enterprise-finance',
  'beam-conversational-setup',
  'swvl-fleet-optimization',
];

function CompanyInitials({ initials, colorClass }) {
  return (
    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colorClass} text-white flex items-center justify-center text-xs font-bold tracking-wide flex-shrink-0`}>
      {initials}
    </div>
  );
}

function CompanyLogo({ logoUrl, initials, colorClass, company }) {
  const [failed, setFailed] = useState(false);

  if (failed || !logoUrl) {
    return <CompanyInitials initials={initials} colorClass={colorClass} />;
  }

  return (
    <div className="w-11 h-11 rounded-xl bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5">
      <img
        src={logoUrl}
        alt={`${company} logo`}
        className="w-full h-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function SiteFooter() {
  return (
    <p className="text-center text-slate-400 text-sm py-8">
      Built with React · Gemini · Vercel
    </p>
  );
}

// Case Studies Data — synced with master-experience.md + resume (2026-09-16)
const caseStudies = [
  {
    id: 'autoleap-conversational-ai',
    title: 'Conversational Shop Workflows',
    company: 'AutoLeap',
    category: 'Automotive SaaS • AI',
    initials: 'AL',
    logoUrl: `${LOGO_BASE}/autoleap.png`,
    hero: 'Natural-language execution layer live with 50 shops in 4 weeks',
    metrics: [
      { value: '50', label: 'Shops in Beta' },
      { value: '10%', label: 'Faster Task Completion' },
      { value: '5', label: 'Workflows Shipped' },
    ],
    situation: 'AutoLeap serves ~3,000 automotive repair shops across North America. Shop staff were doing core CRM, booking, and parts tasks through fragmented UI flows — AI was the next evolution across three platform surfaces.',
    task: 'As Group Product Manager — AI Products, lead AI across CRM, appointment booking, and third-party parts ordering — and ship a conversational execution layer shops could actually use in the field.',
    action: [
      'Took a conversational execution layer from kickoff to beta in ~4 weeks, covering 5 shop workflows in natural language: appointment booking, repair order creation/editing, parts lookup, and campaign creation',
      'Run the 50-shop beta directly — success criteria, go-wide gates, and a weekly read on where shops fall out of the flow; field feedback sets production scope, not the original spec',
      'Inherited an underperforming AI receptionist; rebuilt the intent set against real production calls — recognition accuracy ~70% → mid-80s, widening calls handled without a human',
      'Work with 3 product managers and 2 designers alongside engineering across each AI-enabled surface',
    ],
    result: 'Live with 50 shops completing targeted tasks ~10% faster than through the existing UI. Inbound response time down ~5% after receptionist recovery. Beta learnings now drive go-wide scope.',
    color: 'from-slate-700 to-slate-900',
  },
  {
    id: 'beam-enterprise-finance',
    title: 'Enterprise Financial Services Agents',
    company: 'Beam AI',
    category: 'AI/SaaS • Financial Services',
    initials: 'BM',
    logoUrl: `${LOGO_BASE}/beam.jpg`,
    hero: 'Platform serving 50+ enterprise clients — collections, recovery, and AR/AP at scale',
    metrics: [
      { value: '50+', label: 'Enterprise Clients Served' },
      { value: '100%', label: 'On-Time Delivery' },
      { value: '22%', label: 'Agent Efficiency Gain' },
    ],
    situation: 'The Beam AI enterprise agentic platform needed to scale across Europe, North America, and the GCC — with financial services as the deepest vertical. Clients needed defensible automation in complaints-sensitive processes like collections, recovery, and finance ops.',
    task: 'Embed as product lead on client engagements end to end: discovery workshops, solution design, phased delivery, rollout, and adoption — while building platform capabilities (eval, guardrails) that made automation measurable and trustworthy.',
    action: [
      'Built platform capabilities and led multiple end-to-end deployments across finance (collections, AR/AP, reconciliation), HR, and customer service — integrated into client SAP and NetSuite systems',
      'Built collections agents routing accounts across 3 recovery paths at ~85% accuracy; monthly collections rose 4% and customer response rate rose 10% over the first 3 months of rollout',
      'Shipped recovery and reconciliation agents for B2B SaaS and consumer fintech clients; automated exception detection cut false positives ~10% vs manual baseline',
      'Productised a 4-pillar LLM evaluation framework (LLM-as-judge, golden sets, human rubric, hallucination detection) as Tool Tuner and Agent Tuner — agent efficiency +22%',
      'Set confidence policy governing autonomous execution vs human escalation across the platform\'s 50+ agent graphs',
    ],
    result: '100% on-time delivery across 10+ enterprise programmes with adoption ~15% above target in the first 90 days. Financial services became the deepest vertical and the eval/guardrail layer became a reusable platform moat.',
    color: 'from-blue-700 to-indigo-800',
  },
  {
    id: 'beam-conversational-setup',
    title: 'Conversational Agent Setup',
    company: 'Beam AI',
    category: 'AI/SaaS • Platform Product',
    initials: 'BM',
    logoUrl: `${LOGO_BASE}/beam.jpg`,
    hero: 'Replacing multi-step setup with free-text intent routing',
    metrics: [
      { value: '85%', label: 'Intent Accuracy' },
      { value: '20%', label: 'Faster Setup' },
      { value: '18%', label: 'ARR via Retention' },
    ],
    situation: 'Agent setup was the single largest funnel drop-off on the Beam platform. Users faced a complex multi-step flow before building their first agent — conversion suffered and churn followed.',
    task: 'Replace the multi-step agent setup with a single free-text entry point that routes platform-user intent intelligently and dramatically reduces time-to-first-agent.',
    action: [
      'Shipped conversational discovery routing intent three ways: answer directly, start an agent build, or ask a clarifying question',
      'Prototyped the front-end in v0/Lovable against the documented design system; designer vetted and refined; engineering productionized',
      'Measured ~85% intent-classification accuracy, ~20% reduction in time-to-agent-completion, and ~75% first-run eval score on agent outputs',
    ],
    result: 'Conversion through the setup step improved and churn fell — primary driver of ~18% ARR growth via retention. New-user growth ran alongside; the retention impact is the defensible piece.',
    color: 'from-indigo-700 to-violet-800',
  },
  {
    id: 'beam-platform-economics',
    title: 'Platform Unit Economics & Hiring Product',
    company: 'Beam AI',
    category: 'AI/SaaS • Pricing & 0-to-1',
    initials: 'BM',
    logoUrl: `${LOGO_BASE}/beam.jpg`,
    hero: 'Cut per-execution cost 50% and shipped a $500K+ hiring product',
    metrics: [
      { value: '50%', label: 'Cost per Execution Cut' },
      { value: '40%', label: 'Price Pass-Through' },
      { value: '$500K+', label: 'Hiring Contracts Signed' },
    ],
    situation: 'Beam needed to improve platform unit economics without sacrificing output quality, while also opening a new revenue line through an agentic hiring product built on the same agent stack.',
    task: 'Own cost-to-serve analysis and pricing re-tiering at the platform level, and take a 0-to-1 agentic hiring solution from concept through deployment and GTM.',
    action: [
      'Instrumented the orchestration graph, analysed execution-level data, and removed redundant LLM calls — per-execution cost −50% with output quality preserved',
      'Worked with Finance on cost-per-execution analysis and margin modelling; argued for passing most savings through as a ~40% customer price cut rather than banking margin',
      'Benchmarked Beam pricing against n8n, Make, and Lindy to inform tier structure and positioning',
      'Built and owned an agentic hiring product end to end — candidate screening and JD intake on the Beam agent stack — taking it to $500K+ in signed contracts with enterprise staffing clients in ~4 months',
      'Designed two-tier agent memory (task-scoped state + RAG-backed long-document memory); context handling improved 30%+',
    ],
    result: 'Cost-to-serve method became a repeatable account-level exercise. Pricing re-tiering improved stickiness. Hiring product reached $500K+ in signed base contracts (~50% paid upfront) within ~4 months of GTM.',
    color: 'from-slate-600 to-blue-800',
  },
  {
    id: 'swvl-fleet-optimization',
    title: 'Real-Time Fleet Optimisation',
    company: 'Swvl',
    category: 'Logistics • Operations Tech',
    initials: 'SW',
    logoUrl: `${LOGO_BASE}/swvl.png`,
    hero: '0-to-1 ops platform across 3 markets for 5,000+ daily rides',
    metrics: [
      { value: '30%', label: 'Efficiency Lift' },
      { value: '60%', label: 'Scheduling Time Cut' },
      { value: '15%', label: 'Extra from Scope Flip' },
    ],
    situation: 'Swvl operated mass transit and ride-hailing across Pakistan, Egypt, and the UAE with 5,000+ daily rides. Ops teams lacked real-time visibility, scheduling was manual, and a single incentive policy had to work across three different local leadership contexts.',
    task: 'As Program Manager — Global Operations Tech & Experience, deliver a real-time fleet optimisation platform 0-to-1 and own the driver bonus and deduction policy that directly affected supply quality and unit economics.',
    action: [
      'Built real-time fleet optimisation platform across 3 markets — dispatch, scheduling, and performance views for ops teams running 5,000+ rides a day',
      'Owned driver bonus and deduction policy across all 3 markets — a single incentive lever serving supply quality, in-app adoption, and cost per ride simultaneously',
      'Rode shifts with drivers in 2 markets and shadowed control-room dispatchers before designing anything; most of what shipped came from watching people work around old tooling',
      'Flipped scope mid-launch when post-launch review showed riders wanted demand-side route control — added ~15% efficiency on top of the original supply-side design',
      'Ran structured pilots with risk registers and go/no-go gates',
    ],
    result: 'Operational efficiency +~30%, scheduling time −60%, network coverage +25%, service failures −22%. Mid-launch scope flip added ~15% efficiency. 95% of identified risks mitigated pre-launch.',
    color: 'from-emerald-700 to-teal-800',
  },
  {
    id: 'daraz-marketplace-growth',
    title: 'Seller Onboarding & Marketplace Growth',
    company: 'Daraz (Alibaba)',
    category: 'E-commerce • Marketplace',
    initials: 'DZ',
    logoUrl: `${LOGO_BASE}/daraz.png`,
    hero: 'Seller onboarding and localisation across 100K+ SKUs',
    metrics: [
      { value: '35%', label: 'Onboarding Time Cut' },
      { value: '7%', label: 'Order Uplift' },
      { value: '20%', label: 'Top-Seller Visibility' },
    ],
    situation: 'Daraz — the largest e-commerce marketplace in South Asia — had manual seller onboarding slowing assortment growth. Listing localisation across 100,000+ SKUs was an untapped lever in tier-2 markets, and merchant ranking decisions required alignment across three approval tiers.',
    task: 'As Product Manager — Customer & Seller Experience, own the seller onboarding experience and drive discovery on listing localisation and merchant visibility surfaces.',
    action: [
      'Owned seller onboarding — automated previously manual steps and ran the team training rollout behind it',
      'Ran customer research discovery on listing localisation across 100,000+ SKUs',
      'Shipped seller visibility and merchant ranking surfaces through a 3-tier approval structure (local Pakistan → regional South Asia → Alibaba Group HQ)',
    ],
    result: 'Onboarding time cut ~35%. Listing localisation drove ~7% order uplift and ~5% GMV growth over 6 months. Top-seller visibility increased ~20%. A good share of the job was managing stakeholders who could say no without losing the delivery date.',
    color: 'from-amber-600 to-orange-700',
  },
];

// Chat Component
const MIN_INPUT_HEIGHT = 72; // ~2 lines default
const MAX_INPUT_HEIGHT = 168; // ~6 lines before internal scroll

function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const chatSessionRef = useRef(0);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';

    if (!textarea.value) {
      textarea.style.height = `${MIN_INPUT_HEIGHT}px`;
      textarea.style.overflowY = 'hidden';
      return;
    }

    const nextHeight = Math.min(Math.max(textarea.scrollHeight, MIN_INPUT_HEIGHT), MAX_INPUT_HEIGHT);
    textarea.style.height = `${nextHeight}px`;
    textarea.style.overflowY = textarea.scrollHeight > MAX_INPUT_HEIGHT ? 'auto' : 'hidden';

    if (textarea.scrollHeight > MAX_INPUT_HEIGHT) {
      textarea.scrollTop = textarea.scrollHeight;
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useLayoutEffect(() => {
    adjustTextareaHeight();
  }, [input]);

  const suggestedPrompts = [
    "Where does Hassaan work now?",
    "Tell me about Hassaan's finance AI work",
    "What did Hassaan do at Beam AI?",
    "What are Hassaan's key achievements?",
  ];

  const handleNewChat = () => {
    chatSessionRef.current += 1;
    setMessages([]);
    setInput('');
    setIsLoading(false);
  };

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const session = chatSessionRef.current;
    const userMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatUrl = process.env.NODE_ENV === 'development'
        ? '/api/chat'
        : 'https://resume-chatbot-three.vercel.app/api/chat';
      const response = await fetch(chatUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();
      if (session !== chatSessionRef.current) return;

      if (data.response) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I couldn't process that. Please try again." }]);
      }
    } catch (error) {
      if (session !== chatSessionRef.current) return;
      setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong. Please try again." }]);
    } finally {
      if (session === chatSessionRef.current) {
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.trim() && !isLoading) {
        sendMessage(input);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-800/10 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              HA
            </div>
            <div className="min-w-0">
              <h2 className="text-white font-semibold">Hassaan AI</h2>
              <p className="text-slate-300 text-sm truncate">Ask about Hassaan Ahmed's experience</p>
            </div>
          </div>
          {messages.length > 0 && (
            <button
              type="button"
              onClick={handleNewChat}
              aria-label="New chat"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>New chat</span>
            </button>
          )}
        </div>
      </div>

      <div className="h-96 sm:h-[32rem] overflow-y-auto p-6">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 text-slate-700 text-sm font-bold">
              HA
            </div>
            <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
              Ask me about Hassaan Ahmed — grounded in his resume and the case studies below.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(prompt)}
                  className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200 transition-colors"
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
                  ? 'bg-slate-800 text-white rounded-2xl rounded-br-md'
                  : 'bg-slate-100 text-slate-800 rounded-2xl rounded-bl-md'} px-4 py-3`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/80">
        <form onSubmit={handleSubmit} className="flex items-end gap-3">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Hassaan's experience..."
            rows={2}
            style={{ minHeight: `${MIN_INPUT_HEIGHT}px`, overflowY: 'hidden' }}
            className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-[height] resize-none leading-relaxed"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-3 bg-slate-800 text-white rounded-xl hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

function CaseStudyCard({ study }) {
  return (
    <Link
      to={`/case-study/${study.id}`}
      className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-4">
        <CompanyLogo
          logoUrl={study.logoUrl}
          initials={study.initials}
          colorClass={study.color}
          company={study.company}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-slate-500 font-medium">{study.company}</span>
            <span className="text-xs text-slate-400 shrink-0">{study.category}</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mt-1 group-hover:text-slate-700 transition-colors">
            {study.title}
          </h3>
          <p className="text-slate-600 mt-2 text-sm leading-relaxed">{study.hero}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {study.metrics.slice(0, 3).map((metric, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg px-3 py-1.5 border border-slate-100">
                <span className={`text-sm font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </span>
                <span className="text-xs text-slate-500 ml-1">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-slate-300 group-hover:text-slate-500 transition-colors self-center shrink-0">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// Home Page
function HomePage() {
  const [showAllCaseStudies, setShowAllCaseStudies] = useState(false);
  const featuredStudies = caseStudies.filter((s) => FEATURED_CASE_STUDY_IDS.includes(s.id));
  const visibleStudies = showAllCaseStudies ? caseStudies : featuredStudies;

  return (
    <div className={`${PAGE_BG} p-4 sm:p-6`}>
      <div className="max-w-4xl mx-auto pt-8 sm:pt-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            Hassaan Ahmed
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Group Product Manager — AI Products
          </p>
          <p className="text-slate-500 mt-2 max-w-2xl mx-auto leading-relaxed">
            7 years building AI and operations products — built Agentic AI platform serving 50+ enterprise clients; led end-to-end deployments across financial services, HR, and customer experience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/hassaanriazahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hassaan.riaz97@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Chat Widget */}
        <div className="mb-12">
          <ChatWidget />
        </div>

        {/* Case Studies Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Case Studies</h2>
          <p className="text-slate-500 text-sm text-center mb-6">Selected work across agentic AI, financial services, and operations</p>
          <div className="grid gap-3">
            {visibleStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
          {!showAllCaseStudies && caseStudies.length > featuredStudies.length && (
            <div className="text-center mt-4">
              <button
                onClick={() => setShowAllCaseStudies(true)}
                className="text-sm text-slate-600 hover:text-slate-900 font-medium underline underline-offset-4"
              >
                View all {caseStudies.length} case studies
              </button>
            </div>
          )}
        </div>

        <SiteFooter />
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
      <div className={`${PAGE_BG} flex items-center justify-center`}>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case study not found</h1>
          <Link to="/" className="text-slate-700 hover:underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${PAGE_BG} p-4 sm:p-6`}>
      <div className="max-w-3xl mx-auto pt-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </button>

        {/* Hero */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-8">
          <div className={`bg-gradient-to-r ${study.color} px-8 py-12 text-white`}>
            <span className="text-white/80 text-sm">{study.company} • {study.category}</span>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">{study.title}</h1>
            <p className="text-xl text-white/90">{study.hero}</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 divide-x divide-slate-100 bg-white">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="p-6 text-center">
                <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-sm text-slate-500 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-r ${study.color} text-white flex items-center justify-center text-sm`}>S</span>
              Situation
            </h2>
            <p className="text-slate-600 leading-relaxed">{study.situation}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-r ${study.color} text-white flex items-center justify-center text-sm`}>T</span>
              Task
            </h2>
            <p className="text-slate-600 leading-relaxed">{study.task}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-r ${study.color} text-white flex items-center justify-center text-sm`}>A</span>
              Action
            </h2>
            <ul className="space-y-3">
              {study.action.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${study.color} mt-2 flex-shrink-0`}></span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <span className={`w-8 h-8 rounded-lg bg-gradient-to-r ${study.color} text-white flex items-center justify-center text-sm`}>R</span>
              Result
            </h2>
            <p className="text-slate-600 leading-relaxed">{study.result}</p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 mb-4">Want to know more about this project?</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
          >
            Ask about Hassaan
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </Link>
        </div>

        <SiteFooter />
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Main App
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
