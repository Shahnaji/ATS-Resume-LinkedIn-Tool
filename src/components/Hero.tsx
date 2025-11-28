import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#5863F8] via-[#16BAC5] to-[#5FBFF9]">
      {/* Background gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>
      
      <div className="relative z-10 max-w-[720px] mx-auto px-6 text-center py-16 md:py-20 pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight text-white mb-5"
          style={{ fontWeight: 700 }}
        >
          Beat the ATS.
          <br />
          Land More Interviews.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15px] md:text-[19px] leading-[1.5] text-white/90 mb-8 max-w-3xl mx-auto"
          style={{ fontWeight: 500 }}
        >
          AI-powered career optimization tools that help you pass applicant tracking systems and impress recruiters
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="#features"
            className="px-6 py-3 bg-[#0071e3] text-white rounded-full text-[17px] hover:bg-[#0077ed] transition-all duration-200"
            style={{ fontWeight: 500 }}
          >
            Get started
          </a>
          <a
            href="#features"
            className="px-6 py-3 text-white text-[17px] hover:underline transition-all duration-200"
            style={{ fontWeight: 500 }}
          >
            Learn more →
          </a>
        </motion.div>

        {/* Competitive Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[720px] mx-auto mb-8"
        >
          <StatCard
            icon="⚡"
            percentage={70}
            label="faster analysis"
            delay={0.7}
          />
          <StatCard
            icon="🚀"
            percentage={100}
            label="frictionless onboarding"
            delay={0.8}
          />
          <StatCard
            icon="💰"
            percentage={83}
            label="lower cost vs others"
            delay={0.9}
          />
          <StatCard
            icon="🎯"
            percentage={0}
            label="recurring fees"
            delay={1.0}
          />
          <StatCard
            icon="🎭"
            percentage={100}
            label="copy-ready output"
            delay={1.1}
          />
          <StatCard
            icon="📊"
            percentage={90}
            label="less with 2-in-1"
            delay={1.2}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ icon, percentage, label, delay }: { icon: string; percentage: number; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-[#171D1C] mb-1" style={{ fontWeight: 700, fontSize: "32px", lineHeight: "1" }}>
        {percentage === 0 ? "0%" : `${percentage}%`}
      </div>
      <div className="text-[#171D1C]/70 text-[13px]" style={{ fontWeight: 500 }}>
        {label}
      </div>
    </motion.div>
  );
}