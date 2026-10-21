import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Scale,
  Eye,
  FileCheck2,
  Calendar,
  Layers,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  TrendingUp,
  CheckCircle2,
  Lock,
  PieChart,
  Target,
  FileText,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import ContactCtaStrip from '../components/ContactCtaStrip';

const offerings = [
  {
    icon: Scale,
    heading: 'Structured Capital Allocation',
    tag: 'PORTFOLIO DISCIPLINE',
    description:
      'Defined capital participation frameworks tailored to collaborative parameters, risk thresholds, and diversified multi-asset universes.',
    metrics: [
      { label: 'Risk Parity', val: 'Target Volatility Bands' },
      { label: 'Asset Classes', val: 'Equities, FX, Bullion, Crypto' }
    ],
    // SVG Asset Allocation preview
    visual: (
      <div className="relative w-full h-36 bg-[#06180F]/90 rounded-xl border border-[#1E4D34] p-3 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#88A896]">
          <span>Asset Class Weights</span>
          <span className="text-[#00E676] font-semibold">Systematic Rebalance</span>
        </div>
        <div className="space-y-1.5 my-1">
          <div>
            <div className="flex justify-between text-[9.5px] font-mono text-[#BCE2CD] mb-0.5">
              <span>Equities &amp; Indices</span>
              <span className="text-white font-bold">40%</span>
            </div>
            <div className="w-full h-1.5 bg-[#0F3524] rounded-full overflow-hidden">
              <div className="h-full bg-[#F5D327] rounded-full w-[40%]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[9.5px] font-mono text-[#BCE2CD] mb-0.5">
              <span>Precious Metals &amp; Macro</span>
              <span className="text-white font-bold">30%</span>
            </div>
            <div className="w-full h-1.5 bg-[#0F3524] rounded-full overflow-hidden">
              <div className="h-full bg-[#00E676] rounded-full w-[30%]" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[9.5px] font-mono text-[#BCE2CD] mb-0.5">
              <span>Systematic FX &amp; Commodities</span>
              <span className="text-white font-bold">30%</span>
            </div>
            <div className="w-full h-1.5 bg-[#0F3524] rounded-full overflow-hidden">
              <div className="h-full bg-[#38BDF8] rounded-full w-[30%]" />
            </div>
          </div>
        </div>
        <div className="text-[9.5px] font-mono text-[#A8D3BA] flex items-center justify-between pt-1 border-t border-[#1E4D34]/60">
          <span>Target Volatility: 8-12%</span>
          <span className="text-[#F5D327]">Max Drawdown Cap: -5%</span>
        </div>
      </div>
    )
  },
  {
    icon: Target,
    heading: 'Strategic Co-Investment',
    tag: 'INTEREST ALIGNMENT',
    description:
      'True skin-in-the-game partnership models ensuring 100% alignment of incentives, milestone transparent hurdles, and disciplined stewardship.',
    metrics: [
      { label: 'Incentive Parity', val: 'Shared Alpha Objectives' },
      { label: 'Hurdle Terms', val: 'Defined Prior to Mandate' }
    ],
    // SVG Alignment Curve preview
    visual: (
      <div className="relative w-full h-36 bg-[#06180F]/90 rounded-xl border border-[#1E4D34] p-3 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#88A896]">
          <span>Co-Investment Curve</span>
          <span className="text-[#F5D327] font-semibold">1:1 Incentive Parity</span>
        </div>
        <svg viewBox="0 0 280 60" className="w-full h-16 overflow-visible my-1">
          <defs>
            <linearGradient id="coInvestGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5D327" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F5D327" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M 0 50 Q 70 45, 140 28 T 280 8 L 280 60 L 0 60 Z" fill="url(#coInvestGrad)" />
          <path d="M 0 50 Q 70 45, 140 28 T 280 8" fill="none" stroke="#F5D327" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="140" y1="0" x2="140" y2="60" stroke="#00E676" strokeDasharray="2 2" strokeWidth="1" />
          <circle cx="140" cy="28" r="4" fill="#00E676" />
        </svg>
        <div className="text-[9.5px] font-mono text-[#A8D3BA] flex items-center justify-between pt-1 border-t border-[#1E4D34]/60">
          <span>Hurdle Target: 12%</span>
          <span className="text-[#00E676]">High-Water Mark Enforced</span>
        </div>
      </div>
    )
  },
  {
    icon: ShieldCheck,
    heading: 'Global Governance & Oversight',
    tag: 'REGULATORY DISCIPLINE',
    description:
      'Rooted in Dubai financial governance standards, featuring multi-tier oversight, automated audit trails, and non-custodial capital protection.',
    metrics: [
      { label: 'Jurisdiction', val: 'Dubai, UAE Framework' },
      { label: 'Capital Control', val: 'Zero Custody of Client Funds' }
    ],
    // SVG Governance Matrix preview
    visual: (
      <div className="relative w-full h-36 bg-[#06180F]/90 rounded-xl border border-[#1E4D34] p-3 flex flex-col justify-between overflow-hidden">
        <div className="flex items-center justify-between text-[10px] font-mono text-[#88A896]">
          <span>Governance Safeguards</span>
          <span className="text-[#00E676] font-semibold">Active Telemetry</span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-1 font-mono text-[9.5px]">
          <div className="p-1.5 rounded-lg bg-[#0F3524]/70 border border-[#1E4D34] flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#00E676] shrink-0" />
            <span className="text-white">Strict Non-Disclosure</span>
          </div>
          <div className="p-1.5 rounded-lg bg-[#0F3524]/70 border border-[#1E4D34] flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#00E676] shrink-0" />
            <span className="text-white">Monthly Audits</span>
          </div>
          <div className="p-1.5 rounded-lg bg-[#0F3524]/70 border border-[#1E4D34] flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#00E676] shrink-0" />
            <span className="text-white">Defined Mandate</span>
          </div>
          <div className="p-1.5 rounded-lg bg-[#0F3524]/70 border border-[#1E4D34] flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#00E676] shrink-0" />
            <span className="text-white">Zero Fund Custody</span>
          </div>
        </div>
        <div className="text-[9.5px] font-mono text-[#A8D3BA] flex items-center justify-between pt-1 border-t border-[#1E4D34]/60">
          <span>Reporting: Monthly / Quarterly</span>
          <span className="text-[#38BDF8]">Direct Partner Access</span>
        </div>
      </div>
    )
  }
];

const timelineSteps = [
  {
    number: '01',
    title: 'Discovery & Strategic Alignment',
    badge: 'STAGE 01',
    summary:
      'We begin with an in-depth confidential consultation to evaluate mutual strategic alignment, risk appetite, capital scale, and target horizon.',
    deliverables: [
      'Bilateral Non-Disclosure Agreement (NDA)',
      'Mandate Questionnaire & Risk Profiling',
      'Preliminary Strategic Scope Overview'
    ],
    governanceAction: 'Mandate Scope Formalization'
  },
  {
    number: '02',
    title: 'Framework Review & Due Diligence',
    badge: 'STAGE 02',
    summary:
      'Review a customized operational proposal specifying capital allocation bands, liquidity horizons, and comprehensive risk mitigation rules.',
    deliverables: [
      'Customized Mandate Term Sheet',
      'Multi-Scenario Risk & Stress-Test Matrix',
      'Liquidity & Execution Architecture Blueprint'
    ],
    governanceAction: 'Risk Thresholds Pre-Agreed'
  },
  {
    number: '03',
    title: 'Mandate Structuring & Agreement',
    badge: 'STAGE 03',
    summary:
      'Formalize the collaborative relationship through definitive legal agreements, fee schedules, and governance documentation rooted in Dubai.',
    deliverables: [
      'Tailored Investment Partnership Contract',
      'Operational Protocol & Governance Charters',
      'Verified Account Authorization'
    ],
    governanceAction: 'Formal Execution & Onboarding'
  },
  {
    number: '04',
    title: 'Ongoing Telemetry & Review',
    badge: 'STAGE 04',
    summary:
      'Active management under pre-agreed parameters, backed by granular monthly statements, quarterly strategic reviews, and continuous dialogue.',
    deliverables: [
      'Monthly Granular Performance Statements',
      'Quarterly Executive Review Sessions',
      'Direct Partner Access to Analysis Team'
    ],
    governanceAction: 'Real-Time Oversight & Transparency'
  }
];

export default function InvestmentPartner() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = timelineSteps[activeStep];

  return (
    <>
      <SEO
        title="Investment Partner | JETTONE Dubai"
        description="Explore structured investment partnership opportunities through JETTONE, Dubai. Transparent process, clear terms and defined risk disclosure."
        path="/services/investment-partner"
      />

      {/* Hero Section with Split Visual Preview */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-3 block font-mono">
              INVESTMENT PARTNERSHIP
            </span>
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
              Structured Opportunities.
              <span className="text-[#F5D327] block mt-1">Transparent Governance.</span>
            </h1>
            <p className="font-body text-[#BCE2CD] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Explore strategic investment partnerships rooted in Dubai with complete alignment of interest, defined allocation mandates, and zero custody of your funds.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link
                to="/contact"
                className="relative overflow-hidden group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10 font-bold">Start a Confidential Conversation</span>
                <ArrowRight className="w-4 h-4 relative z-10 stroke-[2.5]" />
              </Link>
            </motion.div>
          </div>

          {/* Right Visual Graphic: Interactive Partnership Governance Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-[#0F3524]/90 via-[#0A2619]/90 to-[#123E2A]/85 border border-[#287348]/60 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#25633F]/50">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5D327] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Governance Model
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#00E676] px-2 py-0.5 rounded bg-[#00E676]/15 border border-[#00E676]/30">
                  Verified Mandate
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34] flex items-center justify-between">
                  <span className="text-[#A8D3BA]">Capital Allocation</span>
                  <span className="text-[#FFFFFF] font-bold">Defined Per Partner</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34] flex items-center justify-between">
                  <span className="text-[#A8D3BA]">Risk Governance</span>
                  <span className="text-[#00E676] font-bold">Pre-agreed Limits</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34] flex items-center justify-between">
                  <span className="text-[#A8D3BA]">Reporting Frequency</span>
                  <span className="text-[#F5D327] font-bold">Monthly / Quarterly</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06180F]/80 border border-[#1E4D34] flex items-center justify-between">
                  <span className="text-[#A8D3BA]">Jurisdiction</span>
                  <span className="text-[#FFFFFF] font-bold">Dubai, UAE</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#25633F]/50 flex items-center gap-2 text-[11px] text-[#A8D3BA]">
                <Lock className="w-3.5 h-3.5 text-[#F5D327]" />
                <span>Strict non-disclosure &amp; confidentiality guaranteed</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 1. What We Offer (3 Structured Pillars with Rich Embedded Visual Modules) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] block mb-2 font-mono">
            CORE PRINCIPLES
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            What We Offer
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#BCE2CD] mt-2 max-w-xl">
            Our partnership philosophy bridges quantitative capital discipline with premier-grade transparency and aligned incentives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0F3524]/85 via-[#0A2619]/90 to-[#123E2A]/80 backdrop-blur-2xl p-5 sm:p-6 rounded-2xl border border-[#287348]/55 shadow-lg flex flex-col justify-between group hover:border-[#00E676]/70 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#F5D327] shadow-sm">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-[#00E676] px-2.5 py-0.5 rounded-full bg-[#00E676]/15 border border-[#00E676]/30">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-headline text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-[#F5D327] transition-colors">
                    {item.heading}
                  </h3>

                  <p className="font-body text-xs text-[#BCE2CD] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Embedded Visual Module */}
                  <div className="mb-4">
                    {item.visual}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#25633F]/40 space-y-1">
                  {item.metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#88A896]">{m.label}:</span>
                      <span className="text-[#FFFFFF] font-semibold">{m.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. Interactive Progression Workflow (Animated Connected Stepper) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] block mb-2 font-mono">
            PROGRESSION FRAMEWORK
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            How It Works
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#BCE2CD] mt-2 max-w-xl">
            A clear four-stage engagement framework designed for predictable execution and total transparency.
          </p>
        </div>

        {/* Connected Horizontal Stepper Bar */}
        <div className="relative mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 relative z-10">
            {timelineSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-3.5 sm:p-4 rounded-xl text-left transition-all border ${
                    isActive
                      ? 'bg-[#F5D327]/15 border-[#F5D327] shadow-[0_0_20px_rgba(245,211,39,0.3)]'
                      : isPassed
                      ? 'bg-[#00E676]/10 border-[#00E676]/40 text-[#BCE2CD]'
                      : 'bg-[#0A2619]/80 border-[#287348]/40 hover:border-[#F5D327]/40 text-[#88A896]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#F5D327]' : isPassed ? 'text-[#00E676]' : 'text-[#88A896]'}`}>
                      STEP {step.number}
                    </span>
                  </div>
                  <h4 className={`font-headline text-xs sm:text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-[#BCE2CD]'}`}>
                    {step.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Deep-Dive Card for Selected Step */}
        <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0F3524]/90 via-[#0A2619]/95 to-[#123E2A]/90 border border-[#287348]/60 shadow-2xl backdrop-blur-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-[#F5D327] px-2.5 py-0.5 rounded bg-[#F5D327]/15 border border-[#F5D327]/30">
                    {currentStep.badge}
                  </span>
                </div>

                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white mb-3">
                  {currentStep.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed mb-5 max-w-xl">
                  {currentStep.summary}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono font-bold uppercase text-[#F5D327] tracking-wider block">
                    Key Deliverables &amp; Milestones:
                  </span>
                  {currentStep.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white">
                      <CheckCircle2 className="w-4 h-4 text-[#00E676] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                {/* Step Navigation Controls */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#25633F]/40">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                      activeStep === 0
                        ? 'opacity-40 cursor-not-allowed border-transparent text-[#88A896]'
                        : 'border-[#287348] text-white hover:bg-[#14422B]'
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous Step</span>
                  </button>

                  <button
                    disabled={activeStep === timelineSteps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(timelineSteps.length - 1, prev + 1))}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                      activeStep === timelineSteps.length - 1
                        ? 'opacity-40 cursor-not-allowed border-transparent text-[#88A896]'
                        : 'bg-[#F5D327] text-[#0B1528] border-[#F5D327] font-bold shadow-md hover:bg-[#E5B80B]'
                    }`}
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Mini Status Monitor */}
              <div className="lg:col-span-5">
                <div className="p-5 rounded-2xl bg-[#06180F]/90 border border-[#1E4D34] space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1E4D34]">
                    <span className="text-[#88A896]">Stage Milestone</span>
                    <span className="text-[#00E676] font-bold">{currentStep.governanceAction}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#88A896]">Mandate Completion</span>
                      <span className="text-white font-bold">{((activeStep + 1) / 4) * 100}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#0F3524] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00E676] to-[#F5D327] rounded-full transition-all duration-500"
                        style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0F3524]/50 border border-[#1E4D34] text-[11px] text-[#A8D3BA] leading-relaxed">
                    All partner onboarding stages adhere strictly to UAE commercial standards and customized bilateral agreements.
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 3. Important Disclosures */}
      <section className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="rounded-xl bg-[#092217]/90 border border-[#225838] border-l-4 border-l-[#F5D327] p-5 sm:p-6 backdrop-blur-md shadow-md">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-[#F5D327] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#F5D327] tracking-wider mb-1">
                Important Disclosures
              </h4>
              <p className="text-xs sm:text-sm text-[#D1E7DC] leading-relaxed">
                Investment partnerships involve market risk of loss. Past performance does not guarantee future results. All terms and allocations are subject to customized individual agreements. This page does not constitute financial advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Edge-to-Edge CTA Strip */}
      <ContactCtaStrip
        title="Ready to Explore an Investment Partnership?"
        subtext="Connect directly with the JETTONE team to review tailored opportunities and mandate structures."
        ctaText="Start a Conversation →"
        ctaLink="/contact"
      />
    </>
  );
}
