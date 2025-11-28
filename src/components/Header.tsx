import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export function Header() {
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Update URL hash to #features (Resume)
    window.location.hash = 'features';
  };

  const handleLinkedInClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Update URL hash to #linkedin
    window.location.hash = 'linkedin';
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 bg-gradient-to-br from-[#5863F8] to-[#16BAC5] rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-[17px] text-[#171D1C]" style={{ fontWeight: 600 }}>
                ATS Resume Optimizer
              </h1>
              <p className="text-[11px] text-gray-500" style={{ fontWeight: 400 }}>
                AI-Powered Resume & LinkedIn Enhancer
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              onClick={handleResumeClick}
              className="text-[14px] text-gray-700 hover:text-[#16BAC5] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Resume
            </a>
            <a
              href="#linkedin"
              onClick={handleLinkedInClick}
              className="text-[14px] text-gray-700 hover:text-[#16BAC5] transition-colors"
              style={{ fontWeight: 500 }}
            >
              LinkedIn
            </a>
            <a
              href="#how-it-works"
              className="text-[14px] text-gray-700 hover:text-[#16BAC5] transition-colors"
              style={{ fontWeight: 500 }}
            >
              How It Works
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="#features"
            onClick={handleResumeClick}
            className="px-5 py-2 bg-gradient-to-r from-[#5863F8] to-[#16BAC5] text-white rounded-full text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200"
            style={{ fontWeight: 500 }}
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}