import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { AnalysisResults } from "../components/AnalysisResults";
import { PricingModal } from "../components/PricingModal";
import { ArrowLeft, Home } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { analysisData, resumeText, linkedInText, jobRole, analysisType } = location.state || {};

  const [showPricingModal, setShowPricingModal] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const isLinkedInAnalysis = analysisType === "linkedin";

  // Redirect if no data
  if (!analysisData) {
    setTimeout(() => navigate("/"), 100);
    return null;
  }

  const handleUpgradeClick = () => {
    setShowPricingModal(true);
  };

  const handlePurchase = async () => {
    setIsProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      setShowPricingModal(false);
      toast.success("Payment successful! Starting premium analysis...");
      
      // Navigate to loading page for premium analysis
      setTimeout(() => {
        navigate("/loading", {
          state: {
            resumeText: isLinkedInAnalysis ? null : resumeText,
            linkedInText: isLinkedInAnalysis ? linkedInText : null,
            jobRole,
            isPaid: true,
            analysisType
          }
        });
      }, 500);
    }, 2000);
  };

  const handleNewAnalysis = () => {
    navigate("/#features");
  };

  const handleHomeClick = () => {
    navigate("/");
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header with navigation */}
      <div className="bg-white border-b border-black/10 sticky top-0 z-50 backdrop-blur-xl bg-white/80">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            onClick={handleNewAnalysis}
            variant="ghost"
            className="gap-2 hover:bg-black/5 rounded-full"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft className="h-4 w-4" />
            New Analysis
          </Button>

          <motion.h1 
            className="text-black text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ fontSize: "24px", fontWeight: 700 }}
          >
            Analysis Results
          </motion.h1>

          <Button
            onClick={handleHomeClick}
            variant="ghost"
            className="gap-2 hover:bg-black/5 rounded-full"
            style={{ fontWeight: 600 }}
          >
            <Home className="h-4 w-4" />
            Home
          </Button>
        </div>
      </div>

      {/* Results content */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Job role badge */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-black/10 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#16BAC5] animate-pulse" />
              <span className="text-black" style={{ fontSize: "17px", fontWeight: 600 }}>
                Analyzed for: {jobRole}
              </span>
            </div>
          </motion.div>

          {/* Analysis Results Component */}
          <AnalysisResults {...analysisData} onUpgrade={handleUpgradeClick} />

          {/* Bottom CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              onClick={handleNewAnalysis}
              className="h-14 px-8 bg-[#0071e3] text-white hover:bg-[#0077ed] rounded-full border-0"
              style={{ fontWeight: 600, fontSize: "17px" }}
            >
              {isLinkedInAnalysis ? "Analyze Another LinkedIn Profile" : "Analyze Another Resume"}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Pricing Modal */}
      <PricingModal
        isOpen={showPricingModal}
        onClose={() => setShowPricingModal(false)}
        onPurchase={handlePurchase}
        isProcessing={isProcessingPayment}
        isLinkedIn={isLinkedInAnalysis}
      />
    </div>
  );
}