import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Sparkles, Zap, Target, Award } from "lucide-react";

export function ProcessingAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="p-12 md:p-16 rounded-[28px] bg-gradient-to-br from-[#5863F8] to-[#16BAC5] border-0 shadow-2xl text-white">
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated Icon */}
          <motion.div
            className="relative w-24 h-24 mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="h-12 w-12" />
            </div>
          </motion.div>

          {/* Main Text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[36px] md:text-[48px] mb-4 tracking-tight"
            style={{ fontWeight: 700 }}
          >
            Premium Analysis in Progress
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[19px] md:text-[21px] opacity-90 mb-12"
            style={{ fontWeight: 500 }}
          >
            Our AI is analyzing your resume in depth and creating optimized content...
          </motion.p>

          {/* Status Items */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 bg-white/10 rounded-[16px] p-4 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Target className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-[17px]" style={{ fontWeight: 600 }}>
                  Analyzing 10 Resume Sections
                </p>
                <p className="text-[15px] opacity-75" style={{ fontWeight: 400 }}>
                  Deep-diving into each aspect of your resume
                </p>
              </div>
              <motion.div
                className="ml-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 bg-white/10 rounded-[16px] p-4 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-[17px]" style={{ fontWeight: 600 }}>
                  Identifying Missing Skills & Tools
                </p>
                <p className="text-[15px] opacity-75" style={{ fontWeight: 400 }}>
                  Finding gaps specific to your target role
                </p>
              </div>
              <motion.div
                className="ml-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4 bg-white/10 rounded-[16px] p-4 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-[17px]" style={{ fontWeight: 600 }}>
                  Generating Optimized Resume & Cover Letter
                </p>
                <p className="text-[15px] opacity-75" style={{ fontWeight: 400 }}>
                  Creating ATS-friendly, professional content
                </p>
              </div>
              <motion.div
                className="ml-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full" />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-[15px] opacity-75 mt-8"
            style={{ fontWeight: 500 }}
          >
            This usually takes 20-30 seconds...
          </motion.p>
        </div>
      </Card>
    </motion.div>
  );
}
