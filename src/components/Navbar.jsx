import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import TickerBar from './TickerBar';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const main = document.getElementById('main-content');
    if (!main) return;
    const handleScroll = () => {
      setScrolled(main.scrollTop > 20);
    };
    main.addEventListener('scroll', handleScroll, { passive: true });
    return () => main.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Our Services', href: '#services' },
    { name: 'Markets', href: '#markets' },
    { name: 'JBot', href: '#jbot' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="relative w-full z-50 shrink-0">
      {/* 1. Live Market Continuous Scrolling Ticker at the very top */}
      <TickerBar />

      {/* 2. Main Navigation Bar directly below the scrolling ticker */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md border-b border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
            : 'bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0]'
        }`}
      >
        <div className="h-14 sm:h-[58px] md:h-[62px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo - Cropped to bounds, fits tightly with zero excess whitespace */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/jettone-logo.png"
              alt="JETTONE"
              className="h-8 sm:h-[34px] md:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation - Slightly increased font size */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[16.5px] font-semibold transition-colors relative py-1.5 tracking-[-0.01em] ${
                  idx === 0
                    ? 'text-[#0B1528] font-bold'
                    : 'text-[#334155] hover:text-[#0B1528]'
                }`}
              >
                {link.name}
                {idx === 0 && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#F5D327] rounded-full shadow-[0_0_8px_rgba(245,211,39,0.6)]"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Enquire CTA & Mobile Toggle - Bold uppercase matching reference style */}
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="relative overflow-hidden group hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-xs sm:text-[13px] font-extrabold uppercase tracking-wider rounded-lg transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_16px_rgba(245,211,39,0.35)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_6px_24px_rgba(245,211,39,0.55)]"
            >
              {/* Glossy Metallic Light-Sweep Shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              <span className="relative z-10">Enquire Now</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 stroke-[2.5]" />
            </motion.a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0B1528] hover:text-[#C49206] transition-colors rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden absolute top-full left-0 right-0 z-50 border-t border-[#E1E7DF] bg-[#F8FAF7]/98 backdrop-blur-lg px-5 sm:px-6 py-5 sm:py-6 space-y-3 max-h-[calc(100dvh-100px)] overflow-y-auto shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-[#0B1528] hover:text-[#C49206] py-2 transition-colors border-b border-[#E1E7DF]/40"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="relative overflow-hidden group w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_14px_rgba(245,211,39,0.35)]"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
