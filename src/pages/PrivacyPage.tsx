import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, FileText, Database, Users } from "lucide-react";
import { useEffect } from "react";

export function PrivacyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Header />
      <Breadcrumb />
      
      <main className="flex-1 pt-20">
        <div className="max-w-[980px] mx-auto px-6 py-12">
          {/* Back button */}
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="gap-2 hover:bg-black/5 rounded-full mb-8"
            style={{ fontWeight: 600 }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#16BAC5] to-[#5FBFF9] flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-black mb-4" style={{ fontSize: "48px", fontWeight: 700 }}>
              Privacy Policy
            </h1>
            <p className="text-black/60 max-w-2xl mx-auto" style={{ fontSize: "17px" }}>
              Last updated: November 27, 2025
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/5"
          >
            <div className="space-y-8 max-w-3xl mx-auto">
              {/* Introduction */}
              <section>
                <p className="text-black/80" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                  At ATS Resume Optimizer, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered resume and LinkedIn optimization service.
                </p>
              </section>

              {/* Section 1 */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-[#16BAC5] mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                      Information We Collect
                    </h2>
                    <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      <p>We collect information that you provide directly to us:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Resume Content:</strong> Text, formatting, work experience, education, skills, and other resume data you provide</li>
                        <li><strong>LinkedIn Profile Data:</strong> Profile text, experience, skills, and other LinkedIn information you provide</li>
                        <li><strong>Job Role Information:</strong> Target job titles and roles you're applying for</li>
                        <li><strong>Contact Information:</strong> Email address (for premium users)</li>
                        <li><strong>Payment Information:</strong> Processed securely through Stripe (we don't store card details)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Database className="w-6 h-6 text-[#5FBFF9] mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                      How We Use Your Information
                    </h2>
                    <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      <p>We use the information we collect to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Provide AI-powered analysis and optimization of your resume and LinkedIn profile</li>
                        <li>Generate personalized improvement suggestions and recommendations</li>
                        <li>Process payments for premium features</li>
                        <li>Improve our AI models and service quality</li>
                        <li>Send you service-related notifications and updates</li>
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Detect, prevent, and address technical issues and fraudulent activity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Lock className="w-6 h-6 text-[#5863F8] mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                      Data Security
                    </h2>
                    <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      <p>We implement industry-standard security measures to protect your personal information:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>End-to-end encryption for data transmission</li>
                        <li>Secure cloud storage with access controls</li>
                        <li>Regular security audits and updates</li>
                        <li>Limited employee access to personal data</li>
                        <li>Automatic data deletion after 30 days (unless you create an account)</li>
                      </ul>
                      <p className="mt-3">
                        However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Users className="w-6 h-6 text-[#16BAC5] mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                      Information Sharing
                    </h2>
                    <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      <p>We do not sell your personal information. We may share your information only in these circumstances:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>AI Service Providers:</strong> We use advanced AI to analyze your content (governed by our data protection standards)</li>
                        <li><strong>Payment Processors:</strong> To process premium feature purchases</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                        <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Eye className="w-6 h-6 text-[#5FBFF9] mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                      Your Rights and Choices
                    </h2>
                    <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      <p>You have the right to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Access and download your personal data</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your data</li>
                        <li>Opt-out of marketing communications</li>
                        <li>Lodge a complaint with a supervisory authority</li>
                      </ul>
                      <p className="mt-3">
                        To exercise these rights, please contact us using the information in the Contact section below.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Data Retention
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    We retain your information only as long as necessary to provide our services and comply with legal obligations. Resume and LinkedIn data submitted for analysis is automatically deleted after 30 days unless you create an account. Payment records are retained for 7 years as required by law.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Cookies and Tracking
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    We use essential cookies to ensure our service functions properly. We do not use third-party advertising cookies or tracking pixels. You can control cookies through your browser settings, but disabling them may affect service functionality.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Children's Privacy
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    Our service is not intended for users under 16 years of age. We do not knowingly collect information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Changes to This Policy
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="border-t border-black/10 pt-8">
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Contact Us
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-[#f5f5f7] rounded-xl p-6 mt-4">
                    <p><strong>Email:</strong> privacy@atsresumeoptimizer.com</p>
                    <p><strong>Website:</strong> www.atsresumeoptimizer.com</p>
                    <p className="mt-3">
                      We will respond to your inquiry within 48 hours.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}