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

        {/* Product Hunt Badge */}
        <div className="mb-6 flex justify-center md:justify-start">
          <a 
            href="https://www.producthunt.com/products/ats-resume-and-linkedin-optimizer?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-ats&#0045;resume&#0045;and&#0045;linkedin&#0045;optimizer" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1043936&theme=light&t=1764443222304" 
              alt="ATS Resume and LinkedIn Optimizer - Get hired10x faster with AIpowered ATS LinkedIn optimization | Product Hunt" 
              style={{ width: "250px", height: "54px" }} 
              width="250" 
              height="54" 
            />
          </a>
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
            <Link to="/refund" className="text-[12px] text-black/60 hover:text-black transition-colors" style={{ fontWeight: 400 }}>
              Refund Policy
            </Link>
            <Link to="/pricing" className="text-[12px] text-black/60 hover:text-black transition-colors" style={{ fontWeight: 400 }}>
              Pricing
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
