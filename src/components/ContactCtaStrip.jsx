import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function ContactCtaStrip({
  title = "Start a Conversation with JETTONE.",
  subtext = "Explore our services and connect with the team.",
  ctaText = "Enquire Now →",
  ctaLink = "/contact"
}) {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
      <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#0F3524]/90 via-[#0A2619]/95 to-[#123E2A]/85 backdrop-blur-2xl border border-[#287348]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_16px_48px_rgba(10,38,25,0.3)] flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[250px] bg-[radial-gradient(ellipse_at_center,rgba(245,211,39,0.14)_0%,transparent_70%)] blur-[60px] pointer-events-none" />
        
        <div className="relative z-10 text-center md:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5D327]/15 border border-[#F5D327]/30 text-[#F5D327] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
            {title}
          </h2>
          <p className="font-body text-[#BCE2CD] text-sm sm:text-base mt-2 max-w-xl">
            {subtext}
          </p>
        </div>

        <div className="relative z-10 shrink-0 w-full sm:w-auto">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to={ctaLink}
              className="relative overflow-hidden group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm sm:text-base font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_20px_rgba(245,211,39,0.4)] hover:shadow-[0_6px_28px_rgba(245,211,39,0.6)] flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              <span className="relative z-10 font-bold tracking-tight">{ctaText}</span>
              <ArrowRight className="w-4 h-4 relative z-10 stroke-[2.5]" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
