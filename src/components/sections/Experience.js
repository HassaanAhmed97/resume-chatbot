import React from 'react';

const experiences = [
  {
    company: 'Beam AI',
    role: 'Sr. Product Manager - Agentic AI',
    period: 'Dec 2022 - Present',
    highlight: 'Shipped 7 agent-driven features, 3x MAU growth, 20% churn reduction',
    tags: ['AI/ML', 'Enterprise', 'B2B SaaS'],
  },
  {
    company: 'Swvl',
    role: 'Program Manager - Operations Tech',
    period: 'Feb 2022 - Nov 2022',
    highlight: 'Built fleet optimization platform, 30% efficiency increase, 22% fewer service failures',
    tags: ['Logistics', 'Operations', 'B2B'],
  },
  {
    company: 'Daraz (Alibaba)',
    role: 'Product Manager - Customer & Seller Experience',
    period: 'Oct 2020 - Feb 2022',
    highlight: 'Localization for 100K+ listings, 7% order uplift, 5% GMV boost',
    tags: ['E-commerce', 'Marketplace', 'Growth'],
  },
  {
    company: 'Khaadi',
    role: 'Management Trainee - E-commerce & Product',
    period: 'July 2019 - Oct 2020',
    highlight: 'E-commerce optimization, 35% delay reduction, 98% order accuracy',
    tags: ['E-commerce', 'Retail', 'Operations'],
  },
];

const Experience = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-6 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all bg-white"
            >
              <p className="text-sm text-gray-500">{exp.period}</p>
              <h3 className="text-lg font-medium text-gray-900 mt-2 group-hover:text-teal-600 transition-colors">
                {exp.company}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{exp.role}</p>
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">{exp.highlight}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
