import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { ResumeAnalyzer } from "../components/ResumeAnalyzer";
import { LinkedInAnalyzer } from "../components/LinkedInAnalyzer";
import { SEOHead } from "../components/SEOHead";
import { Testimonials } from "../components/Testimonials";
import { Comparison } from "../components/Comparison";
import { ExpandedFAQ } from "../components/ExpandedFAQ";
import { BlogSection } from "../components/BlogSection";
import { Breadcrumb } from "../components/Breadcrumb";
import { voiceSearchQuestions } from "../components/VoiceSearchFAQ";
import { FileText, Linkedin, Upload, Zap, CheckCircle, Download, Award, Target, TrendingUp, Shield, Clock, Star } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function HomePage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("resume");

  useEffect(() => {
    // Check if URL has hash (#features or #how-it-works)
    if (location.hash === "#features") {
      // Switch to Resume tab and scroll
      setActiveTab("resume");
      setTimeout(() => {
        const featuresElement = document.getElementById("features");
        if (featuresElement) {
          featuresElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    } else if (location.hash === "#linkedin") {
      // Switch to LinkedIn tab and scroll
      setActiveTab("linkedin");
      setTimeout(() => {
        const featuresElement = document.getElementById("features");
        if (featuresElement) {
          featuresElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    } else if (location.hash === "#how-it-works") {
      // Scroll to how it works section
      setTimeout(() => {
        const howItWorksElement = document.getElementById("how-it-works");
        if (howItWorksElement) {
          howItWorksElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // No hash, scroll to top
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location]);

  // Schema.org structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "ATS Resume Optimizer",
        "url": "https://atsresumeoptimizer.com",
        "description": "Free AI-powered ATS resume checker and LinkedIn profile analyzer. Get comprehensive resume scoring, keyword optimization, and professional recommendations to pass applicant tracking systems.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web Browser",
        "offers": [
          {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "name": "Free Analysis",
            "description": "10-section resume analysis with ATS compatibility score, strengths, and missing skills"
          },
          {
            "@type": "Offer",
            "price": "9.99",
            "priceCurrency": "USD",
            "name": "Premium Analysis",
            "description": "Complete resume rewrite, cover letter, LinkedIn headline and summary options, detailed optimization guide"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "ratingCount": "2847",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an ATS resume checker and why do I need one?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An ATS (Applicant Tracking System) resume checker is a tool that analyzes how well your resume will perform when scanned by applicant tracking systems—software used by 98% of Fortune 500 companies to filter job applications. You need one because even qualified candidates get rejected if their resume isn't ATS-optimized with proper formatting, keywords, and structure."
            }
          },
          {
            "@type": "Question",
            "name": "How can I improve my ATS resume score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To improve your ATS resume score: (1) Use standard section headings like 'Work Experience' and 'Education', (2) Include industry-specific keywords from the job description, (3) Avoid headers, footers, tables, and graphics, (4) Use a clean, simple format with standard fonts, (5) Include measurable achievements with numbers, and (6) Match your skills section to the job requirements. Our AI analyzer identifies all these issues automatically."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between free and premium resume analysis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Free analysis provides your ATS compatibility score, 10-section scoring breakdown, top 3 strengths, 3-5 missing skills, and basic suggestions. Premium analysis ($9.99) includes everything in free, plus an AI-optimized resume rewrite, custom cover letter, LinkedIn headline options, LinkedIn summary options, detailed section-by-section optimization guide, and industry-specific keyword recommendations."
            }
          },
          {
            "@type": "Question",
            "name": "Does LinkedIn optimization help with job applications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! 87% of recruiters use LinkedIn to find candidates. An optimized LinkedIn profile with the right keywords, compelling headline, and strong summary increases your visibility in recruiter searches. Our LinkedIn analyzer evaluates your profile against the same standards recruiters use, helping you get found for relevant opportunities even when you're not actively applying."
            }
          },
          // Add voice search optimized questions for enhanced AEO
          ...voiceSearchQuestions.map(q => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to optimize your resume for ATS systems",
        "description": "Step-by-step guide to optimizing your resume and LinkedIn profile for applicant tracking systems",
        "totalTime": "PT3M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Paste your resume or LinkedIn profile",
            "text": "Paste your resume text or LinkedIn profile content into the analyzer",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "AI analysis in 30-60 seconds",
            "text": "Our AI performs comprehensive 10-section analysis covering all critical resume elements",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Review detailed results",
            "text": "Get your ATS score, strengths, missing skills, and improvement suggestions",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Upgrade for full optimization",
            "text": "Get AI-optimized resume rewrite, cover letter, and LinkedIn optimization for $9.99",
            "position": 4
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title="ATS Resume Optimizer - Free AI Resume Checker & LinkedIn Profile Analyzer"
        description="Optimize your resume and LinkedIn profile with AI. Free ATS resume checker analyzes 10 sections, provides compatibility score, missing skills, and optimization suggestions. Premium includes resume rewrite, cover letter, and LinkedIn headline options for $9.99."
        keywords="ATS resume checker, resume optimizer, LinkedIn profile analyzer, ATS compatible resume, resume optimization tool, free resume checker, applicant tracking system, ATS friendly resume, resume keywords, LinkedIn optimization, how to optimize resume for ATS, best ATS resume format, ATS resume checker free, resume scanner, LinkedIn headline generator"
        canonical="https://atsresumeoptimizer.com"
        schemaData={schemaData}
      />
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Full-width feature section */}
        <section className="relative w-full py-24 bg-[#f5f5f7]">
          <div className="max-w-[980px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-[32px] md:text-[44px] leading-[1.1] tracking-tight text-black mb-4" style={{ fontWeight: 700 }}>
                AI Resume & LinkedIn Optimizer — Free ATS Resume Checker + LinkedIn Profile Analysis
              </h2>
              <p className="text-[15px] md:text-[19px] leading-[1.4] text-black/70 max-w-3xl mx-auto" style={{ fontWeight: 500 }}>
                Optimize your resume and LinkedIn profile with AI. Get ATS scoring, job-match analysis, LinkedIn keyword suggestions, headline rewrite, and recruiter-optimized profile recommendations — all in one tool.
              </p>
            </motion.div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full" id="features">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-16 p-1.5 bg-white/60 backdrop-blur-xl rounded-[24px] border border-black/10">
                <TabsTrigger 
                  value="resume" 
                  className="gap-2.5 h-full rounded-[20px] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#5863F8] data-[state=active]:to-[#16BAC5] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 text-[17px] text-black/70"
                  style={{ fontWeight: 600 }}
                >
                  <FileText className="h-5 w-5" />
                  Resume
                </TabsTrigger>
                <TabsTrigger 
                  value="linkedin" 
                  className="gap-2.5 h-full rounded-[20px] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#5863F8] data-[state=active]:to-[#16BAC5] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 text-[17px] text-black/70"
                  style={{ fontWeight: 600 }}
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="resume" className="mt-0">
                <ResumeAnalyzer />
              </TabsContent>
              
              <TabsContent value="linkedin" className="mt-0">
                <LinkedInAnalyzer />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Black feature section */}
        <section className="relative w-full py-24 bg-[#f5f5f7]">
          <div className="max-w-[980px] mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight text-black mb-6" style={{ fontWeight: 700 }}>
                Built for professionals.
              </h2>
              <p className="text-[21px] md:text-[28px] leading-[1.4] text-black/60 max-w-3xl mx-auto mb-12" style={{ fontWeight: 500 }}>
                Advanced AI analyzes your resume and LinkedIn profile against industry standards.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {[
                  { title: "ATS Score", desc: "Real-time compatibility analysis" },
                  { title: "Keywords", desc: "Industry-relevant term detection" },
                  { title: "Insights", desc: "Actionable recommendations" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                  >
                    <h3 className="text-[24px] text-black mb-3" style={{ fontWeight: 600 }}>
                      {feature.title}
                    </h3>
                    <p className="text-[17px] text-black/60" style={{ fontWeight: 400 }}>
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section - SEO/AEO Optimized */}
        <section id="how-it-works" className="relative w-full py-24 bg-white">
          <div className="max-w-[980px] mx-auto px-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-20"
            >
              <h2 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight text-black mb-6" style={{ fontWeight: 700 }}>
                How does ATS resume optimization work?
              </h2>
              <p className="text-[21px] md:text-[28px] leading-[1.4] text-black/60 max-w-3xl mx-auto" style={{ fontWeight: 500 }}>
                Get your resume and LinkedIn profile analyzed by AI in under 3 minutes with our proven 4-step process.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#16BAC5] to-[#5FBFF9] flex items-center justify-center">
                      <Upload className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-[17px] text-[#16BAC5]" style={{ fontWeight: 600 }}>STEP 1</span>
                  </div>
                  <h3 className="text-[32px] md:text-[40px] text-black mb-4" style={{ fontWeight: 700 }}>
                    Paste your resume or LinkedIn profile text
                  </h3>
                  <p className="text-[17px] md:text-[19px] text-black/70 leading-[1.6] mb-4" style={{ fontWeight: 400 }}>
                    Simply paste your resume text or LinkedIn profile content into the analyzer. Our ATS resume checker works with content from any source—just copy and paste. Supports all resume sections including experience, education, skills, and certifications.
                  </p>
                  <p className="text-[17px] md:text-[19px] text-black/70 leading-[1.6]" style={{ fontWeight: 400 }}>
                    <strong>What makes a good ATS resume?</strong> Our AI analyzes formatting, keyword density, section organization, and applicant tracking system compatibility to ensure your resume passes ATS screening software used by 98% of Fortune 500 companies.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#EFE9F4] to-[#f5f5f7] rounded-3xl p-8 border border-black/5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-black/80">
                      <CheckCircle className="w-5 h-5 text-[#16BAC5]" />
                      <span style={{ fontSize: "15px" }}>Works with any text format</span>
                    </div>
                    <div className="flex items-center gap-3 text-black/80">
                      <CheckCircle className="w-5 h-5 text-[#16BAC5]" />
                      <span style={{ fontSize: "15px" }}>LinkedIn profile text compatible</span>
                    </div>
                    <div className="flex items-center gap-3 text-black/80">
                      <CheckCircle className="w-5 h-5 text-[#16BAC5]" />
                      <span style={{ fontSize: "15px" }}>Secure & encrypted analysis</span>
                    </div>
                    <div className="flex items-center gap-3 text-black/80">
                      <CheckCircle className="w-5 h-5 text-[#16BAC5]" />
                      <span style={{ fontSize: "15px" }}>Data deleted after 30 days</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 md:order-1">
                  <div className="bg-gradient-to-br from-[#EFE9F4] to-[#f5f5f7] rounded-3xl p-8 border border-black/5">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-black/80">
                        <Award className="w-5 h-5 text-[#5863F8]" />
                        <span style={{ fontSize: "15px" }}>10-section comprehensive scoring</span>
                      </div>
                      <div className="flex items-center gap-3 text-black/80">
                        <Target className="w-5 h-5 text-[#5863F8]" />
                        <span style={{ fontSize: "15px" }}>ATS compatibility score</span>
                      </div>
                      <div className="flex items-center gap-3 text-black/80">
                        <Star className="w-5 h-5 text-[#5863F8]" />
                        <span style={{ fontSize: "15px" }}>Top 3 strengths identified</span>
                      </div>
                      <div className="flex items-center gap-3 text-black/80">
                        <TrendingUp className="w-5 h-5 text-[#5863F8]" />
                        <span style={{ fontSize: "15px" }}>3-5 missing critical skills</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5863F8] to-[#5FBFF9] flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-[17px] text-[#5863F8]" style={{ fontWeight: 600 }}>STEP 2</span>
                  </div>
                  <h3 className="text-[32px] md:text-[40px] text-black mb-4" style={{ fontWeight: 700 }}>
                    AI analyzes your content in 30-60 seconds
                  </h3>
                  <p className="text-[17px] md:text-[19px] text-black/70 leading-[1.6] mb-4" style={{ fontWeight: 400 }}>
                    Our advanced AI engine performs a comprehensive 10-section analysis covering contact information, professional summary, work experience, education, skills, achievements, keywords, formatting, ATS compatibility, and overall impact.
                  </p>
                  <p className="text-[17px] md:text-[19px] text-black/70 leading-[1.6]" style={{ fontWeight: 400 }}>
                    <strong>How to optimize resume for ATS?</strong> The free analysis reveals your current ATS score, top 3 strengths, 3-5 missing skills, and compatibility percentage—giving you immediate insights into how applicant tracking systems will process your resume.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#16BAC5] to-[#5863F8] flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-[17px] text-[#16BAC5]" style={{ fontWeight: 600 }}>STEP 3</span>
                  </div>
                  <h3 className="text-[32px] md:text-[40px] text-black mb-4" style={{ fontWeight: 700 }}>
                    Review your detailed analysis results
                  </h3>
                  <p className="text-[17px] md:text-[19px] text-black/70 leading-[1.6] mb-4" style={{ fontWeight: 400 }}>
                    Get instant access to your free analysis report with a comprehensive breakdown of all 10 sections, each scored individually to help you understand exactly where your resume excels and where it needs improvement for better ATS optimization.
                  </p>
                  <p className="text-[17px] md:text-[19px] text-black/70 leading-[1.6]" style={{ fontWeight: 400 }}>
                    <strong>Best ATS resume format:</strong> Our analysis evaluates section organization, bullet point structure, keyword placement, and formatting consistency to ensure your resume is optimized for both ATS parsing and human recruiters.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#EFE9F4] to-[#f5f5f7] rounded-3xl p-8 border border-black/5">
                  <div className="mb-4">
                    <h4 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>Free Analysis Includes:</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-black/80">
                      <CheckCircle className="w-5 h-5 text-[#16BAC5] flex-shrink-0 mt-0.5" />
                      <span style={{ fontSize: "15px" }}>Overall ATS compatibility score (0-100)</span>
                    </div>
                    <div className="flex items-start gap-3 text-black/80">
                      <CheckCircle className="w-5 h-5 text-[#16BAC5] flex-shrink-0 mt-0.5" />
                      <span style={{ fontSize: "15px" }}>10-section detailed scoring breakdown</span>
                    </div>
                    <div className="flex items-start gap-3 text-black/80">
                      <CheckCircle className="w-5 h-5 text-[#16BAC5] flex-shrink-0 mt-0.5" />
                      <span style={{ fontSize: "15px" }}>Top 3 resume strengths</span>
                    </div>
                    <div className="flex items-start gap-3 text-black/80">
                      <CheckCircle className="w-5 h-5 text-[#16BAC5] flex-shrink-0 mt-0.5" />
                      <span style={{ fontSize: "15px" }}>3-5 missing critical skills</span>
                    </div>
                    <div className="flex items-start gap-3 text-black/80">
                      <CheckCircle className="w-5 h-5 text-[#16BAC5] flex-shrink-0 mt-0.5" />
                      <span style={{ fontSize: "15px" }}>Basic improvement suggestions</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="order-2 md:order-1">
                  <div className="bg-gradient-to-br from-[#16BAC5]/10 to-[#5863F8]/10 rounded-3xl p-8 border-2 border-[#5863F8]/20">
                    <div className="mb-4">
                      <h4 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>Premium Analysis ($9.99):</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 text-black/80">
                        <CheckCircle className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                        <span style={{ fontSize: "15px" }}>AI-optimized resume rewrite (ATS-friendly)</span>
                      </div>
                      <div className="flex items-start gap-3 text-black/80">
                        <CheckCircle className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                        <span style={{ fontSize: "15px" }}>3 LinkedIn headline options with copy buttons</span>
                      </div>
                      <div className="flex items-start gap-3 text-black/80">
                        <CheckCircle className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                        <span style={{ fontSize: "15px" }}>2 LinkedIn summary/about section options</span>
                      </div>
                      <div className="flex items-start gap-3 text-black/80">
                        <CheckCircle className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                        <span style={{ fontSize: "15px" }}>Custom cover letter tailored to job role</span>
                      </div>
                      <div className="flex items-start gap-3 text-black/80">
                        <CheckCircle className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                        <span style={{ fontSize: "15px" }}>Detailed section-by-section optimization guide</span>
                      </div>
                      <div className="flex items-start gap-3 text-black/80">
                        <CheckCircle className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                        <span style={{ fontSize: "15px" }}>Industry-specific keyword recommendations</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5863F8] to-[#16BAC5] flex items-center justify-center">
                      <Download className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-[17px] text-[#5863F8]" style={{ fontWeight: 600 }}>STEP 4</span>
                  </div>
                  <h3 className="text-[32px] md:text-[40px] text-black mb-4" style={{ fontWeight: 700 }}>
                    Upgrade to premium for full optimization
                  </h3>
                  <p className="text-[17px] md:text-[19px] text-black/70 leading-[1.6] mb-4" style={{ fontWeight: 400 }}>
                    Unlock the complete ATS resume optimization package for just $9.99. Get your resume professionally rewritten with ATS-friendly formatting, industry-specific keywords, and a custom cover letter that helps you stand out to hiring managers.
                  </p>
                  <p className="text-[17px] md:text-[19px] text-black/70 leading-[1.6]" style={{ fontWeight: 400 }}>
                    <strong>Resume optimization tools that work:</strong> Our premium service includes LinkedIn profile optimization with 3 compelling headline options and 2 professionally written about/summary sections—everything you need to maximize your job search success across all platforms.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-32"
            >
              <h3 className="text-[40px] md:text-[48px] text-black text-center mb-16" style={{ fontWeight: 700 }}>
                Why professionals choose our ATS resume optimizer
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-black/5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#16BAC5] to-[#5FBFF9] flex items-center justify-center mb-6">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-[24px] text-black mb-3" style={{ fontWeight: 600 }}>
                    Fast results in minutes
                  </h4>
                  <p className="text-[15px] text-black/70 leading-[1.6]" style={{ fontWeight: 400 }}>
                    Get instant ATS resume analysis in 30-60 seconds for free analysis, or 2-3 minutes for premium optimization. No waiting, no hassle—just actionable insights to improve your resume and LinkedIn profile immediately.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border border-black/5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#5863F8] to-[#5FBFF9] flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-[24px] text-black mb-3" style={{ fontWeight: 600 }}>
                    Secure & confidential
                  </h4>
                  <p className="text-[15px] text-black/70 leading-[1.6]" style={{ fontWeight: 400 }}>
                    Your resume and personal information are protected with end-to-end encryption. We automatically delete all data after 30 days and never share your information with third parties or recruiters.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm border border-black/5">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#16BAC5] to-[#5863F8] flex items-center justify-center mb-6">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-[24px] text-black mb-3" style={{ fontWeight: 600 }}>
                    Industry-leading AI
                  </h4>
                  <p className="text-[15px] text-black/70 leading-[1.6]" style={{ fontWeight: 400 }}>
                    Powered by our advanced AI, our resume checker uses advanced natural language processing to understand context, identify missing skills, and provide human-quality optimization suggestions that actually work with modern ATS systems.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FAQ for AEO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-32"
            >
              <h3 className="text-[40px] md:text-[48px] text-black text-center mb-16" style={{ fontWeight: 700 }}>
                Common questions about ATS resume optimization
              </h3>
              
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
                  <h4 className="text-[19px] text-black mb-3" style={{ fontWeight: 600 }}>
                    What is an ATS resume checker and why do I need one?
                  </h4>
                  <p className="text-[15px] text-black/70 leading-[1.6]" style={{ fontWeight: 400 }}>
                    An ATS (Applicant Tracking System) resume checker is a tool that analyzes how well your resume will perform when scanned by applicant tracking systems—software used by 98% of Fortune 500 companies to filter job applications. You need one because even qualified candidates get rejected if their resume isn't ATS-optimized with proper formatting, keywords, and structure.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
                  <h4 className="text-[19px] text-black mb-3" style={{ fontWeight: 600 }}>
                    How can I improve my ATS resume score?
                  </h4>
                  <p className="text-[15px] text-black/70 leading-[1.6]" style={{ fontWeight: 400 }}>
                    To improve your ATS resume score: (1) Use standard section headings like "Work Experience" and "Education", (2) Include industry-specific keywords from the job description, (3) Avoid headers, footers, tables, and graphics, (4) Use a clean, simple format with standard fonts, (5) Include measurable achievements with numbers, and (6) Match your skills section to the job requirements. Our AI analyzer identifies all these issues automatically.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
                  <h4 className="text-[19px] text-black mb-3" style={{ fontWeight: 600 }}>
                    What's the difference between free and premium resume analysis?
                  </h4>
                  <p className="text-[15px] text-black/70 leading-[1.6]" style={{ fontWeight: 400 }}>
                    Free analysis provides your ATS compatibility score, 10-section scoring breakdown, top 3 strengths, 3-5 missing skills, and basic suggestions. Premium analysis ($9.99) includes everything in free, plus an AI-optimized resume rewrite, custom cover letter, LinkedIn headline options, LinkedIn summary options, detailed section-by-section optimization guide, and industry-specific keyword recommendations.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
                  <h4 className="text-[19px] text-black mb-3" style={{ fontWeight: 600 }}>
                    Does LinkedIn optimization help with job applications?
                  </h4>
                  <p className="text-[15px] text-black/70 leading-[1.6]" style={{ fontWeight: 400 }}>
                    Yes! 87% of recruiters use LinkedIn to find candidates. An optimized LinkedIn profile with the right keywords, compelling headline, and strong summary increases your visibility in recruiter searches. Our LinkedIn analyzer evaluates your profile against the same standards recruiters use, helping you get found for relevant opportunities even when you're not actively applying.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Comparison Section */}
        <Comparison />

        {/* Expanded FAQ Section */}
        <ExpandedFAQ />

        {/* Blog Section */}
        <BlogSection />
      </main>
      
      <Footer />
    </div>
  );
}