import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    category: 'MARKETS',
    title: 'Macro Liquidity & Global Currency Flows in Emerging Financial Centers',
    summary: 'Evaluating central bank monetary divergence and systematic trade mechanics.',
    date: 'Date TBC',
    readTime: 'Placeholder — content pending',
    image: '/images/service-invest.jpg'
  },
  {
    category: 'TECHNOLOGY',
    title: 'Algorithmic Risk Parameterization: Managing Execution Latency in Systematic Models',
    summary: 'A structured examination of rule validation and order management architectures.',
    date: 'Date TBC',
    readTime: 'Placeholder — content pending',
    image: '/images/jbot-mobile-app.jpg'
  },
  {
    category: 'STRATEGY',
    title: 'Institutional Capital Structuring: Frameworks for Long-Term Portfolio Discipline',
    summary: 'Aligning governance, asset diversity, and institutional standards for sustained performance.',
    date: 'Date TBC',
    readTime: 'Placeholder — content pending',
    image: '/images/service-trading.jpg'
  }
];

export default function Insights() {
  return (
    <section className="relative py-10 sm:py-14 2xl:py-20 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full" id="insights">
      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-7 sm:mb-8 2xl:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl 2xl:max-w-3xl"
        >
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-2 block">
            LATEST INSIGHTS
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-[2.6rem] 2xl:text-[3.2rem] font-bold text-white mb-2 leading-tight">
            Market Perspectives.
          </h2>
          <p className="font-body text-[#BCE2CD] font-normal text-sm md:text-base leading-relaxed">
            Market insights, trading strategies and technology perspectives from JETTONE.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 md:mt-0"
        >
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5D327] hover:text-white transition-colors"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4 text-[#00E676]" />
          </Link>
        </motion.div>
      </div>

      {/* 3 Placeholder Cards */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {articles.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="relative bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl rounded-2xl flex flex-col justify-between border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_36px_rgba(10,38,25,0.18)] group hover:border-[#00E676]/75 transition-all hover:shadow-[0_16px_44px_rgba(0,230,118,0.25)]"
          >
            <div>
              {/* Image */}
              <div className="relative w-full h-44 rounded-t-2xl overflow-hidden bg-[#0A2619]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 rounded-t-2xl"
                />
                <div className="absolute top-3 left-3 bg-[#0A2619]/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10.5px] font-mono font-semibold text-[#F5D77F] border border-[#2E7A4E]/60">
                  {item.category}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-2.5 text-xs text-[#A8D3BA] font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#00E676]" />
                  <span className="text-[11px] text-[#F5D327]/80">{item.readTime}</span>
                </div>

                <h3 className="font-headline text-lg sm:text-xl font-semibold text-white mb-2.5 group-hover:text-[#F5D327] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>
            </div>

            <div className="p-5 sm:p-6 pt-0 border-t border-[#25633F]/40 mt-auto">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#F5D327] hover:text-white transition-colors pt-3"
              >
                <span>Read Article →</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
