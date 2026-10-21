import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Phone, Mail, User, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Corporate email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid corporate email';
        return '';
      case 'phone':
        if (!value.trim()) return 'Mobile number is required';
        if (value.replace(/[^\d+]/g, '').length < 6) return 'Please enter a valid phone number';
        return '';
      case 'message':
        if (!value.trim()) return 'Brief objectives are required';
        if (value.trim().length < 5) return 'Please provide more details on your scope';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, formData[field]) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, message: true });

    if (Object.values(newErrors).some((err) => Boolean(err))) {
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setTouched({});
    setTimeout(() => {
      setSubmitted(false);
    }, 7000);
  };

  return (
    <section className="py-6 sm:py-8 bg-transparent px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full" id="contact">
      {/* 
        Card container with NO overflow:hidden per rule:
        "overflow: hidden — FORBIDDEN on: Card containers (clips buttons at 110%+ zoom), Form containers"
      */}
      <div className="relative bg-gradient-to-br from-[#0F3524]/80 via-[#0A2619]/85 to-[#123E2A]/75 backdrop-blur-2xl rounded-2xl p-5 sm:p-8 lg:p-9 border border-[#287348]/55 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_16px_40px_rgba(10,38,25,0.22)]">
        
        {/* Soft Ambient Radial Accents */}
        <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#00E676]/12 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-[#F5D327]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
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
            className="lg:col-span-7 w-full"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-4 w-full">
              
              {/* Form grid collapses to single column on mobile (< 768px) per rule */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-name" className="text-[11px] font-semibold text-[#A8D3BA] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3 h-3 text-[#F5D77F]" />
                      <span>Full Name</span>
                    </span>
                    <span className="text-[#00E676] font-bold">*</span>
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="Alexander Vance"
                    className={`w-full px-3.5 py-2.5 bg-[#06180F]/90 border rounded-xl focus:outline-none text-xs sm:text-sm text-white placeholder-[#5A7E6B] transition-all ${
                      touched.name && errors.name
                        ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]/40'
                        : 'border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <span className="text-[10.5px] text-[#F87171] flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-email" className="text-[11px] font-semibold text-[#A8D3BA] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3 h-3 text-[#F5D77F]" />
                      <span>Corporate Email</span>
                    </span>
                    <span className="text-[#00E676] font-bold">*</span>
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="a.vance@fund.ae"
                    className={`w-full px-3.5 py-2.5 bg-[#06180F]/90 border rounded-xl focus:outline-none text-xs sm:text-sm text-white placeholder-[#5A7E6B] transition-all ${
                      touched.email && errors.email
                        ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]/40'
                        : 'border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <span className="text-[10.5px] text-[#F87171] flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-phone" className="text-[11px] font-semibold text-[#A8D3BA] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3 h-3 text-[#F5D77F]" />
                      <span>Mobile Number</span>
                    </span>
                    <span className="text-[#00E676] font-bold">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onBlur={() => handleBlur('phone')}
                    placeholder="+971 50 123 4567"
                    className={`w-full px-3.5 py-2.5 bg-[#06180F]/90 border rounded-xl focus:outline-none text-xs sm:text-sm text-white placeholder-[#5A7E6B] transition-all font-mono ${
                      touched.phone && errors.phone
                        ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]/40'
                        : 'border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30'
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <span className="text-[10.5px] text-[#F87171] flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.phone}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Message / Objectives - Compact textarea with validation feedback */}
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-message" className="text-[11px] font-semibold text-[#A8D3BA] flex items-center justify-between">
                  <span>Brief Objectives / Requirements</span>
                  <span className="text-[#00E676] font-bold">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={2}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  placeholder="Outline your partnership scope, capital mandate, or algorithmic requirements..."
                  className={`w-full px-3.5 py-2.5 bg-[#06180F]/90 border rounded-xl focus:outline-none text-xs sm:text-sm text-white placeholder-[#5A7E6B] transition-all resize-none ${
                    touched.message && errors.message
                      ? 'border-[#EF4444] focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]/40'
                      : 'border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30'
                  }`}
                />
                {touched.message && errors.message && (
                  <span className="text-[10.5px] text-[#F87171] flex items-center gap-1 mt-0.5">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.message}</span>
                  </span>
                )}
              </div>

              {/* Action Row: Action buttons must ALWAYS be visible — never clipped */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <p className="text-[11px] text-[#A8D3BA] flex items-center gap-1.5 order-2 sm:order-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F5D327] shrink-0" />
                  <span>Strict institutional confidentiality under DIFC jurisdiction.</span>
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="relative overflow-hidden group w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.35)] hover:shadow-[0_0_24px_rgba(245,211,39,0.55)] inline-flex items-center justify-center gap-2 shrink-0 order-1 sm:order-2"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                  <span className="relative z-10">Contact JETTONE</span>
                  <Send className="w-3.5 h-3.5 relative z-10 stroke-[2.5]" />
                </motion.button>
              </div>

              {/* Submission Feedback Toast - Inline only, never alert() */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="p-3.5 rounded-xl bg-[#0D2D1E] border border-[#00E676]/60 text-[#00E676] text-xs font-medium flex items-center gap-2.5 shadow-[0_0_18px_rgba(0,230,118,0.25)]"
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
