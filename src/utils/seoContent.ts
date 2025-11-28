/**
 * SEO Content Optimization Utilities
 * Enhanced content for maximum AEO/NLP optimization
 */

// Internal linking structure with keyword-rich anchor text
export const internalLinks = {
  navigation: [
    { text: "Free ATS Resume Checker", href: "/#features", keywords: ["ATS resume checker", "free"] },
    { text: "LinkedIn Profile Analyzer", href: "/#linkedin", keywords: ["LinkedIn analyzer", "profile optimization"] },
    { text: "How It Works", href: "/#how-it-works", keywords: ["resume optimization process"] },
    { text: "Resume & LinkedIn Tips", href: "/#blog", keywords: ["resume tips", "career advice"] },
    { text: "Pricing", href: "/#pricing", keywords: ["resume optimization cost"] },
    { text: "FAQ", href: "/#faq", keywords: ["ATS questions", "resume help"] }
  ],
  
  footer: [
    { text: "Privacy Policy", href: "/privacy", keywords: ["data security"] },
    { text: "Terms of Use", href: "/terms", keywords: ["service agreement"] },
    { text: "Contact Support", href: "/contact", keywords: ["help", "support"] }
  ],
  
  contextual: [
    { text: "optimize your resume for ATS", href: "/#features", context: "resume analysis" },
    { text: "improve your LinkedIn profile", href: "/#linkedin", context: "professional networking" },
    { text: "get more interview requests", href: "/#features", context: "job search success" },
    { text: "beat applicant tracking systems", href: "/#how-it-works", context: "ATS optimization" },
    { text: "increase your visibility to recruiters", href: "/#linkedin", context: "recruiter visibility" }
  ]
};

// Content clusters for topical authority
export const contentClusters = {
  "ATS Resume Optimization": {
    pillar: "Complete Guide to ATS Resume Optimization",
    supporting: [
      "How ATS Systems Work",
      "ATS-Friendly Resume Formatting",
      "Keyword Optimization Strategies",
      "Common ATS Mistakes to Avoid",
      "ATS Score Interpretation"
    ]
  },
  
  "LinkedIn Optimization": {
    pillar: "Complete LinkedIn Profile Optimization Guide",
    supporting: [
      "LinkedIn Headline Best Practices",
      "Writing a Compelling LinkedIn Summary",
      "LinkedIn Skills & Endorsements",
      "Increasing LinkedIn Profile Views",
      "LinkedIn SEO Strategies"
    ]
  },
  
  "Resume Writing": {
    pillar: "Professional Resume Writing Guide",
    supporting: [
      "Quantifying Achievements on Resume",
      "Action Verbs for Resumes",
      "Resume Summary vs Objective",
      "Tailoring Resume to Job Description",
      "Industry-Specific Resume Tips"
    ]
  },
  
  "Job Search Strategies": {
    pillar: "Modern Job Search Success Guide",
    supporting: [
      "Networking for Job Search",
      "Cover Letter Writing Tips",
      "Interview Preparation",
      "Following Up After Application",
      "Negotiating Job Offers"
    ]
  }
};

// Rich snippet content for enhanced SERP presence
export const richSnippetContent = {
  howTo: {
    name: "How to Optimize Your Resume for ATS",
    totalTime: "PT15M",
    steps: [
      {
        name: "Paste your resume text",
        text: "Copy and paste your complete resume text into the analyzer tool",
        image: "https://atsresumeoptimizer.com/step1.jpg"
      },
      {
        name: "Select your target job role",
        text: "Choose your industry and job title for targeted keyword analysis",
        image: "https://atsresumeoptimizer.com/step2.jpg"
      },
      {
        name: "Review your ATS compatibility score",
        text: "See your score out of 100 with detailed breakdown of 10 sections",
        image: "https://atsresumeoptimizer.com/step3.jpg"
      },
      {
        name: "Implement suggested improvements",
        text: "Apply the AI-generated recommendations to optimize your resume",
        image: "https://atsresumeoptimizer.com/step4.jpg"
      },
      {
        name: "Upgrade for complete optimization",
        text: "Get AI-rewritten resume, cover letter, and LinkedIn optimization for $9.99",
        image: "https://atsresumeoptimizer.com/step5.jpg"
      }
    ]
  },
  
  product: {
    name: "ATS Resume Optimizer Pro",
    description: "AI-powered resume and LinkedIn optimization tool that helps you pass applicant tracking systems and get more interviews",
    offers: {
      free: {
        name: "Free Analysis",
        price: "0",
        priceCurrency: "USD",
        description: "ATS compatibility score, 10-section analysis, missing skills, improvement suggestions"
      },
      premium: {
        name: "Premium Optimization",
        price: "9.99",
        priceCurrency: "USD",
        description: "Complete resume rewrite, cover letter, 3 LinkedIn headlines, 2 summaries, unlimited revisions for 30 days"
      }
    },
    aggregateRating: {
      ratingValue: "4.8",
      reviewCount: "2547",
      bestRating: "5"
    }
  }
};

// Meta descriptions for different pages (SEO optimized, <155 chars)
export const metaDescriptions = {
  home: "Free ATS resume checker analyzes 10 sections, provides compatibility score & missing skills. Premium includes resume rewrite & LinkedIn optimization for $9.99.",
  resume: "Check your resume's ATS compatibility score instantly. Get detailed analysis of 10 sections, missing keywords, and optimization tips to pass applicant tracking systems.",
  linkedin: "Optimize your LinkedIn profile with AI analysis. Get 3 headline options, 2 summary variations, and detailed suggestions to increase recruiter visibility by 300-500%.",
  privacy: "Privacy policy for ATS Resume Optimizer. Learn how we protect your data with encryption, never share with third parties, and auto-delete after 30 days.",
  terms: "Terms of use for ATS Resume Optimizer. Understand your rights, our services, refund policy, and legal terms for using our resume and LinkedIn optimization tools.",
  contact: "Contact ATS Resume Optimizer support. Get help with resume analysis, technical issues, refunds, or general questions. Response within 24 hours."
};

// Title tag formulas (SEO optimized, <60 chars)
export const titleFormulas = {
  home: "ATS Resume Checker Free - AI Resume & LinkedIn Optimizer",
  resume: "Free ATS Resume Checker - Test Your Resume Score Online",
  linkedin: "LinkedIn Profile Optimizer - Free AI Analysis Tool",
  privacy: "Privacy Policy - ATS Resume Optimizer",
  terms: "Terms of Use - ATS Resume Optimizer",
  contact: "Contact Us - ATS Resume Optimizer Support",
  blog: "Resume & LinkedIn Tips - Expert Career Advice",
  notFound: "404 - Page Not Found | ATS Resume Optimizer"
};

// H1 headlines optimized for search intent
export const h1Headlines = {
  informational: [
    "What is an ATS Resume Checker and How Does It Work?",
    "Complete Guide to ATS-Friendly Resume Formatting",
    "Why Your Resume Isn't Getting Past ATS Screening",
    "How to Optimize Your LinkedIn Profile for Recruiters"
  ],
  
  transactional: [
    "Free ATS Resume Checker - Instant Analysis Results",
    "Optimize Your Resume for ATS in Minutes",
    "Get Your ATS Compatibility Score Now",
    "Professional Resume Optimization for $9.99"
  ],
  
  navigational: [
    "ATS Resume Optimizer - Home",
    "Resume Analysis Tool",
    "LinkedIn Profile Analyzer",
    "Contact Support"
  ],
  
  commercial: [
    "Best ATS Resume Checker vs Competitors",
    "ATS Resume Optimizer vs JobScan Comparison",
    "Free vs Premium Resume Analysis Features",
    "Top Resume Optimization Tools 2024"
  ]
};

// Alt text templates for images
export const altTextTemplates = {
  screenshots: (feature: string) => `ATS Resume Optimizer ${feature} interface showing analysis results`,
  icons: (name: string) => `${name} icon representing resume optimization feature`,
  diagrams: (topic: string) => `Diagram explaining ${topic} in resume ATS optimization process`,
  testimonials: (name: string) => `${name} testimonial about successful resume optimization`,
  comparisons: (vs: string) => `Comparison chart showing ATS Resume Optimizer vs ${vs} features`,
  howTo: (step: number) => `Step ${step} of resume optimization process illustration`
};

// Breadcrumb schema for all pages
export const breadcrumbPaths = {
  home: [
    { name: "Home", url: "https://atsresumeoptimizer.com" }
  ],
  privacy: [
    { name: "Home", url: "https://atsresumeoptimizer.com" },
    { name: "Privacy Policy", url: "https://atsresumeoptimizer.com/privacy" }
  ],
  terms: [
    { name: "Home", url: "https://atsresumeoptimizer.com" },
    { name: "Terms of Use", url: "https://atsresumeoptimizer.com/terms" }
  ],
  contact: [
    { name: "Home", url: "https://atsresumeoptimizer.com" },
    { name: "Contact", url: "https://atsresumeoptimizer.com/contact" }
  ]
};
