import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f7] border-t border-black/10">
      <div className="max-w-[980px] mx-auto px-6 py-8">
        {/* Tool branding */}
        <div className="mb-6 text-center md:text-left">
          <h3 className="text-black" style={{ fontSize: "17px", fontWeight: 600 }}>
            ATS Resume Optimizer
          </h3>
          <p className="text-black/60" style={{ fontSize: "12px", fontWeight: 400 }}>
            AI-Powered Resume & LinkedIn Enhancer
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-black/60" style={{ fontWeight: 400 }}>
            Copyright © 2025 ATS Resume Optimizer. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link to="/privacy" className="text-[12px] text-black/60 hover:text-black transition-colors" style={{ fontWeight: 400 }}>
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[12px] text-black/60 hover:text-black transition-colors" style={{ fontWeight: 400 }}>
              Terms of Use
            </Link>
            <Link to="/contact" className="text-[12px] text-black/60 hover:text-black transition-colors" style={{ fontWeight: 400 }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}