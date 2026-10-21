import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import HeroCobeGlobe from './HeroCobeGlobe';
import HeroTradingBackground from './HeroTradingBackground';

export default function Hero() {
  return (
    <section className="relative w-full lg:min-h-[calc(100dvh-98px)] flex flex-col justify-center pt-8 sm:pt-10 lg:pt-0 pb-8 sm:pb-10 lg:pb-0 bg-gradient-to-b from-[#06140E]/95 via-[#091F16]/90 to-[#0D1820]/95 backdrop-blur-xs">
      {/* Subtle Radial Gold & Emerald Atmospheric Glows */}
      <div className="absolute top-0 left-1/4 w-[620px] 2xl:w-[900px] h-[520px] 2xl:h-[750px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,211,39,0.12)_0%,rgba(0,230,118,0.1)_40%,transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[480px] 2xl:w-[750px] h-[480px] 2xl:h-[750px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,230,118,0.1)_0%,rgba(245,211,39,0.08)_40%,transparent_70%)] blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-[540px] 2xl:w-[800px] h-[540px] 2xl:h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,211,39,0.1)_0%,transparent_70%)] blur-[120px] pointer-events-none" />

      {/* Subtle Technical Micro-Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#00E676 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Animated Trading-Related Background Elements safely placed away from text */}
      <HeroTradingBackground />

      <div className="relative z-10 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 py-6 lg:py-8 2xl:py-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 items-center w-full">
          
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
            className="lg:col-span-7 flex flex-col items-start text-left pl-0 lg:pl-6 2xl:pl-8 order-1 lg:order-2"
          >
            <div className="max-w-2xl 2xl:max-w-3xl relative z-10">
              
              {/* Eyebrow: DUBAI · GLOBAL MARKETS · FINANCIAL SERVICES */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 2xl:gap-3 mb-5 sm:mb-6 2xl:mb-8">
                <span className="px-3.5 py-1.5 2xl:px-4 2xl:py-2 rounded-lg text-xs 2xl:text-sm font-bold tracking-wider uppercase bg-[#F5D327]/15 text-[#F5D327] border border-[#F5D327]/40 shadow-[0_0_12px_rgba(245,211,39,0.18)]">
                  DUBAI
                </span>
                <span className="px-3.5 py-1.5 2xl:px-4 2xl:py-2 rounded-lg text-xs 2xl:text-sm font-bold tracking-wider uppercase bg-[#00E676]/15 text-[#00E676] border border-[#00E676]/40 shadow-[0_0_12px_rgba(0,230,118,0.18)]">
                  GLOBAL MARKETS
                </span>
                <span className="px-3.5 py-1.5 2xl:px-4 2xl:py-2 rounded-lg text-xs 2xl:text-sm font-bold tracking-wider uppercase bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/40 shadow-[0_0_12px_rgba(56,189,248,0.18)]">
                  FINANCIAL SERVICES
                </span>
              </div>

              {/* Main Headline: Smart Wealth. (white) + Smarter Future. (gold, new line) strictly per spec */}
              <h1 className="font-headline text-3xl sm:text-5xl md:text-6xl lg:text-[3.9rem] xl:text-[4.4rem] 2xl:text-[5rem] font-bold tracking-tight leading-[1.08] mb-5 sm:mb-6 2xl:mb-8">
                <span className="text-white block">Smart Wealth.</span>
                <span className="text-[#F5D327] block mt-1">
                  Smarter Future.
                </span>
              </h1>

              {/* Subtext: strictly per spec */}
              <p className="font-body text-base md:text-[18px] 2xl:text-xl text-[#BCE2CD] max-w-xl 2xl:max-w-2xl font-normal leading-relaxed mb-7 sm:mb-9 2xl:mb-11">
                Investment partnerships, trading consultancy, market analysis and intelligent trading technology — all through JETTONE.
              </p>

              {/* CTAs with correct internal routing per spec */}
              <div className="flex flex-wrap items-center gap-4 2xl:gap-5 w-full">
                <motion.div whileHover={{ scale: 1.02, x: 2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link
                    to="/services"
                    className="relative w-full sm:w-auto px-7 py-3.5 2xl:px-9 2xl:py-4 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm sm:text-[15px] 2xl:text-base font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_20px_rgba(245,211,39,0.4)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.95),0_6px_28px_rgba(245,211,39,0.6)] flex items-center justify-center gap-2.5 overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                    <span className="relative z-10 font-bold tracking-tight">Explore Our Services</span>
                    <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 relative z-10 stroke-[2.5]" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link
                    to="/jbot"
                    className="w-full sm:w-auto px-6 py-3.5 2xl:px-8 2xl:py-4 bg-[#0D2018]/90 text-white font-body text-sm sm:text-[15px] 2xl:text-base font-semibold rounded-xl hover:bg-[#142C21] transition-all flex items-center justify-center border border-[#1E4532] shadow-xs"
                  >
                    <span>Discover JBot</span>
                  </Link>
                </motion.div>
              </div>

              {/* Micro Highlights - Institutional Standards (no fabricated affiliation claims) */}
              <div className="mt-6 2xl:mt-8 pt-4 2xl:pt-6 border-t border-[#183627] flex flex-wrap items-center gap-6 sm:gap-8 2xl:gap-10 text-xs sm:text-sm 2xl:text-base text-[#94A3B8] font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#00E676]" />
                  <span>Institutional Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#00E676]" />
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
