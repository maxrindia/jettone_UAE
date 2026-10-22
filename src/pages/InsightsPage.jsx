import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { insightsArticles } from '../data/insightsData';
import ContactCtaStrip from '../components/ContactCtaStrip';

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
              Market intelligence &amp; research articles published by JETTONE.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="relative py-4 sm:py-8 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {insightsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-gradient-to-br from-[#0F3524]/85 via-[#0A2619]/90 to-[#123E2A]/80 backdrop-blur-2xl rounded-xl border border-[#287348]/55 shadow-md flex flex-col justify-between hover:border-[#00E676]/70 transition-all group overflow-hidden"
            >
              <div>
                {/* Article Visual Thumbnail */}
                <div className="relative w-full h-32 sm:h-36 overflow-hidden bg-[#0A2619]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`text-[9.5px] font-mono font-semibold uppercase px-2 py-0.5 rounded-md border ${article.badgeClass} bg-[#0A2619]/85 backdrop-blur-md`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 pb-2">
                  <div className="flex items-center gap-1.5 mb-1.5 text-[10.5px] font-mono text-[#88A896]">
                    <Clock className="w-3 h-3 text-[#00E676]" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-headline text-sm sm:text-base font-bold text-white mb-1.5 leading-snug group-hover:text-[#F5D327] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="font-body text-xs text-[#BCE2CD] leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 pt-2 border-t border-[#25633F]/40 flex items-center justify-between">
                <Link
                  to={`/insights/${article.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5D327] hover:text-white transition-colors group/link"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00E676] group-hover/link:translate-x-1 transition-transform" />
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
        subtext="Connect with our team to discuss specific market analysis and insights."
        ctaText="Connect With Team →"
        ctaLink="/contact"
      />
    </>
  );
}
