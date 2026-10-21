import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { insightsArticles } from '../data/insightsData';

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

      {/* 3 Articles Grid — Compact & Sleek */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {insightsArticles.slice(0, 3).map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative bg-gradient-to-br from-[#0F3524]/85 via-[#0A2619]/90 to-[#123E2A]/80 backdrop-blur-2xl rounded-xl flex flex-col justify-between border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_8px_24px_rgba(10,38,25,0.2)] group hover:border-[#00E676]/75 transition-all hover:shadow-[0_12px_32px_rgba(0,230,118,0.2)]"
          >
            <div>
              {/* Compact Thumbnail Image */}
              <div className="relative w-full h-32 sm:h-36 rounded-t-xl overflow-hidden bg-[#0A2619]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619] via-transparent to-transparent opacity-60" />
                <div className="absolute top-2.5 left-2.5 bg-[#0A2619]/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono font-semibold text-[#F5D77F] border border-[#2E7A4E]/60">
                  {item.category}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 pb-2">
                <div className="flex items-center gap-1.5 mb-1.5 text-[10.5px] text-[#A8D3BA] font-mono">
                  <Clock className="w-3 h-3 text-[#00E676]" />
                  <span>{item.readTime}</span>
                </div>

                <h3 className="font-headline text-sm sm:text-base font-semibold text-white mb-1.5 group-hover:text-[#F5D327] transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="font-body text-xs text-[#BCE2CD] leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 pt-2 border-t border-[#25633F]/40 mt-auto flex items-center justify-between">
              <Link
                to={`/insights/${item.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5D327] hover:text-white transition-colors group/link"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-[#00E676]" />
              </Link>
              <span className="text-[10px] font-mono text-[#88A896]">
                {item.date}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
