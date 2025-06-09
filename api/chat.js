// Enhanced api/chat.js with better error handling and rate limiting

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    // Check if OpenAI API key is configured
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('OpenAI API key not configured');
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    // Log the request for debugging
    console.log('Received query:', query);
    console.log('API Key exists:', !!apiKey);
    console.log('API Key starts with sk-:', apiKey.startsWith('sk-'));

    const resumePrompt = `
You are an AI assistant representing Hassaan Ahmed's professional profile. Based on the resume information below, answer questions about his qualifications, experience, and fit for roles.

RESUME INFORMATION:
Name: Hassaan Ahmed
Contact: hassaan.ahmed97@gmail.com | +92 311 2765887 | LinkedIn: linkedin.com/in/hassaanriazahmed | Portfolio: hassaanahmed.designfolio.me

PROFESSIONAL SUMMARY:
Senior Product Manager with 5+ years of experience in AI product development, Agile methodologies, and data-driven solutions. Proven track record of launching innovative products, managing cross-functional teams, and driving revenue growth through strategic product decisions.

EXPERIENCE:
• Beam AI (Current) - Senior Product Manager
  - Led development of pre-created generative AI workflow library, reducing client setup time by 60%
  - Managed product roadmap for AI automation tools serving 500+ enterprise clients
  - Collaborated with engineering teams to implement machine learning models

• Swvl - Senior Product Manager
  - Launched FleetOps platform, improving operational efficiency by 40%
  - Managed $2M+ product budget and 15+ person cross-functional team
  - Implemented data analytics solutions reducing customer churn by 25%

• Daraz - Product Manager
  - Led multi-language marketplace expansion to 3 new regions
  - Increased user engagement by 35% through personalized recommendation engines
  - Managed vendor onboarding process for 1000+ merchants

• Khaadi - Assistant Product Manager
  - Developed e-commerce platform features increasing conversion rates by 20%
  - Coordinated with design and development teams on user experience improvements

SKILLS:
• AI Product Development • Agile Methodologies • Data Analytics • Program Management
• Cross-functional Team Leadership • Revenue Growth Strategies • User Experience Design
• Machine Learning Implementation • Market Research • Strategic Planning

EDUCATION:
• Project Management Professional (PMP) Certification
• MBA in Marketing - Institute of Business Administration (IBA), Karachi
• BBA in Marketing - Institute of Business Administration (IBA), Karachi

KEY ACHIEVEMENTS:
• Reduced client setup time by 60% through AI workflow automation
• Improved operational efficiency by 40% with FleetOps platform
• Increased user engagement by 35% through personalized features
• Managed $2M+ product budgets and 15+ person teams
• Led successful multi-region marketplace expansion

PORTFOLIO PROJECTS:
1. Pre-created Generative AI Workflow Library - Automated workflow templates reducing manual setup time
2. Swvl FleetOps Platform - Comprehensive fleet management solution with real-time analytics
3. Multi-Language Marketplace Expansion - Localized e-commerce platform for emerging markets

Instructions: 
- Provide specific, detailed answers based on the resume information
- Focus on relevant experience for the user's query
- If asked about fit for a role, evaluate based on the skills and experience listed
- For general greetings, provide a brief professional introduction
- Be conversational but professional in tone
`;

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: resumePrompt
        },
        {
          role: "user",
          content: query
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    };

    console.log('Making request to OpenAI API...');

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    console.log('OpenAI API response status:', response.status);
    console.log('OpenAI API response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error response:', errorText);
      
      let errorMessage = 'OpenAI API error occurred';
      let statusCode = response.status;
      
      try {
        const errorData = JSON.parse(errorText);
        errorMessage = errorData.error?.message || errorMessage;
        
        // Handle specific error types
        if (statusCode === 429) {
          if (errorMessage.includes('quota')) {
            errorMessage = 'OpenAI API quota exceeded. Please check your billing and usage limits.';
          } else if (errorMessage.includes('rate limit')) {
            errorMessage = 'OpenAI API rate limit exceeded. Please try again in a few minutes.';
          } else {
            errorMessage = 'OpenAI API temporarily unavailable due to high demand. Please try again later.';
          }
        } else if (statusCode === 401) {
          errorMessage = 'Invalid OpenAI API key. Please check your configuration.';
        } else if (statusCode === 403) {
          errorMessage = 'Access denied. Please check your OpenAI API permissions.';
        }
      } catch (parseError) {
        console.error('Error parsing OpenAI error response:', parseError);
      }

      return res.status(statusCode).json({ 
        error: errorMessage,
        details: errorText,
        statusCode: statusCode
      });
    }

    const data = await response.json();
    console.log('OpenAI API response data received');

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('Invalid response structure from OpenAI:', data);
      return res.status(500).json({ error: 'Invalid response from OpenAI API' });
    }

    const answer = data.choices[0].message.content;
    console.log('Successfully processed query, returning response');

    res.status(200).json({ answer });

  } catch (error) {
    console.error('Error in API handler:', error);
    console.error('Error stack:', error.stack);
    
    let errorMessage = 'Internal server error';
    let statusCode = 500;
    
    if (error.message.includes('fetch')) {
      errorMessage = 'Network error connecting to OpenAI API';
    } else if (error.message.includes('timeout')) {
      errorMessage = 'Request timeout - please try again';
    }
    
    res.status(statusCode).json({ 
      error: errorMessage,
      details: error.message 
    });
  }
}
