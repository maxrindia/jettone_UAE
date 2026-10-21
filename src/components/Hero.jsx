import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import HeroCobeGlobe from './HeroCobeGlobe';
import HeroTradingBackground from './HeroTradingBackground';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-8 sm:pt-12 pb-6 sm:pb-8 bg-gradient-to-b from-[#06140E]/92 via-[#091F16]/88 to-[#0D1820]/92 backdrop-blur-xs">
      {/* Radiant Emerald & Golden Ambient Atmospheric Glows */}
      <div className="absolute top-0 left-1/4 w-[620px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,230,118,0.16)_0%,rgba(5,150,105,0.06)_40%,transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.12)_0%,rgba(245,211,39,0.1)_40%,transparent_70%)] blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-[540px] h-[540px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,230,118,0.12)_0%,transparent_70%)] blur-[120px] pointer-events-none" />

      {/* Subtle Technical Micro-Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#00E676 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Animated Trading-Related Background Elements */}
      <HeroTradingBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Visual: 3D Animated Global Connection Globe (Cobe WebGL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative order-2 lg:order-1 w-full"
          >
            <HeroCobeGlobe />
          </motion.div>

          {/* Right Content: Clean, Spacious Typography on Dark Luxury Canvas */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left pl-0 lg:pl-6 order-1 lg:order-2"
          >
            <div className="max-w-2xl relative z-10">
              
              {/* Three Distinct Eyebrow Pillar Badges with Individual Colors - No Point Logo */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-5 sm:mb-6">
                <span className="px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#F5D327]/15 text-[#F5D327] border border-[#F5D327]/40 shadow-[0_0_12px_rgba(245,211,39,0.18)]">
                  DUBAI
                </span>
                <span className="px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#00E676]/15 text-[#00E676] border border-[#00E676]/40 shadow-[0_0_12px_rgba(0,230,118,0.18)]">
                  GLOBAL MARKETS
                </span>
                <span className="px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/40 shadow-[0_0_12px_rgba(56,189,248,0.18)]">
                  FINANCIAL SERVICES
                </span>
              </div>

              {/* Main Headline: Smart Wealth (White) & Smarter Future (Solid Emerald Green - No Gradient) */}
              <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-[3.9rem] xl:text-[4.2rem] font-bold tracking-tight leading-[1.08] mb-5 sm:mb-6">
                <span className="text-white block">Smart Wealth.</span>
                <span className="text-[#00E676] block mt-1">
                  Smarter Future.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="font-body text-base md:text-[18px] text-[#94A3B8] max-w-xl font-normal leading-relaxed mb-7 sm:mb-9">
                Explore investment partnerships, trading consultancy, global market insights and intelligent trading technology — all through JETTONE.
              </p>

              {/* CTAs with Shiny Gold Specular Reflection */}
              <div className="flex flex-wrap items-center gap-4 w-full">
                <motion.a
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#services"
                  className="relative w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm sm:text-[15px] font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_20px_rgba(245,211,39,0.4)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_6px_28px_rgba(245,211,39,0.6)] flex items-center justify-center gap-2.5 overflow-hidden group"
                >
                  {/* Glossy Metallic Light-Sweep Shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                  <span className="relative z-10 font-bold tracking-tight">Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 relative z-10 stroke-[2.5]" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#jbot"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#0D2018]/90 text-white font-body text-sm sm:text-[15px] font-semibold rounded-xl hover:bg-[#142C21] transition-all flex items-center justify-center border border-[#1E4532] shadow-xs"
                >
                  <span>Discover JBot</span>
                </motion.a>
              </div>

              {/* Micro Highlights */}
              <div className="mt-6 pt-4 border-t border-[#183627] flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#94A3B8] font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00E676]" />
                  <span>DIFC Regulated Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#00E676]" />
                  <span>Multi-Asset Intelligence</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
