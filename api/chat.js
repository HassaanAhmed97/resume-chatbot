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

**HASSAAN AHMED**
Email: hassaanahmed741@gmail.com
Phone: +92-321-2468742
LinkedIn: linkedin.com/in/hassaan-ahmed-89b6b2241
Location: Karachi, Pakistan

**SUMMARY:**
Passionate and dedicated Computer Science student at NED University with hands-on experience in web development, software engineering, and emerging technologies. Proven ability to deliver high-quality projects using modern frameworks and tools.

**EDUCATION:**
Bachelor of Computer Science (BSCS)
NED University of Engineering and Technology, Karachi
Expected Graduation: 2026
Current CGPA: 3.2/4.0

**TECHNICAL SKILLS:**
- Programming Languages: JavaScript, Python, C++, Java, HTML, CSS
- Frameworks & Libraries: React.js, Node.js, Express.js, Bootstrap
- Databases: MySQL, MongoDB
- Tools & Technologies: Git, GitHub, VS Code, Postman
- Cloud Platforms: Vercel, Netlify
- Other: RESTful APIs, Responsive Web Design, Version Control

**PROJECTS:**
1. E-Commerce Web Application (React.js, Node.js, MongoDB)
   - Built a full-stack e-commerce platform with user authentication
   - Implemented shopping cart, payment integration, and admin panel
   - Deployed using Vercel and MongoDB Atlas

2. Task Management System (JavaScript, HTML, CSS)
   - Created an interactive task management application
   - Features include task creation, editing, deletion, and status tracking
   - Responsive design for mobile and desktop

3. Personal Portfolio Website (React.js, CSS)
   - Developed a responsive portfolio showcasing projects and skills
   - Integrated contact form and smooth animations
   - Deployed on GitHub Pages

**EXPERIENCE:**
Web Development Intern - TechStart Solutions (June 2024 - August 2024)
- Collaborated with senior developers on client projects
- Contributed to front-end development using React.js
- Gained experience in agile development methodologies

**CERTIFICATIONS:**
- JavaScript Algorithms and Data Structures (freeCodeCamp)
- Responsive Web Design (freeCodeCamp)
- React.js Fundamentals (Coursera)

**LANGUAGES:**
- English (Fluent)
- Urdu (Native)

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
