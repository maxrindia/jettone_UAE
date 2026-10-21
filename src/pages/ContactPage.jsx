import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Mail,
  User,
  Phone,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'General Enquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
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
      message: validateField('message', formData.message)
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(newErrors).some((err) => Boolean(err))) {
      return;
    }

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      enquiryType: 'General Enquiry',
      message: ''
    });
    setErrors({});
    setTouched({});
    setTimeout(() => {
      setSubmitted(false);
    }, 7000);
  };

  return (
    <>
      <SEO
        title="Contact JETTONE | Dubai Financial Services"
        description="Get in touch with JETTONE to discuss investment partnerships, trading consultancy or JBot technology — Dubai, UAE."
        path="/contact"
      />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full">
        <div className="max-w-3xl">
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-3 block">
            GET IN TOUCH
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            Start a Conversation with
            <span className="text-[#F5D327] block mt-1">JETTONE.</span>
          </h1>
          <p className="font-body text-[#BCE2CD] text-base sm:text-lg leading-relaxed max-w-2xl">
            Connect with the team to discuss your requirements.
          </p>
        </div>
      </section>

      {/* Form & Location Section */}
      <section className="relative py-6 sm:py-10 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* 1. Contact Form */}
          <div className="lg:col-span-8 bg-gradient-to-br from-[#0F3524]/80 via-[#0A2619]/85 to-[#123E2A]/75 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-[#287348]/55 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-[#A8D3BA] flex items-center justify-between">
                    <span>Full Name</span>
                    <span className="text-[#00E676]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                    placeholder="Alexander Vance"
                    className={`w-full px-4 py-3 bg-[#06180F]/90 border rounded-xl text-sm text-white placeholder-[#5A7E6B] focus:outline-none transition-all ${
                      touched.name && errors.name
                        ? 'border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]'
                        : 'border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <span className="text-[11px] text-[#F87171] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-[#A8D3BA] flex items-center justify-between">
                    <span>Email Address</span>
                    <span className="text-[#00E676]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="alexander@domain.com"
                    className={`w-full px-4 py-3 bg-[#06180F]/90 border rounded-xl text-sm text-white placeholder-[#5A7E6B] focus:outline-none transition-all ${
                      touched.email && errors.email
                        ? 'border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]'
                        : 'border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <span className="text-[11px] text-[#F87171] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone (optional) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-[#A8D3BA]">
                    Phone Number <span className="text-[#88A896] text-[11px] font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-3 bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl text-sm text-white placeholder-[#5A7E6B] focus:outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 transition-all font-mono"
                  />
                </div>

                {/* Enquiry Type (dropdown) */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="enquiryType" className="text-xs font-semibold text-[#A8D3BA]">
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    value={formData.enquiryType}
                    onChange={(e) => handleChange('enquiryType', e.target.value)}
                    className="w-full px-4 py-3 bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl text-sm text-white focus:outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 transition-all cursor-pointer"
                  >
                    <option value="Investment Partner" className="bg-[#06180F] text-white">Investment Partner</option>
                    <option value="Trading Consultancy" className="bg-[#06180F] text-white">Trading Consultancy</option>
                    <option value="JBot / Technology" className="bg-[#06180F] text-white">JBot / Technology</option>
                    <option value="General Enquiry" className="bg-[#06180F] text-white">General Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-[#A8D3BA] flex items-center justify-between">
                  <span>Message</span>
                  <span className="text-[#00E676]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  placeholder="Outline your requirements, objectives, or questions..."
                  className={`w-full px-4 py-3 bg-[#06180F]/90 border rounded-xl text-sm text-white placeholder-[#5A7E6B] focus:outline-none transition-all resize-none ${
                    touched.message && errors.message
                      ? 'border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]'
                      : 'border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30'
                  }`}
                />
                {touched.message && errors.message && (
                  <span className="text-[11px] text-[#F87171] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit button & response note */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="relative overflow-hidden group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)] inline-flex items-center justify-center gap-2"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                  <span className="relative z-10">Send Enquiry →</span>
                </motion.button>

                <p className="font-mono text-xs text-[#88A896] mt-3">
                  We will respond within 2 business days.
                </p>
              </div>

              {/* Submission Feedback Toast */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="p-4 rounded-xl bg-[#0D2D1E] border border-[#00E676]/60 text-[#00E676] text-xs sm:text-sm font-medium flex items-center gap-2.5 shadow-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00E676] shrink-0" />
                    <span>Your enquiry has been received. Our team will contact you within 2 business days.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* 2. Location Card & 3. Disclaimer */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Location Card: "Dubai, UAE" — NO fabricated address or map embed */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0F3524]/80 via-[#0A2619]/85 to-[#123E2A]/75 border border-[#287348]/55 backdrop-blur-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#F5D327] mb-4">
                <MapPin className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="text-xs font-mono font-semibold uppercase text-[#88A896] block mb-1">
                Regional Hub
              </span>
              <h3 className="font-headline text-xl font-bold text-white mb-2">
                Dubai, UAE
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#BCE2CD] leading-relaxed">
                Operating in the financial capital of the UAE, connecting institutional partnerships and global trading workflows.
              </p>
            </div>

            {/* Privacy Disclaimer */}
            <div className="p-5 rounded-2xl bg-[#06180F]/80 border border-[#1E4D34]">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#00E676] shrink-0 mt-0.5" />
                <p className="font-body text-xs text-[#88A896] leading-relaxed">
                  By submitting this form you agree to be contacted by JETTONE regarding your enquiry. We do not share your information with third parties.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
