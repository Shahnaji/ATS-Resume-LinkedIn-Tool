import { useEffect } from "react";
import { voiceSearchFAQSchema } from "./VoiceSearchFAQ";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schemaData?: object;
}

export function SEOHead({
  title = "ATS Resume Optimizer - Free AI Resume Checker & LinkedIn Profile Analyzer",
  description = "Optimize your resume and LinkedIn profile with AI. Free ATS resume checker analyzes 10 sections, provides compatibility score, missing skills, and optimization suggestions. Premium includes resume rewrite, cover letter, and LinkedIn headline options for $9.99.",
  keywords = "ATS resume checker, resume optimizer, LinkedIn profile analyzer, ATS compatible resume, resume optimization tool, free resume checker, applicant tracking system, ATS friendly resume, resume keywords, LinkedIn optimization",
  canonical = "https://atsresumeoptimizer.com",
  ogTitle,
  ogDescription,
  ogImage = "https://atsresumeoptimizer.com/og-image.jpg",
  schemaData,
}: SEOHeadProps) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMetaTag("viewport", "width=device-width, initial-scale=1");
    setMetaTag("theme-color", "#5863F8");

    // Open Graph tags
    setMetaTag("og:title", ogTitle || title, true);
    setMetaTag("og:description", ogDescription || description, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:url", canonical, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:site_name", "ATS Resume Optimizer", true);
    setMetaTag("og:locale", "en_US", true);

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", ogTitle || title);
    setMetaTag("twitter:description", ogDescription || description);
    setMetaTag("twitter:image", ogImage);
    setMetaTag("twitter:site", "@atsoptimizer");

    // Canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute("href", canonical);

    // PWA Manifest
    let manifestElement = document.querySelector('link[rel="manifest"]');
    if (!manifestElement) {
      manifestElement = document.createElement("link");
      manifestElement.setAttribute("rel", "manifest");
      manifestElement.setAttribute("href", "/manifest.json");
      document.head.appendChild(manifestElement);
    }

    // Apple Touch Icons for iOS
    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement("link");
      appleTouchIcon.setAttribute("rel", "apple-touch-icon");
      appleTouchIcon.setAttribute("href", "/icon-192.png");
      document.head.appendChild(appleTouchIcon);
    }

    // Preconnect for performance
    const addPreconnect = (href: string) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = href;
        document.head.appendChild(link);
      }
    };
    addPreconnect("https://fonts.googleapis.com");
    addPreconnect("https://fonts.gstatic.com");

    // DNS Prefetch for external resources
    const addDnsPrefetch = (href: string) => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = href;
        document.head.appendChild(link);
      }
    };
    addDnsPrefetch("https://fonts.googleapis.com");
    addDnsPrefetch("https://fonts.gstatic.com");

    // Preload critical fonts
    const addPreload = (href: string, type: string, crossOrigin?: string) => {
      if (!document.querySelector(`link[rel="preload"][href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = href;
        link.as = type;
        if (crossOrigin) link.crossOrigin = crossOrigin;
        document.head.appendChild(link);
      }
    };

    // Performance hints
    setMetaTag("format-detection", "telephone=no");
    
    // Additional SEO meta tags
    setMetaTag("language", "English");
    setMetaTag("author", "ATS Resume Optimizer");
    setMetaTag("revisit-after", "7 days");
    setMetaTag("rating", "General");
    setMetaTag("distribution", "Global");

    // Combined Schema Data with Organization
    if (schemaData) {
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ATS Resume Optimizer",
        "url": "https://atsresumeoptimizer.com",
        "logo": "https://atsresumeoptimizer.com/logo.png",
        "description": "AI-powered ATS resume checker and LinkedIn profile analyzer helping professionals optimize their job applications",
        "foundingDate": "2024",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "url": "https://atsresumeoptimizer.com/contact",
          "availableLanguage": ["English"]
        },
        "sameAs": [
          "https://twitter.com/atsoptimizer",
          "https://linkedin.com/company/atsoptimizer"
        ]
      };

      const combinedSchema = Array.isArray((schemaData as any)["@graph"]) 
        ? schemaData 
        : { "@context": "https://schema.org", "@graph": [organizationSchema, schemaData] };

      let scriptElement = document.getElementById("schema-org");
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = "schema-org";
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(combinedSchema);
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, schemaData]);

  return null;
}