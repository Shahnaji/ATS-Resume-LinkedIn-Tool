/**
 * Analytics and Performance Monitoring
 * Simple utilities for tracking key metrics and user events
 */

// Track page views
export function trackPageView(pageName: string, path: string) {
  if (typeof window === 'undefined') return;
  
  // Google Analytics (if integrated)
  if ('gtag' in window) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
      page_title: pageName
    });
  }
  
  // Console log for debugging
  console.log(`[Analytics] Page View: ${pageName} (${path})`);
}

// Track custom events
export function trackEvent(
  eventName: string, 
  category: string, 
  label?: string, 
  value?: number
) {
  if (typeof window === 'undefined') return;
  
  // Google Analytics (if integrated)
  if ('gtag' in window) {
    (window as any).gtag('event', eventName, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
  
  // Console log for debugging
  console.log(`[Analytics] Event: ${eventName}`, { category, label, value });
}

// Track conversion events
export function trackConversion(conversionType: 'free_analysis' | 'premium_purchase' | 'signup') {
  trackEvent('conversion', 'Conversion', conversionType);
}

// Track user interactions
export function trackInteraction(action: string, element: string) {
  trackEvent(action, 'Interaction', element);
}

// Track errors
export function trackError(errorMessage: string, errorContext?: string) {
  if (typeof window === 'undefined') return;
  
  // Google Analytics (if integrated)
  if ('gtag' in window) {
    (window as any).gtag('event', 'exception', {
      description: errorMessage,
      fatal: false
    });
  }
  
  console.error(`[Analytics] Error: ${errorMessage}`, errorContext);
}

// Initialize analytics (call this on app mount)
export function initAnalytics() {
  if (typeof window === 'undefined') return;
  
  // Add Google Analytics script if GA_MEASUREMENT_ID is available
  // This is a placeholder - replace with your actual GA ID
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
  
  if (!document.getElementById('ga-script') && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
        send_page_view: true
      });
    `;
    document.head.appendChild(configScript);
  }
  
  console.log('[Analytics] Initialized');
}
