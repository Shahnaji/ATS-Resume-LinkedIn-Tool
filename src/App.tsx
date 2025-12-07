import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { lazy, Suspense } from "react";

// Code splitting: Lazy load route components for better performance
const HomePage = lazy(() => import("./pages/HomePage").then(module => ({ default: module.HomePage })));
const LoadingPage = lazy(() => import("./pages/LoadingPage").then(module => ({ default: module.LoadingPage })));
const ResultsPage = lazy(() => import("./pages/ResultsPage").then(module => ({ default: module.ResultsPage })));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage").then(module => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import("./pages/TermsPage").then(module => ({ default: module.TermsPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(module => ({ default: module.ContactPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(module => ({ default: module.NotFoundPage })));
const RefundPage = lazy(() => import("./pages/RefundPage").then(module => ({ default: module.RefundPage })));
const PricingPage = lazy(() => import("./pages/PricingPage").then(module => ({ default: module.PricingPage })));

// Minimal loading fallback for route transitions
function RouteLoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5863F8] via-[#16BAC5] to-[#5FBFF9]">
      <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
}
