import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const articles = [
  {
    title: 'Navigating Interest Rate Shifts in Q3 2024: An Institutional Perspective',
    category: 'Macro Economics',
    readTime: '4 min read',
    summary:
      'How global central bank divergence creates tactical opportunities across foreign exchange and sovereign debt markets.',
    author: 'JETTONE Research Desk',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7WKTKSCaksA74CjEflYZBiza1RK531VoUINcIJsCyjjSvn3Jf6AF0dWfgGfa6_drB19uhZECZclSrWbjIiVBRb4-hXd_ZONSMkZDQiAJKm4lkkGTWrvvKuklzDfcGCVexU90Q3Glk1IVYlz9RWr-8gtK1tYBskv9fHyvBvEY1wdIR2n1y0_MqaSYUwdMZMyTk3PAt9R5v4Fjl-0WgJnXsscIQdCrkZtlPl_YSnBHDGwWlHsPPbWGd'
  },
  {
    title: 'The Role of Neural Networks in Mitigating High-Frequency Drawdowns',
    category: 'Algorithmic Trading',
    readTime: '6 min read',
    summary:
      'An inside look at how JBot’s adaptive sizing engine responds to sudden liquidity crunches without human latency.',
    author: 'Dr. Al-Maktoum',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALGbYqz-8FlsBEHio7ucjxg4DfYEmDNnIRgXIoadQsRR_M_a13cHUVEraCI9a28PC8MxtN30Dmlfr2_jxbdThhG9Z9bn4F5Hn5I12CePrBCPaTpfbCAOnUw2ah8lTaFhsXq7D8EVJZJk2wzd-xsU8IqgIZmSTKjfUQufE6Pxrcg9bGMQGTcjjj35E2VslKDgYjX_0f9ysRuV7j8O6BetymAP5CFEc58Vtz2VYzUzWCE0bZpsuq2Dgd'
  },
  {
    title: 'Structuring Family Office Portfolios for Multi-Generational Stability',
    category: 'Wealth Strategy',
    readTime: '5 min read',
    summary:
      'Balancing high-alpha alternative assets with robust capital preservation strategies in an evolving regulatory climate.',
    author: 'Private Wealth Division',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0HUNaanzg2CSKL1JoeBSkq-OxYpzhf3bBwIOYVavNrLl3Iom7WwlZKsQpm5VoOBt6RyKAiCqalqHjUWhxT-tHS4qeERlepe_KWhAQzPTGkERNgsTnnNOE9tNbrE7Cv9ahyRiz-wjKMGfDt-0QZiEQny6ZlMRHCOLqtb6ZaRVEOTSRwimkts-6ghe8_l5ekkEE0_l-GePrsTr6bcdj2i_TUmOfN4QYEAL4mGQaIFdzSdr2gN5lwgfx'
  }
];

export default function Insights() {
  return (
    <section className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full overflow-hidden" id="insights">
      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-7 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] mb-3 block">
            Market Insights
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-white mb-3 leading-tight">
            Market Perspectives.
          </h2>
          <p className="font-body text-[#BCE2CD] font-normal text-sm md:text-base leading-relaxed mt-4">
            Explore educational resources, market developments, trading concepts and technology insights to build a clearer understanding of financial markets.
          </p>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          href="#insights"
          className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#F5D327] hover:text-[#FFFFFF] transition-colors shrink-0"
        >
          <span>View All Insights</span>
          <ArrowRight className="w-4 h-4 text-[#00E676]" />
        </motion.a>
      </div>

      {/* 3 Articles Grid with Transparent Emerald Glass Finish */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {articles.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="relative bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl rounded-2xl overflow-hidden flex flex-col justify-between border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_36px_rgba(10,38,25,0.18)] group hover:border-[#00E676]/75 transition-all hover:shadow-[0_16px_44px_rgba(0,230,118,0.25)] hover:from-[#0F3524]/85 hover:via-[#0A2619]/90 hover:to-[#123E2A]/80"
          >
            <div>
              <div className="relative w-full h-52 overflow-hidden bg-[#0A2619]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute top-4 left-4 bg-[#0A2619]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#F5D77F] border border-[#2E7A4E]/60 shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                  {item.category}
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="flex items-center gap-2 mb-3 text-xs text-[#A8D3BA]">
                  <Clock className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>{item.readTime}</span>
                </div>

                <h3 className="font-headline text-xl sm:text-2xl font-semibold text-[#FFFFFF] mb-3 group-hover:text-[#F5D77F] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="font-body text-xs md:text-sm text-[#BCE2CD] leading-relaxed">
                  {item.summary}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
