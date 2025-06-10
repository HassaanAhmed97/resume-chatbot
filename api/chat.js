export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    
    if (!GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    // System prompt with your resume information
    const systemPrompt = `You are Hassaan Ahmed's AI assistant. Answer questions about Hassaan based on this resume information:

**Name**: Hassaan Ahmed  
**Email**: hassaan.ria297@gmail.com  
**Phone**: +92 321 1811843  
**LinkedIn**: https://www.linkedin.com/in/hassaanriazahmed/  
**Portfolio**: https://hassaanahmed.designfolio.me/

**Summary**:  
A Senior Product Manager with over 5 years of experience in AI product development, Agile methodologies, and data-driven enterprise solutions. 5+ years of building and managing programs related to B2C and B2B centric product development and process optimization. I also build AI Agents to help you increase your efficiency using no-code platforms.

I've built my career as a product leader in fast-moving e-commerce and payments businesses. Currently, I'm a Senior Product Manager at Beam AI, where I've driven AI-powered user-journey solutions that cut delivery timelines by 20% and generated over $150K in annual efficiency gains. I've also led cross-functional teams—engineers, designers, sales teams —to design and ship products and features.

At Beam AI (Sr. Product Manager), I lead two core domains:
1. AI‑driven workflow automation—designing the framework that turns business rules into executable AI pipelines.
2. Platform roadmap & strategy—prioritizing and sequencing features to maximize reliability, scalability, and monetization.

Three flagship projects I've owned at Beam:
1. Subscription Billing Module (in progress): a token‑based, tiered‑pricing engine with invoicing APIs and automated payment reconciliation.
2. Conditional Execution Engine: an AI‑orchestration service that evaluates runtime conditions and triggers appropriate workflows, reducing manual interventions by 27%.
3. Beam V2 Platform Launch: a ground‑up rewrite of our core platform that has enabled a better overall user journey and helped make the platform be more self-service

At Swvl, my role was more on program level, where I was not only leading product development to productize operational practices, but also led a cross functional push to standardize processes by building and introducing products that resolve it on a large scale

Before that, at Daraz (an Alibaba company), I focused on the post-transaction experience: streamlining workflows to boost purchase visibility by 15%, doubling actionable customer feedback, and raising post-purchase satisfaction by 5%. My work has given me deep expertise in order-management systems, real-time monitoring, and checkout-to-settlement flows—all critical for delivering seamless, reliable experiences.

**Skills**:  
- AI Product Development  
- Agile Methodologies  
- Roadmap Planning  
- Data Analytics (Power BI, SQL, Airtable)  
- Enterprise Solutions  
- Stakeholder Management  
- Technical Collaboration (APIs, System Architecture)  
- A/B Testing  
- Process Automation  
- Cohort Analysis  
- Program Management  
- Impact Analysis  

**Experience**:  

Beam AI (Dec 2022 - Present)
Sr. Product Manager
- Spearheaded AI-driven digital transformation projects, including predictive analytics and workflow automation, using Agile
methodologies to reduce client turnaround time by 20% and deliver scalable payment acceptance solutions for enterprises.
- Enhanced platform scalability for 5 clients, securing $ 100 K+ ARR and improving retention by 80% through user insights.
- Drove platform scalability for SaaS solutions, enabling seamless adoption of payment gateway integrations, securing $100K+
ARR and boosting client retention by 80%.
- Optimized user journeys for billing and payment solutions, leveraging A/B testing and Mixpanel analytics to improve user
subscriptions and payment process, increasing success rates by 12% and reducing churn by 5%.
- Employed agile methodologies to ensure rapid iteration and continuous delivery for platform refactoring, improving product
efficiency by 18% and reducing manual intervention by 27%.
- Partnered with engineering teams to define API integrations and system architecture for AI platform enhancements, improving
scalability by 15%.
- Developed a solution onboarding strategy to address client pain points in platform adoption, increasing onboarding success rates
by 12% through user journey optimization and performance tracking.

Consulting Experience (Nov 2022 – Present)
- Shaped product roadmap for a seed-stage AI logistics startup, evangelizing technology to secure a $50M B2B market
opportunity.
- Prepared an e-commerce startup with product discovery and product roadmap development for a $40 M Series A1 fundraising.
- Led consulting projects across ecommerce, tourism, logistics, and aviation sector to develop market entry strategies.
- Assisted a tech startup in market feasibility analysis in order to pivot from its existing business model and coming up with a
more sustainable business model aimed at targeting a $20M market opportunity.

Swvl Feb (2022 – Nov 2022)
Program Manager - Global Operations & Experience
- Developed AI-driven fleet optimization tools, improving operational efficiency by 30% and supporting B2B scalability.
- Developed performance-based driver policies, increasing payout efficiency by 17% while maintaining service availability.
- Led expansion into Tier 2 cities, scaling operations by 15%, increasing fleet availability, and reducing downtime.
- Executed fleet uptime and predictive maintenance strategies, reducing vehicle breakdown incidents by 22%.
- Enhanced customer experience through data-driven insights, boosting Net Promoter Score (NPS) by 5 percentage points.

Daraz, Alibaba Group (Oct 2020 – Feb 2022)
Product Manager - Customer & Seller Experience
- Partnered with sales teams to craft value propositions for 500+ merchants in Pakistan, enabling $200K in transaction growth by
optimizing onboarding for digital payment adoption in Tier 2+ markets.
- Led localization initiatives, launching a multi-language platform variant that expanded user adoption by 20% in Tier 2+ markets.
- Developed chatbot for marketplace support, increasing resolution rates by 7% and handling 50K+ monthly interactions.

Khaadi (July 2019 – Oct 2020)
Management Trainee
- Optimized in-store operations, increasing stock liquidation rates by 10%, saving $10K+ in inventory costs.
- Launched a new product category, contributing 5% to overall sales and 7% to total product assortment.
- Redesigned store layouts, leading to an 8% boost in conversion rates by leveraging behavioral shopping insights.

Education
July 2019 – Oct 2020
- PMP, Project Management Professional Project Management Institute Oct, 2024
- MBA, Master of Business Administration Institute of Business Administration (IBA), Karachi Dec, 2023
- BBA, Bachelor of Business Administration Institute of Business Administration (IBA), Karachi  May, 2019


**LANGUAGES:**
- English (Fluent)
- Urdu (Native)
- Arabic (Conversational)
- Sindhi (Native)

Keep responses conversational, helpful, and focused on Hassaan's qualifications and experience. If asked about something not in the resume, politely indicate that information isn't available in the resume.`;

    // Prepare the request payload for Gemini API
    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: `${systemPrompt}\n\nUser question: ${message}`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    };
    console.log("PROMPT SENT TO GEMINI:\n", requestBody.contents[0].parts[0].text);

    // Make request to Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API Error:', errorData);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract the generated text from Gemini response
    const assistantMessage = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!assistantMessage) {
      throw new Error('No response generated from Gemini');
    }

    return res.status(200).json({
      response: assistantMessage
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to process chat request',
      details: error.message 
    });
  }
}
