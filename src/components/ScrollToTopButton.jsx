import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const main = document.getElementById('main-content');

    const handleScroll = () => {
      const scrollPos = main
        ? main.scrollTop
        : window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollPos > 260);
    };

    if (main) {
      main.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (main) main.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const main = document.getElementById('main-content');
    if (main) {
      main.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
          className="fixed bottom-6 right-5 sm:right-7 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#0F3524]/95 via-[#0A2619]/95 to-[#123E2A]/90 border border-[#00E676]/65 backdrop-blur-xl shadow-[0_4px_22px_rgba(0,230,118,0.38)] hover:border-[#F5D327] hover:shadow-[0_6px_30px_rgba(245,211,39,0.55)] flex items-center justify-center text-[#00E676] hover:text-[#F5D327] transition-colors cursor-pointer group"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.3] transition-transform duration-200 group-hover:-translate-y-0.5" />
          
          {/* Subtle glowing ring effect on hover */}
          <span className="absolute inset-0 rounded-full border border-[#00E676]/30 group-hover:border-[#F5D327]/60 group-hover:scale-110 transition-all pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
