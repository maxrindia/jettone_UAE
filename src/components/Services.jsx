import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Cpu, ArrowRight } from 'lucide-react';

const services = [
  {
    number: 'Path 01',
    title: 'Investment Partner',
    accentColor: 'text-[#F5D327]',
    accentBadge: 'border-[#F5D327]/40 bg-[#F5D327]/15 text-[#F5D327]',
    accentGlow: 'hover:border-[#F5D327]/70',
    description:
      'Explore structured investment partnership opportunities with a clear understanding of the offering, process, terms and risks involved.',
    icon: Handshake,
    image: '/images/service-invest.jpg',
    ctaText: 'Explore Investment Partner',
    ctaLink: '/services/investment-partner',
    isAnchor: false
  },
  {
    number: 'Path 02',
    title: 'Trading Consultancy',
    accentColor: 'text-[#38BDF8]',
    accentBadge: 'border-[#38BDF8]/40 bg-[#38BDF8]/15 text-[#38BDF8]',
    accentGlow: 'hover:border-[#38BDF8]/70',
    description:
      'Market insights, trading analysis, investment consulting and educational resources across global asset classes.',
    icon: TrendingUp,
    image: '/images/service-trading.jpg',
    ctaText: 'Explore Consultancy',
    ctaLink: '/services/consultancy',
    isAnchor: false
  },
  {
    number: 'Path 03',
    title: 'JBot Technology',
    accentColor: 'text-[#2DD4BF]',
    accentBadge: 'border-[#2DD4BF]/40 bg-[#2DD4BF]/15 text-[#2DD4BF]',
    accentGlow: 'hover:border-[#2DD4BF]/70',
    description:
      'A suite of tools to create, backtest and deploy algorithmic trading strategies with a structured, technology-driven approach.',
    icon: Cpu,
    image: '/images/jbot-mobile-app.jpg',
    ctaText: 'Discover JBot',
    ctaLink: '#jbot',
    isAnchor: true
  }
];

export default function Services() {
  return (
    <section className="relative pt-8 sm:pt-12 2xl:pt-16 pb-12 sm:pb-16 2xl:pb-24 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full" id="services">
      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-7 sm:mb-8 2xl:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl 2xl:max-w-3xl"
        >
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-2 block">
            OUR SERVICES
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-[2.6rem] 2xl:text-[3.2rem] font-bold text-white leading-tight">
            Three Paths. One Perspective.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-[#BCE2CD] max-w-md 2xl:max-w-lg mt-3 md:mt-0 font-normal leading-relaxed text-sm md:text-base 2xl:text-lg"
        >
          JETTONE brings together investment opportunities, trading consultancy, and trading technology through three dedicated pathways.
        </motion.p>
      </div>

      {/* 3 Service Pillar Cards */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 2xl:gap-10">
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
              className={`relative bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl rounded-2xl flex flex-col justify-between border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_36px_rgba(10,38,25,0.18)] transition-all hover:shadow-[0_16px_44px_rgba(0,230,118,0.2)] group ${service.accentGlow}`}
            >
              {/* Header Image */}
              <div className="relative w-full h-44 2xl:h-52 rounded-t-2xl overflow-hidden bg-[#0A2619]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2619] via-[#0A2619]/35 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#0A2619]/90 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-2 border border-[#2E7A4E]/60 shadow-sm">
                  <Icon className={`w-3.5 h-3.5 ${service.accentColor}`} />
                  <span className={`text-[10px] font-semibold tracking-wider uppercase font-mono ${service.accentColor}`}>
                    {service.number}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6 lg:p-7 pt-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-xl sm:text-2xl font-semibold text-white mb-2.5 group-hover:text-[#F5D77F] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-[#BCE2CD] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#25633F]/50 flex items-center justify-between">
                  {service.isAnchor ? (
                    <a
                      href={service.ctaLink}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5D77F] hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#00E676]" />
                    </a>
                  ) : (
                    <Link
                      to={service.ctaLink}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5D77F] hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-[#00E676]" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
