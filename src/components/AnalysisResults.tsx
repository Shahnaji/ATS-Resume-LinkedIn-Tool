import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { useState } from "react";
import { 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  Target,
  FileText,
  Award,
  Zap,
  Copy,
  Check,
  Lock,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";

interface Section {
  name: string;
  score: number;
  maxScore: number;
  suggestion?: string;
  detailedSuggestion?: string;
}

interface AnalysisResultsProps {
  type: "free" | "paid";
  totalScore: number;
  sections: Section[];
  missingSkills: string[];
  missingTools?: string[];
  missingKeywords?: string[];
  keywordMatchPercentage?: number;
  optimizedResume?: string;
  coverLetter?: string;
  headlines?: string[];
  summaries?: string[];
  onUpgrade?: () => void;
  strengths?: string[];
  atsCompatibility?: number;
  linkedInCompatibility?: number;
}

export function AnalysisResults({ 
  type,
  totalScore,
  sections,
  missingSkills,
  missingTools,
  missingKeywords,
  keywordMatchPercentage,
  optimizedResume,
  coverLetter,
  headlines,
  summaries,
  onUpgrade,
  strengths,
  atsCompatibility,
  linkedInCompatibility
}: AnalysisResultsProps) {
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const isFree = type === "free";
  const isLinkedIn = linkedInCompatibility !== undefined; // If linkedInCompatibility exists, it's LinkedIn analysis

  // Calculate optimized score (for premium, show near 100 - typically 95-98 range)
  const optimizedScore = Math.min(98, totalScore + Math.floor((100 - totalScore) * 0.85));
  const scoreImprovement = optimizedScore - totalScore;

  // Helper functions for score styling
  const getScoreTextColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    return "Needs Improvement";
  };

  const getSectionColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const copyToClipboard = async (text: string, key: string) => {
    try {
      // Use textarea fallback method (works in all contexts including iframes)
      const textArea = document.createElement('textarea');
      textArea.value = text;
      
      // Make the textarea invisible but accessible
      textArea.style.position = 'absolute';
      textArea.style.left = '-9999px';
      textArea.style.top = '0';
      textArea.setAttribute('readonly', '');
      
      document.body.appendChild(textArea);
      
      // Select the text
      textArea.select();
      textArea.setSelectionRange(0, 99999); // For mobile devices
      
      // Copy the text
      const successful = document.execCommand('copy');
      
      // Remove the textarea
      document.body.removeChild(textArea);
      
      if (successful) {
        setCopiedStates(prev => ({ ...prev, [key]: true }));
        toast.success("Copied to clipboard!");
        
        setTimeout(() => {
          setCopiedStates(prev => ({ ...prev, [key]: false }));
        }, 2000);
      } else {
        throw new Error('Copy command failed');
      }
    } catch (error) {
      console.error("Copy failed:", error);
      toast.error("Failed to copy. Please select and copy manually.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6"
    >
      {/* Analysis Type Badge */}
      <div className="flex justify-end">
        <Badge 
          className={`px-4 py-2 text-[14px] border-0 rounded-full ${
            isFree 
              ? "bg-[#0071e3] text-white" 
              : "bg-gradient-to-r from-[#5863F8] to-[#16BAC5] text-white"
          }`}
          style={{ fontWeight: 600 }}
        >
          {isFree ? "Free Analysis" : "Premium Analysis"}
        </Badge>
      </div>

      {/* Total Resume Score */}
      <Card className="p-8 md:p-12 rounded-[28px] bg-white border-0 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="text-center md:text-left">
            <h3 className="text-[28px] md:text-[36px] text-black mb-2 tracking-tight" style={{ fontWeight: 700 }}>
              Total Resume Score
            </h3>
            <p className="text-[17px] md:text-[19px] text-black/60" style={{ fontWeight: 500 }}>
              {isFree ? getScoreLabel(totalScore) : "Optimized"}
            </p>
          </div>
          <div className={`${getScoreTextColor(isFree ? totalScore : optimizedScore)} text-center`}>
            <span className="text-[72px] md:text-[96px] tracking-tight leading-none" style={{ fontWeight: 700 }}>
              {isFree ? totalScore : optimizedScore}
            </span>
            <span className="text-[32px] md:text-[40px]">/100</span>
          </div>
        </div>
        <div className="mb-6">
          <Progress value={isFree ? totalScore : optimizedScore} className="h-3" />
        </div>

        {/* Potential Score Improvement Section */}
        {isFree ? (
          /* FREE: Show potential improvement with exciting animation */
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#5863F8]/10 via-[#16BAC5]/10 to-[#5FBFF9]/10 rounded-[20px] p-6 border-2 border-dashed border-[#5863F8]/30"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Sparkles className="h-8 w-8 text-[#5863F8] animate-pulse" />
                <div>
                  <p className="text-[15px] text-black/60 mb-1" style={{ fontWeight: 600 }}>
                    ✨ POTENTIAL WITH PREMIUM
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-[32px] text-black/70" style={{ fontWeight: 700 }}>
                      {totalScore}
                    </span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <TrendingUp className="h-8 w-8 text-gradient-to-r from-[#5863F8] to-[#16BAC5]" style={{ color: "#5863F8" }} />
                    </motion.div>
                    <span className="text-[40px] bg-gradient-to-r from-[#5863F8] via-[#16BAC5] to-[#5FBFF9] bg-clip-text text-transparent" style={{ fontWeight: 800 }}>
                      {optimizedScore}
                    </span>
                  </div>
                  <motion.p 
                    className="text-[19px] bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mt-1"
                    style={{ fontWeight: 700 }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    +{scoreImprovement} points possible! 🚀
                  </motion.p>
                </div>
              </div>
              <Button
                onClick={onUpgrade}
                className="bg-gradient-to-r from-[#5863F8] to-[#16BAC5] text-white hover:opacity-90 rounded-full h-12 px-6 text-[15px] shadow-lg"
                style={{ fontWeight: 600 }}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Upgrade Now
              </Button>
            </div>
          </motion.div>
        ) : (
          /* PAID: Show optimized score badge */
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[20px] p-6 border-2 border-green-200"
          >
            <div className="flex items-center justify-center gap-3">
              <Award className="h-6 w-6 text-green-600" />
              <p className="text-[17px] text-green-700" style={{ fontWeight: 600 }}>
                Premium Optimized Analysis - Improved from {totalScore}/100
              </p>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-green-600" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </Card>

      {/* 10-Section Breakdown */}
      <Card className="p-8 md:p-12 rounded-[28px] bg-white border-0 shadow-xl">
        <h3 className="text-[28px] md:text-[36px] text-black mb-8 tracking-tight" style={{ fontWeight: 700 }}>
          Detailed Section Scores
        </h3>
        <div className="space-y-6">
          {sections.map((section, index) => {
            const percentage = (section.score / section.maxScore) * 100;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-black/5 pb-6 last:border-b-0"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[17px] md:text-[19px] text-black" style={{ fontWeight: 600 }}>
                    {section.name}
                  </h4>
                  <span className={`text-[19px] md:text-[21px] ${getSectionColor(section.score, section.maxScore)}`} style={{ fontWeight: 700 }}>
                    {section.score}/{section.maxScore}
                  </span>
                </div>
                <Progress value={percentage} className="h-2 mb-3" />
                <p className="text-[15px] md:text-[17px] text-black/70 leading-relaxed" style={{ fontWeight: 400 }}>
                  {isFree ? section.suggestion : section.detailedSuggestion}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Card>

      {/* Missing Skills */}
      <Card className="p-8 md:p-12 rounded-[28px] bg-white border-0 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h3 className="text-[24px] md:text-[32px] text-black tracking-tight" style={{ fontWeight: 700 }}>
              Missing Skills
            </h3>
            {isFree && (
              <Badge className="bg-yellow-100 text-yellow-800 border-0 px-3 py-1 text-[12px]" style={{ fontWeight: 600 }}>
                Limited Preview
              </Badge>
            )}
          </div>
          {!isFree && (
            <Button
              onClick={() => copyToClipboard(missingSkills.join(', '), 'all-skills')}
              className="bg-red-600 hover:bg-red-700 text-white rounded-full h-10 px-4 text-[14px]"
              style={{ fontWeight: 600 }}
            >
              {copiedStates['all-skills'] ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied All!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy All
                </>
              )}
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {missingSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.03 * index, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2"
            >
              <Badge 
                variant="secondary" 
                className="px-4 py-2 text-[14px] md:text-[15px] bg-red-50 text-red-700 border border-red-200 rounded-full"
                style={{ fontWeight: 600 }}
              >
                {skill}
              </Badge>
              {!isFree && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0 hover:bg-red-100"
                  onClick={() => copyToClipboard(skill, `skill-${index}`)}
                >
                  {copiedStates[`skill-${index}`] ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4 text-red-600" />
                  )}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Key Strengths - FREE ONLY */}
      {isFree && strengths && strengths.length > 0 && (
        <Card className="p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-green-600" />
            <h3 className="text-[24px] md:text-[32px] text-black tracking-tight" style={{ fontWeight: 700 }}>
              Key Strengths
            </h3>
          </div>
          <ul className="space-y-4">
            {strengths.map((strength, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-3 text-[15px] md:text-[17px] text-black/80"
                style={{ fontWeight: 500 }}
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                {strength}
              </motion.li>
            ))}
          </ul>
        </Card>
      )}

      {/* ATS Compatibility - FREE ONLY */}
      {isFree && atsCompatibility !== undefined && (
        <Card className="p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="h-6 w-6 text-blue-600" />
                <h3 className="text-[24px] md:text-[32px] text-black tracking-tight" style={{ fontWeight: 700 }}>
                  ATS Compatibility
                </h3>
              </div>
              <p className="text-[15px] md:text-[17px] text-black/60" style={{ fontWeight: 500 }}>
                How well your resume passes through Applicant Tracking Systems
              </p>
            </div>
            <div className={`${getScoreTextColor(atsCompatibility)} text-center`}>
              <span className="text-[56px] md:text-[72px] tracking-tight leading-none" style={{ fontWeight: 700 }}>
                {atsCompatibility}%
              </span>
            </div>
          </div>
          <div className="mt-6">
            <Progress value={atsCompatibility} className="h-3" />
          </div>
        </Card>
      )}

      {/* Missing Tools - PAID ONLY */}
      {!isFree && missingTools && missingTools.length > 0 && (
        <Card className="p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-[#5863F8]/5 to-[#16BAC5]/5 border-0 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-[#5863F8]" />
              <h3 className="text-[24px] md:text-[32px] text-black tracking-tight" style={{ fontWeight: 700 }}>
                Missing Tools & Technologies
              </h3>
            </div>
            <Button
              onClick={() => copyToClipboard(missingTools.join(', '), 'all-tools')}
              className="bg-[#5863F8] hover:bg-[#5863F8]/90 text-white rounded-full h-10 px-4 text-[14px]"
              style={{ fontWeight: 600 }}
            >
              {copiedStates['all-tools'] ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied All!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy All
                </>
              )}
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {missingTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.03 * index, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2"
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-[14px] md:text-[15px] bg-[#5863F8]/10 text-[#5863F8] border border-[#5863F8]/20 rounded-full"
                  style={{ fontWeight: 600 }}
                >
                  {tool}
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0 hover:bg-[#5863F8]/10"
                  onClick={() => copyToClipboard(tool, `tool-${index}`)}
                >
                  {copiedStates[`tool-${index}`] ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4 text-[#5863F8]" />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </Card>
      )}

      {/* Missing Keywords - PAID ONLY */}
      {!isFree && missingKeywords && missingKeywords.length > 0 && (
        <Card className="p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-[#5863F8]/5 to-[#16BAC5]/5 border-0 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-[#5863F8]" />
              <h3 className="text-[24px] md:text-[32px] text-black tracking-tight" style={{ fontWeight: 700 }}>
                Missing Keywords
              </h3>
            </div>
            <Button
              onClick={() => copyToClipboard(missingKeywords.join(', '), 'all-keywords')}
              className="bg-[#5863F8] hover:bg-[#5863F8]/90 text-white rounded-full h-10 px-4 text-[14px]"
              style={{ fontWeight: 600 }}
            >
              {copiedStates['all-keywords'] ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied All!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy All
                </>
              )}
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {missingKeywords.map((keyword, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.03 * index, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2"
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-[14px] md:text-[15px] bg-[#5863F8]/10 text-[#5863F8] border border-[#5863F8]/20 rounded-full"
                  style={{ fontWeight: 600 }}
                >
                  {keyword}
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-8 w-8 p-0 hover:bg-[#5863F8]/10"
                  onClick={() => copyToClipboard(keyword, `keyword-${index}`)}
                >
                  {copiedStates[`keyword-${index}`] ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4 text-[#5863F8]" />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>
        </Card>
      )}

      {/* Keyword Match Percentage - PAID ONLY */}
      {!isFree && keywordMatchPercentage !== undefined && (
        <Card className="p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="h-6 w-6 text-blue-600" />
                <h3 className="text-[24px] md:text-[32px] text-black tracking-tight" style={{ fontWeight: 700 }}>
                  Keyword Match Percentage
                </h3>
              </div>
              <p className="text-[15px] md:text-[17px] text-black/60" style={{ fontWeight: 500 }}>
                How well your resume matches the keywords in the job description
              </p>
            </div>
            <div className={`${getScoreTextColor(keywordMatchPercentage)} text-center`}>
              <span className="text-[56px] md:text-[72px] tracking-tight leading-none" style={{ fontWeight: 700 }}>
                {keywordMatchPercentage}%
              </span>
            </div>
          </div>
          <div className="mt-6">
            <Progress value={keywordMatchPercentage} className="h-3" />
          </div>
        </Card>
      )}

      {/* LinkedIn Compatibility - FREE ONLY */}
      {isFree && linkedInCompatibility !== undefined && (
        <Card className="p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="h-6 w-6 text-blue-600" />
                <h3 className="text-[24px] md:text-[32px] text-black tracking-tight" style={{ fontWeight: 700 }}>
                  LinkedIn Profile Compatibility
                </h3>
              </div>
              <p className="text-[15px] md:text-[17px] text-black/60" style={{ fontWeight: 500 }}>
                How well your profile is optimized for LinkedIn search and recruiters
              </p>
            </div>
            <div className={`${getScoreTextColor(linkedInCompatibility)} text-center`}>
              <span className="text-[56px] md:text-[72px] tracking-tight leading-none" style={{ fontWeight: 700 }}>
                {linkedInCompatibility}%
              </span>
            </div>
          </div>
          <div className="mt-6">
            <Progress value={linkedInCompatibility} className="h-3" />
          </div>
        </Card>
      )}

      {/* Headlines - PAID ONLY - LinkedIn Specific */}
      {!isFree && headlines && headlines.length > 0 && (
        <Card className="p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-[#16BAC5]/10 to-[#5FBFF9]/10 border-0 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-[#16BAC5]" />
            <h3 className="text-[24px] md:text-[32px] text-black tracking-tight" style={{ fontWeight: 700 }}>
              Optimized LinkedIn Headlines
            </h3>
          </div>
          <div className="space-y-4">
            {headlines.map((headline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white rounded-[20px] p-6 border-2 border-[#16BAC5]/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-[13px] text-[#16BAC5] mb-2" style={{ fontWeight: 600 }}>
                      OPTION {index + 1}
                    </p>
                    <p className="text-[15px] md:text-[17px] text-black/80 leading-relaxed" style={{ fontWeight: 500 }}>
                      {headline}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => copyToClipboard(headline, `headline-${index}`)}
                    className="bg-[#16BAC5] hover:bg-[#16BAC5]/90 text-white rounded-full h-10 px-4 text-[14px] flex-shrink-0"
                    style={{ fontWeight: 600 }}
                  >
                    {copiedStates[`headline-${index}`] ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      )}

      {/* Summaries/About Section - PAID ONLY - LinkedIn Specific */}
      {!isFree && summaries && summaries.length > 0 && (
        <Card className="p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-[#5FBFF9]/10 to-[#EFE9F4]/30 border-0 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-[#5FBFF9]" />
            <h3 className="text-[24px] md:text-[32px] text-black tracking-tight" style={{ fontWeight: 700 }}>
              Optimized About/Summary Sections
            </h3>
          </div>
          <div className="space-y-4">
            {summaries.map((summary, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white rounded-[20px] p-6 border-2 border-[#5FBFF9]/20"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <p className="text-[13px] text-[#5FBFF9]" style={{ fontWeight: 600 }}>
                    VERSION {index + 1}
                  </p>
                  <Button
                    size="sm"
                    onClick={() => copyToClipboard(summary, `summary-${index}`)}
                    className="bg-[#5FBFF9] hover:bg-[#5FBFF9]/90 text-white rounded-full h-10 px-4 text-[14px] flex-shrink-0"
                    style={{ fontWeight: 600 }}
                  >
                    {copiedStates[`summary-${index}`] ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="bg-[#f5f5f7] rounded-[16px] p-6 max-h-[400px] overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-[15px] text-black/80 leading-relaxed" style={{ fontWeight: 400, fontFamily: 'inherit' }}>
                    {summary}
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      )}

      {/* Optimized Resume - PAID ONLY */}
      {!isFree && optimizedResume && (
        <Card className="p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-green-600" />
              <h3 className="text-[24px] md:text-[32px] text-black tracking-tight" style={{ fontWeight: 700 }}>
                Optimized Resume
              </h3>
            </div>
            <Button
              onClick={() => copyToClipboard(optimizedResume, "resume")}
              className="bg-green-600 hover:bg-green-700 text-white rounded-full"
            >
              {copiedStates["resume"] ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Resume
                </>
              )}
            </Button>
          </div>
          <div className="bg-white rounded-[20px] p-6 md:p-8 max-h-[600px] overflow-y-auto">
            <pre className="whitespace-pre-wrap text-[15px] text-black/80 leading-relaxed" style={{ fontWeight: 400, fontFamily: 'inherit' }}>
              {optimizedResume}
            </pre>
          </div>
        </Card>
      )}

      {/* Cover Letter - PAID ONLY */}
      {!isFree && coverLetter && (
        <Card className="p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-blue-600" />
              <h3 className="text-[24px] md:text-[32px] text-black tracking-tight" style={{ fontWeight: 700 }}>
                Tailored Cover Letter
              </h3>
            </div>
            <Button
              onClick={() => copyToClipboard(coverLetter, "cover")}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >
              {copiedStates["cover"] ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Letter
                </>
              )}
            </Button>
          </div>
          <div className="bg-white rounded-[20px] p-6 md:p-8 max-h-[600px] overflow-y-auto">
            <pre className="whitespace-pre-wrap text-[15px] text-black/80 leading-relaxed" style={{ fontWeight: 400, fontFamily: 'inherit' }}>
              {coverLetter}
            </pre>
          </div>
        </Card>
      )}

      {/* Upgrade CTA for Free Users */}
      {isFree && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="p-8 md:p-12 rounded-[28px] bg-gradient-to-br from-[#5863F8] to-[#16BAC5] border-0 shadow-2xl text-white">
            <div className="text-center">
              <Lock className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-[28px] md:text-[36px] mb-4 tracking-tight" style={{ fontWeight: 700 }}>
                Unlock Premium Analysis
              </h3>
              <p className="text-[17px] md:text-[19px] mb-6 opacity-90 max-w-2xl mx-auto" style={{ fontWeight: 500 }}>
                {isLinkedIn ? (
                  "Get detailed improvement suggestions, complete list of missing skills & tools, 3 optimized LinkedIn headlines, 2 optimized About/Summary sections, and tailored cover letter."
                ) : (
                  "Get detailed improvement suggestions, complete list of missing skills & tools, fully rewritten ATS-optimized resume, and tailored cover letter."
                )}
              </p>
              <ul className="text-left max-w-xl mx-auto mb-8 space-y-3">
                <li className="flex items-center gap-3 text-[15px] md:text-[17px]" style={{ fontWeight: 500 }}>
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  Detailed improvement suggestions for each section
                </li>
                <li className="flex items-center gap-3 text-[15px] md:text-[17px]" style={{ fontWeight: 500 }}>
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  Complete list of missing skills & tools
                </li>
                {isLinkedIn ? (
                  <>
                    <li className="flex items-center gap-3 text-[15px] md:text-[17px]" style={{ fontWeight: 500 }}>
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      3 optimized LinkedIn headlines
                    </li>
                    <li className="flex items-center gap-3 text-[15px] md:text-[17px]" style={{ fontWeight: 500 }}>
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      2 optimized About/Summary sections
                    </li>
                  </>
                ) : (
                  <li className="flex items-center gap-3 text-[15px] md:text-[17px]" style={{ fontWeight: 500 }}>
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    Fully rewritten, ATS-optimized resume
                  </li>
                )}
                <li className="flex items-center gap-3 text-[15px] md:text-[17px]" style={{ fontWeight: 500 }}>
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  Tailored cover letter
                </li>
                <li className="flex items-center gap-3 text-[15px] md:text-[17px]" style={{ fontWeight: 500 }}>
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  One-click copy for all content
                </li>
              </ul>
              <Button
                size="lg"
                className="h-14 px-8 bg-white text-[#5863F8] hover:bg-white/90 rounded-full text-[17px]"
                style={{ fontWeight: 600 }}
                onClick={onUpgrade}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Upgrade to Premium
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </motion.div>
  );
}