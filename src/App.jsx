import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Markets from './components/Markets';
import JBotSection from './components/JBotSection';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full max-w-full bg-[#06140E] font-body text-white antialiased selection:bg-[#F5D327]/30 selection:text-white overflow-x-hidden">
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
        
        {/* Dynamic animated live market wave / chart pulse (living gif / trading terminal feel) */}
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

      {/* Fixed Header with Top Scrolling Ticker + Navigation */}
      <Navbar />

      {/* Main Content Sections - Smoothly scrolling over the fixed static background */}
      <main className="relative z-10 w-full pt-[94px] sm:pt-[96px]">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Our Services: Three Paths. One Perspective. */}
        <Services />

        {/* 3. Global Markets & Trading Services: Explore the Opportunities. */}
        <Markets />

        {/* 4. JBot Technology: From Strategy to Automation. */}
        <JBotSection />

        {/* 5. Market Insights: Market Perspectives. */}
        <Insights />

        {/* 6. Contact Section: Start a Conversation with JETTONE. */}
        <Contact />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
