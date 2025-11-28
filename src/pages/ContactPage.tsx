import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { ArrowLeft, Mail, MessageSquare, Clock, MapPin, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

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
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#16BAC5] to-[#5863F8] flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-black mb-4" style={{ fontSize: "48px", fontWeight: 700 }}>
              Contact Us
            </h1>
            <p className="text-black/60 max-w-2xl mx-auto" style={{ fontSize: "17px" }}>
              Have questions or need support? We're here to help you optimize your career journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-1.75"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-black/5">
                <h2 className="text-black mb-6" style={{ fontSize: "28px", fontWeight: 600 }}>
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-black mb-2" style={{ fontSize: "15px", fontWeight: 500 }}>
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 bg-[#f5f5f7] border-black/10 rounded-xl"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-black mb-2" style={{ fontSize: "15px", fontWeight: 500 }}>
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 bg-[#f5f5f7] border-black/10 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-black mb-2" style={{ fontSize: "15px", fontWeight: 500 }}>
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="h-12 bg-[#f5f5f7] border-black/10 rounded-xl"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-black mb-2" style={{ fontSize: "15px", fontWeight: 500 }}>
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[160px] bg-[#f5f5f7] border-black/10 rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-[#16BAC5] to-[#5FBFF9] text-white hover:opacity-90 rounded-xl border-0"
                    style={{ fontWeight: 600, fontSize: "17px" }}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Email */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#16BAC5] to-[#5FBFF9] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                      Email
                    </h3>
                    <p className="text-black/60 text-sm">
                      support@atsresumeoptimizer.com
                    </p>
                    <p className="text-black/60 text-sm mt-1">
                      sales@atsresumeoptimizer.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5863F8] to-[#5FBFF9] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                      Response Time
                    </h3>
                    <p className="text-black/60 text-sm">
                      We typically respond within 24 hours on business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#16BAC5] to-[#5863F8] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                      Location
                    </h3>
                    <p className="text-black/60 text-sm">
                      United States
                    </p>
                    <p className="text-black/60 text-sm mt-1">
                      Serving clients worldwide
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-black/5"
          >
            <h2 className="text-black mb-8 text-center" style={{ fontSize: "32px", fontWeight: 700 }}>
              Common Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                  How long does analysis take?
                </h3>
                <p className="text-black/60" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  Free analysis takes 30-60 seconds. Premium analysis with full optimization takes 2-3 minutes.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                  What's included in premium?
                </h3>
                <p className="text-black/60" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  Premium includes optimized resume rewrite, cover letter, detailed section analysis, and actionable suggestions.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                  Is my data secure?
                </h3>
                <p className="text-black/60" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  Yes. We use end-to-end encryption and automatically delete your data after 30 days.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                  Can I get a refund?
                </h3>
                <p className="text-black/60" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  Yes. We offer a 7-day satisfaction guarantee. Contact us if you're not satisfied.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                  Which AI model do you use?
                </h3>
                <p className="text-black/60" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  We use Grok AI, one of the most advanced language models for professional content analysis.
                </p>
              </div>

              <div>
                <h3 className="text-black mb-2" style={{ fontSize: "17px", fontWeight: 600 }}>
                  Do you offer bulk discounts?
                </h3>
                <p className="text-black/60" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  Yes! Contact us at sales@atsresumeoptimizer.com for enterprise and bulk pricing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}