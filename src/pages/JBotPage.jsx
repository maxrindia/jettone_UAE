import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sliders,
  History,
  Zap,
  Network,
  Activity,
  Code2,
  CheckCircle2,
  Rocket,
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  BarChart3,
  Check,
  TrendingUp,
  Lock
} from 'lucide-react';
import SEO from '../components/SEO';
import ContactCtaStrip from '../components/ContactCtaStrip';

const strategyPresets = {
  trend: {
    name: 'Multi-Timeframe Trend Following',
    asset: 'XAU/USD & EUR/USD',
    winRate: '78.4%',
    profitFactor: '2.92',
    drawdown: '-3.8%',
    sharpe: '2.84',
    latency: '8.2ms',
    dataPoints: [
      { x: 0, y: 100 },
      { x: 15, y: 108 },
      { x: 30, y: 114 },
      { x: 45, y: 112 },
      { x: 60, y: 124 },
      { x: 75, y: 132 },
      { x: 90, y: 129 },
      { x: 100, y: 142 }
    ]
  },
  meanReversion: {
    name: 'Statistical Mean Reversion',
    asset: 'S&P 500 & NASDAQ 100',
    winRate: '82.1%',
    profitFactor: '3.15',
    drawdown: '-2.9%',
    sharpe: '3.10',
    latency: '6.9ms',
    dataPoints: [
      { x: 0, y: 100 },
      { x: 15, y: 106 },
      { x: 30, y: 112 },
      { x: 45, y: 119 },
      { x: 60, y: 122 },
      { x: 75, y: 136 },
      { x: 90, y: 144 },
      { x: 100, y: 156 }
    ]
  },
  breakout: {
    name: 'Volatility Regime Breakout',
    asset: 'WTI Crude & Major FX',
    winRate: '74.6%',
    profitFactor: '2.78',
    drawdown: '-4.2%',
    sharpe: '2.65',
    latency: '9.1ms',
    dataPoints: [
      { x: 0, y: 100 },
      { x: 15, y: 104 },
      { x: 30, y: 118 },
      { x: 45, y: 115 },
      { x: 60, y: 128 },
      { x: 75, y: 125 },
      { x: 90, y: 138 },
      { x: 100, y: 148 }
    ]
  }
};

const architecturalPillars = [
  {
    icon: Sliders,
    badge: 'LOGIC ENGINE',
    title: 'Visual Strategy Formulation',
    description:
      'Formulate rule-based and condition-driven models using multi-factor technical indicators, volume profiles, and momentum filters without writing raw code.',
    highlight: '500+ Built-in Technical Indicators & Boolean Triggers'
  },
  {
    icon: History,
    badge: 'HISTORICAL LAB',
    title: 'Exhaustive Tick Backtester',
    description:
      'Replay algorithmic parameters against multi-year high-frequency tick data with realistic slippage modeling, spread widening, and commission structures.',
    highlight: 'Millisecond Replay Resolution Across Multi-Asset Feeds'
  },
  {
    icon: Network,
    badge: 'CONNECTIVITY',
    title: 'Non-Custodial Broker Gateway',
    description:
      'Zero custody of client funds. Orders route straight to supported, regulated broker accounts through high-security encrypted REST and WebSocket API keys.',
    highlight: 'Zero Fund Holding · 100% Capital Autonomy'
  },
  {
    icon: ShieldCheck,
    badge: 'RISK SENTINEL',
    title: 'Automated Risk & Circuit Breakers',
    description:
      'Continuous telemetry supervision enforces strict position sizing rules, daily maximum loss limits, trailing profit locks, and instantaneous emergency stop commands.',
    highlight: 'Hardware-Monitored Drawdown Guards & Telemetry Locks'
  }
];

const workflowSteps = [
  {
    step: '01',
    icon: Code2,
    title: 'Design Logic',
    description:
      'Select condition triggers, indicators, and bracket parameters visually in the intuitive interface.'
  },
  {
    step: '02',
    icon: CheckCircle2,
    title: 'Backtest & Refine',
    description:
      'Validate your model over historical regimes, stress-test volatility spikes, and eliminate curve-fitting.'
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Connect & Supervise',
    description:
      'Link your broker API keys and activate automated execution under live risk guard telemetry.'
  }
];

export default function JBotPage() {
  const [activeStrategyKey, setActiveStrategyKey] = useState('trend');
  const activeStrat = strategyPresets[activeStrategyKey];

  // SVG Path calculation for the live equity curve
  const points = activeStrat.dataPoints;
  const pathD = points.reduce((acc, pt, i) => {
    const x = (pt.x / 100) * 480;
    const y = 140 - ((pt.y - 95) / 65) * 110;
    return i === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  const areaD = `${pathD} L 480 150 L 0 150 Z`;

  return (
    <>
      <SEO
        title="JBot Quantitative Platform | JETTONE Dubai"
        description="JBot by JETTONE is an algorithmic trading software platform for strategy formulation, tick backtesting, and automated execution via secure broker APIs."
        path="/services/jbot"
      />

      {/* Hero Section with Split Visual Preview */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Concise & Precise Information */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>JBOT QUANTITATIVE PLATFORM</span>
            </div>

            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
              Algorithmic Intelligence.
              <span className="text-[#F5D327] block mt-1">Non-Custodial Execution.</span>
            </h1>

            <p className="font-body text-[#BCE2CD] text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              <strong className="text-white font-semibold">JBot by JETTONE</strong> is a high-performance algorithmic trading technology platform engineered for strategy formulation, tick backtesting, and systematic order execution.
            </p>

            <div className="space-y-2 mb-8 text-xs sm:text-sm text-[#D1E7DC] max-w-xl">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#00E676] shrink-0" />
                <span><strong className="text-white">Zero Fund Custody:</strong> Your capital remains 100% inside your secure, regulated broker account.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#00E676] shrink-0" />
                <span><strong className="text-white">API-Driven Routing:</strong> Connects securely via encrypted REST and WebSocket broker protocols.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#00E676] shrink-0" />
                <span><strong className="text-white">Rule Automation:</strong> Systematic triggers eliminate latency and emotional discretion.</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="relative overflow-hidden group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)] flex items-center justify-center gap-2"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                  <span className="relative z-10 font-bold">Request Platform Walkthrough</span>
                  <ArrowRight className="w-4 h-4 relative z-10 stroke-[2.5]" />
                </Link>
              </motion.div>

              <a
                href="#interactive-studio"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#0D2018]/90 text-white font-body text-sm font-semibold rounded-xl hover:bg-[#142C21] transition-all flex items-center justify-center border border-[#1E4532] text-center"
              >
                <span>Interactive Studio Demo ↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Quantitative Telemetry Dashboard Graphic */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-[#0F3524]/95 via-[#0A2619]/95 to-[#123E2A]/90 border border-[#287348]/60 shadow-2xl backdrop-blur-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#25633F]/50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    JBot Core Telemetry
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00E676] px-2 py-0.5 rounded bg-[#00E676]/15 border border-[#00E676]/30">
                  LATENCY: {activeStrat.latency}
                </span>
              </div>

              {/* Status Metric Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-4 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
                  <span className="text-[#88A896] text-[10.5px] block">Active Strategy</span>
                  <span className="text-white font-bold text-xs mt-0.5 block truncate">
                    {activeStrat.name}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
                  <span className="text-[#88A896] text-[10.5px] block">Target Sharpe</span>
                  <span className="text-[#F5D327] font-bold text-xs mt-0.5 block">
                    {activeStrat.sharpe} (Tier-1)
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
                  <span className="text-[#88A896] text-[10.5px] block">Profit Factor</span>
                  <span className="text-[#00E676] font-bold text-xs mt-0.5 block">
                    {activeStrat.profitFactor}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
                  <span className="text-[#88A896] text-[10.5px] block">Drawdown Cap</span>
                  <span className="text-[#38BDF8] font-bold text-xs mt-0.5 block">
                    {activeStrat.drawdown} Guard
                  </span>
                </div>
              </div>

              {/* Mini SVG Curve Preview */}
              <div className="p-3 rounded-xl bg-[#06180F]/90 border border-[#1E4D34]/80 mb-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#88A896] mb-1.5">
                  <span>Simulated Cumulative Alpha</span>
                  <span className="text-[#00E676] font-bold">+42.0%</span>
                </div>
                <svg viewBox="0 0 480 150" className="w-full h-20 overflow-visible">
                  <defs>
                    <linearGradient id="heroCurveGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00E676" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#00E676" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d={areaD} fill="url(#heroCurveGrad)" />
                  <path d={pathD} fill="none" stroke="#00E676" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              <div className="pt-2 border-t border-[#25633F]/50 flex items-center justify-between text-[11px] text-[#A8D3BA]">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#F5D327]" />
                  <span>Non-Custodial Architecture</span>
                </div>
                <span className="font-mono text-[#00E676] font-semibold">Active Guard</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 1. Core Architectural Pillars (4 Cards with Visual Accent) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] block mb-2 font-mono">
            ARCHITECTURAL FOUNDATION
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            How JBot Powers Algorithmic Trading
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#BCE2CD] mt-2 max-w-xl">
            A comprehensive quantitative software stack combining visual formulation, deep tick historical replay, and zero-custody broker execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {architecturalPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0F3524]/85 via-[#0A2619]/90 to-[#123E2A]/80 backdrop-blur-2xl p-6 sm:p-7 rounded-2xl border border-[#287348]/55 shadow-lg flex flex-col justify-between group hover:border-[#00E676]/70 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#F5D327] shadow-sm">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-[#00E676] px-2.5 py-0.5 rounded-full bg-[#00E676]/15 border border-[#00E676]/30">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-headline text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-[#F5D327] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#25633F]/40 flex items-center gap-2 text-[11px] font-mono text-[#F5D77F]">
                  <Check className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                  <span>{pillar.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. Interactive Strategy Performance Studio (Live Simulation Chart) */}
      <section id="interactive-studio" className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#00E676] block mb-2 font-mono">
            QUANTITATIVE SIMULATION STUDIO
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            Strategy Telemetry &amp; Backtest Studio
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#BCE2CD] mt-2">
            Switch between algorithmic archetypes to evaluate simulated historical return curves, risk metrics, and execution speeds.
          </p>
        </div>

        {/* Strategy Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          {Object.entries(strategyPresets).map(([key, strat]) => {
            const isActive = activeStrategyKey === key;
            return (
              <button
                key={key}
                onClick={() => setActiveStrategyKey(key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isActive
                    ? 'bg-[#F5D327] text-[#0B1528] border-[#F5D327] shadow-[0_0_16px_rgba(245,211,39,0.4)]'
                    : 'bg-[#0D261A]/80 text-[#BCE2CD] border-[#25633F]/60 hover:border-[#00E676]/60 hover:text-white'
                }`}
              >
                {strat.name}
              </button>
            );
          })}
        </div>

        {/* Main Studio Panel */}
        <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-[#0F3524]/90 via-[#0A2619]/95 to-[#123E2A]/90 border border-[#287348]/60 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#25633F]/50 gap-3">
            <div>
              <span className="text-[11px] font-mono text-[#00E676] uppercase tracking-wider block">
                Target Asset Universe: {activeStrat.asset}
              </span>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-white mt-0.5">
                {activeStrat.name}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#A8D3BA] px-3 py-1 rounded bg-[#06180F]/90 border border-[#1E4D34]">
                Tick Latency: <strong className="text-[#00E676]">{activeStrat.latency}</strong>
              </span>
            </div>
          </div>

          {/* Interactive Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 font-mono">
            <div className="p-3.5 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
              <span className="text-[#88A896] text-[11px] block">Simulated Win Rate</span>
              <span className="text-lg sm:text-xl font-bold text-white mt-1 block">
                {activeStrat.winRate}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
              <span className="text-[#88A896] text-[11px] block">Profit Factor</span>
              <span className="text-lg sm:text-xl font-bold text-[#00E676] mt-1 block">
                {activeStrat.profitFactor}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
              <span className="text-[#88A896] text-[11px] block">Sharpe Ratio</span>
              <span className="text-lg sm:text-xl font-bold text-[#F5D327] mt-1 block">
                {activeStrat.sharpe}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
              <span className="text-[#88A896] text-[11px] block">Max Drawdown Guard</span>
              <span className="text-lg sm:text-xl font-bold text-[#38BDF8] mt-1 block">
                {activeStrat.drawdown}
              </span>
            </div>
          </div>

          {/* Dynamic SVG Visual Equity Curve */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#06180F]/90 border border-[#1E4D34]">
            <div className="flex items-center justify-between text-xs font-mono text-[#88A896] mb-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00E676]" />
                Simulated Equity Curve (Tick-Level Walk-Forward)
              </span>
              <span className="text-[#F5D327]">Normalized Index (Base: 100.0)</span>
            </div>

            <svg viewBox="0 0 480 150" className="w-full h-36 sm:h-48 overflow-visible">
              <defs>
                <linearGradient id="studioCurveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00E676" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00E676" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="37" x2="480" y2="37" stroke="#1E4D34" strokeDasharray="3 3" strokeWidth="0.8" />
              <line x1="0" y1="75" x2="480" y2="75" stroke="#1E4D34" strokeDasharray="3 3" strokeWidth="0.8" />
              <line x1="0" y1="112" x2="480" y2="112" stroke="#1E4D34" strokeDasharray="3 3" strokeWidth="0.8" />
              
              <path d={areaD} fill="url(#studioCurveGrad)" />
              <path d={pathD} fill="none" stroke="#00E676" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* 3. Workflow Progression (Build → Test → Deploy) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] block mb-2 font-mono">
            STRUCTURED DEPLOYMENT
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            Three Steps From Idea to Execution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {workflowSteps.map((flow, index) => {
            const Icon = flow.icon;
            return (
              <motion.div
                key={flow.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0F3524]/85 via-[#0A2619]/90 to-[#123E2A]/80 backdrop-blur-2xl p-6 sm:p-7 rounded-2xl border border-[#287348]/55 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#00E676]">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-lg font-mono font-bold text-[#F5D327]">
                      {flow.step}
                    </span>
                  </div>
                  <h3 className="font-headline text-lg sm:text-xl font-semibold text-white mb-2">
                    {flow.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed">
                    {flow.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Technology Platform Notice */}
      <section className="relative py-6 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full mb-8">
        <div className="rounded-xl bg-[#092217]/90 border border-[#225838] border-l-4 border-l-[#F5D327] p-5 backdrop-blur-md shadow-md">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-[#F5D327] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#F5D327] tracking-wider mb-1">
                Technology Platform Disclosure
              </h4>
              <p className="text-xs sm:text-sm text-[#D1E7DC] leading-relaxed">
                JBot is a proprietary quantitative software technology platform developed by JETTONE. JBot is not a broker, custodian, or financial asset holder. JBot does not take deposits or custody client funds. All order routing occurs directly inside client accounts with third-party verified brokers. Simulated historical performance does not guarantee future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Edge-to-Edge Connect With Us CTA Strip */}
      <ContactCtaStrip
        title="Interested in JBot Algorithmic Technology?"
        subtext="Schedule an in-depth platform walkthrough and technical consultation with our quantitative engineering team."
        ctaText="Request Walkthrough →"
        ctaLink="/contact"
      />
    </>
  );
}
