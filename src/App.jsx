import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import InvestmentPartner from './pages/InvestmentPartner';
import TradingConsultancy from './pages/TradingConsultancy';
import JBotPage from './pages/JBotPage';
import ServicesPage from './pages/ServicesPage';
import ExploreJBot from './pages/ExploreJBot';
import InsightsPage from './pages/InsightsPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const main = document.getElementById('main-content');
    if (!main) return;

    if (hash) {
      setTimeout(() => {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          const mainRect = main.getBoundingClientRect();
          const elRect = targetEl.getBoundingClientRect();
          const offset = elRect.top - mainRect.top + main.scrollTop;
          main.scrollTo({ top: Math.max(0, offset - 12), behavior: 'smooth' });
        }
      }, 50);
    } else {
      main.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  // Smooth scroll handler for all internal anchor links inside the scrollable main container
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      const targetId = href.slice(1);
      const main = document.getElementById('main-content');
      if (!main) return;

      e.preventDefault();
      if (!targetId) {
        main.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const mainRect = main.getBoundingClientRect();
          const elRect = targetEl.getBoundingClientRect();
          const offset = elRect.top - mainRect.top + main.scrollTop;
          main.scrollTo({ top: Math.max(0, offset - 12), behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative h-[100dvh] w-full max-w-full bg-[#06140E] font-body text-white antialiased selection:bg-[#F5D327]/30 selection:text-white overflow-hidden flex flex-col">
      {/* 
        ========================================================================
        Fixed Global Static Background:
        Pure financial trading charts without humans (candlesticks, depth waves).
        Uniform across the entire website with zero section-wise opacity cuts.
        Dynamic ambient glow gives a living, animated trading terminal feel.
        ========================================================================
      */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#06140E]">
        <img
          src="/images/trading-charts-bg.jpg"
          alt="JETTONE Trading Charts"
          className="w-full h-full object-cover object-center opacity-45 sm:opacity-50 filter contrast-125 saturate-125 brightness-105"
        />
        {/* Unified sleek dark obsidian-emerald gradient - 100% consistent throughout the site */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06140E]/85 via-[#06140E]/70 to-[#06140E]/85" />
        
        {/* Dynamic animated live market wave / chart pulse */}
        <div className="absolute top-1/4 right-1/4 w-[750px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(0,230,118,0.2)_0%,transparent_70%)] blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-[650px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(245,211,39,0.15)_0%,transparent_70%)] blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Subtle technical coordinate grid */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #00E676 1px, transparent 1px), linear-gradient(to bottom, #00E676 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Header — flex-shrink: 0, strictly adhering to layout rules */}
      <div className="relative z-50 shrink-0 w-full">
        <Navbar />
      </div>

      {/* Scroll to top / hash handler on route change */}
      <ScrollToTop />

      {/* <main> — flex: 1, min-height: 0, overflow-y: auto (ONLY scroll element) */}
      <main id="main-content" className="relative z-10 flex-1 min-h-0 w-full overflow-y-auto overflow-x-hidden scroll-smooth flex flex-col justify-between">
        <div className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Services Pathways */}
            <Route path="/services/investment-partner" element={<InvestmentPartner />} />
            <Route path="/investment-partner" element={<InvestmentPartner />} />
            <Route path="/services/consultancy" element={<TradingConsultancy />} />
            <Route path="/trading-consultancy" element={<TradingConsultancy />} />
            <Route path="/services" element={<ServicesPage />} />
            
            {/* JBot Technology */}
            <Route path="/services/jbot" element={<JBotPage />} />
            <Route path="/jbot" element={<JBotPage />} />
            <Route path="/explore-jbot" element={<ExploreJBot />} />
            
            {/* Insights & Individual Article View */}
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:id" element={<ArticlePage />} />
            
            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback & Removed About Redirect */}
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Footer — flush at bottom with zero extra space below */}
        <Footer />
      </main>
    </div>
  );
}
