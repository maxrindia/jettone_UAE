import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { insightsArticles } from '../data/insightsData';
import ContactCtaStrip from '../components/ContactCtaStrip';

const additionalArticles = [
  {
    id: 'precious-metals-flow',
    category: 'COMMODITIES',
    badgeClass: 'bg-[#F5D327]/15 text-[#F5D327] border-[#F5D327]/30',
    title: 'Precious Metals Flow Analysis: Dubai’s Emerging Bullion Benchmark Role',
    date: 'October 2026',
    readTime: '4 min read',
    summary:
      'Exploring supply-demand shifts in physical gold and silver, macroeconomic hedging demand, and regional vault allocation patterns.'
  },
  {
    id: 'global-equity-valuation',
    category: 'MARKETS',
    badgeClass: 'bg-[#F5D327]/15 text-[#F5D327] border-[#F5D327]/30',
    title: 'Global Equity Valuation Metrics in an Era of Quantitative Realignment',
    date: 'October 2026',
    readTime: '4 min read',
    summary:
      'Evaluating cross-market earnings yields, sector rotations, and the evolving behavior of major equity index benchmarks.'
  },
  {
    id: 'walk-forward-optimization',
    category: 'TECHNOLOGY',
    badgeClass: 'bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/30',
    title: 'Walk-Forward Optimization: Overcoming Overfitting in Quantitative Research',
    date: 'October 2026',
    readTime: '5 min read',
    summary:
      'Methodologies for backtesting strategy parameters without succumbing to curve-fitting pitfalls or sample-selection biases.'
  }
];

export default function InsightsPage() {
  return (
    <>
      <SEO
        title="Market Insights & Trading Analysis | JETTONE"
        description="Stay informed with JETTONE's market perspectives, trading strategy insights and financial technology commentary."
        path="/insights"
      />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="max-w-3xl">
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-3 block">
            LATEST INSIGHTS
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            Market Perspectives.
          </h1>
          <p className="font-body text-[#BCE2CD] text-base sm:text-lg leading-relaxed max-w-2xl">
            Insights on financial markets, trading strategies and technology.
          </p>
        </div>
      </section>

      {/* Editorial Announcement Banner */}
      <section className="relative px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full mb-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F3524]/90 via-[#0A2619]/90 to-[#123E2A]/90 border border-[#00E676]/40 backdrop-blur-md flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#F5D327] shrink-0" />
            <p className="font-body text-xs sm:text-sm text-white font-medium">
              Market intelligence &amp; research articles published by the JETTONE research desk.
            </p>
          </div>
          <span className="text-[11px] font-mono font-semibold text-[#00E676] px-2.5 py-1 rounded bg-[#00E676]/15 border border-[#00E676]/30 shrink-0">
            Research Desk
          </span>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="relative py-6 sm:py-10 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {insightsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl p-6 sm:p-7 rounded-2xl border border-[#287348]/55 shadow-lg flex flex-col justify-between hover:border-[#00E676]/70 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-full border ${article.badgeClass}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#88A896]">
                    <Clock className="w-3.5 h-3.5 text-[#00E676]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-headline text-lg sm:text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#F5D327] transition-colors">
                  {article.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#25633F]/40 flex items-center justify-between">
                <Link
                  to={`/insights/${article.id}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#F5D327] hover:text-white transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 text-[#00E676] group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[10px] font-mono text-[#88A896]">
                  {article.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <ContactCtaStrip
        title="Stay Informed With JETTONE"
        subtext="Connect with our research team to discuss specific market analysis and insights."
        ctaText="Connect With Team →"
        ctaLink="/contact"
      />
    </>
  );
}
