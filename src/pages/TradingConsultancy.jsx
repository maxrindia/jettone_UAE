import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  LineChart,
  ShieldAlert,
  BookOpen,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import Markets from '../components/Markets';
import ContactCtaStrip from '../components/ContactCtaStrip';

const consultancyAreas = [
  {
    icon: LineChart,
    heading: 'Market Analysis',
    description:
      'Rigorous macro, technical, and quantitative research evaluating market dynamics across global equities, foreign exchange, commodities, and digital assets.'
  },
  {
    icon: TrendingUp,
    heading: 'Trading Strategy Review',
    description:
      'Independent structural evaluation of existing trading frameworks, assessing execution methodology, slippage mitigation, and order routing discipline.'
  },
  {
    icon: ShieldAlert,
    heading: 'Risk & Portfolio Discussion',
    description:
      'In-depth discussions on scenario stress-testing, drawdown management, position sizing protocols, and cross-asset correlation risks.'
  },
  {
    icon: BookOpen,
    heading: 'Educational Resources',
    description:
      'Comprehensive educational content and analytical perspectives designed to enhance market awareness and strategic proficiency for market participants.'
  }
];

export default function TradingConsultancy() {
  return (
    <>
      <SEO
        title="Trading Consultancy & Market Analysis | JETTONE Dubai"
        description="Market insights, trading consultancy and educational resources across global asset classes — JETTONE, Dubai, UAE."
        path="/trading-consultancy"
      />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="max-w-3xl">
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#38BDF8] mb-3 block">
            TRADING CONSULTANCY &amp; MARKET ANALYSIS
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            Informed Decisions.
            <span className="text-[#38BDF8] block mt-1">Clearer Markets.</span>
          </h1>
          <p className="font-body text-[#BCE2CD] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            Market insights, trading analysis, investment consulting and educational resources across global asset classes.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              to="/contact"
              className="relative overflow-hidden group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              <span className="relative z-10">Explore Our Approach</span>
              <ArrowRight className="w-4 h-4 relative z-10 stroke-[2.5]" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 1. Consultancy Areas (2x2 Grid) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#38BDF8] block mb-2">
            EXPERTISE
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            Consultancy Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {consultancyAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_36px_rgba(10,38,25,0.2)] flex items-start gap-4 sm:gap-5 group hover:border-[#38BDF8]/70 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#38BDF8] shrink-0 mt-1">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {area.heading}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. Global Markets Covered (8-Tile Grid linking to /services) */}
      <Markets />

      {/* 3. Disclaimer Callout */}
      <section className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="rounded-xl bg-[#092217]/90 border border-[#225838] border-l-4 border-l-[#38BDF8] p-5 sm:p-6 backdrop-blur-md shadow-md">
          <div className="flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#38BDF8] tracking-wider mb-1">
                Consultancy &amp; Educational Notice
              </h4>
              <p className="text-xs sm:text-sm text-[#D1E7DC] leading-relaxed">
                Information provided is for educational and informational purposes only and does not constitute financial advice or a recommendation to trade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Strip */}
      <ContactCtaStrip
        title="Schedule a Trading Consultancy Session"
        subtext="Speak with JETTONE’s research and analysis specialists to discuss your trading objectives."
        ctaText="Schedule Discussion →"
        ctaLink="/contact"
      />
    </>
  );
}
