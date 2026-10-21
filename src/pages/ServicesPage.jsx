import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Currency,
  Coins,
  Flame,
  TrendingUp,
  Boxes,
  Compass,
  FileSearch,
  Landmark,
  ArrowRight,
  Info
} from 'lucide-react';
import SEO from '../components/SEO';
import ContactCtaStrip from '../components/ContactCtaStrip';

const fullServices = [
  {
    num: '01',
    name: 'Forex Trading',
    icon: Currency,
    description:
      'Access global foreign exchange liquidity across major, minor, and emerging market currency pairs. Benefit from tier-one pricing feeds, low-latency execution routing, and deep market depth. Our consultancy frameworks assist traders in structuring systematic currency exposure and managing exchange volatility.',
    examples: 'EUR/USD, USD/JPY, GBP/USD, USD/AED (Examples only)',
    learnMoreLink: '/services/consultancy'
  },
  {
    num: '02',
    name: 'Gold & Silver Trading',
    icon: Coins,
    description:
      'Participate in precious metals trading encompassing spot gold, silver, platinum, and palladium. Leverage Dubai’s strategic status as the global City of Gold with deep physical and synthetic benchmark liquidity. We provide in-depth bullion flow analysis and macroeconomic correlation models.',
    examples: 'XAU/USD (Spot Gold), XAG/USD (Spot Silver) (Examples only)',
    learnMoreLink: '/services/consultancy'
  },
  {
    num: '03',
    name: 'Energy & Commodity Trading',
    icon: Flame,
    description:
      'Navigate energy markets and industrial commodities with structured insight into supply chain disruptions and geopolitical catalysts. Cover crude oil, natural gas, agricultural futures, and base metals. Our advisory desk offers comprehensive seasonal curve analysis and demand-supply modeling.',
    examples: 'Brent Crude, WTI, Natural Gas, Copper (Examples only)',
    learnMoreLink: '/services/consultancy'
  },
  {
    num: '04',
    name: 'Global Index Trading',
    icon: TrendingUp,
    description:
      'Trade leading global equity benchmarks that reflect worldwide economic performance. Access cash and index futures on premier exchanges across the US, Europe, Asia, and regional Middle Eastern bourses. Our research enables tactical positioning across diversified macroeconomic cycles.',
    examples: 'S&P 500, NASDAQ 100, FTSE 100, Nikkei 225, DFM (Examples only)',
    learnMoreLink: '/services/consultancy'
  },
  {
    num: '05',
    name: 'Cryptocurrency Trading',
    icon: Boxes,
    description:
      'Engage with digital asset markets supported by direct liquidity gateways and advanced algorithmic order routing. Access major digital currencies with structured risk parameters and cold-storage security standards. We examine cross-venue spreads, network on-chain indicators, and market microstructure.',
    examples: 'BTC/USD, ETH/USD, SOL/USD (Examples only)',
    learnMoreLink: '/services/consultancy'
  },
  {
    num: '06',
    name: 'Futures & Options Trading',
    icon: Compass,
    description:
      'Employ exchange-traded derivative instruments for portfolio hedging, directional positioning, and volatility management. Access liquid multi-asset derivative contracts across premier international exchanges. Our quantitative review examines strike skew, implied volatility surfaces, and risk-defined spreads.',
    examples: 'Index Futures, Equity Options, Commodity Swaps (Examples only)',
    learnMoreLink: '/services/consultancy'
  },
  {
    num: '07',
    name: 'Market Analysis & Education',
    icon: FileSearch,
    description:
      'Strengthen your trading perspective through daily market intelligence, technical charting setups, and professional educational modules. We deconstruct macroeconomic releases, central bank policy shifts, and liquidity dynamics into practical insights for traders at all experience tiers.',
    examples: 'Daily Technical Briefings, Macro Outlook Reports, Webinars (Examples only)',
    learnMoreLink: '/contact'
  },
  {
    num: '08',
    name: 'Stock Market Investment Consulting',
    icon: Landmark,
    description:
      'Receive strategic guidance on global equity portfolios, sector allocation, and quantitative factor screening. We assist strategic partners and family offices in evaluating equity risk premiums, dividend quality, and corporate governance metrics across domestic and international exchanges.',
    examples: 'Global Blue-chips, GCC Equities, Dividend Aristocrats (Examples only)',
    learnMoreLink: '/contact'
  }
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Global Trading Services & Market Analysis | JETTONE"
        description="Explore forex, commodities, indices, crypto and more through JETTONE's trading consultancy and market analysis services, Dubai, UAE."
        path="/services"
      />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="max-w-3xl">
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-3 block">
            GLOBAL MARKETS &amp; TRADING SERVICES
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            Explore the Opportunities.
          </h1>
          <p className="font-headline text-xl sm:text-2xl text-[#F5D327] font-semibold mb-3">
            Analyse. Strategise. Trade Smarter.
          </p>
          <p className="font-body text-[#BCE2CD] text-base sm:text-lg leading-relaxed max-w-2xl">
            Comprehensive trading consultancy, market intelligence, and systematic technology frameworks across global asset classes.
          </p>
        </div>
      </section>

      {/* 8 Full Service Cards */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="bg-gradient-to-br from-[#0F3524]/80 via-[#0A2619]/85 to-[#123E2A]/75 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl border border-[#287348]/55 shadow-lg flex flex-col justify-between group hover:border-[#00E676]/70 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#00E676] group-hover:bg-[#00E676] group-hover:text-[#0A2619] transition-all">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#F5D327] block">
                          SERVICE {service.num}
                        </span>
                        <h2 className="font-headline text-xl sm:text-2xl font-bold text-white group-hover:text-[#F5D327] transition-colors">
                          {service.name}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="p-3 rounded-lg bg-[#071911]/80 border border-[#1E4D34] mb-4">
                    <span className="text-[10px] font-mono font-semibold uppercase text-[#88A896] block mb-1">
                      Relevant Asset Examples:
                    </span>
                    <span className="text-xs font-mono text-white">
                      {service.examples}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#25633F]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[10.5px] text-[#88A896]">
                    <Info className="w-3.5 h-3.5 shrink-0 text-[#F5D327]" />
                    <span>Availability subject to broker access &amp; regulation.</span>
                  </div>

                  <Link
                    to={service.learnMoreLink}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#F5D327] hover:text-white transition-colors shrink-0"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 text-[#00E676]" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <ContactCtaStrip
        title="Ready to Discuss Trading Services?"
        subtext="Contact JETTONE’s Dubai advisory desk to evaluate your strategic requirements."
        ctaText="Enquire Now →"
        ctaLink="/contact"
      />
    </>
  );
}
