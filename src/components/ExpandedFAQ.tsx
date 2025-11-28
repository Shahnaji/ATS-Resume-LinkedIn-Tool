import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { voiceSearchQuestions } from "./VoiceSearchFAQ";

const faqs = [
  {
    question: "What is an ATS resume checker and why do I need one?",
    answer: "An ATS (Applicant Tracking System) resume checker is a tool that analyzes how well your resume will perform when scanned by applicant tracking systems—software used by 98% of Fortune 500 companies to filter job applications. You need one because even qualified candidates get rejected if their resume isn't ATS-optimized with proper formatting, keywords, and structure. Our AI-powered checker identifies issues that prevent your resume from passing ATS filters."
  },
  {
    question: "How can I improve my ATS resume score?",
    answer: "To improve your ATS resume score: (1) Use standard section headings like 'Work Experience' and 'Education', (2) Include industry-specific keywords from the job description, (3) Avoid headers, footers, tables, and graphics that ATS can't parse, (4) Use a clean, simple format with standard fonts like Arial or Calibri, (5) Include measurable achievements with numbers and percentages, (6) Match your skills section to the job requirements, and (7) Ensure your contact information is in plain text. Our AI analyzer identifies all these issues automatically and provides specific fix suggestions."
  },
  {
    question: "What's the difference between free and premium resume analysis?",
    answer: "Free analysis provides your ATS compatibility score (0-100), 10-section detailed scoring breakdown, top 3 strengths, 3-5 missing critical skills, and basic improvement suggestions. Premium analysis ($9.99) includes everything in free, PLUS: an AI-optimized resume rewrite formatted for ATS compatibility, custom cover letter tailored to your role, 3 LinkedIn headline options with copy buttons, 2 LinkedIn summary options, detailed section-by-section optimization guide, and industry-specific keyword recommendations. Premium users also get unlimited revisions for 30 days."
  },
  {
    question: "Does LinkedIn optimization help with job applications?",
    answer: "Yes! 87% of recruiters use LinkedIn to find candidates, and an optimized LinkedIn profile can dramatically increase your visibility. A keyword-rich headline, compelling summary, and properly formatted experience section help you appear in recruiter searches even when you're not actively applying. Our LinkedIn analyzer evaluates your profile against the same standards recruiters use, helping you get found for relevant opportunities. Many users report 300-500% increases in profile views after optimization."
  },
  {
    question: "Is my resume data secure and private?",
    answer: "Absolutely. We take data security seriously. Your resume and personal information are protected with end-to-end encryption during transmission and analysis. We never share your data with third parties, recruiters, or employers without your explicit consent. All submitted documents and analysis data are automatically deleted from our servers after 30 days. You can also request immediate deletion at any time by contacting our support team."
  },
  {
    question: "What resume formats does the ATS checker support?",
    answer: "Our ATS resume checker accepts resume text in various formats. You can paste your resume content directly into the analyzer. The tool works with content from PDF, Word documents, or plain text—simply copy and paste your resume text. We also support LinkedIn profile text—just copy your profile sections into the LinkedIn analyzer tab. We analyze resumes in English and can handle various resume styles including chronological, functional, and combination formats."
  },
  {
    question: "How long does the resume analysis take?",
    answer: "Free analysis typically takes 30-60 seconds to complete. Premium analysis with full resume rewrite, cover letter, and LinkedIn optimization takes 2-3 minutes. The speed depends on resume length and complexity, but most analyses are completed in under a minute. You'll see real-time progress updates during the analysis process, and results are displayed immediately upon completion."
  },
  {
    question: "Can I use this for multiple job applications?",
    answer: "Yes! You can run unlimited free analyses on different versions of your resume. For premium users, we recommend tailoring your resume for each major job category or industry, as different roles require different keywords and skills emphasis. The premium package includes unlimited revisions for 30 days, allowing you to optimize your resume for multiple applications. Many users create 2-3 targeted resume versions (e.g., one for technical roles, one for management positions) using our tool."
  },
  {
    question: "What makes your ATS optimizer better than free tools?",
    answer: "Unlike basic free tools that only check keywords, our AI-powered optimizer provides comprehensive analysis across 10 critical resume sections. We use advanced AI technology to understand context, not just keyword matching. Our tool identifies missing skills, suggests industry-specific improvements, evaluates formatting for ATS compatibility, and provides actionable recommendations. Premium users get a complete resume rewrite, not just suggestions—saving hours of manual editing. We also include LinkedIn optimization, which most competitors charge extra for."
  },
  {
    question: "Will this work for my industry or career level?",
    answer: "Yes! Our ATS resume optimizer works for all industries and career levels—from entry-level to C-suite executives. The AI is trained on millions of successful resumes across technology, healthcare, finance, marketing, education, engineering, sales, and more. Whether you're a software engineer, nurse, accountant, teacher, or executive, the tool provides industry-specific keyword suggestions and formatting recommendations. The analysis adapts to your experience level and role requirements."
  },
  {
    question: "How do I know if my resume is ATS-friendly?",
    answer: "An ATS-friendly resume has several characteristics: (1) Simple, clean formatting without tables, text boxes, or graphics, (2) Standard section headings that ATS systems recognize, (3) Relevant keywords from the job description, (4) Plain text contact information, (5) Standard fonts like Arial, Calibri, or Times New Roman, (6) Chronological work history with clear dates, and (7) Skills section that matches job requirements. Our free ATS checker evaluates all these factors and gives you a compatibility score with specific areas to improve."
  },
  {
    question: "Can I get a refund if I'm not satisfied with premium?",
    answer: "Yes! We offer a 7-day money-back guarantee on all premium purchases. If you're not satisfied with the quality of your optimized resume, cover letter, or LinkedIn options, simply contact our support team within 7 days of purchase for a full refund—no questions asked. We stand behind the quality of our AI optimization and want you to feel confident in your investment. Over 95% of premium users report increased interview requests within 30 days."
  }
];

export function ExpandedFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-24 bg-white">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-black mb-6" style={{ fontWeight: 700 }}>
            Frequently asked questions about ATS resume optimization
          </h2>
          <p className="text-[19px] md:text-[24px] leading-[1.4] text-black/60 max-w-3xl mx-auto" style={{ fontWeight: 500 }}>
            Everything you need to know about optimizing your resume and LinkedIn profile for applicant tracking systems
          </p>
        </motion.div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-[#EFE9F4]/30 to-white rounded-2xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-black/[0.02] transition-colors"
              >
                <h3 className="text-[17px] md:text-[19px] text-black pr-4" style={{ fontWeight: 600 }}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#5863F8] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-[15px] md:text-[17px] text-black/70 leading-[1.7]" style={{ fontWeight: 400 }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-[#EFE9F4] to-white rounded-2xl px-10 py-8 border border-black/5">
            <p className="text-[19px] text-black" style={{ fontWeight: 600 }}>
              Still have questions about ATS optimization?
            </p>
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-[#5863F8] to-[#16BAC5] text-white rounded-full text-[15px] hover:shadow-lg hover:scale-105 transition-all duration-200"
              style={{ fontWeight: 600 }}
            >
              Contact Our Support Team
            </Link>
            <p className="text-[13px] text-black/60" style={{ fontWeight: 400 }}>
              Average response time: Under 2 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}