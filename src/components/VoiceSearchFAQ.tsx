/**
 * Voice Search Optimized FAQ Component
 * Targets "how to", "what is", "why" conversational queries
 * Optimized for Google Assistant, Siri, Alexa voice search results
 */

export const voiceSearchQuestions = [
  {
    question: "How do I make my resume ATS friendly?",
    answer: "To make your resume ATS friendly, use a simple format without tables or graphics, include relevant keywords from the job description, use standard section headings like Work Experience and Education, save it as a Word document or plain text, and avoid headers and footers. An ATS resume checker can identify specific issues automatically.",
    category: "how-to"
  },
  {
    question: "What is an ATS score?",
    answer: "An ATS score is a percentage that shows how well your resume matches a job description and how easily an applicant tracking system can read it. Scores range from 0 to 100, with 80 or higher considered excellent. The score evaluates keyword match, formatting, and content quality.",
    category: "definition"
  },
  {
    question: "Why is my resume not getting interviews?",
    answer: "Your resume may not be getting interviews because it's not passing ATS screening. Common issues include missing keywords, poor formatting, lack of quantified achievements, generic content, or incompatible file formats. Up to 75% of resumes are rejected by ATS before a human sees them.",
    category: "problem-solving"
  },
  {
    question: "How long should my resume be?",
    answer: "Your resume should be one page if you have less than 10 years of experience, or two pages for more extensive careers. ATS systems can read longer resumes, but recruiters prefer concise, relevant information. Focus on recent, relevant experience and quantifiable achievements.",
    category: "how-to"
  },
  {
    question: "What keywords should I put on my resume?",
    answer: "Include keywords directly from the job description, industry-specific skills, technical tools you've used, certifications, and action verbs like managed, developed, or increased. For best results, use an ATS resume optimizer to identify missing keywords specific to your target role.",
    category: "how-to"
  },
  {
    question: "Can I use a template for my resume?",
    answer: "Yes, but choose ATS-friendly templates with simple formatting. Avoid templates with tables, text boxes, columns, headers, footers, or graphics. Many creative templates fail ATS screening. Use clean, single-column layouts with standard fonts and clear section headings.",
    category: "how-to"
  },
  {
    question: "How much does resume optimization cost?",
    answer: "Professional resume writing services cost 100 to 500 dollars or more. Our AI-powered resume optimization costs just $9.99 and includes an optimized resume rewrite, custom cover letter, and LinkedIn headline options—83% less than competitors with instant delivery.",
    category: "pricing"
  },
  {
    question: "What is the best resume format for ATS?",
    answer: "The best resume format for ATS is reverse chronological with a simple, single-column layout. Use standard fonts like Arial or Calibri, clear section headings, bullet points for achievements, and save as Word or PDF. Avoid tables, graphics, and unusual formatting.",
    category: "best-practices"
  },
  {
    question: "How do I optimize my LinkedIn profile?",
    answer: "Optimize your LinkedIn profile by writing a keyword-rich headline with your job title and key skills, creating a compelling summary with achievements and keywords, adding relevant skills that recruiters search for, requesting recommendations, and keeping your profile 100% complete. An optimized profile increases recruiter visibility by 300 to 500 percent.",
    category: "how-to"
  },
  {
    question: "What file format should I use for my resume?",
    answer: "Use Word document format (.docx) or plain text PDF for best ATS compatibility. Avoid image PDFs, Pages documents, or creative file formats. Word documents are most universally compatible with applicant tracking systems used by employers.",
    category: "technical"
  }
];

// Schema markup for voice search FAQ
export const voiceSearchFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": voiceSearchQuestions.map(q => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.answer
    }
  }))
};
