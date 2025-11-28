import { motion, AnimatePresence } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { X, Check, Sparkles, CreditCard } from "lucide-react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: () => void;
  isProcessing: boolean;
  isLinkedIn?: boolean;
}

export function PricingModal({ isOpen, onClose, onPurchase, isProcessing, isLinkedIn = false }: PricingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-lg"
            >
              <Card className="p-8 md:p-10 rounded-[28px] bg-white border-0 shadow-2xl relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                >
                  <X className="h-5 w-5 text-black/60" />
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#5863F8] to-[#16BAC5] flex items-center justify-center"
                  >
                    <Sparkles className="h-8 w-8 text-white" />
                  </motion.div>
                  <h2 className="text-[32px] md:text-[40px] text-black mb-3 tracking-tight" style={{ fontWeight: 700 }}>
                    Upgrade to Premium
                  </h2>
                  <p className="text-[17px] text-black/60" style={{ fontWeight: 500 }}>
                    {isLinkedIn 
                      ? "Unlock the full power of AI-driven LinkedIn optimization"
                      : "Unlock the full power of AI-driven resume optimization"
                    }
                  </p>
                </div>

                {/* Pricing Card */}
                <div className="mb-8 p-6 rounded-[20px] bg-gradient-to-br from-[#5863F8]/5 to-[#16BAC5]/5 border border-[#5863F8]/10">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-[56px] text-black tracking-tight" style={{ fontWeight: 700 }}>
                        $9.99
                      </span>
                      <span className="text-[19px] text-black/60" style={{ fontWeight: 500 }}>
                        one-time
                      </span>
                    </div>
                    <p className="text-[15px] text-black/60 mt-2" style={{ fontWeight: 500 }}>
                      {isLinkedIn ? "Premium LinkedIn Analysis" : "Premium Resume Analysis"}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-[15px] text-black/80" style={{ fontWeight: 500 }}>
                        Detailed improvement suggestions for each section
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-[15px] text-black/80" style={{ fontWeight: 500 }}>
                        Complete list of missing skills & tools
                      </span>
                    </li>
                    {isLinkedIn ? (
                      <>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-[15px] text-black/80" style={{ fontWeight: 500 }}>
                            3 optimized LinkedIn headlines
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-[15px] text-black/80" style={{ fontWeight: 500 }}>
                            2 optimized About/Summary sections
                          </span>
                        </li>
                      </>
                    ) : (
                      <li className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-[15px] text-black/80" style={{ fontWeight: 500 }}>
                          Fully rewritten, ATS-optimized resume
                        </span>
                      </li>
                    )}
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-[15px] text-black/80" style={{ fontWeight: 500 }}>
                        Tailored cover letter
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-[15px] text-black/80" style={{ fontWeight: 500 }}>
                        One-click copy for all content
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Purchase Button */}
                <Button
                  onClick={onPurchase}
                  disabled={isProcessing}
                  className="w-full h-14 bg-gradient-to-r from-[#5863F8] to-[#16BAC5] text-white hover:opacity-90 transition-all duration-200 rounded-full text-[17px] border-0"
                  style={{ fontWeight: 600 }}
                >
                  {isProcessing ? (
                    <>
                      <div className="mr-2 h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" />
                      Purchase Premium Analysis
                    </>
                  )}
                </Button>

                {/* Trust Badge */}
                <p className="text-center text-[13px] text-black/40 mt-4" style={{ fontWeight: 500 }}>
                  🔒 Secure payment • Instant access • No subscription
                </p>
              </Card>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}