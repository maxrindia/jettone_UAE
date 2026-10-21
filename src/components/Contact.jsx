import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Phone, Mail, User } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => {
      setSubmitted(false);
    }, 7000);
  };

  return (
    <section className="py-6 sm:py-8 bg-transparent px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full" id="contact">
      <div className="relative bg-gradient-to-br from-[#0F3524]/80 via-[#0A2619]/85 to-[#123E2A]/75 backdrop-blur-2xl rounded-2xl p-5 sm:p-8 lg:p-9 border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_16px_40px_rgba(10,38,25,0.22)] overflow-hidden">
        
        {/* Soft Ambient Radial Accents */}
        <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#00E676]/12 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-[#F5D327]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading & Executive Desk Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold tracking-wider uppercase text-[#F5D327] mb-2 block"
            >
              Initiate Dialogue
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-headline text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-white leading-tight mb-3"
            >
              Start a Conversation with JETTONE.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-body text-[#BCE2CD] text-xs sm:text-sm leading-relaxed mb-6"
            >
              Connect directly with our Dubai executive desk to explore investment partnerships, quantitative technology or tailored trading mandates.
            </motion.p>

            {/* Direct Institutional Fast-Track Badges */}
            <div className="flex flex-wrap gap-2.5 text-xs text-[#E4F5EB]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#06180F]/80 border border-[#25633F]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F5D77F]" />
                <span>DIFC Regulated Standards</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#06180F]/80 border border-[#25633F]/60">
                <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                <span>Dubai Desk: GMT+4</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Efficiency Streamlined Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* 3 Compact Inline Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#A8D3BA] flex items-center gap-1.5">
                    <User className="w-3 h-3 text-[#F5D77F]" />
                    <span>Full Name</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alexander Vance"
                    className="w-full px-3.5 py-2.5 bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl focus:outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 text-xs sm:text-sm text-white placeholder-[#5A7E6B] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#A8D3BA] flex items-center gap-1.5">
                    <Mail className="w-3 h-3 text-[#F5D77F]" />
                    <span>Corporate Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="a.vance@fund.ae"
                    className="w-full px-3.5 py-2.5 bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl focus:outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 text-xs sm:text-sm text-white placeholder-[#5A7E6B] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-semibold text-[#A8D3BA] flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-[#F5D77F]" />
                    <span>Mobile Number</span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 123 4567"
                    className="w-full px-3.5 py-2.5 bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl focus:outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 text-xs sm:text-sm text-white placeholder-[#5A7E6B] transition-all font-mono"
                  />
                </div>
              </div>

              {/* Message / Objectives - Compact 2-row textarea */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-semibold text-[#A8D3BA]">
                  Brief Objectives / Requirements
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your partnership scope, capital mandate, or algorithmic requirements..."
                  className="w-full px-3.5 py-2.5 bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl focus:outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 text-xs sm:text-sm text-white placeholder-[#5A7E6B] transition-all resize-none"
                />
              </div>

              {/* Action Row: Compact Submit Button + Confidentiality Note */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <p className="text-[11px] text-[#A8D3BA] flex items-center gap-1.5 order-2 sm:order-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F5D327]" />
                  <span>Strict institutional confidentiality under DIFC jurisdiction.</span>
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="relative overflow-hidden group w-full sm:w-auto px-7 py-2.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.35)] hover:shadow-[0_0_24px_rgba(245,211,39,0.55)] inline-flex items-center justify-center gap-2 shrink-0 order-1 sm:order-2"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                  <span className="relative z-10">Contact JETTONE</span>
                  <Send className="w-3.5 h-3.5 relative z-10 stroke-[2.5]" />
                </motion.button>
              </div>

              {/* Submission Feedback Toast */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="p-3 rounded-xl bg-[#0D2D1E] border border-[#00E676]/50 text-[#00E676] text-xs font-medium flex items-center gap-2 shadow-[0_0_15px_rgba(0,230,118,0.25)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00E676] shrink-0" />
                    <span>Enquiry received. Our Dubai desk will respond within 24 business hours.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
