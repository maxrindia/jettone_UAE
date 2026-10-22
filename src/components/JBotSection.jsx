import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Activity,
  Sliders,
  History,
  ShieldCheck,
  CheckCircle2,
  X,
  Zap,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const quantTabs = [
  {
    id: 'strategy',
    label: 'Strategy Builder',
    title: 'Custom Multi-Factor Strategy Engine',
    subtitle: 'Deploy no-code rulebooks with 500+ quantitative parameters',
    pnl: '+42.6% PnL',
    metrics: [
      { label: 'Win Rate', value: 'Varies by strategy' },
      { label: 'Profit Factor', value: 'Strategy dependent' },
      { label: 'Max Drawdown', value: 'Configurable' },
      { label: 'Sizing Mode', value: 'Automated Dynamic', highlight: true }
    ],
    buySignals: '142',
    targetExits: '136',
    latency: '<0.8ms',
    chartPath: 'M 0 100 Q 50 80, 100 85 T 200 60 T 300 40 T 400 15',
    nodes: [
      { cx: 90, cy: 70, fill: '#00E676' },
      { cx: 180, cy: 55, fill: '#00E676' },
      { cx: 280, cy: 35, fill: '#F5D327' },
      { cx: 395, cy: 15, fill: '#00E676', pulse: true }
    ]
  },
  {
    id: 'backtest',
    label: 'Backtesting Studio',
    title: 'Multi-Year Historical Tick Simulator',
    subtitle: 'Exhaustive walk-forward evaluation across Equity, Futures & Options',
    pnl: '+156.4% Total',
    metrics: [
      { label: 'Data Range', value: '3+ Years' },
      { label: 'Segments', value: 'Equity, F&O' },
      { label: 'Test Mode', value: 'Walk-Forward' },
      { label: 'Sizing Mode', value: 'Fractional Fixed', highlight: true }
    ],
    buySignals: '284',
    targetExits: '276',
    latency: '<0.8ms',
    chartPath: 'M 0 105 Q 40 95, 90 70 T 180 55 T 280 30 T 400 10',
    nodes: [
      { cx: 90, cy: 70, fill: '#00E676' },
      { cx: 180, cy: 55, fill: '#00E676' },
      { cx: 280, cy: 30, fill: '#F5D327' },
      { cx: 395, cy: 10, fill: '#00E676', pulse: true }
    ]
  },
  {
    id: 'paper',
    label: 'Paper Trading Mode',
    title: 'Real-Time Sandbox Forward Testing',
    subtitle: 'Simulate live order book liquidity without capital exposure',
    pnl: '+12.8% 30D',
    metrics: [
      { label: 'Mode', value: 'Live Market' },
      { label: 'Capital', value: 'Virtual Only' },
      { label: 'Real Risk', value: 'Zero' },
      { label: 'Sizing Mode', value: 'Dynamic Cap', highlight: true }
    ],
    buySignals: '96',
    targetExits: '92',
    latency: '<0.8ms',
    chartPath: 'M 0 95 Q 60 90, 120 75 T 220 50 T 310 35 T 400 20',
    nodes: [
      { cx: 120, cy: 75, fill: '#00E676' },
      { cx: 220, cy: 50, fill: '#00E676' },
      { cx: 310, cy: 35, fill: '#F5D327' },
      { cx: 395, cy: 20, fill: '#00E676', pulse: true }
    ]
  }
];

export default function JBotSection() {
  const [viewMode, setViewMode] = useState('mobile'); // 'mobile' or 'terminal'
  const [activeQuantTab, setActiveQuantTab] = useState('strategy');
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const currentQuant =
    quantTabs.find((t) => t.id === activeQuantTab) || quantTabs[0];

  return (
    <section className="relative py-10 sm:py-14 2xl:py-20 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full" id="jbot">
      {/* 2-Column Grid with Perfect Vertical Alignment */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-16 items-center">
        
        {/* Left Column: Official Content & Feature List */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          {/* Eyebrow Tag */}
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-2.5 block">
            JBot Technology
          </span>

          {/* Heading */}
          <h2 className="font-headline text-3xl sm:text-4xl md:text-[2.6rem] 2xl:text-[3.2rem] font-bold text-white mb-4 2xl:mb-6 leading-tight">
            From Strategy to Automation.
          </h2>

          {/* Subtitle */}
          <p className="font-body text-[#BCE2CD] leading-relaxed mb-6 text-sm md:text-base">
            Explore JBot, JETTONE’s algorithmic trading technology platform, with supported tools for strategy building, backtesting and systematic trading workflows.
          </p>

          {/* Key Value Highlights with Matching Emerald & Gold Color Pattern */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#00E676] shrink-0 mt-0.5 shadow-sm">
                <Sliders className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-headline text-lg font-semibold text-white">
                  No-Code Strategy Builder
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#BCE2CD] mt-0.5">
                  Build multi-condition triggers with indicator suites, volume profiles, and candlestick pattern recognition. 500+ parameters. No coding required.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#00E676] shrink-0 mt-0.5 shadow-sm">
                <History className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-headline text-lg font-semibold text-white">
                  Exhaustive Tick Backtesting
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#BCE2CD] mt-0.5">
                  Validate historical performance against multi-year high-frequency tick data with slippage simulation. Covers equity, futures &amp; options.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#00E676] shrink-0 mt-0.5 shadow-sm">
                <ShieldCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-headline text-lg font-semibold text-white">
                  Capital Autonomy &amp; Safe API Links
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#BCE2CD] mt-0.5">
                  Direct connection with verified brokers — your funds remain strictly inside your secure broker trading accounts. Zero fund handling by JETTONE.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full">
            {/* Explore JBot links to dedicated /services/jbot page */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                to="/services/jbot"
                className="relative overflow-hidden group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)] flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Explore JBot</span>
                <Activity className="w-4 h-4 relative z-10 stroke-[2.5]" />
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setViewMode(viewMode === 'mobile' ? 'terminal' : 'mobile')}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#FFFFFF] text-[#0B1528] font-body text-sm font-semibold rounded-xl hover:bg-[#F1F5F0] transition-all border border-[#E1E7DF] hover:border-[#F5D327] hover:text-[#C49206] text-center cursor-pointer"
            >
              <span>{viewMode === 'mobile' ? 'Switch to Quant Studio' : 'Switch to Mobile App'}</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Emerald Green Glassy Finish Dashboard Panel */}
        <div className="lg:col-span-6 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl rounded-3xl border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_16px_44px_rgba(10,38,25,0.22)] flex flex-col justify-between"
          >
            {/* Top Control Bar with Glassy View Switcher */}
            <div className="bg-[#081F14]/90 border-b border-[#25633F]/50 px-4 sm:px-5 py-3 sm:py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-t-3xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse shadow-[0_0_8px_#00E676]" />
                <span className="text-xs font-mono font-semibold text-[#F5D327] tracking-wider uppercase ml-1">
                  JBot Platform
                </span>
              </div>

              {/* Seamless View Mode Switcher */}
              <div className="flex items-center bg-[#06180F] border border-[#25633F]/50 p-1 rounded-xl text-xs font-semibold shrink-0">
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                    viewMode === 'mobile'
                      ? 'bg-[#00E676] text-[#0A2619] font-bold shadow-[0_0_10px_rgba(0,230,118,0.25)]'
                      : 'text-[#A8D3BA] hover:text-[#FFFFFF]'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile App</span>
                </button>
                <button
                  onClick={() => setViewMode('terminal')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                    viewMode === 'terminal'
                      ? 'bg-[#00E676] text-[#0A2619] font-bold shadow-[0_0_10px_rgba(0,230,118,0.25)]'
                      : 'text-[#A8D3BA] hover:text-[#FFFFFF]'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Quant Studio</span>
                </button>
              </div>
            </div>

            {/* View Mode 1: Mobile App Preview */}
            {viewMode === 'mobile' && (
              <div className="p-4 sm:p-5 flex flex-col justify-between">
                <div className="relative w-full h-56 sm:h-64 2xl:h-72 rounded-2xl overflow-hidden mb-4 bg-[#0A2619] border border-[#25633F]/40 shadow-inner">
                  <img
                    src="/images/jbot-mobile-app.jpg"
                    alt="JBot Mobile Application"
                    className="w-full h-full object-cover object-top opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619] via-transparent to-transparent opacity-80" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                  <div className="bg-[#0D2D1E]/80 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-[#287348]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <span className="text-[10px] text-[#A8D3BA] block uppercase tracking-wider">Signals Monitored</span>
                    <span className="text-lg font-mono font-semibold text-[#FFFFFF]">24/7</span>
                    <span className="text-[9px] text-[#00E676] block mt-0.5">Real-Time</span>
                  </div>
                  <div className="bg-[#0D2D1E]/80 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-[#287348]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <span className="text-[10px] text-[#A8D3BA] block uppercase tracking-wider">Broker Gateway</span>
                    <span className="text-sm sm:text-base font-mono font-semibold text-[#FFFFFF] mt-1 block truncate">Direct API</span>
                    <span className="text-[9px] text-[#00E676] block mt-0.5">Encrypted</span>
                  </div>
                  <div className="bg-[#0D2D1E]/80 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-[#287348]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <span className="text-[10px] text-[#A8D3BA] block uppercase tracking-wider">Drawdown Guard</span>
                    <span className="text-lg font-mono font-semibold text-[#FFFFFF]">Active</span>
                    <span className="text-[9px] text-[#00E676] block mt-0.5">Controlled</span>
                  </div>
                  <div className="bg-[#0D2D1E]/80 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-[#287348]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <span className="text-[10px] text-[#A8D3BA] block uppercase tracking-wider">Sizing Mode</span>
                    <span className="text-lg font-mono font-semibold text-[#F5D327]">Dynamic</span>
                    <span className="text-[9px] text-[#A8D3BA] block mt-0.5">Rule-Based</span>
                  </div>
                </div>
              </div>
            )}

            {/* View Mode 2: Interactive Quant Studio & Backtesting Terminal */}
            {viewMode === 'terminal' && (
              <div className="p-4 sm:p-5 flex flex-col justify-between">
                {/* Strategy Mode Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-4 bg-[#06180F] border border-[#25633F]/50 p-1.5 rounded-xl text-xs font-medium">
                  {quantTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveQuantTab(tab.id)}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        activeQuantTab === tab.id
                          ? 'bg-[#14422B] text-[#FFFFFF] font-semibold shadow-xs border border-[#2E7A4E]/60'
                          : 'text-[#A8D3BA] hover:text-[#FFFFFF]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Dynamic Metrics (All words fully visible, no truncation) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-3.5">
                  {currentQuant.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0D2D1E]/80 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-[#287348]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col justify-between min-h-[64px]"
                    >
                      <span className="text-[10px] text-[#A8D3BA] block uppercase tracking-wider font-mono font-semibold">
                        {metric.label}
                      </span>
                      <span
                        className={`text-xs sm:text-[13px] font-sans font-bold block mt-1 leading-snug whitespace-normal break-words ${
                          metric.highlight ? 'text-[#F5D327]' : 'text-[#FFFFFF]'
                        }`}
                      >
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Equity Curve Visualizer - Exactly matching user's screenshot */}
                <div className="bg-[#0D2D1E]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-[#287348]/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <div>
                      <span className="text-xs font-semibold text-[#FFFFFF] block">{currentQuant.title}</span>
                      <span className="text-[10px] text-[#A8D3BA]">{currentQuant.subtitle}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#00E676] bg-[#00E676]/15 border border-[#00E676]/40 shadow-[0_0_10px_rgba(0,230,118,0.2)] px-2 py-0.5 rounded self-start sm:self-auto shrink-0">
                      {currentQuant.pnl}
                    </span>
                  </div>

                  <div className="relative w-full h-32 pt-1">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 120">
                      <defs>
                        <linearGradient id="quantGradEmerald" x1="0%" x2="0%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#00E676" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#00E676" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <line stroke="#25633F" strokeOpacity="0.4" strokeDasharray="3 3" strokeWidth="0.8" x1="0" x2="400" y1="30" y2="30" />
                      <line stroke="#25633F" strokeOpacity="0.4" strokeDasharray="3 3" strokeWidth="0.8" x1="0" x2="400" y1="65" y2="65" />
                      <line stroke="#25633F" strokeOpacity="0.4" strokeDasharray="3 3" strokeWidth="0.8" x1="0" x2="400" y1="100" y2="100" />
                      <path d={`${currentQuant.chartPath} L 400 120 L 0 120 Z`} fill="url(#quantGradEmerald)" />
                      <path d={currentQuant.chartPath} fill="none" stroke="#00E676" strokeWidth="2.2" />
                      {currentQuant.nodes.map((node, nIdx) => (
                        <circle
                          key={nIdx}
                          cx={node.cx}
                          cy={node.cy}
                          r={node.pulse ? 4.5 : 3.5}
                          fill={node.fill}
                          className={node.pulse ? 'pulse-node animate-pulse' : ''}
                        />
                      ))}
                    </svg>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#A8D3BA] border-t border-[#25633F]/50 pt-2 mt-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] shadow-[0_0_6px_#00E676]" /> Buy Signals: {currentQuant.buySignals}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5D327] shadow-[0_0_6px_#F5D327]" /> Target Exits: {currentQuant.targetExits}
                    </span>
                    <span className="text-[#FFFFFF] font-semibold">Latency: {currentQuant.latency}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Universal Footer Strip */}
            <div className="bg-[#081F14]/90 border-t border-[#25633F]/50 px-4 sm:px-5 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 text-[11px] text-[#A8D3BA] rounded-b-3xl">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676]" />
                <span className="text-[#E4F5EB]">Zero Fund Lock-in • Secure Direct Broker Connectivity</span>
              </span>
              <span className="font-mono text-[#F5D327] font-semibold">Auto Risk Engine Active</span>
            </div>
          </motion.div>

          {/* Compliance Disclaimer below dashboard */}
          <p className="text-[11px] text-[#88A896] leading-relaxed mt-3 px-1 text-center sm:text-left">
            All dashboard data shown is illustrative only and does not represent live trading results, guaranteed returns, or verified performance. Past strategy backtests do not guarantee future results.
          </p>
        </div>

      </div>

      {/* Concise Custom Details Modal when Explore JBot is clicked */}
      <AnimatePresence>
        {showDetailsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-gradient-to-br from-[#0F3524] via-[#0A2619] to-[#123E2A] border border-[#00E676]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDetailsModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-[#287348] text-white flex items-center justify-center hover:bg-[#F5D327] hover:text-[#0B1528] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#F5D327]/15 border border-[#F5D327]/30 text-[#F5D327] text-xs font-mono font-bold">
                  JBot Core Architecture
                </span>
                <span className="text-xs text-[#00E676] font-mono">v3.4 Platform</span>
              </div>

              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white mb-3">
                Intelligent Algorithmic Engine
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed mb-6">
                JBot is JETTONE’s proprietary technology framework designed to bridge strategy conception with automated trade execution. Here is a concise overview of how the platform operates:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#06180F]/90 border border-[#25633F]/60">
                  <div className="flex items-center gap-2 text-[#00E676] mb-1.5 font-semibold text-sm">
                    <Sliders className="w-4 h-4" />
                    <span>Rule Definition</span>
                  </div>
                  <p className="text-xs text-[#BCE2CD] leading-relaxed">
                    Formulate multi-condition triggers combining moving averages, RSI, volume profile, and volatility bands without writing code.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#06180F]/90 border border-[#25633F]/60">
                  <div className="flex items-center gap-2 text-[#F5D327] mb-1.5 font-semibold text-sm">
                    <Zap className="w-4 h-4" />
                    <span>Direct Order Execution</span>
                  </div>
                  <p className="text-xs text-[#BCE2CD] leading-relaxed">
                    Automated limit, market, and bracket orders route directly through your broker’s API gateway with sub-millisecond precision.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#06180F]/90 border border-[#25633F]/60">
                  <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5 font-semibold text-sm">
                    <Cpu className="w-4 h-4" />
                    <span>Historical Tick Simulation</span>
                  </div>
                  <p className="text-xs text-[#BCE2CD] leading-relaxed">
                    Stress-test logic against extensive real market tick data to evaluate maximum drawdown and parameter stability.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#06180F]/90 border border-[#25633F]/60">
                  <div className="flex items-center gap-2 text-[#2DD4BF] mb-1.5 font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Custody Security</span>
                  </div>
                  <p className="text-xs text-[#BCE2CD] leading-relaxed">
                    JBot never holds your funds. Trading capital stays entirely inside your verified broker account.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#25633F]/40">
                <span className="text-[11px] font-mono text-[#88A896]">
                  Illustrative platform overview • Subject to individual broker compatibility
                </span>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#F5D327] text-[#0B1528] font-bold text-xs rounded-xl shadow cursor-pointer hover:bg-white transition-colors"
                >
                  Close Overview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
