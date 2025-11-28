import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-87342172/health", (c) => {
  return c.json({ status: "ok" });
});

// Resume Analysis endpoint - FREE version
app.post("/make-server-87342172/analyze-resume", async (c) => {
  try {
    const { resumeText, jobRole } = await c.req.json();

    if (!resumeText || !jobRole) {
      return c.json({ error: "Missing resumeText or jobRole" }, 400);
    }

    console.log(`Analyzing resume for role: ${jobRole}`);

    const grokApiKey = Deno.env.get("GROK_API_KEY");
    if (!grokApiKey) {
      console.error("GROK_API_KEY is not set");
      return c.json({ error: "API key not configured" }, 500);
    }

    // Call Grok API for FREE analysis
    const prompt = `You are an expert ATS (Applicant Tracking System) resume analyzer. Analyze the following resume for a "${jobRole}" position.

RESUME TEXT:
${resumeText}

SCORING SYSTEM (Total = 100 points):
1. Job Match Score: 30 points - Keyword + semantic match to ${jobRole}
2. Achievements/Impact Score: 20 points - Quantifiable results and impact
3. Experience Quality Score: 15 points - Relevance and quality of experience
4. ATS Parsing/Compatibility: 12 points - Format, structure, parsing friendliness
5. Skills Match Score: 10 points - Hard skills relevant to ${jobRole}
6. Readability & Clarity: 5 points - Clear, concise language
7. Professional Summary: 3 points - Quality of summary/objective
8. Formatting: 3 points - Layout, consistency, visual appeal
9. Contact Info: 1 point - Complete and professional contact details
10. Education: 1 point - Relevant education credentials

Provide a FREE analysis with:
1. Total score out of 100
2. Individual scores for each section (with max points shown)
3. Basic improvement suggestion for each section (1-2 sentences)
4. 3-5 missing skills relevant to ${jobRole} (provide actual number based on gap analysis)
5. Top 3 key strengths found in the resume
6. ATS compatibility percentage (0-100%)

Return ONLY valid JSON in this exact format:
{
  "totalScore": 75,
  "sections": [
    {"name": "Job Match Score", "score": 22, "maxScore": 30, "suggestion": "Add more role-specific keywords."},
    {"name": "Achievements/Impact Score", "score": 14, "maxScore": 20, "suggestion": "Quantify your achievements with metrics."},
    {"name": "Experience Quality Score", "score": 11, "maxScore": 15, "suggestion": "Highlight more relevant projects."},
    {"name": "ATS Parsing/Compatibility", "score": 10, "maxScore": 12, "suggestion": "Use standard section headers."},
    {"name": "Skills Match Score", "score": 7, "maxScore": 10, "suggestion": "Add technical skills for this role."},
    {"name": "Readability & Clarity", "score": 4, "maxScore": 5, "suggestion": "Use bullet points consistently."},
    {"name": "Professional Summary", "score": 2, "maxScore": 3, "suggestion": "Write a stronger opening summary."},
    {"name": "Formatting", "score": 3, "maxScore": 3, "suggestion": "Good formatting overall."},
    {"name": "Contact Info", "score": 1, "maxScore": 1, "suggestion": "Contact info is complete."},
    {"name": "Education", "score": 1, "maxScore": 1, "suggestion": "Education section is adequate."}
  ],
  "missingSkills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
  "strengths": ["Strength 1", "Strength 2", "Strength 3"],
  "atsCompatibility": 85
}`;

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${grokApiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4-1-fast-reasoning",
        messages: [
          {
            role: "system",
            content: "You are an expert ATS resume analyzer. Always return valid JSON only, no markdown formatting."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Grok API error: ${response.status} - ${errorText}`);
      return c.json({ error: `Grok API error: ${response.status}` }, 500);
    }

    const data = await response.json();
    console.log("Grok API response received");

    let analysisResult;
    try {
      const content = data.choices[0].message.content;
      console.log("Raw Grok response:", content.substring(0, 200)); // Log first 200 chars for debugging
      
      // More aggressive cleaning of the response
      let cleanContent = content.trim();
      
      // Remove markdown code blocks
      cleanContent = cleanContent.replace(/```json\s*/g, '').replace(/```\s*/g, '');
      
      // Remove any leading/trailing non-JSON characters
      const jsonStart = cleanContent.indexOf('{');
      const jsonEnd = cleanContent.lastIndexOf('}');
      
      if (jsonStart !== -1 && jsonEnd !== -1) {
        cleanContent = cleanContent.substring(jsonStart, jsonEnd + 1);
      }
      
      console.log("Cleaned content:", cleanContent.substring(0, 200)); // Log cleaned version
      analysisResult = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error("Failed to parse Grok response:", parseError);
      console.error("Raw content:", data.choices[0].message.content);
      return c.json({ error: "Failed to parse AI response. Please try again." }, 500);
    }

    return c.json({
      success: true,
      type: "free",
      data: analysisResult
    });

  } catch (error) {
    console.error("Error in /analyze-resume:", error);
    return c.json({ error: error.message || "Internal server error" }, 500);
  }
});

// Resume Analysis endpoint - PAID version
app.post("/make-server-87342172/analyze-resume-paid", async (c) => {
  try {
    const { resumeText, jobRole, jobDescription, isSpecificJob } = await c.req.json();

    if (!resumeText || !jobRole) {
      return c.json({ error: "Missing resumeText or jobRole" }, 400);
    }

    console.log(`Analyzing resume (PAID) for role: ${jobRole}, Specific Job: ${isSpecificJob || false}`);

    const grokApiKey = Deno.env.get("GROK_API_KEY");
    if (!grokApiKey) {
      console.error("GROK_API_KEY is not set");
      return c.json({ error: "API key not configured" }, 500);
    }

    // Build the prompt based on whether it's a specific job or general analysis
    const jobDescriptionSection = isSpecificJob && jobDescription 
      ? `\n\nJOB DESCRIPTION:\n${jobDescription}\n\n⚠️ IMPORTANT: This is a SPECIFIC JOB MATCHING analysis. Analyze the resume against THIS EXACT job description. Provide keyword match percentage, identify ALL required skills from the job description that are missing in the resume, and tailor all suggestions to help the candidate match THIS specific job posting.`
      : '';

    // Call Grok API for PAID analysis
    const prompt = `You are an expert ATS (Applicant Tracking System) resume analyzer. Analyze the following resume for a \"${jobRole}\" position with PREMIUM DETAILED analysis.

RESUME TEXT:
${resumeText}${jobDescriptionSection}

SCORING SYSTEM (Total = 100 points):
1. Job Match Score: 30 points - Keyword + semantic match to ${jobRole}
2. Achievements/Impact Score: 20 points - Quantifiable results and impact
3. Experience Quality Score: 15 points - Relevance and quality of experience
4. ATS Parsing/Compatibility: 12 points - Format, structure, parsing friendliness
5. Skills Match Score: 10 points - Hard skills relevant to ${jobRole}
6. Readability & Clarity: 5 points - Clear, concise language
7. Professional Summary: 3 points - Quality of summary/objective
8. Formatting: 3 points - Layout, consistency, visual appeal
9. Contact Info: 1 point - Complete and professional contact details
10. Education: 1 point - Relevant education credentials

Provide a PREMIUM PAID analysis with:
1. Total score out of 100
2. Individual scores for each section (with max points shown)
3. DETAILED improvement suggestions for each section (3-5 sentences with specific examples)
4. ALL missing skills relevant to ${jobRole}${isSpecificJob ? ' FROM THE JOB DESCRIPTION' : ''} (provide actual number based on gap analysis - let AI decide how many are needed)
5. ALL missing tools relevant to ${jobRole}${isSpecificJob ? ' FROM THE JOB DESCRIPTION' : ''} (provide actual number based on gap analysis - let AI decide how many are needed)
6. A completely rewritten, optimized resume based on findings${isSpecificJob ? ' tailored to match the specific job description' : ''}
7. A tailored cover letter based on the analysis${isSpecificJob ? ' addressing the specific company and role from the job description' : ''}
${isSpecificJob ? '8. Keyword match percentage showing how well the resume matches the job description (0-100%)\n9. List of exact keywords from the job description that are missing in the resume' : ''}

Return ONLY valid JSON in this exact format:
{
  "totalScore": 75,${isSpecificJob ? '\n  "keywordMatchPercentage": 78,' : ''}
  "sections": [
    {"name": "Job Match Score", "score": 22, "maxScore": 30, "detailedSuggestion": "Your resume shows basic alignment with ${jobRole} but lacks critical industry keywords. Add terms like 'X', 'Y', 'Z'. Focus on demonstrating core competencies that hiring managers seek. Consider restructuring your experience section to lead with role-relevant achievements."},
    ... (9 more sections with detailed suggestions)
  ],
  "missingSkills": ["Skill1", "Skill2", ... (AI decides count based on actual gaps)],
  "missingTools": ["Tool1", "Tool2", ... (AI decides count based on actual gaps)],${isSpecificJob ? '\n  "missingKeywords": ["Keyword1", "Keyword2", "Keyword3", ... (keywords from job description not in resume)],' : ''}
  "optimizedResume": "FULL REWRITTEN RESUME TEXT HERE - properly formatted, ATS-optimized, with all suggestions implemented",
  "coverLetter": "FULL TAILORED COVER LETTER HERE - addresses the role, highlights key achievements, shows enthusiasm"
}`;

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${grokApiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4-1-fast-reasoning",
        messages: [
          {
            role: "system",
            content: "You are an expert ATS resume analyzer and professional resume writer. Always return valid JSON only, no markdown formatting."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Grok API error (PAID): ${response.status} - ${errorText}`);
      return c.json({ error: `Grok API error: ${response.status}` }, 500);
    }

    const data = await response.json();
    console.log("Grok API response (PAID) received");

    let analysisResult;
    try {
      const content = data.choices[0].message.content;
      console.log("Raw Grok response (PAID):", content.substring(0, 200)); // Log first 200 chars for debugging
      
      // More aggressive cleaning of the response
      let cleanContent = content.trim();
      
      // Remove markdown code blocks
      cleanContent = cleanContent.replace(/```json\s*/g, '').replace(/```\s*/g, '');
      
      // Remove any leading/trailing non-JSON characters
      const jsonStart = cleanContent.indexOf('{');
      const jsonEnd = cleanContent.lastIndexOf('}');
      
      if (jsonStart !== -1 && jsonEnd !== -1) {
        cleanContent = cleanContent.substring(jsonStart, jsonEnd + 1);
      }
      
      console.log("Cleaned content (PAID):", cleanContent.substring(0, 200)); // Log cleaned version
      analysisResult = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error("Failed to parse Grok response (PAID):", parseError);
      console.error("Raw content:", data.choices[0].message.content);
      return c.json({ error: "Failed to parse AI response. Please try again." }, 500);
    }

    return c.json({
      success: true,
      type: "paid",
      data: analysisResult
    });

  } catch (error) {
    console.error("Error in /analyze-resume-paid:", error);
    return c.json({ error: error.message || "Internal server error" }, 500);
  }
});

// LinkedIn Analysis endpoint - FREE version
app.post("/make-server-87342172/analyze-linkedin", async (c) => {
  try {
    const { linkedInText, jobRole } = await c.req.json();

    if (!linkedInText || !jobRole) {
      return c.json({ error: "Missing linkedInText or jobRole" }, 400);
    }

    console.log(`Analyzing LinkedIn profile for role: ${jobRole}`);

    const grokApiKey = Deno.env.get("GROK_API_KEY");
    if (!grokApiKey) {
      console.error("GROK_API_KEY is not set");
      return c.json({ error: "API key not configured" }, 500);
    }

    // Call Grok API for FREE LinkedIn analysis
    const prompt = `You are an expert LinkedIn profile optimizer. Analyze the following LinkedIn profile for a "${jobRole}" position.

LINKEDIN PROFILE TEXT:
${linkedInText}

LINKEDIN SCORING SYSTEM (Total = 100 points):
1. Experience Relevance & Quality: 25 points - Most important, match role responsibilities
2. Skills Match (Role-Based): 20 points - Hard skills + role keywords
3. About/Summary Optimization: 15 points - Strong keyword + relevance indicator
4. Achievements / Impact Metrics: 12 points - Drives hiring decisions
5. Keywords + Role SEO Match: 10 points - Ranking power for LinkedIn search
6. Headline Optimization: 6 points - Very impactful in PDF + SEO
7. Education Quality & Relevance: 4 points - Important but not heavy-weight
8. Certifications (if relevant): 4 points - Matters for tech/finance roles
9. Contact Info + Custom URL: 2 points - Basic completeness
10. Projects / Volunteer / Extras: 2 points - Bonus credibility

Provide a FREE analysis with:
1. Total score out of 100
2. Individual scores for each section (with max points shown)
3. Basic improvement suggestion for each section (1-2 sentences)
4. 3-5 missing skills relevant to ${jobRole} (provide actual number based on gap analysis)
5. Top 3 key strengths found in the profile
6. LinkedIn profile compatibility percentage (0-100%)

Return ONLY valid JSON in this exact format:
{
  "totalScore": 75,
  "sections": [
    {"name": "Experience Relevance & Quality", "score": 18, "maxScore": 25, "suggestion": "Add more role-specific projects."},
    {"name": "Skills Match (Role-Based)", "score": 14, "maxScore": 20, "suggestion": "Add technical skills for this role."},
    {"name": "About/Summary Optimization", "score": 10, "maxScore": 15, "suggestion": "Include more keywords."},
    {"name": "Achievements / Impact Metrics", "score": 8, "maxScore": 12, "suggestion": "Quantify your achievements."},
    {"name": "Keywords + Role SEO Match", "score": 7, "maxScore": 10, "suggestion": "Add industry keywords."},
    {"name": "Headline Optimization", "score": 4, "maxScore": 6, "suggestion": "Make headline more compelling."},
    {"name": "Education Quality & Relevance", "score": 3, "maxScore": 4, "suggestion": "Education section is adequate."},
    {"name": "Certifications (if relevant)", "score": 3, "maxScore": 4, "suggestion": "Add relevant certifications."},
    {"name": "Contact Info + Custom URL", "score": 2, "maxScore": 2, "suggestion": "Contact info is complete."},
    {"name": "Projects / Volunteer / Extras", "score": 1, "maxScore": 2, "suggestion": "Add projects or volunteer work."}
  ],
  "missingSkills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
  "strengths": ["Strength 1", "Strength 2", "Strength 3"],
  "linkedInCompatibility": 85
}`;

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${grokApiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4-1-fast-reasoning",
        messages: [
          {
            role: "system",
            content: "You are an expert LinkedIn profile optimizer. Always return valid JSON only, no markdown formatting."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Grok API error: ${response.status} - ${errorText}`);
      return c.json({ error: `Grok API error: ${response.status}` }, 500);
    }

    const data = await response.json();
    console.log("Grok API response received");

    let analysisResult;
    try {
      const content = data.choices[0].message.content;
      console.log("Raw Grok response:", content.substring(0, 200));
      
      let cleanContent = content.trim();
      cleanContent = cleanContent.replace(/```json\s*/g, '').replace(/```\s*/g, '');
      
      const jsonStart = cleanContent.indexOf('{');
      const jsonEnd = cleanContent.lastIndexOf('}');
      
      if (jsonStart !== -1 && jsonEnd !== -1) {
        cleanContent = cleanContent.substring(jsonStart, jsonEnd + 1);
      }
      
      console.log("Cleaned content:", cleanContent.substring(0, 200));
      analysisResult = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error("Failed to parse Grok response:", parseError);
      console.error("Raw content:", data.choices[0].message.content);
      return c.json({ error: "Failed to parse AI response. Please try again." }, 500);
    }

    return c.json({
      success: true,
      type: "free",
      data: analysisResult
    });

  } catch (error) {
    console.error("Error in /analyze-linkedin:", error);
    return c.json({ error: error.message || "Internal server error" }, 500);
  }
});

// LinkedIn Analysis endpoint - PAID version
app.post("/make-server-87342172/analyze-linkedin-paid", async (c) => {
  try {
    const { linkedInText, jobRole } = await c.req.json();

    if (!linkedInText || !jobRole) {
      return c.json({ error: "Missing linkedInText or jobRole" }, 400);
    }

    console.log(`Analyzing LinkedIn profile (PAID) for role: ${jobRole}`);

    const grokApiKey = Deno.env.get("GROK_API_KEY");
    if (!grokApiKey) {
      console.error("GROK_API_KEY is not set");
      return c.json({ error: "API key not configured" }, 500);
    }

    // Call Grok API for PAID LinkedIn analysis
    const prompt = `You are an expert LinkedIn profile optimizer and professional writer. Analyze the following LinkedIn profile for a "${jobRole}" position with PREMIUM DETAILED analysis.

LINKEDIN PROFILE TEXT:
${linkedInText}

LINKEDIN SCORING SYSTEM (Total = 100 points):
1. Experience Relevance & Quality: 25 points - Most important, match role responsibilities
2. Skills Match (Role-Based): 20 points - Hard skills + role keywords
3. About/Summary Optimization: 15 points - Strong keyword + relevance indicator
4. Achievements / Impact Metrics: 12 points - Drives hiring decisions
5. Keywords + Role SEO Match: 10 points - Ranking power for LinkedIn search
6. Headline Optimization: 6 points - Very impactful in PDF + SEO
7. Education Quality & Relevance: 4 points - Important but not heavy-weight
8. Certifications (if relevant): 4 points - Matters for tech/finance roles
9. Contact Info + Custom URL: 2 points - Basic completeness
10. Projects / Volunteer / Extras: 2 points - Bonus credibility

Provide a PREMIUM PAID analysis with:
1. Total score out of 100
2. Individual scores for each section (with max points shown)
3. DETAILED improvement suggestions for each section (3-5 sentences with specific examples)
4. ALL missing skills relevant to ${jobRole} (provide actual number based on gap analysis - let AI decide how many are needed)
5. ALL missing tools relevant to ${jobRole} (provide actual number based on gap analysis - let AI decide how many are needed)
6. THREE compelling headline options optimized for ${jobRole} (each 120-220 characters)
7. TWO complete About/Summary section rewrites optimized for ${jobRole} (each 1200-1500 characters)
8. A tailored cover letter based on the LinkedIn profile analysis

Return ONLY valid JSON in this exact format:
{
  "totalScore": 75,
  "sections": [
    {"name": "Experience Relevance & Quality", "score": 18, "maxScore": 25, "detailedSuggestion": "Your experience shows basic alignment with ${jobRole} but lacks critical industry-specific projects. Add quantifiable achievements like 'Led team of X to achieve Y% improvement'. Focus on demonstrating core competencies that hiring managers seek. Consider restructuring your experience section to lead with role-relevant achievements. Highlight cross-functional collaboration and leadership examples."},
    ... (9 more sections with detailed suggestions)
  ],
  "missingSkills": ["Skill1", "Skill2", ... (AI decides count based on actual gaps)],
  "missingTools": ["Tool1", "Tool2", ... (AI decides count based on actual gaps)],
  "headlines": [
    "Headline Option 1 - Optimized for ${jobRole}",
    "Headline Option 2 - Optimized for ${jobRole}",
    "Headline Option 3 - Optimized for ${jobRole}"
  ],
  "summaries": [
    "Full About/Summary Option 1 - Complete rewrite optimized for ${jobRole} with keywords and compelling narrative",
    "Full About/Summary Option 2 - Alternative rewrite with different angle but equally optimized for ${jobRole}"
  ],
  "coverLetter": "FULL TAILORED COVER LETTER HERE - addresses the role, highlights key achievements from LinkedIn profile, shows enthusiasm"
}`;

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${grokApiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4-1-fast-reasoning",
        messages: [
          {
            role: "system",
            content: "You are an expert LinkedIn profile optimizer and professional writer. Always return valid JSON only, no markdown formatting."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Grok API error (PAID): ${response.status} - ${errorText}`);
      return c.json({ error: `Grok API error: ${response.status}` }, 500);
    }

    const data = await response.json();
    console.log("Grok API response (PAID) received");

    let analysisResult;
    try {
      const content = data.choices[0].message.content;
      console.log("Raw Grok response (PAID):", content.substring(0, 200));
      
      let cleanContent = content.trim();
      cleanContent = cleanContent.replace(/```json\s*/g, '').replace(/```\s*/g, '');
      
      const jsonStart = cleanContent.indexOf('{');
      const jsonEnd = cleanContent.lastIndexOf('}');
      
      if (jsonStart !== -1 && jsonEnd !== -1) {
        cleanContent = cleanContent.substring(jsonStart, jsonEnd + 1);
      }
      
      console.log("Cleaned content (PAID):", cleanContent.substring(0, 200));
      analysisResult = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error("Failed to parse Grok response (PAID):", parseError);
      console.error("Raw content:", data.choices[0].message.content);
      return c.json({ error: "Failed to parse AI response. Please try again." }, 500);
    }

    return c.json({
      success: true,
      type: "paid",
      data: analysisResult
    });

  } catch (error) {
    console.error("Error in /analyze-linkedin-paid:", error);
    return c.json({ error: error.message || "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);