import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { AnalysisResults } from "./AnalysisResults";
import { Sparkles, Loader2, Lock } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { projectId, publicAnonKey } from "../utils/supabase/info.tsx";

export function LinkedInAnalyzer() {
  const [linkedInText, setLinkedInText] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [roleError, setRoleError] = useState("");
  const [linkedInError, setLinkedInError] = useState("");
  const navigate = useNavigate();

  const analyzeLinkedIn = async () => {
    // Reset errors
    setLinkedInError("");
    setRoleError("");

    if (!linkedInText.trim()) {
      setLinkedInError("Please paste your LinkedIn profile text");
      toast.error("Please paste your LinkedIn profile text");
      return;
    }
    if (!selectedRole.trim()) {
      setRoleError("Please enter your dream job role");
      toast.error("Please enter your dream job role");
      return;
    }

    // Navigate to loading page and pass data through state
    navigate("/loading", {
      state: {
        linkedInText,
        jobRole: selectedRole,
        analysisType: "linkedin"
      }
    });
  };

  const handlePremiumAnalysis = () => {
    // Reset errors
    setLinkedInError("");
    setRoleError("");

    if (!linkedInText.trim()) {
      setLinkedInError("Please paste your LinkedIn profile text");
      toast.error("Please paste your LinkedIn profile text");
      return;
    }
    if (!selectedRole.trim()) {
      setRoleError("Please enter your dream job role");
      toast.error("Please enter your dream job role");
      return;
    }

    // Navigate to loading page for premium analysis
    navigate("/loading", {
      state: {
        linkedInText,
        jobRole: selectedRole,
        isPaid: true,
        analysisType: "linkedin"
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
            <h2 className="text-[32px] md:text-[40px] text-black mb-3 tracking-tight" style={{ fontWeight: 700 }}>LinkedIn Profile Analysis</h2>
            <p className="text-[17px] md:text-[19px] text-black/60" style={{ fontWeight: 500 }}>
              Paste your LinkedIn profile content and specify your target role
            </p>
          </div>

          <div className="space-y-6">
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Label htmlFor="linkedin" className="text-[14px] text-black/80" style={{ fontWeight: 600 }}>
                LinkedIn Profile Text
              </Label>
              <Textarea
                id="linkedin"
                placeholder="Paste your LinkedIn profile here..."
                value={linkedInText}
                onChange={(e) => {
                  setLinkedInText(e.target.value);
                  if (linkedInError) setLinkedInError(""); // Clear error when user types
                }}
                className={`min-h-[300px] resize-y bg-[#f5f5f7] border-black/10 focus:border-[#0071e3] focus:bg-white transition-all duration-300 rounded-[16px] text-[17px] ${
                  linkedInError ? 'border-red-500 focus:border-red-500' : ''
                }`}
                style={{ fontWeight: 400 }}
              />
              {linkedInError && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-[14px] mt-1 flex items-center gap-1"
                  style={{ fontWeight: 500 }}
                >
                  🚨 {linkedInError}
                </motion.p>
              )}
            </motion.div>

            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Label htmlFor="linkedin-role" className="text-[14px] text-black/80" style={{ fontWeight: 600 }}>
                ✨ Your Dream Job Role
              </Label>
              <Input
                id="linkedin-role"
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <Button
                onClick={analyzeLinkedIn}
                className="w-full h-14 bg-[#0071e3] text-white border-0 hover:bg-[#0077ed] transition-all duration-200 rounded-full text-[17px]"
                style={{ fontWeight: 600 }}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Analyze LinkedIn Profile
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
                Get 3 headlines, 2 summaries, detailed suggestions & cover letter
              </p>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}