import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  BrainCircuit,
  Landmark,
  FileText,
  ArrowRight
} from 'lucide-react';

/* ─── Bespoke Custom SVG Icons matching reference ─── */

function CurrencyExchangeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.8 9A2 2 0 0 0 13 8h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-1.8-1.2" />
      <path d="M12 6.5v1.5" />
      <path d="M12 16v1.5" />
      <path d="M8 5a8 8 0 0 1 12 5" />
      <path d="M16 19a8 8 0 0 1-12-5" />
    </svg>
  );
}

function RosetteClusterIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="2.3" fill="currentColor" />
      <circle cx="12" cy="6" r="2.1" fill="currentColor" />
      <circle cx="17.2" cy="9" r="2.1" fill="currentColor" />
      <circle cx="17.2" cy="15" r="2.1" fill="currentColor" />
      <circle cx="12" cy="18" r="2.1" fill="currentColor" />
      <circle cx="6.8" cy="15" r="2.1" fill="currentColor" />
      <circle cx="6.8" cy="9" r="2.1" fill="currentColor" />
    </svg>
  );
}

function OilBarrelIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <line x1="5" y1="8" x2="19" y2="8" />
      <line x1="5" y1="16" x2="19" y2="16" />
      <path d="M12 10.5a1.8 1.8 0 0 1 1.8 1.8c0 1-1.8 2.2-1.8 2.2s-1.8-1.2-1.8-2.2a1.8 1.8 0 0 1 1.8-1.8z" fill="currentColor" />
    </svg>
  );
}

function MoleculeBranchIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
      <circle cx="5" cy="7" r="1.8" fill="currentColor" />
      <circle cx="19" cy="7" r="1.8" fill="currentColor" />
      <circle cx="6" cy="18" r="1.8" fill="currentColor" />
      <circle cx="18" cy="18" r="1.8" fill="currentColor" />
      <line x1="7" y1="8" x2="10" y2="10.5" />
      <line x1="17" y1="8" x2="14" y2="10.5" />
      <line x1="8" y1="17" x2="10.5" y2="13.5" />
      <line x1="16" y1="17" x2="13.5" y2="13.5" />
    </svg>
  );
}

/* ─── 8 Bespoke Animated Financial Charts (Emerald & Gold Pattern) ─── */

/* 1. Foreign Exchange: Smooth wavy dashed line with soft gradient fill + pulsing endpoint dot */
function ForexChart() {
  return (
    <div className="relative h-14 w-full flex items-center">
      <svg className="w-full h-14 overflow-visible" viewBox="0 0 100 36">
        <defs>
          <linearGradient id="forexGradEmerald" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#00E676" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#00E676" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d="M0 26 Q 25 6, 50 18 T 100 8 L 100 36 L 0 36 Z" fill="url(#forexGradEmerald)" />
        <path className="dash-flow-fast" d="M0 26 Q 25 6, 50 18 T 100 8" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
        <circle fill="#00E676" r="3.5">
          <animateMotion dur="4s" path="M0 26 Q 25 6, 50 18 T 100 8" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

/* 2. Global Indices: Stepped-up zigzag dashed line with moving gold marker dot */
function IndicesChart() {
  return (
    <div className="relative h-14 w-full flex items-center">
      <svg className="w-full h-14 overflow-visible" viewBox="0 0 100 36">
        <path d="M0 28 L 22 22 L 45 26 L 68 12 L 85 16 L 100 4" fill="none" stroke="#1F5D3B" strokeDasharray="2 2" strokeWidth="1.5" />
        <path className="dash-flow" d="M0 28 L 22 22 L 45 26 L 68 12 L 85 16 L 100 4" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle fill="#F5D327" r="3.5">
          <animateMotion dur="3.5s" path="M0 28 L 22 22 L 45 26 L 68 12 L 85 16 L 100 4" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

/* 3. Cryptocurrencies: High volatility dashed path with glowing gold & emerald nodes */
function CryptoChart() {
  return (
    <div className="relative h-14 w-full flex items-center">
      <svg className="w-full h-14 overflow-visible" viewBox="0 0 100 36">
        <line className="dash-flow-fast" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" x1="5" x2="30" y1="20" y2="10" />
        <line className="dash-flow-fast" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" x1="30" x2="60" y1="10" y2="28" />
        <line className="dash-flow-fast" stroke="#F5D327" strokeWidth="2" strokeLinecap="round" x1="60" x2="95" y1="28" y2="8" />
        <line stroke="#1F5D3B" strokeDasharray="2 3" strokeWidth="1" x1="5" x2="60" y1="20" y2="28" />
        <circle cx="5" cy="20" fill="#00E676" r="3" />
        <circle className="pulse-node" cx="30" cy="10" fill="#00E676" r="3.5" />
        <circle cx="60" cy="28" fill="#00E676" r="3" />
        <circle className="pulse-node" cx="95" cy="8" fill="#F5D327" r="4" />
      </svg>
    </div>
  );
}

/* 4. Precious Metals: Dual harmonic continuous undulating wavy ribbon curves in Gold */
function MetalsChart() {
  return (
    <div className="relative h-14 w-full flex items-center">
      <svg className="w-full h-14 overflow-visible" viewBox="0 0 100 36">
        <path d="M 0 18 C 20 4, 35 32, 55 18 C 75 4, 85 30, 100 12" fill="none" stroke="#F5D327" strokeLinecap="round" strokeWidth="2.2" />
        <path d="M 0 22 C 20 10, 35 34, 55 22 C 75 10, 85 32, 100 16" fill="none" opacity="0.45" stroke="#D9A80D" strokeWidth="1" />
        <circle fill="#F5D327" r="3.5" stroke="#FFFFFF" strokeWidth="1.2">
          <animateMotion dur="5s" path="M 0 18 C 20 4, 35 32, 55 18 C 75 4, 85 30, 100 12" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

/* 5. Energy & Commodities: Parabolic bell arch curve with central peak marker dot */
function EnergyChart() {
  return (
    <div className="relative h-14 w-full flex items-center">
      <svg className="w-full h-14 overflow-visible" viewBox="0 0 100 36">
        <path className="dash-flow-fast" d="M0 24 C 20 28, 30 6, 50 14 C 70 22, 85 4, 100 10" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
        <circle fill="#F5D327" r="3.5">
          <animateMotion dur="4.2s" path="M0 24 C 20 28, 30 6, 50 14 C 70 22, 85 4, 100 10" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

/* 6. Global Equities: Vertical volume histogram bars with Center Golden Breakout */
function EquitiesChart() {
  return (
    <div className="relative h-14 w-full flex items-center">
      <svg className="w-full h-14 overflow-visible" viewBox="0 0 100 36">
        <g>
          {/* Bar 1 */}
          <rect height="18" rx="1.5" width="6" x="5" y="16" fill="#00E676" opacity="0.35">
            <animate attributeName="height" dur="2s" repeatCount="indefinite" values="18;8;22;18" />
            <animate attributeName="y" dur="2s" repeatCount="indefinite" values="16;26;12;16" />
          </rect>
          {/* Bar 2 */}
          <rect height="24" rx="1.5" width="6" x="18" y="10" fill="#00E676" opacity="0.5">
            <animate attributeName="height" dur="2.3s" repeatCount="indefinite" values="24;14;28;24" />
            <animate attributeName="y" dur="2.3s" repeatCount="indefinite" values="10;20;6;10" />
          </rect>
          {/* Bar 3 */}
          <rect height="14" rx="1.5" width="6" x="31" y="20" fill="#00E676" opacity="0.35">
            <animate attributeName="height" dur="1.8s" repeatCount="indefinite" values="14;24;10;14" />
            <animate attributeName="y" dur="1.8s" repeatCount="indefinite" values="20;10;24;20" />
          </rect>
          {/* Bar 4: Center Golden Breakout Bar */}
          <rect fill="#F5D327" height="28" rx="1.5" width="6" x="44" y="6">
            <animate attributeName="height" dur="2.5s" repeatCount="indefinite" values="28;18;32;28" />
            <animate attributeName="y" dur="2.5s" repeatCount="indefinite" values="6;16;2;6" />
          </rect>
          {/* Bar 5 */}
          <rect height="20" rx="1.5" width="6" x="57" y="14" fill="#00E676" opacity="0.45">
            <animate attributeName="height" dur="2.1s" repeatCount="indefinite" values="20;12;26;20" />
            <animate attributeName="y" dur="2.1s" repeatCount="indefinite" values="14;22;8;14" />
          </rect>
          {/* Bar 6: Neon Emerald Volume Spike */}
          <rect fill="#00E676" height="26" rx="1.5" width="6" x="70" y="8">
            <animate attributeName="height" dur="2.7s" repeatCount="indefinite" values="26;18;28;26" />
            <animate attributeName="y" dur="2.7s" repeatCount="indefinite" values="8;16;6;8" />
          </rect>
          {/* Bar 7 */}
          <rect height="16" rx="1.5" width="6" x="83" y="18" fill="#00E676" opacity="0.35">
            <animate attributeName="height" dur="1.9s" repeatCount="indefinite" values="16;26;12;16" />
            <animate attributeName="y" dur="1.9s" repeatCount="indefinite" values="18;8;22;18" />
          </rect>
        </g>
      </svg>
    </div>
  );
}

/* 7. Fixed Income: Upward ascending yield curve with trajectory line & gold marker */
function FixedIncomeChart() {
  return (
    <div className="relative h-14 w-full flex items-center">
      <svg className="w-full h-14 overflow-visible" viewBox="0 0 100 36">
        <path d="M0 28 C 30 24, 55 12, 100 8" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
        <path d="M0 24 C 30 18, 55 16, 100 14" fill="none" stroke="#1F5D3B" strokeDasharray="2 2" strokeWidth="1.2" />
        <circle fill="#F5D327" r="3.5">
          <animateMotion dur="3.8s" path="M0 28 C 30 24, 55 12, 100 8" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

/* 8. Structured Products: Bouncing sine wave over horizontal dashed BARRIER FLOOR baseline */
function StructuredChart() {
  return (
    <div className="relative h-14 w-full flex items-center">
      <svg className="w-full h-14 overflow-visible" viewBox="0 0 100 36">
        <line stroke="#D9A80D" strokeDasharray="3 3" strokeWidth="1.5" strokeLinecap="round" x1="0" x2="100" y1="30" y2="30" />
        <text fill="#F5D327" fontFamily="monospace" fontSize="6" fontWeight="bold" x="2" y="27">BARRIER FLOOR</text>
        <path className="dash-flow" d="M0 16 Q 25 2, 50 14 T 100 4" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
        <circle fill="#F5D327" r="3.5">
          <animateMotion dur="4.5s" path="M0 16 Q 25 2, 50 14 T 100 4" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

/* ─── 8 Market Definitions (Authentic Dubai Emerald & Gold Theme) ─── */

const markets = [
  {
    id: 'forex',
    title: 'Forex Trading',
    description: 'Major, minor and emerging currency pairs with competitive tight spreads.',
    icon: CurrencyExchangeIcon,
    chart: ForexChart,
    leftMetric: 'EUR/USD • USD/JPY',
    rightMetric: 'Live Feed',
    rightStyle: 'text-[#00E676]'
  },
  {
    id: 'metals',
    title: 'Gold & Silver',
    description: 'Spot and futures bullion pricing with transparent market spreads.',
    icon: RosetteClusterIcon,
    chart: MetalsChart,
    leftMetric: 'XAU/USD • XAG/USD',
    rightMetric: 'Spot & Futures',
    rightStyle: 'text-[#F5D327]'
  },
  {
    id: 'energy',
    title: 'Energy & Commodities',
    description: 'Crude oil, natural gas, agricultural and industrial commodity benchmarks.',
    icon: OilBarrelIcon,
    chart: EnergyChart,
    leftMetric: 'Brent • WTI • Gas',
    rightMetric: 'Real-Time',
    rightStyle: 'text-[#00E676]'
  },
  {
    id: 'indices',
    title: 'Global Indices',
    description: 'Access to leading global equity benchmarks and regional bourses.',
    icon: TrendingUp,
    chart: IndicesChart,
    leftMetric: 'S&P 500 • NASDAQ',
    rightMetric: 'Global Feeds',
    rightStyle: 'text-[#F5D327]'
  },
  {
    id: 'crypto',
    title: 'Cryptocurrency',
    description: 'Major digital assets and token trading via deep liquidity providers.',
    icon: BrainCircuit,
    chart: CryptoChart,
    leftMetric: 'BTC • ETH • Majors',
    rightMetric: '24/7 Liquidity',
    rightStyle: 'text-[#00E676]'
  },
  {
    id: 'futures',
    title: 'Futures & Options',
    description: 'Exchange-traded derivative contracts for hedging and risk management.',
    icon: Landmark,
    chart: EquitiesChart,
    leftMetric: 'Multi-Exchange',
    rightMetric: 'Order Routing',
    rightStyle: 'text-[#F5D327]'
  },
  {
    id: 'analysis',
    title: 'Market Analysis & Education',
    description: 'Technical, macroeconomic, and quantitative research to support informed execution.',
    icon: FileText,
    chart: FixedIncomeChart,
    leftMetric: 'Daily Intelligence',
    rightMetric: 'Educational',
    rightStyle: 'text-[#00E676]'
  },
  {
    id: 'consulting',
    title: 'Stock Market Consulting',
    description: 'Strategic portfolio discussions and market structuring across equities.',
    icon: MoleculeBranchIcon,
    chart: StructuredChart,
    leftMetric: 'Bespoke Advisory',
    rightMetric: 'Custom Review',
    rightStyle: 'text-[#F5D327]'
  }
];

export default function Markets() {
  return (
    <section className="relative py-10 sm:py-14 2xl:py-20 bg-transparent px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 w-full" id="markets">
      {/* Soft Ambient Radial Accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,230,118,0.12)_0%,transparent_70%)] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 sm:mb-8 2xl:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl 2xl:max-w-3xl text-left"
          >
            <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-2 block">
              Global Markets &amp; Trading Services
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl md:text-[2.6rem] 2xl:text-[3.2rem] font-bold text-white leading-tight mb-2.5">
              Explore the Opportunities.
            </h2>
            <p className="font-body text-[#BCE2CD] font-normal text-sm md:text-base 2xl:text-lg leading-relaxed">
              Explore market analysis and structured services across supported global asset classes.
            </p>
          </motion.div>
        </div>

        {/* 8 Transparent Emerald Glass Finish Market Cards Grid with Bespoke Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
          {markets.map((item, index) => {
            const Icon = item.icon;
            const Chart = item.chart;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl p-5 sm:p-6 rounded-2xl flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_36px_rgba(10,38,25,0.22)] border border-[#287348]/55 group hover:border-[#00E676]/75 transition-all hover:shadow-[0_16px_44px_rgba(0,230,118,0.26)] hover:from-[#0F3524]/85 hover:via-[#0A2619]/90 hover:to-[#123E2A]/80"
              >
                <div>
                  {/* Card Icon */}
                  <div className="mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#14422B]/90 border border-[#2E7A4E]/60 flex items-center justify-center text-[#00E676] group-hover:bg-[#00E676] group-hover:text-[#0A2619] transition-all shadow-[0_0_12px_rgba(0,230,118,0.25)]">
                      <Icon className="w-4.5 h-4.5 stroke-[1.9]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-headline text-lg sm:text-xl font-semibold text-[#FFFFFF] mb-1.5 group-hover:text-[#F5D327] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-[#BCE2CD] leading-relaxed mb-4 min-h-[34px]">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Animated Bespoke Financial Chart */}
                  <div className="my-1">
                    <Chart />
                  </div>

                  {/* Card Footer Metrics */}
                  <div className="flex flex-wrap justify-between items-center gap-1.5 text-[10px] font-mono text-[#A8D3BA] mt-3 border-t border-[#25633F]/50 pt-2.5">
                    <span className="font-semibold text-[#FFFFFF]">{item.leftMetric}</span>
                    <span className={`font-semibold ${item.rightStyle}`}>
                      {item.rightMetric}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
