import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, DollarSign, IndianRupee } from 'lucide-react';

/**
 * Animated real trading-related elements positioned strictly in perimeter safe-zones
 * so they NEVER collide with, overlap, or affect the readability of the static hero typography.
 */
export default function HeroTradingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* 1. Candlestick Chart Micro-Widget (Placed safely in Top-Left above Globe, far from text) */}
      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-4 sm:top-6 left-4 sm:left-8 lg:left-12 hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#061811]/50 border border-[#00E676]/25 backdrop-blur-md shadow-[0_0_16px_rgba(0,230,118,0.1)] opacity-50"
      >
        <div className="flex items-end gap-1 h-5">
          <div className="flex flex-col items-center">
            <span className="w-[1px] h-1 bg-[#00E676]" />
            <span className="w-1.5 h-2.5 rounded-[1px] bg-[#00E676]" />
            <span className="w-[1px] h-1 bg-[#00E676]" />
          </div>
          <div className="flex flex-col items-center">
            <span className="w-[1px] h-1 bg-[#F5D327]" />
            <span className="w-1.5 h-2 rounded-[1px] bg-[#F5D327]" />
            <span className="w-[1px] h-0.5 bg-[#F5D327]" />
          </div>
          <div className="flex flex-col items-center">
            <span className="w-[1px] h-1.5 bg-[#00E676]" />
            <span className="w-1.5 h-3.5 rounded-[1px] bg-[#00E676]" />
            <span className="w-[1px] h-1 bg-[#00E676]" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold text-white tracking-tight leading-none">
            XAU/USD
          </span>
          <span className="text-[8.5px] font-mono font-semibold text-[#00E676] leading-none mt-0.5">
            +1.84% ▲
          </span>
        </div>
      </motion.div>

      {/* 2. STP Liquidity Pill (Placed high in top-right perimeter, completely above text zone) */}
      <motion.div
        animate={{
          y: [3, -3, 3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
        className="absolute top-3 sm:top-4 right-4 sm:right-8 lg:right-16 hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#082016]/40 border border-[#F5D327]/25 backdrop-blur-md opacity-45"
      >
        <Zap className="w-3 h-3 text-[#F5D327]" />
        <span className="text-[9.5px] font-mono text-white/80 font-medium">
          STP Liquidity • &lt; 0.8ms
        </span>
      </motion.div>

      {/* 3. Bullish Momentum Badge (Placed in far right outer margin, outside text container) */}
      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2,
        }}
        className="absolute top-20 right-2 sm:right-4 lg:right-6 xl:right-10 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#061811]/45 border border-[#00E676]/25 backdrop-blur-md opacity-45"
      >
        <TrendingUp className="w-3.5 h-3.5 text-[#00E676]" />
        <div className="flex flex-col text-left">
          <span className="text-[9.5px] font-mono font-bold text-white/90 leading-none">
            GLOBAL EQUITIES
          </span>
          <span className="text-[8.5px] font-mono text-[#00E676] font-semibold leading-none mt-0.5">
            Bullish Trend ▲
          </span>
        </div>
      </motion.div>

      {/* 4. USD Token (Swapped to bottom-left where AED was) */}
      <motion.div
        animate={{
          y: [-3, 3, -3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-6 left-6 sm:left-14 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#00E676]/20 to-[#061811]/60 border border-[#00E676]/35 backdrop-blur-md opacity-60 shadow-[0_0_10px_rgba(0,230,118,0.2)]"
      >
        <DollarSign className="w-3.5 h-3.5 text-[#00E676]" />
      </motion.div>

      {/* 5. INR Token (Indian Rupee logo added) */}
      <motion.div
        animate={{
          y: [3, -3, 3],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6,
        }}
        className="absolute bottom-6 left-16 sm:left-24 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#38BDF8]/20 to-[#061811]/60 border border-[#38BDF8]/35 backdrop-blur-md opacity-60 shadow-[0_0_10px_rgba(56,189,248,0.2)]"
      >
        <IndianRupee className="w-3.5 h-3.5 text-[#38BDF8]" />
      </motion.div>

      {/* 6. AED Currency Token (Swapped to bottom-right where USD was) */}
      <motion.div
        animate={{
          y: [4, -4, 4],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2,
        }}
        className="absolute bottom-6 right-8 hidden lg:flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#F5D327]/20 to-[#0A2619]/60 border border-[#F5D327]/35 backdrop-blur-md opacity-60 shadow-[0_0_10px_rgba(245,211,39,0.2)]"
      >
        <span className="text-[9.5px] font-mono font-black text-[#F5D327]">
          AED
        </span>
      </motion.div>

      {/* 7. Volatility Wave Path in bottom perimeter (never cuts through text) */}
      <div className="absolute bottom-0 left-0 right-0 opacity-[0.04] overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1200 80"
          className="w-full h-16 stroke-[#00E676] fill-none stroke-[1.5]"
          preserveAspectRatio="none"
        >
          <path d="M0,40 Q150,15 300,40 T600,40 T900,25 T1200,40" />
        </svg>
      </div>

    </div>
  );
}
