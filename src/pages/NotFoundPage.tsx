import { Link } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FileQuestion } from "lucide-react";
import { Button } from "../components/ui/button";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#EFE9F4] to-white">
      <SEOHead 
        title="404 - Page Not Found | ATS Resume Optimizer"
        description="The page you're looking for doesn't exist. Return to ATS Resume Optimizer to analyze your resume and LinkedIn profile with AI."
        canonical="https://atsresumeoptimizer.com/404"
      />
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#5863F8] to-[#16BAC5] flex items-center justify-center">
              <FileQuestion className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl mb-4 bg-gradient-to-r from-[#5863F8] via-[#16BAC5] to-[#5FBFF9] bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="text-3xl mb-4 text-[#171D1C]">
            Page Not Found
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#5863F8] to-[#16BAC5] hover:opacity-90 text-white"
            >
              <Link to="/">
                Return Home
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#5863F8] text-[#5863F8] hover:bg-[#5863F8]/10"
            >
              <Link to="/contact">
                Contact Support
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/#features" className="text-[#5863F8] hover:underline">
                Resume Analyzer
              </Link>
              <Link to="/#linkedin" className="text-[#5863F8] hover:underline">
                LinkedIn Analyzer
              </Link>
              <Link to="/privacy" className="text-[#5863F8] hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#5863F8] hover:underline">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
