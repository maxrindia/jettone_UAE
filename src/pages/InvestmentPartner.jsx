import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Scale,
  Eye,
  FileCheck2,
  Calendar,
  Layers,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import SEO from '../components/SEO';
import ContactCtaStrip from '../components/ContactCtaStrip';

const offerings = [
  {
    icon: Scale,
    heading: 'Partnership Structure',
    description:
      'Tailored institutional frameworks designed to align mutual interests and long-term capital horizons. Each structure is established with well-defined operational mandates and clear allocation terms.'
  },
  {
    icon: Eye,
    heading: 'Process Clarity',
    description:
      'A structured and predictable engagement pathway from introduction to execution. Transparent documentation ensures complete visibility at every operational phase without ambiguity.'
  },
  {
    icon: ShieldCheck,
    heading: 'Risk Transparency',
    description:
      'Rigorous risk governance and comprehensive disclosure of potential market scenarios. We prioritize candid risk evaluation to support informed institutional decisions.'
  }
];

const timelineSteps = [
  {
    number: '01',
    title: 'Initial Discussion',
    description:
      'Explore strategic fit, investment objectives, and operational requirements in an introductory consultation.'
  },
  {
    number: '02',
    title: 'Proposal & Terms Review',
    description:
      'Review a structured proposal outlining mandate scope, governance guidelines, and commercial terms.'
  },
  {
    number: '03',
    title: 'Agreement & Onboarding',
    description:
      'Finalize tailored partnership agreements with formal compliance verification and operational onboarding.'
  },
  {
    number: '04',
    title: 'Ongoing Reporting',
    description:
      'Receive structured reporting, regular review checkpoints, and continuous institutional dialogue.'
  }
];

export default function InvestmentPartner() {
  return (
    <>
      <SEO
        title="Investment Partner | JETTONE Dubai"
        description="Explore structured investment partnership opportunities through JETTONE, Dubai. Transparent process, clear terms and defined risk disclosure."
        path="/investment-partner"
      />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="max-w-3xl">
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-3 block">
            INVESTMENT PARTNER
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            Structured Opportunities.
            <span className="text-[#F5D327] block mt-1">Transparent Process.</span>
          </h1>
          <p className="font-body text-[#BCE2CD] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            Explore investment partnership opportunities with a clear understanding of the offering, process, terms and risks involved.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              to="/contact"
              className="relative overflow-hidden group inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              <span className="relative z-10">Start a Conversation</span>
              <ArrowRight className="w-4 h-4 relative z-10 stroke-[2.5]" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 1. What We Offer (3 Columns) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] block mb-2">
            CORE PRINCIPLES
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.heading}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl p-6 sm:p-7 rounded-2xl border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_12px_36px_rgba(10,38,25,0.2)] flex flex-col justify-between group hover:border-[#00E676]/70 transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#F5D327] mb-5">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-headline text-xl font-semibold text-white mb-3 group-hover:text-[#F5D327] transition-colors">
                    {item.heading}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. How It Works (4-Step Timeline) */}
      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="mb-8 sm:mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] block mb-2">
            PROGRESSION
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl font-bold text-white">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0F3524]/75 via-[#0A2619]/80 to-[#123E2A]/70 backdrop-blur-2xl p-6 rounded-2xl border border-[#287348]/55 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-headline font-bold text-[#F5D327]">
                    Step {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                </div>
                <h3 className="font-headline text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Important Disclosures (Bordered callout box, gold left border) */}
      <section className="relative py-6 sm:py-8 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="rounded-xl bg-[#092217]/90 border border-[#225838] border-l-4 border-l-[#F5D327] p-5 sm:p-6 backdrop-blur-md shadow-md">
          <div className="flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-[#F5D327] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-[#F5D327] tracking-wider mb-1">
                Important Disclosures
              </h4>
              <p className="text-xs sm:text-sm text-[#D1E7DC] leading-relaxed">
                Investment partnerships involve risk. Past performance does not guarantee future results. All terms are subject to individual agreements. This page does not constitute financial advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Strip */}
      <ContactCtaStrip
        title="Ready to Explore an Investment Partnership?"
        subtext="Connect directly with the JETTONE team to review tailored opportunities."
        ctaText="Start a Conversation →"
        ctaLink="/contact"
      />
    </>
  );
}
