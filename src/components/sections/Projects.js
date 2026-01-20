import React from 'react';

const projects = [
  {
    title: 'AI Workflow Automation Platform',
    company: 'Beam AI',
    description: 'Owned the AI workflow automation roadmap, aligning with C-suite and GTM to define surface areas. Shipped 7 agent-driven features including evaluation pipelines, workflow orchestration, and custom tool generation.',
    metric: '3x MAU Growth',
  },
  {
    title: 'Real-Time Fleet Tracking System',
    company: 'Swvl',
    description: 'Built fleet optimization platform from scratch with real-time tracking and performance reporting. Created dashboards for vendors, B2B customers, and ops teams.',
    metric: '30% Efficiency Gain',
  },
  {
    title: 'Urdu Localization for Tier-2 Markets',
    company: 'Daraz',
    description: 'Led cross-functional delivery of localization for 100,000+ product listings using Alibaba\'s NLP model, unlocking new customer segments in Pakistan.',
    metric: '7% Order Uplift',
  },
  {
    title: 'AI Agent Setup with Process Automation',
    company: 'Beam AI',
    description: 'Designed intelligent parsing system that generates complete workflows from natural language, eliminating manual node-by-node configuration.',
    metric: '90% Fewer Errors',
  },
  {
    title: 'Seller Onboarding Automation',
    company: 'Daraz',
    description: 'Streamlined manual seller onboarding from 15 to 7 steps using automated Airtable workflow, reducing onboarding time from 10 to 3 days.',
    metric: '30% More Sign-ups',
  },
  {
    title: 'AI-Powered Resume Chatbot',
    company: 'Personal Project',
    description: 'Built and monetized an AI-powered resume chatbot, demonstrating entrepreneurial skills and product development from concept to revenue.',
    metric: '25+ Clients',
  },
];

const Projects = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">Key Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-sm transition-all">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{project.company}</p>
                  <h3 className="text-lg font-medium text-gray-900 mt-1">{project.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  {project.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
