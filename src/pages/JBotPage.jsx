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
  CheckCircle2,
  Rocket,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import SEO from '../components/SEO';
import DashboardMockup from '../components/DashboardMockup';

const coreFeatures = [
  {
    icon: Sliders,
    name: 'Custom Strategy Builder',
    description:
      'Formulate rule-based and condition-driven models using comprehensive technical indicators, multi-timeframe filters, and volume analytics.'
  },
  {
    icon: History,
    name: 'Backtesting Engine',
    description:
      'Simulate algorithms against historical market tick data to evaluate drawdowns, execution behavior, and parameters before deployment.'
  },
  {
    icon: Zap,
    name: 'Automated Execution',
    description:
      'Structured execution logic translates defined signals into systematic orders, designed to reduce manual latency and emotional bias.'
  },
  {
    icon: Network,
    name: 'Broker Integration',
    description:
      'Built for connectivity with supported broker endpoints via secure institutional APIs and standardized order gateways.'
  },
  {
    icon: Activity,
    name: 'Real-time Monitoring',
    description:
      'Live runtime supervision featuring position telemetry, connection heartbeats, latency metrics, and automated risk thresholds.'
  }
];

const workflowSteps = [
  {
    step: '01',
    icon: Code2,
    title: 'Build',
    description:
      'Configure indicator rules, enter criteria, and manage exit thresholds in an intuitive interface. Build complex logic without writing raw code.'
  },
  {
    step: '02',
    icon: CheckCircle2,
    title: 'Test',
    description:
      'Evaluate your strategy against extensive historical price feeds to analyze parameter sensitivity. Optimize conditions before connecting to live environments.'
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Deploy',
    description:
      'Connect supported broker APIs and activate automated execution with continuous oversight. Monitor system logs and risk rules in real time.'
  }
];

export default function JBotPage() {
  return (
    <>
      <SEO
        title="JBot Algorithmic Trading Technology | JETTONE"
        description="Create, backtest and deploy algorithmic trading strategies with JBot by JETTONE — intelligent trading technology, Dubai, UAE."
        path="/jbot"
      />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="max-w-3xl">
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-3 block">
            JBOT BY JETTONE
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            Build. Test.
            <span className="text-[#F5D327] block mt-1">Automate.</span>
          </h1>
          <p className="font-body text-[#BCE2CD] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            A suite of tools to create, backtest and deploy algorithmic trading strategies with a structured, technology-driven approach.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                to="/explore-jbot"
                className="relative overflow-hidden group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)] flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Explore JBot Features</span>
                <ArrowRight className="w-4 h-4 relative z-10 stroke-[2.5]" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#0D2018]/90 text-white font-body text-sm font-semibold rounded-xl hover:bg-[#142C21] transition-all flex items-center justify-center border border-[#1E4532]"
              >
                <span>Contact Us</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. Core Features (5 feature cards with gold icon circles) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] block mb-2">
            SYSTEM CAPABILITIES
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            Core Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl p-6 sm:p-7 rounded-2xl border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_36px_rgba(10,38,25,0.2)] flex flex-col justify-between group hover:border-[#F5D327]/60 transition-all"
              >
                <div>
                  {/* Gold Icon Circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5D327]/25 to-[#F5D327]/5 border border-[#F5D327]/40 flex items-center justify-center text-[#F5D327] mb-5 shadow-[0_0_14px_rgba(245,211,39,0.2)]">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="font-headline text-lg sm:text-xl font-semibold text-white mb-2.5 group-hover:text-[#F5D327] transition-colors">
                    {feat.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. Dashboard Mockup (Illustrative Demo Only) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#00E676] block mb-2">
            INTERFACE ARCHITECTURE
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            System Dashboard
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#BCE2CD] mt-2">
            Illustrative demo displaying systematic execution monitoring and status telemetry.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <DashboardMockup />
        </div>
      </section>

      {/* 3. How JBot Works (3-Step Flow: Build → Test → Deploy) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8 sm:mb-10 text-center">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] block mb-2">
            EXECUTION PIPELINE
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            How JBot Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {workflowSteps.map((flow, index) => {
            const Icon = flow.icon;
            return (
              <motion.div
                key={flow.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl p-7 rounded-2xl border border-[#287348]/55 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#00E676]">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-xl font-mono font-bold text-[#F5D327]">
                      {flow.step}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-white mb-2.5">
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

      {/* 4. Disclaimer Callout */}
      <section className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="rounded-xl bg-[#092217]/90 border border-[#225838] border-l-4 border-l-[#F5D327] p-5 sm:p-6 backdrop-blur-md shadow-md">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-[#F5D327] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#F5D327] tracking-wider mb-1">
                Technology Platform Disclaimer
              </h4>
              <p className="text-xs sm:text-sm text-[#D1E7DC] leading-relaxed">
                JBot is a technology platform. It does not guarantee trading profits. Algorithmic trading involves significant risk. All displayed data is illustrative and does not represent live trading results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Strip */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#0F3524]/90 via-[#0A2619]/95 to-[#123E2A]/85 backdrop-blur-2xl border border-[#287348]/60 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white mb-2">
              Explore JBot Features or Inquire with the Team
            </h2>
            <p className="font-body text-[#BCE2CD] text-xs sm:text-sm">
              Discover in-depth workflow details or schedule a technology walkthrough.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/explore-jbot"
              className="px-6 py-3.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-bold text-sm rounded-xl shadow-md flex items-center gap-2"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-[#0D2018] text-white font-semibold text-sm rounded-xl border border-[#1E4532]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
