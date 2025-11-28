/**
 * Core Web Vitals Monitoring Utility
 * 
 * This utility helps track and report Core Web Vitals metrics:
 * - LCP (Largest Contentful Paint): Measures loading performance
 * - FID (First Input Delay): Measures interactivity
 * - CLS (Cumulative Layout Shift): Measures visual stability
 * - TTFB (Time to First Byte): Measures server response time
 * - FCP (First Contentful Paint): Measures perceived load speed
 * 
 * Usage:
 * 1. Install web-vitals: npm install web-vitals
 * 2. Import in your App.tsx: import { reportWebVitals } from './utils/webVitals'
 * 3. Call at app initialization: reportWebVitals(console.log)
 */

interface Metric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

/**
 * Reports Core Web Vitals to analytics
 * @param onPerfEntry - Callback function to handle metrics
 */
export function reportWebVitals(onPerfEntry?: (metric: Metric) => void) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamic import to avoid bloating the main bundle
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    }).catch(() => {
      // web-vitals not installed - silently fail
      console.warn('web-vitals package not installed. Run: npm install web-vitals');
    });
  }
}

/**
 * Log metrics to console (development only)
 */
export function logWebVitals(metric: Metric) {
  if (process.env.NODE_ENV === 'development') {
    const { name, value, rating } = metric;
    
    console.group(`🎯 ${name}`);
    console.log(`Value: ${Math.round(value)}ms`);
    console.log(`Rating: ${rating.toUpperCase()}`);
    console.log(`ID: ${metric.id}`);
    console.groupEnd();
  }
}

/**
 * Send metrics to analytics service
 * Example: Google Analytics 4
 */
export function sendToAnalytics(metric: Metric) {
  // Example for Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
  
  // Example for custom analytics endpoint
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   body: JSON.stringify(metric),
  //   headers: { 'Content-Type': 'application/json' }
  // });
}

/**
 * Performance thresholds based on Google's recommendations
 */
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },      // Largest Contentful Paint (ms)
  FID: { good: 100, poor: 300 },        // First Input Delay (ms)
  CLS: { good: 0.1, poor: 0.25 },       // Cumulative Layout Shift (score)
  TTFB: { good: 800, poor: 1800 },      // Time to First Byte (ms)
  FCP: { good: 1800, poor: 3000 },      // First Contentful Paint (ms)
};

/**
 * Get rating for a metric
 */
export function getMetricRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = WEB_VITALS_THRESHOLDS[name as keyof typeof WEB_VITALS_THRESHOLDS];
  if (!thresholds) return 'good';
  
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Performance monitoring recommendations
 */
export const PERFORMANCE_TIPS = {
  LCP: [
    'Optimize images with lazy loading and WebP format',
    'Use CDN for static assets',
    'Minimize render-blocking resources',
    'Improve server response time',
  ],
  FID: [
    'Break up long JavaScript tasks',
    'Use code splitting and lazy loading',
    'Remove unused JavaScript',
    'Use web workers for heavy computations',
  ],
  CLS: [
    'Set explicit dimensions for images and videos',
    'Reserve space for ads and embeds',
    'Avoid inserting content above existing content',
    'Use CSS transform for animations',
  ],
  TTFB: [
    'Use a faster hosting provider',
    'Implement CDN caching',
    'Optimize database queries',
    'Enable compression (gzip/brotli)',
  ],
  FCP: [
    'Eliminate render-blocking resources',
    'Minimize critical CSS',
    'Preload key resources',
    'Reduce server response time',
  ],
};

// Export all utilities
export default {
  reportWebVitals,
  logWebVitals,
  sendToAnalytics,
  WEB_VITALS_THRESHOLDS,
  getMetricRating,
  PERFORMANCE_TIPS,
};
