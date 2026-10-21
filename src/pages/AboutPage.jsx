import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Cpu,
  Compass,
  Handshake,
  Globe2,
  Building2,
  Lock,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import Services from '../components/Services';
import ContactCtaStrip from '../components/ContactCtaStrip';

const values = [
  {
    icon: ShieldCheck,
    title: 'Transparency',
    statement: 'Clear terms, open documentation, and honest risk disclosure form the bedrock of every client and partner relationship.'
  },
  {
    icon: Cpu,
    title: 'Technology',
    statement: 'Advanced algorithmic architecture and quantitative infrastructure designed to remove latency and emotional bias from trading.'
  },
  {
    icon: Compass,
    title: 'Discipline',
    statement: 'A rigorous adherence to structured risk governance and systematic execution frameworks across all market regimes.'
  },
  {
    icon: Handshake,
    title: 'Partnership',
    statement: 'Long-term collaborative alignment ensuring mutual objectives and institutional standards guide every engagement.'
  }
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About JETTONE | Dubai Financial Services"
        description="JETTONE is a Dubai-based financial services company offering investment partnerships, trading consultancy and algorithmic trading technology."
        path="/about"
      />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="max-w-3xl">
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-3 block">
            ABOUT JETTONE
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            A Different Perspective on
            <span className="text-[#F5D327] block mt-1">Financial Services.</span>
          </h1>
          <p className="font-body text-[#BCE2CD] text-base sm:text-lg leading-relaxed max-w-2xl">
            JETTONE is a Dubai-based financial services company operating across three areas: investment partnerships, trading consultancy and intelligent trading technology.
          </p>
        </div>
      </section>

      {/* 1. Who We Are: 2-column (left paragraph, right: 3 stat-style tiles with "—") */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#00E676] block mb-2">
              OUR IDENTITY
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white mb-4">
              Pioneering Intelligent Financial Solutions in Dubai
            </h2>
            <div className="font-body text-[#BCE2CD] text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Founded on principles of transparency, quantitative rigor, and institutional discipline, JETTONE bridges traditional financial services with modern algorithmic execution. Headquartered in Dubai, United Arab Emirates, we leverage the region’s dynamic position at the crossroads of global capital flows.
              </p>
              <p>
                Rather than acting as a retail broker, JETTONE operates as an agile financial services and technology provider. We work collaboratively with institutional investors, family offices, and systematic traders to structure partnerships, provide market insight, and deploy proprietary algorithmic software.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F3524]/80 to-[#0A2619]/90 border border-[#287348]/60 backdrop-blur-md">
              <span className="text-xs font-mono font-semibold uppercase text-[#88A896] block mb-1">
                Institutional Mandates
              </span>
              <span className="text-3xl font-headline font-bold text-[#F5D327] block">—</span>
              <span className="text-xs text-[#BCE2CD] mt-1 block">Bespoke agreements aligned per partner</span>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F3524]/80 to-[#0A2619]/90 border border-[#287348]/60 backdrop-blur-md">
              <span className="text-xs font-mono font-semibold uppercase text-[#88A896] block mb-1">
                Global Asset Coverage
              </span>
              <span className="text-3xl font-headline font-bold text-[#00E676] block">—</span>
              <span className="text-xs text-[#BCE2CD] mt-1 block">Multi-asset research and technology coverage</span>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F3524]/80 to-[#0A2619]/90 border border-[#287348]/60 backdrop-blur-md">
              <span className="text-xs font-mono font-semibold uppercase text-[#88A896] block mb-1">
                Headquarters
              </span>
              <span className="text-2xl font-headline font-bold text-white block">Dubai, UAE</span>
              <span className="text-xs text-[#BCE2CD] mt-1 block">Global financial hub connectivity</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Our Three Areas */}
      <Services />

      {/* 3. Our Values (4 tiles) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] block mb-2">
            GUIDING PRINCIPLES
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, index) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl p-6 rounded-2xl border border-[#287348]/55 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#F5D327] mb-4">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="font-headline text-lg font-bold text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed">
                    {v.statement}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Dubai & Global Markets (No regulatory affiliation claim) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#082015]/90 to-[#0A2619]/90 border border-[#1E4D34] backdrop-blur-xl">
          <div className="flex items-center gap-2.5 text-[#F5D327] text-xs font-mono font-semibold uppercase mb-3">
            <Globe2 className="w-4 h-4" />
            <span>Strategic Location</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white mb-3">
            Dubai &amp; Global Markets
          </h2>
          <p className="font-body text-sm sm:text-base text-[#BCE2CD] leading-relaxed max-w-4xl">
            Operating from Dubai, JETTONE sits at the intersection of European, Asian, and Middle Eastern trading sessions. Dubai’s world-class telecommunications infrastructure, business-friendly ecosystem, and strategic time-zone advantage create an ideal launchpad for multi-asset market intelligence and systematic financial technology solutions.
          </p>
        </div>
      </section>

      {/* 5. CTA */}
      <ContactCtaStrip
        title="Connect With JETTONE"
        subtext="Reach out to discuss investment partnerships, consultancy, or technology solutions."
        ctaText="Enquire Now →"
        ctaLink="/contact"
      />
    </>
  );
}
