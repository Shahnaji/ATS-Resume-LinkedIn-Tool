import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Target, TrendingUp, Zap, CheckCircle2, Brain } from "lucide-react";
import { toast } from "sonner";
import { projectId, publicAnonKey } from '../utils/supabase/info.tsx';

const analysisSteps = [
  { icon: Brain, text: "Analyzing resume structure...", color: "#16BAC5" },
  { icon: Target, text: "Matching job requirements...", color: "#5FBFF9" },
  { icon: TrendingUp, text: "Evaluating achievements...", color: "#5863F8" },
  { icon: Zap, text: "Checking ATS compatibility...", color: "#16BAC5" },
  { icon: CheckCircle2, text: "Generating insights...", color: "#5FBFF9" }
];

const tips = [
  "💡 Did you know? 75% of resumes are rejected by ATS before a human sees them.",
  "✨ Pro tip: Use industry-specific keywords to boost your ATS score.",
  "🎯 Quantify your achievements with numbers and percentages.",
  "🚀 Action verbs make your experience section 40% more impactful.",
  "📊 ATS systems prefer simple, clean formatting over fancy designs.",
  "💼 Tailoring your resume for each job increases callbacks by 50%.",
];

export function LoadingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { resumeText, linkedInText, jobRole, isPaid, jobDescription, isSpecificJob, analysisType } = location.state || {};

  const [currentStep, setCurrentStep] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);
  const [progress, setProgress] = useState(0);

  const isLinkedInAnalysis = analysisType === "linkedin";
  const contentText = isLinkedInAnalysis ? linkedInText : resumeText;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Redirect if no data
    if (!contentText || !jobRole) {
      toast.error("Missing analysis data");
      navigate("/");
      return;
    }

    // Animate steps
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % analysisSteps.length);
    }, 2000);

    // Rotate tips
    const tipInterval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % tips.length);
    }, 4000);

    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 3;
      });
    }, 300);

    // Perform analysis
    analyzeResume();

    return () => {
      clearInterval(stepInterval);
      clearInterval(tipInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const analyzeResume = async () => {
    try {
      // Determine the correct endpoint based on analysis type
      let endpoint;
      if (isLinkedInAnalysis) {
        endpoint = isPaid 
          ? `/make-server-87342172/analyze-linkedin-paid`
          : `/make-server-87342172/analyze-linkedin`;
      } else {
        endpoint = isPaid 
          ? `/make-server-87342172/analyze-resume-paid`
          : `/make-server-87342172/analyze-resume`;
      }

      // Prepare request body based on analysis type
      const requestBody = isLinkedInAnalysis 
        ? { linkedInText: contentText, jobRole }
        : { resumeText: contentText, jobRole, jobDescription, isSpecificJob };

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Analysis failed");
      }

      const result = await response.json();
      console.log("Analysis result:", result);

      if (result.success) {
        // Complete progress
        setProgress(100);
        
        // Small delay before navigation for better UX
        setTimeout(() => {
          navigate("/results", {
            state: {
              analysisData: {
                type: result.type,
                ...result.data
              },
              resumeText: isLinkedInAnalysis ? null : resumeText,
              linkedInText: isLinkedInAnalysis ? linkedInText : null,
              jobRole,
              analysisType
            }
          });
        }, 800);
      } else {
        throw new Error("Analysis failed");
      }
    } catch (error) {
      console.error("Analysis error:", error);
      toast.error(error.message || `Failed to analyze ${isLinkedInAnalysis ? 'LinkedIn profile' : 'resume'}`);
      setTimeout(() => navigate("/"), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#171D1C] via-[#171D1C] to-[#1a2624] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Main loading card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl rounded-[32px] p-12 border border-white/10 shadow-2xl"
        >
          {/* Animated icon */}
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#16BAC5] to-[#5863F8] flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#16BAC5] to-[#5863F8] opacity-50 blur-xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1 
            className="text-white text-center mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: "40px", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {isPaid ? "Premium Analysis" : (isLinkedInAnalysis ? "Analyzing Your LinkedIn Profile" : "Analyzing Your Resume")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/80 mt-6"
            style={{ fontSize: "19px", fontWeight: 500 }}
          >
            Powered by our advanced AI • Analyzing for {jobRole}
          </motion.p>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#16BAC5] via-[#5FBFF9] to-[#5863F8]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-white/40 text-center mt-3" style={{ fontSize: "15px", fontWeight: 500 }}>
              {Math.round(progress)}% complete
            </p>
          </div>

          {/* Animated steps */}
          <div className="space-y-4 mb-12">
            <AnimatePresence mode="wait">
              {analysisSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isPast = index < currentStep;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: isActive ? 1 : isPast ? 0.4 : 0.2,
                      x: 0,
                      scale: isActive ? 1.02 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: isActive ? step.color : "rgba(255,255,255,0.1)",
                        transition: "all 0.3s"
                      }}
                    >
                      <Icon 
                        className="w-5 h-5" 
                        style={{ color: isActive ? "white" : "rgba(255,255,255,0.4)" }}
                      />
                    </div>
                    <p 
                      className="text-white"
                      style={{ 
                        fontSize: "17px", 
                        fontWeight: isActive ? 600 : 400,
                        opacity: isActive ? 1 : 0.5
                      }}
                    >
                      {step.text}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Rotating tips */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTip}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-white/70 text-center"
                style={{ fontSize: "17px", fontWeight: 500, lineHeight: "1.6" }}
              >
                {tips[currentTip]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Floating particles effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#16BAC5]/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}