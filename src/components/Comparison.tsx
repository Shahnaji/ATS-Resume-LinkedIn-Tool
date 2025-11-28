import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    category: "Best for beginners",
    feature: "Simple interface with clear instructions",
    us: true,
    competitors: "varies"
  },
  {
    category: "Best for experienced professionals",
    feature: "Advanced keyword analysis and industry-specific suggestions",
    us: true,
    competitors: true
  },
  {
    category: "Best for LinkedIn optimization",
    feature: "Dedicated LinkedIn analyzer with headline + summary options",
    us: true,
    competitors: false
  },
  {
    category: "Best free ATS resume checker",
    feature: "Comprehensive 10-section analysis with no credit card required",
    us: true,
    competitors: "limited"
  },
  {
    category: "Best value premium service",
    feature: "Full resume rewrite + cover letter + LinkedIn optimization for $9.99",
    us: true,
    competitors: "$29-99+"
  },
  {
    category: "Best for quick results",
    feature: "30-60 second analysis with instant scoring",
    us: true,
    competitors: "2-5 min"
  },
  {
    category: "Best for data privacy",
    feature: "Auto-delete data after 30 days, no sharing with recruiters",
    us: true,
    competitors: false
  },
  {
    category: "Best AI technology",
    feature: "Powered by our advanced AI with NLP",
    us: true,
    competitors: "varies"
  }
];

export function Comparison() {
  return (
    <section className="relative w-full py-24 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] leading-[1.1] tracking-tight text-black mb-6" style={{ fontWeight: 700 }}>
            Why we're the best ATS resume optimizer
          </h2>
          <p className="text-[19px] md:text-[24px] leading-[1.4] text-black/60 max-w-3xl mx-auto" style={{ fontWeight: 500 }}>
            Compare features and see why professionals choose us over other resume checkers
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl overflow-hidden border border-black/10 shadow-xl">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-[#5863F8] to-[#16BAC5] text-white p-6">
            <div className="text-[15px]" style={{ fontWeight: 600 }}>
              Feature Category
            </div>
            <div className="text-center text-[15px]" style={{ fontWeight: 600 }}>
              Our ATS Optimizer
            </div>
            <div className="text-center text-[15px]" style={{ fontWeight: 600 }}>
              Other Tools
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-3 p-6 border-b border-black/5 ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#f5f5f7]'
              }`}
            >
              <div>
                <p className="text-[15px] text-[#5863F8] mb-1" style={{ fontWeight: 600 }}>
                  {item.category}
                </p>
                <p className="text-[13px] text-black/60" style={{ fontWeight: 400 }}>
                  {item.feature}
                </p>
              </div>
              
              <div className="flex justify-center items-center">
                {item.us === true ? (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#16BAC5] to-[#5863F8] flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                ) : typeof item.us === 'string' ? (
                  <span className="text-[13px] text-black/70" style={{ fontWeight: 500 }}>
                    {item.us}
                  </span>
                ) : null}
              </div>
              
              <div className="flex justify-center items-center">
                {item.competitors === true ? (
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-black/40" />
                  </div>
                ) : item.competitors === false ? (
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                ) : (
                  <span className="text-[13px] text-black/50" style={{ fontWeight: 500 }}>
                    {item.competitors}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-12"
        >
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#5863F8] to-[#16BAC5] text-white rounded-full text-[17px] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            style={{ fontWeight: 600 }}
          >
            Start Free Analysis
          </a>
          <p className="text-[14px] text-black/60 mt-4" style={{ fontWeight: 400 }}>
            No credit card required • Results in 60 seconds
          </p>
        </motion.div>
      </div>
    </section>
  );
}