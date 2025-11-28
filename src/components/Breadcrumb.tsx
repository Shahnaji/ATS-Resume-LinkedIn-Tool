import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumb() {
  const location = useLocation();
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const path = location.pathname;
    const hash = location.hash;
    
    const items: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
    
    if (path === "/privacy") {
      items.push({ label: "Privacy Policy", href: "/privacy" });
    } else if (path === "/terms") {
      items.push({ label: "Terms of Use", href: "/terms" });
    } else if (path === "/contact") {
      items.push({ label: "Contact Us", href: "/contact" });
    } else if (path === "/loading") {
      items.push({ label: "Analyzing Resume", href: "/loading" });
    } else if (path === "/results") {
      items.push({ label: "Analysis Results", href: "/results" });
    } else if (hash === "#features") {
      items.push({ label: "Resume Analyzer", href: "/#features" });
    } else if (hash === "#linkedin") {
      items.push({ label: "LinkedIn Analyzer", href: "/#linkedin" });
    } else if (hash === "#how-it-works") {
      items.push({ label: "How It Works", href: "/#how-it-works" });
    }
    
    return items;
  };

  const breadcrumbs = getBreadcrumbs();
  
  // Don't show breadcrumbs on homepage with no hash
  if (breadcrumbs.length === 1 && location.pathname === "/" && !location.hash) {
    return null;
  }

  // Schema.org BreadcrumbList structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://atsresumeoptimizer.com${item.href}`
    }))
  };

  return (
    <>
      {/* Add schema to head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Breadcrumb UI */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-black/5">
        <div className="max-w-[980px] mx-auto px-6 py-4">
          <ol className="flex items-center gap-2 text-[14px]">
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-black/30" />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-black/90 flex items-center gap-1.5" style={{ fontWeight: 600 }}>
                    {index === 0 && <Home className="w-4 h-4" />}
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-black/50 hover:text-[#5863F8] transition-colors flex items-center gap-1.5"
                    style={{ fontWeight: 500 }}
                  >
                    {index === 0 && <Home className="w-4 h-4" />}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
