import React, { useState, useMemo } from 'react';
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
    winRate: 'Varies by strategy',
    profitFactor: 'Strategy dependent',
    drawdown: 'Configurable',
    sharpe: 'Configurable',
    latency: 'Direct API',
    dataPoints: [
      { x: 0, y: 100 },
      { x: 10, y: 104 },
      { x: 20, y: 110 },
      { x: 32, y: 108 },
      { x: 44, y: 118 },
      { x: 56, y: 125 },
      { x: 68, y: 121 },
      { x: 78, y: 133 },
      { x: 88, y: 138 },
      { x: 100, y: 146 }
    ]
  },
  meanReversion: {
    name: 'Statistical Mean Reversion',
    asset: 'S&P 500 & NASDAQ 100',
    winRate: 'Varies by strategy',
    profitFactor: 'Strategy dependent',
    drawdown: 'Configurable',
    sharpe: 'Configurable',
    latency: 'Direct API',
    dataPoints: [
      { x: 0, y: 100 },
      { x: 12, y: 106 },
      { x: 24, y: 104 },
      { x: 36, y: 117 },
      { x: 48, y: 115 },
      { x: 60, y: 128 },
      { x: 72, y: 135 },
      { x: 84, y: 143 },
      { x: 94, y: 141 },
      { x: 100, y: 155 }
    ]
  },
  breakout: {
    name: 'Volatility Regime Breakout',
    asset: 'WTI Crude & Major FX',
    winRate: 'Varies by strategy',
    profitFactor: 'Strategy dependent',
    drawdown: 'Configurable',
    sharpe: 'Configurable',
    latency: 'Direct API',
    dataPoints: [
      { x: 0, y: 100 },
      { x: 10, y: 103 },
      { x: 22, y: 115 },
      { x: 35, y: 112 },
      { x: 48, y: 126 },
      { x: 62, y: 123 },
      { x: 74, y: 136 },
      { x: 86, y: 133 },
      { x: 95, y: 145 },
      { x: 100, y: 151 }
    ]
  }
};

// Generates smooth spline path spanning width and height perfectly
function generateSmoothPath(pts, width = 800, height = 240) {
  if (!pts || pts.length === 0) {
    return { pathD: '', areaD: '', lastPoint: { x: 0, y: 0 }, mapped: [] };
  }

  const yValues = pts.map((p) => p.y);
  const rawMin = Math.min(...yValues);
  const rawMax = Math.max(...yValues);

  // Dynamic range with clean vertical margins
  const min = Math.min(rawMin - 2, 96);
  const max = Math.max(rawMax + 4, 160);
  const topPad = 32;
  const botPad = 36;
  const usableH = height - topPad - botPad;

  const mapped = pts.map((pt) => {
    const x = (pt.x / 100) * width;
    const y = height - botPad - ((pt.y - min) / (max - min)) * usableH;
    return { x: Number(x.toFixed(1)), y: Number(y.toFixed(1)), raw: pt };
  });

  // Catmull-Rom to Cubic Bezier
  let path = `M ${mapped[0].x} ${mapped[0].y}`;
  for (let i = 0; i < mapped.length - 1; i++) {
    const p0 = mapped[i === 0 ? 0 : i - 1];
    const p1 = mapped[i];
    const p2 = mapped[i + 1];
    const p3 = mapped[i + 2 < mapped.length ? i + 2 : i + 1];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    path += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  const area = `${path} L ${width} ${height} L 0 ${height} Z`;
  return {
    pathD: path,
    areaD: area,
    lastPoint: mapped[mapped.length - 1],
    firstPoint: mapped[0],
    mapped
  };
}

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

  // Dynamic smooth path calculation spanning full canvas with responsive scaling
  const chartData = useMemo(() => {
    return generateSmoothPath(activeStrat.dataPoints, 800, 240);
  }, [activeStrat]);

  return (
    <>
      <SEO
        title="JBot Platform | JETTONE Dubai"
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
              <span>JBOT PLATFORM</span>
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
                  ROUTING: {activeStrat.latency}
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
                    {activeStrat.sharpe}
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
                    {activeStrat.drawdown}
                  </span>
                </div>
              </div>

              {/* Mini SVG Curve Preview */}
              <div className="p-3 rounded-xl bg-[#06180F]/90 border border-[#1E4D34]/80 mb-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#88A896] mb-1.5">
                  <span>Simulated Cumulative Alpha</span>
                  <span className="text-[#00E676] font-bold">Illustrative Model</span>
                </div>
                <div className="relative w-full h-20 select-none">
                  <svg viewBox="0 0 800 240" preserveAspectRatio="none" className="w-full h-full block">
                    <defs>
                      <linearGradient id="heroCurveGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00E676" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#00E676" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="60" x2="800" y2="60" stroke="#1E4D34" strokeDasharray="3 3" strokeWidth="0.8" opacity="0.5" />
                    <line x1="0" y1="120" x2="800" y2="120" stroke="#1E4D34" strokeDasharray="3 3" strokeWidth="0.8" opacity="0.5" />
                    <line x1="0" y1="180" x2="800" y2="180" stroke="#1E4D34" strokeDasharray="3 3" strokeWidth="0.8" opacity="0.5" />
                    <path d={chartData.areaD} fill="url(#heroCurveGrad)" />
                    <path d={chartData.pathD} fill="none" stroke="#00E676" strokeWidth="2.8" strokeLinecap="round" />
                    {chartData.lastPoint && (
                      <circle cx={chartData.lastPoint.x} cy={chartData.lastPoint.y} r="4" fill="#00E676" />
                    )}
                  </svg>
                </div>
              </div>

              <div className="pt-2 border-t border-[#25633F]/50 flex items-center justify-between text-[11px] text-[#A8D3BA]">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#F5D327]" />
                  <span>Non-Custodial Architecture</span>
                </div>
                <span className="font-mono text-[#00E676] font-semibold">Active Guard</span>
              </div>
            </div>

            {/* Compliance Disclaimer */}
            <p className="text-[11px] text-[#88A896] leading-relaxed mt-3 px-1 text-center sm:text-left">
              All dashboard data shown is illustrative only and does not represent live trading results, guaranteed returns, or verified performance. Past strategy backtests do not guarantee future results.
            </p>
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
                Broker Routing: <strong className="text-[#00E676]">{activeStrat.latency}</strong>
              </span>
            </div>
          </div>

          {/* Interactive Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 font-mono">
            <div className="p-3.5 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
              <span className="text-[#88A896] text-[11px] block truncate">Win Rate</span>
              <span className="text-xs sm:text-sm font-bold text-white mt-1 block truncate" title={activeStrat.winRate}>
                {activeStrat.winRate}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
              <span className="text-[#88A896] text-[11px] block truncate">Profit Factor</span>
              <span className="text-xs sm:text-sm font-bold text-[#00E676] mt-1 block truncate" title={activeStrat.profitFactor}>
                {activeStrat.profitFactor}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
              <span className="text-[#88A896] text-[11px] block truncate">Sharpe Metric</span>
              <span className="text-xs sm:text-sm font-bold text-[#F5D327] mt-1 block truncate" title={activeStrat.sharpe}>
                {activeStrat.sharpe}
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#06180F]/80 border border-[#1E4D34]">
              <span className="text-[#88A896] text-[11px] block truncate">Drawdown Cap</span>
              <span className="text-xs sm:text-sm font-bold text-[#38BDF8] mt-1 block truncate" title={activeStrat.drawdown}>
                {activeStrat.drawdown}
              </span>
            </div>
          </div>

          {/* Dynamic SVG Visual Equity Curve */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#05160E]/95 border border-[#1E4D34] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#88A896] mb-4 pb-3 border-b border-[#1E4D34]/60">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                <span className="text-white font-semibold">Simulated Equity Curve</span>
                <span className="text-[#88A896] text-[11px]">(Tick-Level Walk-Forward)</span>
              </span>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5D327]" />
                  <span className="text-[#F5D327]">Normalized Base: 100.0</span>
                </span>
                <span className="text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded border border-[#00E676]/30 font-bold">
                  Illustrative Model
                </span>
              </div>
            </div>

            <div className="relative w-full h-56 sm:h-64 md:h-72 select-none">
              <svg
                viewBox="0 0 800 240"
                preserveAspectRatio="none"
                className="w-full h-full block"
              >
                <defs>
                  <linearGradient id="studioCurveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00E676" stopOpacity="0.42" />
                    <stop offset="45%" stopColor="#00E676" stopOpacity="0.16" />
                    <stop offset="85%" stopColor="#00E676" stopOpacity="0.03" />
                    <stop offset="100%" stopColor="#00E676" stopOpacity="0.0" />
                  </linearGradient>
                  <filter id="studioGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.5" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Horizontal Reference Grid Lines across 100% width */}
                <line x1="0" y1="50" x2="800" y2="50" stroke="#1E4D34" strokeOpacity="0.45" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="105" x2="800" y2="105" stroke="#1E4D34" strokeOpacity="0.45" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="160" x2="800" y2="160" stroke="#1E4D34" strokeOpacity="0.45" strokeDasharray="4 4" strokeWidth="1" />
                <line x1="0" y1="210" x2="800" y2="210" stroke="#1E4D34" strokeOpacity="0.65" strokeWidth="1" />

                {/* Vertical Timeline Reference Lines */}
                <line x1="200" y1="0" x2="200" y2="210" stroke="#1E4D34" strokeOpacity="0.28" strokeDasharray="3 3" strokeWidth="1" />
                <line x1="400" y1="0" x2="400" y2="210" stroke="#1E4D34" strokeOpacity="0.28" strokeDasharray="3 3" strokeWidth="1" />
                <line x1="600" y1="0" x2="600" y2="210" stroke="#1E4D34" strokeOpacity="0.28" strokeDasharray="3 3" strokeWidth="1" />

                {/* Area Gradient Fill */}
                <path d={chartData.areaD} fill="url(#studioCurveGrad)" />

                {/* Glowing Main Curve */}
                <path
                  d={chartData.pathD}
                  fill="none"
                  stroke="#00E676"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#studioGlow)"
                />

                {/* Intermediate Key Nodes */}
                {chartData.mapped.slice(1, -1).map((pt, idx) => (
                  <circle
                    key={idx}
                    cx={pt.x}
                    cy={pt.y}
                    r="3.5"
                    fill="#05160E"
                    stroke="#00E676"
                    strokeWidth="2"
                  />
                ))}

                {/* Pulsing End Node (Live Tick) */}
                {chartData.lastPoint && (
                  <g>
                    <circle
                      cx={chartData.lastPoint.x}
                      cy={chartData.lastPoint.y}
                      r="10"
                      fill="#00E676"
                      opacity="0.25"
                      className="animate-ping"
                    />
                    <circle
                      cx={chartData.lastPoint.x}
                      cy={chartData.lastPoint.y}
                      r="5"
                      fill="#00E676"
                      stroke="#05160E"
                      strokeWidth="2"
                    />
                    <circle
                      cx={chartData.lastPoint.x}
                      cy={chartData.lastPoint.y}
                      r="2"
                      fill="#FFFFFF"
                    />
                  </g>
                )}
              </svg>

              {/* In-chart Dynamic Y-Axis Labels */}
              <div className="absolute right-2 top-1 bottom-6 flex flex-col justify-between pointer-events-none text-[10px] font-mono text-[#88A896]/75 text-right select-none">
                <span>150.0</span>
                <span>135.0</span>
                <span>120.0</span>
                <span>100.0</span>
              </div>
            </div>

            {/* In-chart X-Axis Timeline Labels */}
            <div className="flex items-center justify-between text-[10px] font-mono text-[#88A896] mt-2 pt-2 border-t border-[#1E4D34]/40 px-1">
              <span>Start (Base)</span>
              <span>25% Walk-Forward</span>
              <span>50% In-Sample</span>
              <span>75% Stress Test</span>
              <span className="text-[#00E676] font-bold">Latest Tick</span>
            </div>
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
