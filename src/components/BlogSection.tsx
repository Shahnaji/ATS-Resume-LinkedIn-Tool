import { motion } from "motion/react";
import { ArrowRight, FileText, Linkedin, Target, Zap, TrendingUp, Shield } from "lucide-react";

const blogPosts = [
  {
    title: "How to Write an ATS-Friendly Resume in 2024",
    excerpt: "Learn the essential formatting rules, keyword strategies, and section organization techniques that help your resume pass applicant tracking systems used by 98% of Fortune 500 companies.",
    category: "Resume Tips",
    readTime: "8 min read",
    icon: FileText,
    keywords: ["ATS resume format", "resume keywords", "applicant tracking system"]
  },
  {
    title: "Top 10 Resume Keywords Every Software Engineer Needs",
    excerpt: "Discover the most important technical skills, programming languages, and industry buzzwords that recruiters search for when hiring software engineers, developers, and tech professionals.",
    category: "Industry Guide",
    readTime: "6 min read",
    icon: Target,
    keywords: ["software engineer resume", "tech resume keywords", "programming skills"]
  },
  {
    title: "LinkedIn Headline Examples That Get You Noticed by Recruiters",
    excerpt: "87% of recruiters use LinkedIn to find candidates. See 20+ proven LinkedIn headline formulas with examples for different industries, career levels, and job search goals.",
    category: "LinkedIn Tips",
    readTime: "7 min read",
    icon: Linkedin,
    keywords: ["LinkedIn headline", "recruiter search", "LinkedIn optimization"]
  },
  {
    title: "Resume vs CV: What's the Difference and Which Should You Use?",
    excerpt: "Understand the key differences between resumes and CVs, when to use each format, and how ATS systems handle both document types for job applications in different countries and industries.",
    category: "Resume Guide",
    readTime: "5 min read",
    icon: FileText,
    keywords: ["resume vs CV", "curriculum vitae", "job application format"]
  },
  {
    title: "Why Your Resume Gets Rejected: 7 Common ATS Mistakes",
    excerpt: "Even qualified candidates fail ATS screening due to simple formatting errors. Learn the 7 most common mistakes that cause resume rejection and how to fix them instantly.",
    category: "Common Mistakes",
    readTime: "9 min read",
    icon: Shield,
    keywords: ["ATS mistakes", "resume rejection", "formatting errors"]
  },
  {
    title: "How to Optimize Your LinkedIn Profile for Maximum Visibility",
    excerpt: "Complete step-by-step guide to optimizing every section of your LinkedIn profile—from headline to experience—to increase profile views by 300-500% and attract more recruiter messages.",
    category: "LinkedIn Strategy",
    readTime: "12 min read",
    icon: TrendingUp,
    keywords: ["LinkedIn profile optimization", "increase profile views", "recruiter visibility"]
  }
];

export function BlogSection() {
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
            Resume & LinkedIn optimization resources
          </h2>
          <p className="text-[19px] md:text-[24px] leading-[1.4] text-black/60 max-w-3xl mx-auto" style={{ fontWeight: 500 }}>
            Expert guides, tips, and strategies to help you create ATS-friendly resumes and stand out to recruiters
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const Icon = post.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-gradient-to-br from-[#EFE9F4]/30 to-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#16BAC5]/10 to-[#5863F8]/10 text-[#5863F8] rounded-full text-[12px]" style={{ fontWeight: 600 }}>
                    {post.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#16BAC5] to-[#5863F8] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[19px] text-black mb-3 group-hover:text-[#5863F8] transition-colors" style={{ fontWeight: 600 }} itemProp="headline">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[14px] text-black/70 leading-[1.6] mb-4" style={{ fontWeight: 400 }} itemProp="description">
                  {post.excerpt}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.keywords.map((keyword, i) => (
                    <span key={i} className="px-2 py-0.5 bg-black/5 text-black/60 rounded text-[11px]" style={{ fontWeight: 500 }} itemProp="keywords">
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <span className="text-[13px] text-black/50" style={{ fontWeight: 500 }}>
                    {post.readTime}
                  </span>
                  <div className="flex items-center gap-1 text-[#5863F8] group-hover:gap-2 transition-all">
                    <span className="text-[13px]" style={{ fontWeight: 600 }}>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hidden schema data */}
                <meta itemProp="datePublished" content="2024-11-27" />
                <meta itemProp="author" content="ATS Resume Optimizer Team" />
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#5863F8] to-[#16BAC5] text-white rounded-full text-[17px] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            style={{ fontWeight: 600 }}
          >
            Start Free Resume Analysis
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-[14px] text-black/60 mt-4" style={{ fontWeight: 400 }}>
            Get your ATS score and optimization recommendations in 60 seconds
          </p>
        </motion.div>
      </div>
    </section>
  );
}
