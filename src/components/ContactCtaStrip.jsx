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
    <section className="relative w-full border-y border-[#287348]/40 bg-gradient-to-r from-[#06180F] via-[#0A2619] to-[#06180F] backdrop-blur-xl py-6 sm:py-8 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[180px] bg-[radial-gradient(ellipse_at_center,rgba(245,211,39,0.12)_0%,transparent_70%)] blur-[50px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[140px] bg-[radial-gradient(ellipse_at_center,rgba(0,230,118,0.08)_0%,transparent_70%)] blur-[40px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#F5D327]/15 border border-[#F5D327]/30 text-[#F5D327] text-[11px] font-mono font-semibold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3 h-3" />
            <span>Connect With Us</span>
          </div>
          <h2 className="font-headline text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
            {title}
          </h2>
          <p className="font-body text-[#BCE2CD] text-xs sm:text-sm mt-1 max-w-2xl">
            {subtext}
          </p>
        </div>

        <div className="shrink-0 w-full sm:w-auto">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to={ctaLink}
              className="relative overflow-hidden group w-full sm:w-auto px-7 sm:px-8 py-3 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.35)] hover:shadow-[0_6px_24px_rgba(245,211,39,0.5)] flex items-center justify-center gap-2"
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
