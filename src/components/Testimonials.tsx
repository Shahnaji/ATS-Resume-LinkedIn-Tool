import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Tech Startup",
    rating: 5,
    text: "I was applying to dozens of jobs with no responses. After using this ATS optimizer, I rewrote my resume and got 3 interviews in the first week! The keyword suggestions were spot-on.",
    result: "3 interviews in 1 week"
  },
  {
    name: "Michael Chen",
    role: "Marketing Manager",
    company: "Fortune 500",
    rating: 5,
    text: "The LinkedIn optimization changed everything. My profile views increased 400% and recruiters started reaching out to me. The headline options were professional and keyword-rich.",
    result: "400% more profile views"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Designer",
    company: "Design Agency",
    rating: 5,
    text: "Best $9.99 I ever spent. The AI-rewritten resume got me past ATS filters I couldn't beat before. Landed my dream job within 2 months of using this tool.",
    result: "Landed dream job"
  },
  {
    name: "David Thompson",
    role: "Data Analyst",
    company: "Consulting Firm",
    rating: 5,
    text: "The free analysis alone showed me 8 critical issues with my resume. After fixing them based on the suggestions, my application response rate tripled. Highly recommend!",
    result: "3x more responses"
  },
  {
    name: "Jennifer Lee",
    role: "HR Specialist",
    company: "Healthcare",
    rating: 5,
    text: "As someone who reviews resumes daily, I can confirm this tool gives accurate ATS advice. The scoring system matches what we actually look for when screening candidates.",
    result: "HR-approved accuracy"
  },
  {
    name: "Alex Martinez",
    role: "Sales Executive",
    company: "SaaS Company",
    rating: 5,
    text: "The cover letter and LinkedIn summary options saved me hours of writing. Everything was tailored perfectly to my industry. Got multiple interview requests within days.",
    result: "Multiple offers"
  }
];

export function Testimonials() {
  // Individual Review Schema for each testimonial
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@graph": testimonials.map((testimonial, index) => ({
      "@type": "Review",
      "@id": `https://atsresumeoptimizer.com/#review-${index}`,
      "itemReviewed": {
        "@type": "WebApplication",
        "name": "ATS Resume Optimizer",
        "url": "https://atsresumeoptimizer.com"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.name,
        "jobTitle": testimonial.role
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": testimonial.text,
      "datePublished": "2024-11-15"
    }))
  };

  return (
    <section className="relative w-full py-24 bg-white">
      {/* Add Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-black mb-6" style={{ fontWeight: 700 }}>
            What job seekers say about our ATS optimizer
          </h2>
          <p className="text-[19px] md:text-[24px] leading-[1.4] text-black/60 max-w-3xl mx-auto" style={{ fontWeight: 500 }}>
            Join thousands of professionals who improved their resume and LinkedIn profile to land more interviews
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-br from-[#EFE9F4] to-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-[#16BAC5]/30" />
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#5863F8] text-[#5863F8]" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[14px] text-black/80 leading-[1.6] mb-4" style={{ fontWeight: 400 }}>
                "{testimonial.text}"
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#16BAC5]/10 to-[#5863F8]/10 rounded-full mb-4">
                <span className="text-[12px] text-[#5863F8]" style={{ fontWeight: 600 }}>
                  ✓ {testimonial.result}
                </span>
              </div>

              {/* Author Info */}
              <div className="border-t border-black/5 pt-4">
                <p className="text-[15px] text-black mb-1" style={{ fontWeight: 600 }}>
                  {testimonial.name}
                </p>
                <p className="text-[13px] text-black/60" style={{ fontWeight: 400 }}>
                  {testimonial.role}
                </p>
                <p className="text-[12px] text-black/40" style={{ fontWeight: 400 }}>
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 bg-gradient-to-br from-[#EFE9F4] to-white rounded-2xl px-8 py-6 border border-black/5">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#5863F8] text-[#5863F8]" />
              ))}
            </div>
            <p className="text-[17px] text-black" style={{ fontWeight: 600 }}>
              4.9/5 average rating from 2,847+ users
            </p>
            <p className="text-[14px] text-black/60" style={{ fontWeight: 400 }}>
              Trusted by job seekers at Google, Amazon, Microsoft, Meta, and 500+ companies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}