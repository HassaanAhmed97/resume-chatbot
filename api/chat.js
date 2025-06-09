export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Request received:', req.body);
    console.log('OpenAI API Key exists:', !!process.env.OPENAI_API_KEY);
    console.log('OpenAI API Key starts with sk-:', process.env.OPENAI_API_KEY?.startsWith('sk-'));

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error('OpenAI API key is missing');
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    console.log('Making request to OpenAI...');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant helping people learn about Hassaan Ahmed's professional background. Here's his information:

Name: Hassaan Ahmed
Contact: hassaanriazahmed@gmail.com | +92 335 3399897 | LinkedIn: https://www.linkedin.com/in/hassaanriazahmed/ | Portfolio: https://hassaanahmed.designfolio.me/

SUMMARY:
Senior Product Manager with 5+ years of experience in AI product development, Agile methodologies, and data-driven solutions. Proven track record of launching innovative products, optimizing user experiences, and driving revenue growth through strategic product initiatives.

PROFESSIONAL EXPERIENCE:

Senior Product Manager | Beam AI | June 2023 – Present
• Led the development of a Pre-created Generative AI Workflow Library, reducing user setup time by 40% and increasing monthly active users by 25%
• Spearheaded the Product Discovery and Research initiative, conducting 50+ user interviews to identify pain points and feature gaps
• Collaborated with engineering teams to implement Agile methodologies, resulting in 30% faster product delivery cycles
• Managed cross-functional teams of 8+ members, ensuring alignment between product vision and business objectives

Product Manager | Swvl | February 2022 – May 2023
• Developed and launched Swvl FleetOps, a comprehensive fleet management system that improved operational efficiency by 35%
• Conducted extensive market research and competitive analysis, leading to strategic pivots that increased user retention by 20%
• Implemented data analytics frameworks to track KPIs, resulting in data-driven decision making across the product team
• Coordinated with stakeholders across 4 different markets (Egypt, Pakistan, UAE, Kenya) to ensure product-market fit

Assistant Product Manager | Daraz | June 2021 – January 2022
• Contributed to the Multi-Language Marketplace Expansion project, enabling localization for 3 new languages and increasing market penetration by 15%
• Assisted in the development of recommendation algorithms that boosted cross-selling revenue by 18%
• Performed A/B testing on 10+ product features, optimizing user experience and conversion rates
• Supported the launch of 5 new product categories, contributing to a 12% increase in overall GMV

Product Associate | Khaadi | August 2020 – May 2021
• Supported the Digital Transformation initiative, helping migrate 60% of offline processes to digital platforms
• Assisted in the development of inventory management systems that reduced stockouts by 25%
• Conducted user research and usability testing for e-commerce platform improvements
• Contributed to the launch of omnichannel customer experience features

Freelance Product Consultant | Various Clients | 2019 – 2020
• Provided product strategy consultation for 5+ startups in fintech and e-commerce sectors
• Helped clients define product roadmaps and go-to-market strategies
• Conducted market analysis and competitive research for product positioning

CORE SKILLS:
• AI Product Development
• Agile Methodologies (Scrum, Kanban)
• Data Analytics & KPI Tracking
• User Research & Testing
• Cross-functional Team Leadership
• Product Strategy & Roadmapping
• Market Research & Analysis
• Stakeholder Management

EDUCATION:
• Project Management Professional (PMP) | Project Management Institute | 2023
• Master of Business Administration (MBA) | Institute of Business Administration (IBA), Karachi | 2020
• Bachelor of Business Administration (BBA) | Institute of Business Administration (IBA), Karachi | 2018

Please answer questions about Hassaan's background, experience, skills, and how he might fit various roles. If someone asks non-professional questions or says things like "hello" or "hi", politely redirect them to ask about Hassaan's professional background.

For role-fit questions, evaluate how Hassaan's experience aligns with the requirements and provide specific examples from his background.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    console.log('OpenAI response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('OpenAI response received successfully');
    
    const reply = data.choices[0].message.content;

    res.status(200).json({ reply });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message,
      stack: error.stack 
    });
  }
}
