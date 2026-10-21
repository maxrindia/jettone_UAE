import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Zap, DollarSign } from 'lucide-react';

/**
 * Animated real trading-related icons, candlestick charts, and currency badges
 * floating gracefully across the Hero banner background.
 */
export default function HeroTradingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* 1. Floating Candlestick Chart Micro-Widget (Top Left above Globe) */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          x: [-4, 4, -4],
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-14 left-6 sm:left-14 lg:left-24 hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#061811]/60 border border-[#00E676]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,230,118,0.12)] opacity-70"
      >
        {/* Real Candlestick Visual */}
        <div className="flex items-end gap-1 h-6">
          <div className="flex flex-col items-center">
            <span className="w-[1px] h-1.5 bg-[#00E676]" />
            <span className="w-1.5 h-3 rounded-[1px] bg-[#00E676] shadow-[0_0_6px_#00E676]" />
            <span className="w-[1px] h-1 bg-[#00E676]" />
          </div>
          <div className="flex flex-col items-center">
            <span className="w-[1px] h-1 bg-[#F5D327]" />
            <span className="w-1.5 h-2 rounded-[1px] bg-[#F5D327] shadow-[0_0_6px_#F5D327]" />
            <span className="w-[1px] h-1 bg-[#F5D327]" />
          </div>
          <div className="flex flex-col items-center">
            <span className="w-[1px] h-2 bg-[#00E676]" />
            <span className="w-1.5 h-4 rounded-[1px] bg-[#00E676] shadow-[0_0_6px_#00E676]" />
            <span className="w-[1px] h-1.5 bg-[#00E676]" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold text-white tracking-tight leading-none">
            XAU/USD
          </span>
          <span className="text-[9px] font-mono font-semibold text-[#00E676] leading-none mt-0.5">
            +1.84% ▲
          </span>
        </div>
      </motion.div>

      {/* 2. Floating High-Frequency Execution Pill (Top Center / Near Headline) */}
      <motion.div
        animate={{
          y: [12, -12, 12],
          x: [4, -4, 4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2,
        }}
        className="absolute top-10 right-1/4 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#082016]/50 border border-[#F5D327]/30 backdrop-blur-md shadow-[0_0_18px_rgba(245,211,39,0.12)] opacity-60"
      >
        <Zap className="w-3.5 h-3.5 text-[#F5D327]" />
        <span className="text-[10px] font-mono text-white/90 font-medium">
          STP Liquidity • &lt; 0.8ms
        </span>
      </motion.div>

      {/* 3. Floating Bullish Momentum Badge (Mid Right behind Typography) */}
      <motion.div
        animate={{
          y: [-14, 14, -14],
          rotate: [1, -1, 1],
        }}
        transition={{
          duration: 8.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
        className="absolute top-1/3 -right-6 lg:right-12 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#061811]/60 border border-[#00E676]/35 backdrop-blur-md shadow-[0_0_24px_rgba(0,230,118,0.14)] opacity-65"
      >
        <TrendingUp className="w-4 h-4 text-[#00E676]" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-mono font-bold text-white leading-none">
            GLOBAL EQUITIES
          </span>
          <span className="text-[9px] font-mono text-[#00E676] font-semibold leading-none mt-0.5">
            Bullish Trend ▲
          </span>
        </div>
      </motion.div>

      {/* 4. Floating Currency Tokens: AED, USD, EUR, GBP */}
      {/* AED Token (Dubai Hub) */}
      <motion.div
        animate={{
          y: [8, -12, 8],
          x: [-3, 3, -3],
        }}
        transition={{
          duration: 6.8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4,
        }}
        className="absolute bottom-28 left-8 sm:left-20 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#F5D327]/25 to-[#0A2619]/80 border border-[#F5D327]/40 backdrop-blur-md shadow-[0_0_15px_rgba(245,211,39,0.2)] opacity-70"
      >
        <span className="text-[10px] font-mono font-black text-[#F5D327]">
          AED
        </span>
      </motion.div>

      {/* USD Token */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
          x: [4, -4, 4],
        }}
        transition={{
          duration: 7.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.8,
        }}
        className="absolute bottom-16 right-1/3 hidden md:flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#00E676]/25 to-[#061811]/80 border border-[#00E676]/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,230,118,0.2)] opacity-60"
      >
        <DollarSign className="w-3.5 h-3.5 text-[#00E676]" />
      </motion.div>

      {/* EUR Token */}
      <motion.div
        animate={{
          y: [10, -8, 10],
          x: [-2, 2, -2],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.2,
        }}
        className="absolute top-2/3 right-10 hidden lg:flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#38BDF8]/25 to-[#061811]/80 border border-[#38BDF8]/40 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)] opacity-55"
      >
        <span className="text-[10px] font-mono font-black text-[#38BDF8]">
          €
        </span>
      </motion.div>

      {/* 5. Floating Market Depth Bar Chart Widget (Bottom Left near globe base) */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.5,
        }}
        className="absolute bottom-12 left-1/3 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#061811]/50 border border-[#1E4532] backdrop-blur-md shadow-sm opacity-50"
      >
        <BarChart3 className="w-3.5 h-3.5 text-[#00E676]" />
        <span className="text-[10px] font-mono text-[#94A3B8]">
          Multi-Asset Depth
        </span>
      </motion.div>

      {/* 6. Subtle Animated Volatility Wave Path in Background */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-[0.07] overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-24 stroke-[#00E676] fill-none stroke-[1.5]"
          preserveAspectRatio="none"
        >
          <path d="M0,60 Q150,20 300,60 T600,60 T900,40 T1200,60" />
        </svg>
      </div>

    </div>
  );
}
