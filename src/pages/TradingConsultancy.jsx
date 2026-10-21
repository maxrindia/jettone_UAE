import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  LineChart,
  ShieldAlert,
  BookOpen,
  ArrowRight,
  AlertCircle,
  Activity,
  Layers,
  Sparkles,
  BarChart2,
  Lock,
  CheckCircle2,
  Clock
} from 'lucide-react';
import SEO from '../components/SEO';
import ContactCtaStrip from '../components/ContactCtaStrip';

const consultancyAreas = [
  {
    heading: 'Market Analysis',
    tag: 'MACRO & TECHNICAL',
    description:
      'Rigorous quantitative, technical, and macroeconomic research evaluating liquidity dynamics across global equities, foreign exchange, bullion, and commodities.',
    visual: (
      <div className="relative w-full h-36 bg-[#06180F]/90 rounded-xl border border-[#1E4D34] p-3 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#88A896]">
          <span>Multi-Timeframe Structure</span>
          <span className="text-[#00E676] font-semibold">Bullish Bias (H4/D1)</span>
        </div>
        {/* Animated Candlestick Chart Simulation */}
        <div className="flex items-end justify-between h-16 px-2 pt-2">
          {[
            { open: 30, close: 45, high: 52, low: 25, bull: true },
            { open: 44, close: 38, high: 48, low: 32, bull: false },
            { open: 39, close: 54, high: 58, low: 35, bull: true },
            { open: 53, close: 49, high: 56, low: 45, bull: false },
            { open: 50, close: 64, high: 68, low: 46, bull: true },
            { open: 63, close: 72, high: 75, low: 58, bull: true },
            { open: 71, close: 66, high: 74, low: 62, bull: false },
            { open: 67, close: 82, high: 86, low: 64, bull: true }
          ].map((bar, i) => (
            <div key={i} className="flex flex-col items-center w-2.5 h-full justify-end">
              <div
                className={`w-[1px] ${bar.bull ? 'bg-[#00E676]' : 'bg-[#EF4444]'}`}
                style={{ height: `${bar.high - bar.low}%` }}
              />
              <div
                className={`w-full rounded-sm ${bar.bull ? 'bg-[#00E676]' : 'bg-[#EF4444]'}`}
                style={{ height: `${Math.max(4, Math.abs(bar.close - bar.open))}%` }}
              />
            </div>
          ))}
        </div>
        <div className="text-[9.5px] font-mono text-[#A8D3BA] flex items-center justify-between pt-1 border-t border-[#1E4D34]/60">
          <span>RSI(14): 58.4</span>
          <span className="text-[#F5D327]">EMA 20/50 Golden Cross</span>
        </div>
      </div>
    )
  },
  {
    heading: 'Trading Strategy Review',
    tag: 'EXECUTION ARCHITECTURE',
    description:
      'Independent structural evaluation of existing trading frameworks, assessing execution methodology, order routing discipline, and slippage mitigation.',
    visual: (
      <div className="relative w-full h-36 bg-[#06180F]/90 rounded-xl border border-[#1E4D34] p-3 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#88A896]">
          <span>Order Pipeline Telemetry</span>
          <span className="text-[#38BDF8] font-semibold">Sub-10ms Routing</span>
        </div>
        <div className="space-y-2 my-1 font-mono text-[9.5px]">
          <div className="flex items-center justify-between">
            <span className="text-[#BCE2CD]">Signal Detection</span>
            <span className="text-white font-bold">1.2ms</span>
          </div>
          <div className="w-full h-1.5 bg-[#0F3524] rounded-full overflow-hidden">
            <div className="h-full bg-[#38BDF8] rounded-full w-[95%]" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#BCE2CD]">Execution Fill Rate</span>
            <span className="text-[#00E676] font-bold">99.82%</span>
          </div>
          <div className="w-full h-1.5 bg-[#0F3524] rounded-full overflow-hidden">
            <div className="h-full bg-[#00E676] rounded-full w-[99%]" />
          </div>
        </div>
        <div className="text-[9.5px] font-mono text-[#A8D3BA] flex items-center justify-between pt-1 border-t border-[#1E4D34]/60">
          <span>Slippage: &lt;0.4 pips</span>
          <span className="text-[#F5D327]">Order Bracket Validated</span>
        </div>
      </div>
    )
  },
  {
    heading: 'Risk & Portfolio Discussion',
    tag: 'STRESS-TESTING & VAR',
    description:
      'In-depth consultations on scenario stress-testing, drawdown management protocols, position sizing matrices, and cross-asset correlation shocks.',
    visual: (
      <div className="relative w-full h-36 bg-[#06180F]/90 rounded-xl border border-[#1E4D34] p-3 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#88A896]">
          <span>VaR &amp; Scenario Shock</span>
          <span className="text-[#F5D327] font-semibold">99% Confidence</span>
        </div>
        <svg viewBox="0 0 280 60" className="w-full h-16 overflow-visible my-1">
          <defs>
            <linearGradient id="varGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="normalGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00E676" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00E676" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          {/* Bell curve distribution */}
          <path d="M 0 55 Q 60 55, 90 40 T 140 10 T 190 40 Q 220 55, 280 55" fill="none" stroke="#25633F" strokeWidth="1.5" />
          <path d="M 0 55 Q 60 55, 90 40 L 90 60 L 0 60 Z" fill="url(#varGrad)" />
          <line x1="90" y1="0" x2="90" y2="60" stroke="#EF4444" strokeDasharray="2 2" strokeWidth="1.5" />
          <text x="96" y="22" fill="#EF4444" fontSize="8" fontFamily="monospace">VaR -3.2%</text>
        </svg>
        <div className="text-[9.5px] font-mono text-[#A8D3BA] flex items-center justify-between pt-1 border-t border-[#1E4D34]/60">
          <span>Correlation Shock Cap: -4.5%</span>
          <span className="text-[#00E676]">Circuit Breaker Ready</span>
        </div>
      </div>
    )
  },
  {
    heading: 'Educational Resources & Playbooks',
    tag: 'ANALYTICAL FRAMEWORKS',
    description:
      'Curated professional methodologies, strategy whitepapers, backtesting best practices, and systematic frameworks for market practitioners.',
    visual: (
      <div className="relative w-full h-36 bg-[#06180F]/90 rounded-xl border border-[#1E4D34] p-3 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#88A896]">
          <span>Curriculum Modules</span>
          <span className="text-[#F5D327] font-semibold">Structured Syllabus</span>
        </div>
        <div className="space-y-1.5 my-1 font-mono text-[9.5px]">
          <div className="p-1.5 rounded-lg bg-[#0F3524]/70 border border-[#1E4D34] flex items-center justify-between">
            <span className="text-white">1. Walk-Forward Testing Methodologies</span>
            <span className="text-[#00E676]">Completed</span>
          </div>
          <div className="p-1.5 rounded-lg bg-[#0F3524]/70 border border-[#1E4D34] flex items-center justify-between">
            <span className="text-white">2. Liquidity Microstructure Analysis</span>
            <span className="text-[#F5D327]">Active</span>
          </div>
        </div>
        <div className="text-[9.5px] font-mono text-[#A8D3BA] flex items-center justify-between pt-1 border-t border-[#1E4D34]/60">
          <span>Whitepapers &amp; Case Studies</span>
          <span className="text-[#38BDF8]">Direct Desk Support</span>
        </div>
      </div>
    )
  }
];

export default function TradingConsultancy() {
  return (
    <>
      <SEO
        title="Trading Consultancy & Market Analysis | JETTONE Dubai"
        description="Market insights, trading consultancy and educational resources across global asset classes — JETTONE, Dubai, UAE."
        path="/services/consultancy"
      />

      {/* Hero Section with Split Visual Preview */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>TRADING CONSULTANCY &amp; ANALYSIS</span>
            </div>

            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
              Informed Decisions.
              <span className="text-[#38BDF8] block mt-1">Clearer Markets.</span>
            </h1>

            <p className="font-body text-[#BCE2CD] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Professional market perspectives, algorithmic framework evaluation, and tailored risk discussions across global asset classes from our Dubai research desk.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link
                to="/contact"
                className="relative overflow-hidden group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10 font-bold">Schedule a Consultation Session</span>
                <ArrowRight className="w-4 h-4 relative z-10 stroke-[2.5]" />
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Graphic: Live Research Desk Monitor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#0F3524]/90 via-[#0A2619]/90 to-[#123E2A]/85 border border-[#287348]/60 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#25633F]/50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Research Desk Radar
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#38BDF8] px-2 py-0.5 rounded bg-[#38BDF8]/15 border border-[#38BDF8]/30">
                  Daily Briefing Active
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34] flex items-center justify-between">
                  <span className="text-[#A8D3BA]">Primary Focus</span>
                  <span className="text-white font-bold">Macro &amp; Systematic Vol</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34] flex items-center justify-between">
                  <span className="text-[#A8D3BA]">Execution Review</span>
                  <span className="text-[#00E676] font-bold">Latency &amp; Slippage Audits</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34] flex items-center justify-between">
                  <span className="text-[#A8D3BA]">Risk Modeling</span>
                  <span className="text-[#F5D327] font-bold">Stress-Test Scenarios</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34] flex items-center justify-between">
                  <span className="text-[#A8D3BA]">Desk Hub</span>
                  <span className="text-[#38BDF8] font-bold">Dubai, UAE</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#25633F]/50 flex items-center gap-2 text-[11px] text-[#A8D3BA]">
                <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Tailored analytical frameworks for strategic participants</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 1. Consultancy Areas (4 Cards with Dedicated Visual Modules) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#38BDF8] block mb-2 font-mono">
            AREAS OF EXPERTISE
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            Consultancy Areas
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#BCE2CD] mt-2 max-w-xl">
            Our advisory capabilities encompass quantitative strategy diagnostics, scenario stress testing, and structured market analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {consultancyAreas.map((area, index) => (
            <motion.div
              key={area.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0F3524]/85 via-[#0A2619]/90 to-[#123E2A]/80 backdrop-blur-2xl p-5 sm:p-6 rounded-2xl border border-[#287348]/55 shadow-lg flex flex-col justify-between group hover:border-[#38BDF8]/70 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    {area.heading}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-[#38BDF8] px-2.5 py-0.5 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/30">
                    {area.tag}
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed mb-4">
                  {area.description}
                </p>

                {/* Embedded Rich Visual Animation/Chart */}
                <div className="mb-2">
                  {area.visual}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Educational & Consultancy Notice */}
      <section className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="rounded-xl bg-[#092217]/90 border border-[#225838] border-l-4 border-l-[#38BDF8] p-5 sm:p-6 backdrop-blur-md shadow-md">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#38BDF8] tracking-wider mb-1">
                Consultancy &amp; Educational Notice
              </h4>
              <p className="text-xs sm:text-sm text-[#D1E7DC] leading-relaxed">
                Information provided is for educational and informational purposes only and does not constitute financial advice, investment recommendations, or an invitation to trade. All trading involves capital risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Edge-to-Edge CTA Strip */}
      <ContactCtaStrip
        title="Schedule a Trading Consultancy Session"
        subtext="Speak with JETTONE’s research and analysis specialists to discuss your trading objectives."
        ctaText="Schedule Discussion →"
        ctaLink="/contact"
      />
    </>
  );
}
