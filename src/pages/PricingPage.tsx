import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";
import { Check, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function PricingPage() {
  return (
    <>
      <SEOHead 
        title="Pricing - Free & Premium Analysis | ATS Resume Optimizer"
        description="Try our AI-powered resume and LinkedIn analysis for free. Upgrade to premium for just $9.99 to get detailed optimization suggestions, custom headlines, and cover letters."
        canonicalUrl="https://atsresumeoptimizer.com/pricing"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        
        <main className="flex-1">
          <div className="max-w-[980px] mx-auto px-6 py-12">
            <Breadcrumb 
              items={[
                { label: "Home", href: "/" },
                { label: "Pricing" }
              ]}
            />

            <div className="mt-8 text-center">
              <h1 className="text-black mb-4">Simple, Transparent Pricing</h1>
              <p className="text-black/70 max-w-2xl mx-auto" style={{ fontSize: "21px", lineHeight: "1.5" }}>
                Get started with our free analysis or unlock premium features for deeper insights and optimization.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
              
              {/* Free Tier */}
              <div className="border border-black/10 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-[#5FBFF9]" />
                  <h2 className="text-black" style={{ fontSize: "24px", fontWeight: 600 }}>Free Analysis</h2>
                </div>
                
                <div className="mb-6">
                  <div className="text-black" style={{ fontSize: "48px", fontWeight: 700 }}>
                    $0
                  </div>
                  <p className="text-black/60" style={{ fontSize: "15px" }}>Forever free</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#16BAC5] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      10-section resume scoring (100 points)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#16BAC5] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      10-section LinkedIn scoring (100 points)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#16BAC5] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      Basic ATS compatibility check
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#16BAC5] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      Overall score breakdown
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#16BAC5] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      Instant results
                    </span>
                  </li>
                </ul>

                <Link 
                  to="/"
                  className="block w-full text-center py-3 px-6 rounded-full border-2 border-[#16BAC5] text-[#16BAC5] hover:bg-[#16BAC5] hover:text-white transition-all"
                  style={{ fontSize: "17px", fontWeight: 600 }}
                >
                  Get Started Free
                </Link>
              </div>

              {/* Premium Tier */}
              <div className="border-2 border-[#5863F8] rounded-2xl p-8 bg-gradient-to-br from-[#5863F8]/5 to-[#16BAC5]/5 relative hover:shadow-xl transition-shadow">
                <div className="absolute -top-3 right-8 bg-[#5863F8] text-white px-4 py-1 rounded-full text-[13px]" style={{ fontWeight: 600 }}>
                  Most Popular
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-[#5863F8]" />
                  <h2 className="text-black" style={{ fontSize: "24px", fontWeight: 600 }}>Premium Analysis</h2>
                </div>
                
                <div className="mb-6">
                  <div className="text-black" style={{ fontSize: "48px", fontWeight: 700 }}>
                    $9.99
                  </div>
                  <p className="text-black/60" style={{ fontSize: "15px" }}>Per analysis (Resume or LinkedIn)</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      <strong>Everything in Free</strong>, plus:
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      <strong>AI-powered Grok analysis</strong> for deep insights
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      Detailed optimization suggestions per section
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      <strong>3 LinkedIn headline options</strong> (with copy buttons)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      <strong>2 LinkedIn summary options</strong> (with copy buttons)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      <strong>Professional cover letter</strong> generated
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#5863F8] flex-shrink-0 mt-0.5" />
                    <span className="text-black/70" style={{ fontSize: "17px" }}>
                      Industry-specific keyword recommendations
                    </span>
                  </li>
                </ul>

                <Link 
                  to="/"
                  className="block w-full text-center py-3 px-6 rounded-full bg-[#5863F8] text-white hover:bg-[#5863F8]/90 transition-all shadow-md"
                  style={{ fontSize: "17px", fontWeight: 600 }}
                >
                  Upgrade to Premium
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-16 space-y-8 max-w-3xl mx-auto">
              <section>
                <h2 className="text-black mb-4">Geo-Based Pricing</h2>
                <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                  We use Paddle's intelligent pricing system to automatically adjust prices based on your location and local currency. 
                  The $9.99 USD price shown is for US customers—you'll see your local pricing at checkout.
                </p>
              </section>

              <section>
                <h2 className="text-black mb-4">30-Day Money-Back Guarantee</h2>
                <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                  Not satisfied? Get a full refund within 30 days, no questions asked.{" "}
                  <Link to="/refund" className="text-[#16BAC5] hover:underline">
                    View our refund policy
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-black mb-4">Secure Payment</h2>
                <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                  All payments are securely processed by Paddle, a trusted payment platform. We accept all major credit cards, 
                  PayPal, and local payment methods.
                </p>
              </section>

              <section>
                <h2 className="text-black mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                      Can I try before I buy?
                    </h3>
                    <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                      Absolutely! Our free analysis gives you a comprehensive 10-section score for both resume and LinkedIn. 
                      Upgrade to premium when you're ready for AI-powered detailed suggestions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                      Is the $9.99 price per resume or LinkedIn analysis?
                    </h3>
                    <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                      The $9.99 premium tier applies separately to resume analysis and LinkedIn analysis. Each analysis type 
                      is a one-time payment for that specific document/profile.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                      What payment methods do you accept?
                    </h3>
                    <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                      We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and various local 
                      payment methods through Paddle.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                      Do you offer refunds?
                    </h3>
                    <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                      Yes! We offer a hassle-free 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.{" "}
                      <Link to="/refund" className="text-[#16BAC5] hover:underline">
                        Learn more
                      </Link>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
