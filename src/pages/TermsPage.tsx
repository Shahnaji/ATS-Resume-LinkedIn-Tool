import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/ui/button";
import { ArrowLeft, FileText, Shield, AlertCircle, Scale, Ban } from "lucide-react";
import { useEffect } from "react";

export function TermsPage() {
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5863F8] to-[#5FBFF9] flex items-center justify-center">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-black mb-4" style={{ fontSize: "48px", fontWeight: 700 }}>
              Terms of Use
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
                  Welcome to ATS Resume Optimizer. By accessing or using our AI-powered resume and LinkedIn optimization service, you agree to be bound by these Terms of Use. Please read them carefully before using our service.
                </p>
              </section>

              {/* Section 1 */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-[#16BAC5] mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                      Acceptance of Terms
                    </h2>
                    <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      <p>
                        By using ATS Resume Optimizer, you confirm that you:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Are at least 16 years of age</li>
                        <li>Have the legal capacity to enter into these terms</li>
                        <li>Will use the service in compliance with all applicable laws</li>
                        <li>Agree to provide accurate and truthful information</li>
                      </ul>
                      <p className="mt-3">
                        If you do not agree to these terms, you must not use our service.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-[#5FBFF9] mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                      Service Description
                    </h2>
                    <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      <p>ATS Resume Optimizer provides:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Free Analysis:</strong> Basic resume and LinkedIn profile analysis with scoring, top strengths, missing skills, and compatibility assessment</li>
                        <li><strong>Premium Analysis ($9.99):</strong> Comprehensive analysis with optimized resume rewrite (for resume analysis), headline/summary options (for LinkedIn analysis), cover letter, and detailed improvement suggestions</li>
                      </ul>
                      <p className="mt-3">
                        Our AI-powered analysis is designed to help improve your job application materials but does not guarantee employment outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="w-6 h-6 text-[#5863F8] mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                      Payment and Pricing
                    </h2>
                    <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Premium analysis is available for a one-time fee of $9.99 per analysis</li>
                        <li>All payments are processed securely through our payment provider</li>
                        <li>Prices are subject to change with notice</li>
                        <li>All fees are non-refundable except as required by law</li>
                        <li>You are responsible for all applicable taxes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Refund Policy
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    We offer a 7-day satisfaction guarantee. If you are not satisfied with your premium analysis, you may request a refund within 7 days of purchase. To request a refund, contact us at refunds@atsresumeoptimizer.com with your order details.
                  </p>
                  <p>
                    Refunds will not be granted for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Services already delivered and used</li>
                    <li>Requests made after the 7-day period</li>
                    <li>Violations of these Terms of Use</li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  User Responsibilities
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>You agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and truthful information in your resume and LinkedIn profile data</li>
                    <li>Use the service only for lawful purposes</li>
                    <li>Not attempt to reverse engineer, hack, or compromise our AI systems</li>
                    <li>Not use the service to create fraudulent or misleading job application materials</li>
                    <li>Not share your premium analysis results publicly or commercially without permission</li>
                    <li>Maintain the confidentiality of any account credentials</li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Intellectual Property
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    <strong>Your Content:</strong> You retain all rights to the resume and LinkedIn content you provide. By using our service, you grant us a limited license to process your content for the purpose of providing analysis.
                  </p>
                  <p className="mt-3">
                    <strong>Our Content:</strong> All analysis results, suggestions, and generated content are owned by ATS Resume Optimizer. You receive a personal, non-transferable license to use the analysis results for your job search purposes only.
                  </p>
                  <p className="mt-3">
                    <strong>Platform:</strong> The ATS Resume Optimizer platform, including all software, design, text, graphics, and other content, is protected by copyright and other intellectual property laws.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <div className="flex items-start gap-3 mb-4">
                  <Ban className="w-6 h-6 text-[#16BAC5] mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                      Prohibited Uses
                    </h2>
                    <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      <p>You may not use our service to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Create false, fraudulent, or misleading resumes</li>
                        <li>Violate any laws or regulations</li>
                        <li>Infringe on intellectual property rights</li>
                        <li>Transmit malware, viruses, or harmful code</li>
                        <li>Attempt unauthorized access to our systems</li>
                        <li>Resell or redistribute our analysis results</li>
                        <li>Use automated tools to scrape or extract data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Disclaimers and Limitations
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    <strong>No Employment Guarantee:</strong> Our service provides suggestions to improve your resume and LinkedIn profile but does not guarantee job interviews, offers, or employment.
                  </p>
                  <p className="mt-3">
                    <strong>AI Limitations:</strong> Our AI analysis is based on general best practices and may not account for specific industry requirements or employer preferences.
                  </p>
                  <p className="mt-3">
                    <strong>Service Availability:</strong> We strive for 99.9% uptime but do not guarantee uninterrupted service. We may suspend service for maintenance or updates.
                  </p>
                  <p className="mt-3">
                    <strong>Third-Party Services:</strong> We use third-party AI providers (Grok API) and are not responsible for their service quality or availability.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Limitation of Liability
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, ATS RESUME OPTIMIZER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                  </p>
                  <p className="mt-3">
                    Our total liability shall not exceed the amount you paid for the service in the past 12 months, or $100, whichever is less.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Termination
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    We reserve the right to suspend or terminate your access to our service at any time, with or without notice, for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violation of these Terms of Use</li>
                    <li>Fraudulent or illegal activity</li>
                    <li>Abuse of the service or our support team</li>
                    <li>Any other reason at our sole discretion</li>
                  </ul>
                  <p className="mt-3">
                    Upon termination, your right to use the service will immediately cease, and we may delete your data.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Changes to Terms
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    We may update these Terms of Use from time to time. We will notify you of material changes by posting the new terms on this page and updating the "Last updated" date. Your continued use of the service after changes constitutes acceptance of the new terms.
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Governing Law
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    These Terms of Use shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of the United States.
                  </p>
                </div>
              </section>

              {/* Section 13 */}
              <section>
                <h2 className="text-black mb-3" style={{ fontSize: "24px", fontWeight: 600 }}>
                  Severability
                </h2>
                <div className="space-y-3 text-black/80" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  <p>
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
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
                    If you have any questions about these Terms of Use, please contact us:
                  </p>
                  <div className="bg-[#f5f5f7] rounded-xl p-6 mt-4">
                    <p><strong>Email:</strong> legal@atsresumeoptimizer.com</p>
                    <p><strong>Support:</strong> support@atsresumeoptimizer.com</p>
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