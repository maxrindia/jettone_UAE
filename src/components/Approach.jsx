import React from 'react';
import { motion } from 'framer-motion';
import { Search, Layers, BarChart2, MessageSquareCheck } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Understand Your Needs',
    description: 'We listen to your specific mandate, trading requirements, and risk tolerance.',
    icon: Search
  },
  {
    step: '02',
    title: 'Structured Approach',
    description: 'We design clear frameworks and workflows tailored to your objectives.',
    icon: Layers
  },
  {
    step: '03',
    title: 'Insights and Evaluation',
    description: 'Rigorous market analysis and technology validation ensure informed choices.',
    icon: BarChart2
  },
  {
    step: '04',
    title: 'Ongoing Communication',
    description: 'Dedicated support, regular reporting, and transparent collaboration at every stage.',
    icon: MessageSquareCheck
  }
];

export default function Approach() {
  return (
    <section className="relative py-10 sm:py-14 2xl:py-20 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full" id="approach">
      {/* Section Header */}
      <div className="relative z-10 max-w-2xl 2xl:max-w-3xl mb-8 sm:mb-10 2xl:mb-12">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-2 block"
        >
          OUR APPROACH
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-headline text-3xl sm:text-4xl md:text-[2.6rem] 2xl:text-[3.2rem] font-bold text-white leading-tight"
        >
          Clarity in Every Step.
        </motion.h2>
      </div>

      {/* 4 Steps Horizontal Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8 relative z-10">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl p-6 rounded-2xl flex flex-col justify-between border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_36px_rgba(10,38,25,0.22)] group hover:border-[#00E676]/75 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#00E676] group-hover:bg-[#00E676] group-hover:text-[#0A2619] transition-all">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#F5D327] px-2 py-0.5 rounded bg-[#F5D327]/15 border border-[#F5D327]/30">
                    STEP {item.step}
                  </span>
                </div>

                <h3 className="font-headline text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-[#F5D327] transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#25633F]/50 flex items-center gap-2 text-xs font-semibold text-[#00E676]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                <span>Structured Protocol</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
