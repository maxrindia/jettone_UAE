import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileCheck, Compass, MessageSquareCode } from 'lucide-react';

const steps = [
  {
    step: '01',
    name: 'Understand',
    tagline: 'Objective Discovery',
    description: 'Identify your objectives and requirements.',
    icon: Search
  },
  {
    step: '02',
    name: 'Evaluate',
    tagline: 'Risk & Scope Review',
    description: 'Review relevant information, service scope and risks.',
    icon: FileCheck
  },
  {
    step: '03',
    name: 'Explore',
    tagline: 'Pathway Alignment',
    description: 'Discover the service pathway that fits your needs.',
    icon: Compass
  },
  {
    step: '04',
    name: 'Connect',
    tagline: 'Expert Dialogue',
    description: 'Speak with the appropriate JETTONE team.',
    icon: MessageSquareCode
  }
];

export default function Approach() {
  return (
    <section className="py-14 sm:py-16 bg-[#f3ece1] px-6 lg:px-12 border-t border-[#e5dcd3]" id="approach">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest uppercase text-[#c2652a] mb-3 block"
          >
            Our Approach
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-headline text-4xl sm:text-5xl font-normal text-[#342822] mb-4"
          >
            Clarity in Every Step.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-body text-[#786d64] font-normal text-sm md:text-base leading-relaxed"
          >
            A disciplined, transparent progression designed to align institutional rigour with your specific capital objectives.
          </motion.p>
        </div>

        {/* 4 Steps Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#ffffff] rounded-2xl p-7 border border-[#e8ded3] shadow-[0_4px_16px_rgba(72,50,38,0.03)] flex flex-col justify-between hover:border-[#c2652a]/50 transition-all hover:shadow-md group relative overflow-hidden"
              >
                {/* Background Large Step Number */}
                <div className="absolute -top-3 -right-2 text-6xl font-headline font-bold text-[#e5dcd3]/30 select-none group-hover:text-[#c2652a]/10 transition-colors pointer-events-none">
                  {item.step}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#fbe8d8] flex items-center justify-center text-[#c2652a] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#c2652a] tracking-wider">
                      PHASE {item.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#786d64] block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="font-headline text-2xl font-normal text-[#342822] mb-3">
                    {item.name}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-[#786d64] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#e8ded3]/80 flex items-center gap-2 text-xs font-semibold text-[#c2652a]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c2652a]" />
                  <span>Transparent Process</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
