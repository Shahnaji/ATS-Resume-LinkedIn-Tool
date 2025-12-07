import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SEOHead } from "../components/SEOHead";
import { Breadcrumb } from "../components/Breadcrumb";

export function RefundPage() {
  return (
    <>
      <SEOHead 
        title="30-Day Refund Policy | ATS Resume Optimizer"
        description="Our hassle-free 30-day money-back guarantee. Not satisfied with your premium analysis? Get a full refund, no questions asked."
        canonicalUrl="https://atsresumeoptimizer.com/refund"
      />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        
        <main className="flex-1">
          <div className="max-w-[980px] mx-auto px-6 py-12">
            <Breadcrumb 
              items={[
                { label: "Home", href: "/" },
                { label: "Refund Policy" }
              ]}
            />

            <div className="mt-8">
              <h1 className="text-black mb-6">30-Day Refund Policy</h1>
              
              <div className="prose prose-slate max-w-none">
                <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                  Last updated: December 7, 2025
                </p>

                <section className="mt-8">
                  <h2 className="text-black mb-4">Our Commitment to You</h2>
                  <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    We stand behind the quality of our AI-powered resume and LinkedIn optimization service. 
                    If you're not completely satisfied with your premium analysis, we offer a full refund 
                    within 30 days of purchase—no questions asked.
                  </p>
                </section>

                <section className="mt-8">
                  <h2 className="text-black mb-4">30-Day Money-Back Guarantee</h2>
                  <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6", marginBottom: "16px" }}>
                    All premium purchases ($9.99) are backed by our 30-day money-back guarantee:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    <li>Request a refund within 30 days of your purchase date</li>
                    <li>Receive a full refund of the purchase price ($9.99)</li>
                    <li>No questions asked—we respect your decision</li>
                    <li>Refunds processed within 5-10 business days</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-black mb-4">How to Request a Refund</h2>
                  <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6", marginBottom: "16px" }}>
                    To request a refund, simply:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    <li>
                      <strong>Email us:</strong> Send your refund request to{" "}
                      <a href="mailto:support@atsresumeoptimizer.com" className="text-[#16BAC5] hover:underline">
                        support@atsresumeoptimizer.com
                      </a>
                    </li>
                    <li><strong>Include:</strong> Your purchase email and transaction ID (optional but helpful)</li>
                    <li><strong>Receive confirmation:</strong> We'll confirm your refund within 24-48 hours</li>
                    <li><strong>Get your money back:</strong> Refund will be credited to your original payment method within 5-10 business days</li>
                  </ol>
                </section>

                <section className="mt-8">
                  <h2 className="text-black mb-4">What's Covered</h2>
                  <ul className="list-disc pl-6 space-y-2 text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    <li>Premium Resume Analysis ($9.99)</li>
                    <li>Premium LinkedIn Analysis ($9.99)</li>
                    <li>Any bundled premium services purchased together</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-black mb-4">Refund Processing Time</h2>
                  <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    Once approved, refunds are processed through Paddle (our payment processor) and typically appear in your account within:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-black/70 mt-4" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                    <li><strong>PayPal:</strong> 3-5 business days</li>
                    <li><strong>Other payment methods:</strong> Up to 10 business days</li>
                  </ul>
                  <p className="text-black/60 mt-4" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                    Note: Processing times may vary depending on your bank or payment provider.
                  </p>
                </section>

                <section className="mt-8">
                  <h2 className="text-black mb-4">Free Analysis</h2>
                  <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    Our free analysis is always available at no cost. Since there's no payment involved, 
                    refunds do not apply to free tier usage.
                  </p>
                </section>

                <section className="mt-8">
                  <h2 className="text-black mb-4">Fair Use Policy</h2>
                  <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    We trust our customers and rarely encounter refund abuse. However, we reserve the right 
                    to refuse refunds in cases of:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-black/70 mt-4" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    <li>Repeated refund requests (multiple purchases and refunds)</li>
                    <li>Fraudulent activity or payment disputes</li>
                    <li>Violation of our Terms of Service</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-black mb-4">Contact Us</h2>
                  <p className="text-black/70" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    Have questions about our refund policy? We're here to help:
                  </p>
                  <ul className="list-none space-y-2 text-black/70 mt-4" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    <li>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:support@atsresumeoptimizer.com" className="text-[#16BAC5] hover:underline">
                        support@atsresumeoptimizer.com
                      </a>
                    </li>
                    <li><strong>Response time:</strong> Within 24-48 hours</li>
                  </ul>
                </section>

                <section className="mt-8 p-6 bg-[#EFE9F4] rounded-lg">
                  <p className="text-black/70" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                    <strong>Note:</strong> This refund policy is in addition to any statutory rights you may have 
                    under consumer protection laws in your jurisdiction. Nothing in this policy affects your 
                    legal rights.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
