import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Cpu, ArrowRight } from 'lucide-react';

const services = [
  {
    number: 'Stewardship',
    title: 'Investment Partner',
    description:
      'Explore partnership opportunities, understand the process and review the relevant terms and risks.',
    features: ['Tailored Mandates', 'Multi-Asset Access', 'Risk Governance'],
    icon: Handshake,
    image: '/images/service-invest.jpg',
    ctaText: 'Explore Partnerships',
    ctaLink: '#contact'
  },
  {
    number: 'Advisory',
    title: 'Trading Consultancy & Market Analysis',
    description:
      'Access market insights, stock-market investment consulting and trading education to support informed decision-making.',
    features: ['Quantitative Research', 'Execution Frameworks', 'Investor Education'],
    icon: TrendingUp,
    image: '/images/service-trading.jpg',
    ctaText: 'Explore Consultancy',
    ctaLink: '#contact'
  },
  {
    number: 'Technology',
    title: 'JBot Technology',
    description:
      'Discover algorithmic trading technology for strategy development, backtesting and supported trading workflows.',
    features: ['Zero Code Strategy Builder', '7+ Yrs Backtesting Studio', 'Direct Broker APIs'],
    icon: Cpu,
    image: '/images/jbot-mobile-app.jpg',
    ctaText: 'Explore JBot',
    ctaLink: '#jbot'
  }
];

export default function Services() {
  return (
    <section className="relative pt-6 sm:pt-8 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full" id="services">
      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-7 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] mb-2 block">
            Our Services
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-white leading-tight">
            Three Paths. One Perspective.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-[#BCE2CD] max-w-md mt-3 md:mt-0 font-normal leading-relaxed text-sm md:text-base"
        >
          JETTONE brings together investment opportunities, market expertise and trading technology through three distinct service areas.
        </motion.p>
      </div>

      {/* 3 Service Pillar Cards with Transparent Emerald Glassy Finish - NO overflow:hidden on card container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="relative bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl rounded-2xl flex flex-col justify-between border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_36px_rgba(10,38,25,0.18)] hover:border-[#00E676]/75 transition-all hover:shadow-[0_16px_44px_rgba(0,230,118,0.25)] hover:from-[#0F3524]/85 hover:via-[#0A2619]/90 hover:to-[#123E2A]/80 group"
            >
              {/* Realistic Header Image child gets borderTopLeftRadius + borderTopRightRadius per rule */}
              <div className="relative w-full h-44 rounded-t-2xl overflow-hidden bg-[#0A2619]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619] via-[#0A2619]/35 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#0A2619]/90 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-2 border border-[#2E7A4E]/60 shadow-sm">
                  <Icon className="w-3.5 h-3.5 text-[#00E676]" />
                  <span className="text-[10px] font-semibold text-[#F5D77F] tracking-wider uppercase font-mono">
                    {service.number}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 lg:p-7 pt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-xl sm:text-2xl font-semibold text-[#FFFFFF] mb-3 group-hover:text-[#F5D77F] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-[#BCE2CD] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <ul className="space-y-2 mb-6 text-xs font-medium text-[#E4F5EB] border-t border-[#25633F]/60 pt-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.ctaLink}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5D77F] hover:text-[#FFFFFF] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#00E676]" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
