import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Sparkles, Lock, Target, Zap } from "lucide-react";
import { toast } from "sonner";

const jobRoles = [
  "Software Engineer",
  "Product Manager",
  "Data Scientist",
  "UX/UI Designer",
  "Marketing Manager",
  "Sales Representative",
  "Business Analyst",
  "Project Manager",
  "DevOps Engineer",
  "Content Writer",
  "Financial Analyst",
  "HR Manager",
  "Customer Success Manager",
  "Account Executive"
];

export function ResumeAnalyzer() {
  const navigate = useNavigate();
  const [resumeText, setResumeText] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [roleError, setRoleError] = useState("");
  const [resumeError, setResumeError] = useState("");
  const [activeTab, setActiveTab] = useState<"general" | "specific">("general");
  const [jobDescription, setJobDescription] = useState("");
  const [jobDescError, setJobDescError] = useState("");

  const handleStartAnalysis = () => {
    // Reset errors
    setResumeError("");
    setRoleError("");

    if (!resumeText.trim()) {
      setResumeError("Please paste your resume text");
      toast.error("Please paste your resume text");
      return;
    }
    if (!selectedRole) {
      setRoleError("Please enter your dream job role");
      toast.error("Please enter your dream job role");
      return;
    }

    // Navigate to loading page for FREE general analysis
    navigate("/loading", {
      state: {
        resumeText,
        jobRole: selectedRole,
        isPaid: false
      }
    });
  };

  const handlePremiumAnalysis = () => {
    // Reset errors
    setResumeError("");
    setRoleError("");

    if (!resumeText.trim()) {
      setResumeError("Please paste your resume text");
      toast.error("Please paste your resume text");
      return;
    }
    if (!selectedRole) {
      setRoleError("Please enter your dream job role");
      toast.error("Please enter your dream job role");
      return;
    }

    // Navigate to loading page for PAID general analysis (no job description)
    navigate("/loading", {
      state: {
        resumeText,
        jobRole: selectedRole,
        isPaid: true,
        isSpecificJob: false // General premium, not specific job
      }
    });
  };

  const handleSpecificJobAnalysis = () => {
    // Reset errors
    setResumeError("");
    setRoleError("");
    setJobDescError("");

    if (!resumeText.trim()) {
      setResumeError("Please paste your resume text");
      toast.error("Please paste your resume text");
      return;
    }
    if (!selectedRole) {
      setRoleError("Please enter your dream job role");
      toast.error("Please enter your dream job role");
      return;
    }
    if (!jobDescription.trim()) {
      setJobDescError("Please paste the full job description");
      toast.error("Please paste the job description");
      return;
    }

    // Navigate to loading page for PAID specific job analysis
    navigate("/loading", {
      state: {
        resumeText,
        jobRole: selectedRole,
        jobDescription, // Pass job description for specific matching
        isPaid: true, // This is a premium feature
        isSpecificJob: true // Flag to indicate this is specific job matching
      }
    });
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Card className="p-8 md:p-12 rounded-[28px] bg-white border-0 shadow-2xl">
          <div className="mb-10">
            <h2 className="text-[32px] md:text-[40px] text-black mb-3 tracking-tight" style={{ fontWeight: 700 }}>Resume Analysis</h2>
            <p className="text-[17px] md:text-[19px] text-black/60" style={{ fontWeight: 500 }}>
              Choose your analysis type and get personalized insights
            </p>
          </div>

          {/* Tab Switcher */}
          <motion.div 
            className="flex gap-3 mb-8 p-2 bg-[#f5f5f7] rounded-[20px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <button
              onClick={() => setActiveTab("general")}
              className={`flex-1 py-3.5 px-6 rounded-[16px] transition-all duration-300 ${
                activeTab === "general"
                  ? "bg-white shadow-lg text-black"
                  : "bg-transparent text-black/60 hover:text-black"
              }`}
              style={{ fontWeight: 600 }}
            >
              <div className="flex items-center justify-center gap-2">
                <Zap className="h-5 w-5" />
                <span className="text-[15px]">General Role</span>
              </div>
              <div className="text-[12px] mt-1" style={{ fontWeight: 500 }}>
                Free Analysis
              </div>
            </button>

            <button
              onClick={() => setActiveTab("specific")}
              className={`flex-1 py-3.5 px-6 rounded-[16px] transition-all duration-300 ${
                activeTab === "specific"
                  ? "bg-gradient-to-r from-[#5863F8] to-[#16BAC5] shadow-lg text-white"
                  : "bg-transparent text-black/60 hover:text-black"
              }`}
              style={{ fontWeight: 600 }}
            >
              <div className="flex items-center justify-center gap-2">
                <Target className="h-5 w-5" />
                <span className="text-[15px]">Specific Job</span>
                <Lock className="h-4 w-4" />
              </div>
              <div className={`text-[12px] mt-1 ${activeTab === "specific" ? "text-white/90" : ""}`} style={{ fontWeight: 500 }}>
                Premium - $9.99
              </div>
            </button>
          </motion.div>

          <div className="space-y-6">
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Label htmlFor="resume" className="text-[14px] text-black/80" style={{ fontWeight: 600 }}>
                Resume Text
              </Label>
              <Textarea
                id="resume"
                placeholder="Paste your complete resume here..."
                value={resumeText}
                onChange={(e) => {
                  setResumeText(e.target.value);
                  if (resumeError) setResumeError(""); // Clear error when user types
                }}
                className={`min-h-[300px] resize-y bg-[#f5f5f7] border-black/10 focus:border-[#0071e3] focus:bg-white transition-all duration-300 rounded-[16px] text-[17px] ${
                  resumeError ? 'border-red-500 focus:border-red-500' : ''
                }`}
                style={{ fontWeight: 400 }}
              />
              {resumeError && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-[14px] mt-1 flex items-center gap-1"
                  style={{ fontWeight: 500 }}
                >
                  🚨 {resumeError}
                </motion.p>
              )}
            </motion.div>

            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Label htmlFor="role" className="text-[14px] text-black/80" style={{ fontWeight: 600 }}>
                ✨ Your Dream Job Role
              </Label>
              <Input
                id="role"
                placeholder="e.g., Software Engineer, Product Manager..."
                value={selectedRole}
                onChange={(e) => {
                  setSelectedRole(e.target.value);
                  if (roleError) setRoleError(""); // Clear error when user types
                }}
                className={`bg-[#f5f5f7] border-black/10 focus:border-[#0071e3] focus:bg-white transition-all duration-300 rounded-[16px] h-14 text-[17px] ${
                  roleError ? 'border-red-500 focus:border-red-500' : ''
                }`}
                style={{ fontWeight: 400 }}
              />
              {roleError && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-[14px] mt-1 flex items-center gap-1"
                  style={{ fontWeight: 500 }}
                >
                  🚨 {roleError}
                </motion.p>
              )}
            </motion.div>

            {activeTab === "specific" && (
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-start gap-2">
                  <Label htmlFor="jobDescription" className="text-[14px] text-black/80" style={{ fontWeight: 600 }}>
                    📄 Job Description (Required)
                  </Label>
                </div>
                <Textarea
                  id="jobDescription"
                  placeholder="Paste the full job description here including requirements, responsibilities, and qualifications..."
                  value={jobDescription}
                  onChange={(e) => {
                    setJobDescription(e.target.value);
                    if (jobDescError) setJobDescError(""); // Clear error when user types
                  }}
                  className={`min-h-[200px] resize-y bg-[#f5f5f7] border-black/10 focus:border-[#0071e3] focus:bg-white transition-all duration-300 rounded-[16px] text-[17px] ${
                    jobDescError ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  style={{ fontWeight: 400 }}
                />
                {jobDescError && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-[14px] mt-1 flex items-center gap-1"
                    style={{ fontWeight: 500 }}
                  >
                    🚨 {jobDescError}
                  </motion.p>
                )}
                
                {/* Premium Benefits Banner */}
                <motion.div 
                  className="bg-gradient-to-r from-[#5863F8]/10 to-[#16BAC5]/10 border border-[#5863F8]/20 rounded-[16px] p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-[#5863F8] to-[#16BAC5] rounded-full p-2">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[14px] text-black/80 mb-2" style={{ fontWeight: 600 }}>
                        Get 95%+ Match Rate
                      </p>
                      <ul className="space-y-1 text-[13px] text-black/60" style={{ fontWeight: 500 }}>
                        <li className="flex items-center gap-2">
                          <span className="text-[#16BAC5]">✓</span> Exact keyword matching
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#16BAC5]">✓</span> Skills gap analysis
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#16BAC5]">✓</span> Tailored resume rewrite
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[#16BAC5]">✓</span> Custom cover letter
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              {activeTab === "general" ? (
                <>
                  <Button
                    onClick={handleStartAnalysis}
                    className="w-full h-14 bg-[#0071e3] text-white border-0 hover:bg-[#0077ed] transition-all duration-200 rounded-full text-[17px]"
                    style={{ fontWeight: 600 }}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Start Free Analysis
                  </Button>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-black/10"></div>
                    <span className="text-[14px] text-black/40" style={{ fontWeight: 500 }}>OR</span>
                    <div className="flex-1 h-px bg-black/10"></div>
                  </div>

                  {/* Premium Button */}
                  <Button
                    onClick={handlePremiumAnalysis}
                    className="w-full h-14 bg-gradient-to-r from-[#5863F8] to-[#16BAC5] hover:from-[#4853E8] hover:to-[#0FAAB5] text-white border-0 transition-all duration-200 rounded-full text-[17px] shadow-lg"
                    style={{ fontWeight: 600 }}
                  >
                    <Lock className="mr-2 h-5 w-5" />
                    Upgrade to Premium - $9.99
                  </Button>
                  <p className="text-[13px] text-black/50 text-center mt-3" style={{ fontWeight: 500 }}>
                    Get detailed suggestions, resume rewrite & cover letter
                  </p>
                </>
              ) : (
                <Button
                  onClick={handleSpecificJobAnalysis}
                  className="w-full h-14 bg-gradient-to-r from-[#5863F8] to-[#16BAC5] hover:from-[#4853E8] hover:to-[#0FAAB5] text-white border-0 transition-all duration-200 rounded-full text-[17px] shadow-lg"
                  style={{ fontWeight: 600 }}
                >
                  <Lock className="mr-2 h-5 w-5" />
                  Start Premium Analysis - $9.99
                </Button>
              )}
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}