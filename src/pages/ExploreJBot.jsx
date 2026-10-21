import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sliders,
  History,
  Zap,
  Network,
  Activity,
  Code2,
  FileCheck2,
  Cpu,
  ArrowRight,
  AlertTriangle,
  Server,
  Layers
} from 'lucide-react';
import SEO from '../components/SEO';

const expandedFeatures = [
  {
    icon: Sliders,
    name: 'Custom Strategy Builder',
    description:
      'Formulate bespoke algorithmic systems through a visual condition builder. Define multifaceted entry and exit criteria combining classical technical indicators, momentum oscillators, price-action triggers, and volume profile logic without requiring complex code.',
    techDetail: 'Supports rule-based and condition-driven multi-factor Boolean logic'
  },
  {
    icon: History,
    name: 'Backtesting Engine',
    description:
      'Evaluate your strategic hypothesis against extensive historical tick and bar archives across multiple asset classes. Stress-test execution parameters across differing volatility regimes, track historical drawdown metrics, and analyze risk-adjusted performance characteristics.',
    techDetail: 'Multi-asset historical tick replay with walk-forward parameter evaluation'
  },
  {
    icon: Zap,
    name: 'Automated Execution',
    description:
      'Automate your order routing directly from rule events. Pre-programmed execution logic submits market, limit, stop, and trailing bracket orders instantly to supported broker environments, eliminating latency and emotional decision-making in fast markets.',
    techDetail: 'Sub-millisecond condition trigger parsing with configurable order bracket rules'
  },
  {
    icon: Network,
    name: 'Broker Integration',
    description:
      'Engineered to interface seamlessly with approved broker endpoints and execution venues. Through standardized API protocol wrappers, JBot communicates order state, fills, cancellations, and account balance telemetry securely.',
    techDetail: 'Standardized REST and WebSocket protocol adaptors with encrypted token management'
  },
  {
    icon: Activity,
    name: 'Real-time Monitoring',
    description:
      'Maintain full situational awareness with comprehensive telemetry dashboards. Monitor real-time position exposure, active trigger states, server health heartbeats, connection latencies, and circuit-breaker risk triggers from a single console.',
    techDetail: 'Real-time WebSocket heartbeat verification with automated fail-safe guards'
  }
];

export default function ExploreJBot() {
  return (
    <>
      <SEO
        title="JBot Features & Capabilities | JETTONE Algorithmic Trading"
        description="Explore JBot's strategy builder, backtesting engine, automated execution and monitoring tools — JETTONE intelligent trading technology."
        path="/explore-jbot"
      />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="max-w-3xl">
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-3 block">
            EXPLORE JBOT
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            Everything You Need to Build
            <span className="text-[#F5D327] block mt-1">Smarter Strategies.</span>
          </h1>
          <p className="font-body text-[#BCE2CD] text-base sm:text-lg leading-relaxed max-w-2xl">
            A deep-dive into the architectural components, execution engines, and algorithmic modules of JBot by JETTONE.
          </p>
        </div>
      </section>

      {/* 1. Features Deep-Dive (5 Expanded Cards) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] block mb-2">
            DETAILED SPECIFICATIONS
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            Platform Capabilities Deep-Dive
          </h2>
        </div>

        <div className="space-y-6">
          {expandedFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-gradient-to-br from-[#0F3524]/80 via-[#0A2619]/85 to-[#123E2A]/75 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl border border-[#287348]/55 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:border-[#00E676]/70 transition-all"
              >
                <div className="flex items-start gap-4 sm:gap-5 max-w-3xl">
                  <div className="w-12 h-12 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#F5D327] shrink-0 mt-1">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#F5D327] transition-colors">
                      {feat.name}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed mb-3">
                      {feat.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#06180F] border border-[#1E4D34] text-[11px] font-mono text-[#00E676]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
                      <span>{feat.techDetail}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. Workflow Diagram (HTML/SVG — 3 stages: Build → Test → Deploy) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8 sm:mb-10 text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#00E676] block mb-2">
            EXECUTION LIFECYCLE
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            System Workflow Architecture
          </h2>
          <span className="text-[11px] font-mono text-[#F5D327] mt-1 block">
            Illustrative workflow
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="bg-[#0A2418]/90 border border-[#25633F]/60 rounded-2xl p-6 sm:p-7 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#14422B] flex items-center justify-center text-[#F5D327] mb-4">
              <Code2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#F5D327] uppercase">Stage 01</span>
            <h3 className="font-headline text-lg font-bold text-white mt-1 mb-2">Build</h3>
            <p className="font-body text-xs text-[#BCE2CD] leading-relaxed">
              Design conditions, select technical indicators, configure stop-losses, and define systematic position sizing.
            </p>
          </div>

          <div className="bg-[#0A2418]/90 border border-[#25633F]/60 rounded-2xl p-6 sm:p-7 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#14422B] flex items-center justify-center text-[#00E676] mb-4">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#00E676] uppercase">Stage 02</span>
            <h3 className="font-headline text-lg font-bold text-white mt-1 mb-2">Test</h3>
            <p className="font-body text-xs text-[#BCE2CD] leading-relaxed">
              Run simulations across multiple historical periods, inspect drawdown distributions, and refine parameters.
            </p>
          </div>

          <div className="bg-[#0A2418]/90 border border-[#25633F]/60 rounded-2xl p-6 sm:p-7 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#14422B] flex items-center justify-center text-[#38BDF8] mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase">Stage 03</span>
            <h3 className="font-headline text-lg font-bold text-white mt-1 mb-2">Deploy</h3>
            <p className="font-body text-xs text-[#BCE2CD] leading-relaxed">
              Connect to compatible broker APIs, engage automated execution rules, and monitor telemetry in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Integration Overview (4 placeholder slots, no unpermitted logos) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] block mb-2">
            CONNECTIVITY
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white mb-2">
            Supported Integrations
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#BCE2CD]">
            JBot is designed to work with supported broker connections. Verify current integrations at <span className="text-[#F5D327] font-mono">jbot.jettone.ai</span>.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {['Connection Gateway A', 'Connection Gateway B', 'Connection Gateway C', 'Connection Gateway D'].map((slot, i) => (
            <div
              key={slot}
              className="p-6 rounded-2xl bg-[#092217]/70 border border-[#1E4D34] flex flex-col items-center justify-center text-center backdrop-blur-md"
            >
              <Server className="w-8 h-8 text-[#88A896] mb-3" />
              <span className="font-mono text-xs font-semibold text-white">
                {slot}
              </span>
              <span className="text-[10px] font-mono text-[#F5D327] mt-1">
                API Protocol Ready
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Disclaimer Callout */}
      <section className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="rounded-xl bg-[#092217]/90 border border-[#225838] border-l-4 border-l-[#F5D327] p-5 sm:p-6 backdrop-blur-md shadow-md">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-[#F5D327] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#F5D327] tracking-wider mb-1">
                Technology Notice
              </h4>
              <p className="text-xs sm:text-sm text-[#D1E7DC] leading-relaxed">
                JBot is a technology platform. It does not guarantee trading profits. Algorithmic trading involves significant risk. All displayed data is illustrative and does not represent live trading results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full text-center">
        <div className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0F3524]/90 via-[#0A2619]/95 to-[#123E2A]/85 backdrop-blur-2xl border border-[#287348]/60 shadow-xl max-w-3xl mx-auto">
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white mb-3">
            Ready to Build With JBot?
          </h2>
          <p className="font-body text-[#BCE2CD] text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Get in touch with our Dubai technology desk to schedule a direct system walkthrough.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              to="/contact"
              className="relative overflow-hidden group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-4 h-4 relative z-10 stroke-[2.5]" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
