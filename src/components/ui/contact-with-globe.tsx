"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

export const JETTONE_CONTACT_LINKS = [
  {
    icon: MapPin,
    label: "DWTC, Sheikh Zayed Road, Trade Center Second, Dubai, UAE",
    href: "#",
    subtext: "Location",
  },
  {
    icon: Phone,
    label: "+971 (0)4 389 3999",
    href: "tel:+97143893999",
    subtext: "Direct Executive Line",
  },
  {
    icon: Mail,
    label: "info@dwtc.com",
    href: "mailto:info@dwtc.com",
    subtext: "Official Direct Inquiries",
  },
];

export const FormDots = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => {
    const isHorizontal = orientation === "horizontal";
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 flex items-center justify-center overflow-hidden",
          isHorizontal ? "w-full" : "h-full",
          className,
        )}
        {...props}
      >
        <div
          className={cn("relative", isHorizontal ? "w-full h-4" : "h-full w-4")}
        >
          <div
            className="absolute inset-0 bg-repeat text-[#00E676]/35"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: isHorizontal ? "8px 100%" : "100% 8px",
              maskImage: isHorizontal
                ? "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
                : "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          />
        </div>
      </SeparatorPrimitive.Root>
    );
  },
);
FormDots.displayName = "FormDots";

export interface ContactWithGlobeProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function ContactWithGlobe({
  title = "Start a Conversation with JETTONE.",
  subtitle = "GET IN TOUCH",
  description = "Connect with our team to discuss investment partnerships, trading consultancy, or intelligent trading technology.",
  className,
}: ContactWithGlobeProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: "General Enquiry",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Field validation: Name is required, Phone is REQUIRED, Email & Message are OPTIONAL
  const validate = (field: string, val: string) => {
    if (field === "name" && !val.trim()) return "Full name is required";
    if (field === "phone" && !val.trim()) return "Phone number is required";
    if (field === "email" && val.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Please enter a valid email address";
    }
    return "";
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validate(field, formData[field as keyof typeof formData]),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: validate("name", formData.name),
      phone: validate("phone", formData.phone),
      email: validate("email", formData.email),
    };
    setErrors(newErrors);
    setTouched({ name: true, phone: true, email: true });

    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);

    try {
      // Send real-time notification to info@dwtc.com via FormSubmit AJAX service
      await fetch("https://formsubmit.co/ajax/info@dwtc.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `New JETTONE Contact Enquiry from ${formData.name}`,
          _replyto: formData.email || undefined,
          "Full Name": formData.name,
          "Phone Number": formData.phone,
          "Email Address": formData.email || "Not Provided",
          "Company / Entity": formData.company || "Not Provided",
          "Enquiry Category": formData.enquiryType,
          "Message": formData.message || "No message provided",
        }),
      });
    } catch (err) {
      console.warn("Notification dispatch notice:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        enquiryType: "General Enquiry",
        message: "",
      });
      setErrors({});
      setTouched({});
      setTimeout(() => setSubmitted(false), 8000);
    }
  };

  return (
    <section
      className={cn(
        "relative w-full bg-[#06140E] overflow-hidden py-12 sm:py-16 2xl:py-20",
        className,
      )}
    >
      {/* Subtle Ambient Background Grid & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#00E676_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.035] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,230,118,0.12)_0%,transparent_70%)] blur-[90px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] px-4 sm:px-6 lg:px-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-3.5 mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00E676]/10 border border-[#00E676]/35 shadow-[0_0_12px_rgba(0,230,118,0.2)]"
          >
            <span className="text-xs text-[#00E676] font-mono font-bold tracking-wider uppercase">
              {subtitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: smoothEase }}
            className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]"
          >
            Start a Conversation with{" "}
            <span className="text-[#F5D327]">JETTONE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: smoothEase }}
            className="font-body text-sm sm:text-base text-[#BCE2CD] max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        {/* 2-Column Grid: Left (Direct Channels & Connection Image) · Right (Luxury Contact Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto items-start">

          {/* Left Column: Direct Inquiries & Global Connection Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-mono font-semibold uppercase text-[#F5D327] tracking-wider">
                Direct Channels
              </span>
              <h3 className="font-headline text-2xl font-bold text-white">
                Get in Touch
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#A8D3BA] leading-relaxed">
                Connect directly with our team for strategic partnerships, inquiries, and technology discussions.
              </p>
            </div>

            {/* Contact Links with User's specific Mobile & Email */}
            <div className="flex flex-col gap-3">
              {JETTONE_CONTACT_LINKS.map(({ icon: Icon, label, href, subtext }, i) => (
                <motion.a
                  key={label + i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.25 + i * 0.08,
                    ease: smoothEase,
                  }}
                  className="group flex items-center gap-3.5 p-3.5 rounded-xl bg-gradient-to-r from-[#0F3524]/70 to-[#0A2619]/70 border border-[#287348]/45 hover:border-[#00E676]/70 hover:bg-[#0F3524]/85 transition-all shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center shrink-0 group-hover:bg-[#00E676] group-hover:text-[#0A2619] text-[#F5D327] transition-all shadow-[0_0_10px_rgba(0,230,118,0.2)]">
                    <Icon className="w-4.5 h-4.5 stroke-[2]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-mono text-[#88A896] uppercase tracking-wider">
                      {subtext}
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#F5D327] transition-colors break-all">
                      {label}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Direct & Confidential Assurance */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#06180F]/85 border border-[#1E4D34]/70 shadow-lg mt-1">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#00E676] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono font-bold uppercase text-[#F5D327] tracking-wider">
                    Direct &amp; Confidential
                  </span>
                  <p className="font-body text-xs text-[#A8D3BA] leading-relaxed">
                    All communications are held in strict confidence. Your information is used solely for responding to your inquiry.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Luxury Obsidian-Emerald Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: smoothEase }}
            className="lg:col-span-7 rounded-2xl sm:rounded-3xl border border-[#287348]/60 bg-gradient-to-br from-[#0F3524]/85 via-[#0A2619]/90 to-[#123E2A]/80 backdrop-blur-2xl p-6 sm:p-8 lg:p-9 flex flex-col gap-5 shadow-2xl"
          >
            <div>
              <span className="text-xs font-mono font-semibold uppercase text-[#F5D327] tracking-wider block mb-1">
                Direct Communication
              </span>
              <h3 className="font-headline text-xl sm:text-2xl font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#BCE2CD]">
                Submit your details below and our team will be notified immediately.
              </p>
            </div>

            <FormDots />

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name (Required) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#A8D3BA] flex items-center justify-between">
                    <span>Full Name</span>
                    <span className="text-[#00E676]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    className={cn(
                      "w-full bg-[#06180F]/90 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#5A7E6B] outline-none transition-all duration-200",
                      touched.name && errors.name
                        ? "border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                        : "border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30",
                    )}
                  />
                  {touched.name && errors.name && (
                    <span className="text-[11px] text-[#F87171] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone Number (REQUIRED as requested) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#A8D3BA] flex items-center justify-between">
                    <span>Phone Number</span>
                    <span className="text-[#00E676]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    className={cn(
                      "w-full bg-[#06180F]/90 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#5A7E6B] font-mono outline-none transition-all duration-200",
                      touched.phone && errors.phone
                        ? "border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                        : "border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30",
                    )}
                  />
                  {touched.phone && errors.phone && (
                    <span className="text-[11px] text-[#F87171] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address (OPTIONAL as requested) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#A8D3BA]">
                    Email Address <span className="text-[#88A896] text-[10px] font-normal">(optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className={cn(
                      "w-full bg-[#06180F]/90 border rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#5A7E6B] outline-none transition-all duration-200",
                      touched.email && errors.email
                        ? "border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                        : "border-[#25633F]/60 focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30",
                    )}
                  />
                  {touched.email && errors.email && (
                    <span className="text-[11px] text-[#F87171] flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Company / Entity (Optional) */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#A8D3BA]">
                    Company / Entity <span className="text-[#88A896] text-[10px] font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="w-full bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#5A7E6B] outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Enquiry Category */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#A8D3BA]">
                  Enquiry Category
                </label>
                <select
                  value={formData.enquiryType}
                  onChange={(e) => handleChange("enquiryType", e.target.value)}
                  className="w-full bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 transition-all duration-200 cursor-pointer"
                >
                  <option value="Investment Partner" className="bg-[#06180F] text-white">Investment Partner</option>
                  <option value="Trading Consultancy" className="bg-[#06180F] text-white">Trading Consultancy</option>
                  <option value="JBot / Technology" className="bg-[#06180F] text-white">JBot / Technology</option>
                  <option value="General Enquiry" className="bg-[#06180F] text-white">General Enquiry</option>
                </select>
              </div>

              {/* Message (OPTIONAL as requested) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#A8D3BA]">
                  Message <span className="text-[#88A896] text-[10px] font-normal">(optional)</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full bg-[#06180F]/90 border border-[#25633F]/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#5A7E6B] outline-none resize-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676]/30 transition-all duration-200"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 h-auto bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] hover:brightness-105 text-[#0B1528] font-body text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)] inline-flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0B1528]" />
                      <span>Sending Notification...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 stroke-[2.4]" />
                    </>
                  )}
                </Button>
              </div>

              {/* Submission Feedback Toast with Direct Notification Info */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="p-4 rounded-xl bg-[#0D2D1E] border border-[#00E676]/60 text-[#00E676] text-xs sm:text-sm font-medium flex flex-col gap-2 shadow-lg"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#00E676] shrink-0" />
                      <span>Your enquiry has been received and dispatched to <strong>info@dwtc.com</strong>. Our team will contact you shortly.</span>
                    </div>
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
