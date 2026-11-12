import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  GraduationCap,
  Layers,
  Target,
  Play,
  Clock,
  Plus,
  ShieldCheck,
  Brain,
  Coins
} from 'lucide-react';
import SEO from '../components/SEO';
import './AcademyPage.css';

const aboutPillars = [
  {
    title: 'Market Knowledge',
    description: 'Understand market basics',
    icon: GraduationCap
  },
  {
    title: 'Structured Learning',
    description: 'Learn through curated modules',
    icon: Layers
  },
  {
    title: 'Trading Discipline',
    description: 'Build risk awareness & control',
    icon: Target
  }
];

// Subtle decorative SVG visuals matching the 6 category cards in the reference design
function CategoryVisual({ type }) {
  if (type === 'bars') {
    return (
      <svg viewBox="0 0 180 64" className="w-36 h-14 mx-auto opacity-85" fill="none">
        <defs>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#55CDB3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#55CDB3" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect x="26" y="40" width="12" height="20" rx="2" fill="url(#barGrad)" />
        <rect x="44" y="34" width="12" height="26" rx="2" fill="url(#barGrad)" />
        <rect x="62" y="28" width="12" height="32" rx="2" fill="url(#barGrad)" />
        <rect x="80" y="22" width="12" height="38" rx="2" fill="url(#barGrad)" />
        <rect x="98" y="16" width="12" height="44" rx="2" fill="url(#barGrad)" />
        <rect x="116" y="10" width="12" height="50" rx="2" fill="url(#barGrad)" />
        <rect x="134" y="6" width="12" height="54" rx="2" fill="url(#barGrad)" />
      </svg>
    );
  }
  if (type === 'candles') {
    return (
      <svg viewBox="0 0 180 64" className="w-36 h-14 mx-auto opacity-90" fill="none">
        <line x1="34" y1="18" x2="34" y2="52" stroke="#55CDB3" strokeWidth="1.5" />
        <rect x="30" y="26" width="8" height="16" rx="1.5" fill="#55CDB3" />
        <line x1="54" y1="22" x2="54" y2="56" stroke="#EF4444" strokeWidth="1.5" />
        <rect x="50" y="30" width="8" height="14" rx="1.5" fill="#EF4444" opacity="0.85" />
        <line x1="74" y1="14" x2="74" y2="48" stroke="#55CDB3" strokeWidth="1.5" />
        <rect x="70" y="20" width="8" height="18" rx="1.5" fill="#55CDB3" />
        <line x1="94" y1="20" x2="94" y2="50" stroke="#55CDB3" strokeWidth="1.5" />
        <rect x="90" y="24" width="8" height="14" rx="1.5" fill="#55CDB3" />
        <line x1="114" y1="10" x2="114" y2="42" stroke="#EF4444" strokeWidth="1.5" />
        <rect x="110" y="16" width="8" height="16" rx="1.5" fill="#EF4444" opacity="0.85" />
        <line x1="134" y1="8" x2="134" y2="40" stroke="#55CDB3" strokeWidth="1.5" />
        <rect x="130" y="14" width="8" height="16" rx="1.5" fill="#55CDB3" />
      </svg>
    );
  }
  if (type === 'area') {
    return (
      <svg viewBox="0 0 180 64" className="w-36 h-14 mx-auto opacity-90" fill="none">
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#55CDB3" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#55CDB3" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M12 52 L42 40 L68 44 L96 24 L124 28 L166 10 L166 60 L12 60 Z"
          fill="url(#areaGrad)"
        />
        <path
          d="M12 52 L42 40 L68 44 L96 24 L124 28 L166 10"
          stroke="#55CDB3"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === 'commodity') {
    return (
      <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F5D327]/12 border border-[#F5D327]/35 flex items-center justify-center text-[#F5D327] shadow-[0_0_24px_rgba(245,211,39,0.16)]">
        <Coins className="w-7 h-7 stroke-[1.75]" />
      </div>
    );
  }
  if (type === 'risk') {
    return (
      <div className="w-14 h-14 mx-auto rounded-2xl bg-[#55CDB3]/12 border border-[#55CDB3]/40 flex items-center justify-center text-[#55CDB3] shadow-[0_0_24px_rgba(85,205,179,0.2)]">
        <ShieldCheck className="w-7 h-7 stroke-[1.75]" />
      </div>
    );
  }
  return (
    <div className="w-14 h-14 mx-auto rounded-2xl bg-[#55CDB3]/12 border border-[#55CDB3]/40 flex items-center justify-center text-[#55CDB3] shadow-[0_0_24px_rgba(85,205,179,0.2)]">
      <Brain className="w-7 h-7 stroke-[1.75]" />
    </div>
  );
}

const tradingCategories = [
  {
    title: 'Stock Market Fundamentals',
    description: 'Understand equity structure, market participants, and core valuation concepts.',
    visual: 'bars'
  },
  {
    title: 'Technical Analysis',
    description: 'Read candlestick price action, chart structures, and momentum indicators.',
    visual: 'candles'
  },
  {
    title: 'Trading Concepts',
    description: 'Explore core market concepts, price structure, order flow, and multi-session trading frameworks.',
    visual: 'area'
  },
  {
    title: 'Forex & Commodity Markets',
    description: 'Learn currency and commodity mechanics across forex pairs, bullion, energy, and industrial metals.',
    visual: 'commodity'
  },
  {
    title: 'Risk Management',
    description: 'Master position sizing, capital preservation, and risk-to-reward discipline.',
    visual: 'risk'
  },
  {
    title: 'Trading Psychology',
    description: 'Build emotional control, patience, and objective execution habits.',
    visual: 'psychology'
  }
];

// Exactly TWO tutor cards with transparent background tutor photos
const tutors = [
  {
    id: 'tutor-1',
    name: 'Vikash',
    designation: 'Stock Market Expert (NISM VIII)',
    image: '/images/tutors/vikash.png'
  },
  {
    id: 'tutor-2',
    name: 'Dhinesh Kumar',
    designation: 'Forex and Macroeconomic Expert',
    image: '/images/tutors/dhinesh-kumar.png'
  }
];

// Exactly TWO sample video cards with empty 16:9 thumbnail placeholders
const sampleVideos = [
  {
    id: 'video-1',
    titlePlaceholder: 'Video Title Placeholder',
    descriptionPlaceholder: 'Lesson description placeholder.',
    durationPlaceholder: 'Duration Placeholder'
  },
  {
    id: 'video-2',
    titlePlaceholder: 'Video Title Placeholder',
    descriptionPlaceholder: 'Lesson description placeholder.',
    durationPlaceholder: 'Duration Placeholder'
  }
];

const faqItems = [
  {
    question: 'What is Jettone Academy?',
    answer:
      'Jettone Academy is JETTONE’s dedicated trading education platform designed to build structured understanding of financial markets, technical analysis, risk management, and trading psychology.'
  },
  {
    question: 'Who can access the educational content?',
    answer:
      'Our educational modules are structured for both beginners building foundational market knowledge and active market participants seeking disciplined analytical frameworks.'
  },
  {
    question: 'What topics are covered?',
    answer:
      'Topics include Stock Market Fundamentals, Technical Analysis, Trading Concepts, Forex & Commodity Markets, Risk Management, and Trading Psychology.'
  },
  {
    question: 'Are sample videos available?',
    answer:
      'Yes, introductory educational video session slots are prepared in the Learn From Our Expert section.'
  },
  {
    question: 'How can I continue my learning journey?',
    answer:
      'You can explore the curriculum categories above, review our upcoming sample lessons, and use the Continue Learning CTA once the full learning experience is available.'
  }
];

function WaveBackdrop({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1440 240"
      fill="none"
      preserveAspectRatio="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M-60 190 C 240 60, 480 220, 760 130 C 1040 40, 1240 180, 1500 70"
        stroke="#55CDB3"
        strokeOpacity="0.22"
        strokeWidth="1.5"
      />
      <path
        d="M-60 210 C 260 90, 510 235, 790 145 C 1070 55, 1260 195, 1500 95"
        stroke="#55CDB3"
        strokeOpacity="0.14"
        strokeWidth="1.2"
      />
      <path
        d="M-60 230 C 280 120, 540 245, 820 160 C 1100 75, 1280 210, 1500 120"
        stroke="#55CDB3"
        strokeOpacity="0.08"
        strokeWidth="1"
      />
    </svg>
  );
}

const heroBackgrounds = [
  '/images/academy-hero-1.jpg',
  '/images/academy-hero-2.jpg',
  '/images/academy-hero-3.jpg'
];

const SITE_CONTAINER =
  'max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 w-full';

export default function AcademyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);
  const [heroBgIndex, setHeroBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="academy-page-shell w-full">
      <SEO
        title="Jettone Academy — Master The Markets | JETTONE"
        description="Explore financial markets through structured educational experiences. Understand market fundamentals, technical analysis, risk management and trading psychology."
        path="/academy"
      />

      {/* =====================================================================
          1. ACADEMY HERO (CENTER-ALIGNED + DYNAMIC 3-IMAGE BACKGROUND)
         ===================================================================== */}
      <section className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[calc(100dvh-240px)] flex flex-col justify-center pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Dynamic Rotating 3-Image Background with seamless bottom fade */}
        <div
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)'
          }}
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={heroBackgrounds[heroBgIndex]}
              src={heroBackgrounds[heroBgIndex]}
              alt=""
              aria-hidden="true"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 0.95, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover object-center sm:object-right"
            />
          </AnimatePresence>
          {/* Soft center radial scrim only behind text so right-side visuals stay bright & crisp */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_75%_at_50%_48%,rgba(6,20,14,0.72)_0%,rgba(6,20,14,0.32)_62%,rgba(6,20,14,0.12)_100%)]" />
        </div>

        <WaveBackdrop className="absolute bottom-0 left-0 w-full h-40 sm:h-52 opacity-45 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-serif text-3xl sm:text-5xl md:text-[3.4rem] font-bold text-[#F4F7F6] tracking-tight leading-[1.12] uppercase mb-5"
          >
            MASTER THE MARKETS.
            <br />
            BUILD YOUR KNOWLEDGE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="font-body text-sm sm:text-base text-[#B8CCC6] max-w-xl leading-relaxed mb-8"
          >
            Explore financial markets through structured educational experiences. Understand market fundamentals, technical analysis, risk management and trading psychology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="flex flex-wrap items-center justify-center gap-3.5"
          >
            <a
              href="#about-academy"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#55CDB3] hover:bg-[#6BE0C6] text-[#080B0C] font-body text-xs sm:text-sm font-bold transition-all shadow-[0_6px_24px_rgba(85,205,179,0.3)] hover:shadow-[0_8px_28px_rgba(85,205,179,0.45)]"
            >
              <span>Explore Academy</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </a>

            <a
              href="#tutors"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/25 bg-[#0A1614]/80 hover:border-[#55CDB3]/70 text-[#F4F7F6] hover:text-[#55CDB3] font-body text-xs sm:text-sm font-semibold transition-all"
            >
              Meet Our Tutors
            </a>
          </motion.div>

          {/* Subtle Slide Indicators for the 3 Hero Backgrounds */}
          <div className="mt-7 flex items-center justify-center gap-2">
            {heroBackgrounds.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setHeroBgIndex(idx)}
                aria-label={`Show hero background ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  heroBgIndex === idx
                    ? 'w-6 bg-[#55CDB3]'
                    : 'w-2 bg-white/30 hover:bg-white/55'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. ABOUT JETTONE ACADEMY (3-COLUMN CENTERED GLASS STRIP)
         ===================================================================== */}
      <section id="about-academy" className={`relative py-6 sm:py-8 2xl:py-10 ${SITE_CONTAINER}`}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full academy-glass-card rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#55CDB3]/15">
            {aboutPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="px-6 py-7 sm:py-9 2xl:py-11 flex flex-col items-center text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#55CDB3]/10 border border-[#55CDB3]/25 flex items-center justify-center text-[#55CDB3] mb-3.5">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h2 className="font-headline text-base sm:text-lg 2xl:text-xl font-semibold text-[#F4F7F6] mb-1">
                    {pillar.title}
                  </h2>
                  <p className="font-body text-xs sm:text-sm 2xl:text-base text-[#9FB8B1]">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* =====================================================================
          3. MEET OUR TUTORS (EXACTLY TWO EMPTY TUTOR CARDS, CENTER-ALIGNED)
         ===================================================================== */}
      <section id="tutors" className={`relative py-12 sm:py-16 2xl:py-20 ${SITE_CONTAINER}`}>
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-10 2xl:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-4xl 2xl:text-5xl font-bold text-[#F4F7F6] mb-2.5">
              Our Tutors
            </h2>
            <p className="font-body text-xs sm:text-sm 2xl:text-base text-[#9FB8B1] max-w-xl mx-auto">
              Discover educational guidance from our trading tutors and explore their areas of expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[660px] mx-auto">
            {tutors.map((tutor, index) => (
              <motion.div
                key={tutor.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#DDF3EB] via-[#ECF9F4] to-[#FFFFFF] border border-[#55CDB3]/50 shadow-[0_18px_42px_rgba(0,0,0,0.45)] flex flex-col items-center text-center"
              >
                {/* Exact 3:4 Portrait Photo Area matching 768x1024 image size */}
                <div className="w-full p-3.5 pb-0">
                  <div className="w-full aspect-[3/4] rounded-xl border border-[#55CDB3]/55 bg-gradient-to-b from-[#E5F7F1] to-white/90 pt-2 flex items-end justify-center overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      style={{
                        filter:
                          'drop-shadow(0 0 2px rgba(255,255,255,0.95)) drop-shadow(0 6px 14px rgba(17,105,85,0.22))'
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="w-full px-4 py-4 mt-3 border-t border-[#55CDB3]/25 bg-white/85">
                  <h3 className="font-headline text-lg sm:text-xl font-bold text-[#081C16] mb-0.5">
                    {tutor.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#116955] font-semibold">
                    {tutor.designation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. TRADING LEARNING CATEGORIES (6 CENTERED CARDS)
         ===================================================================== */}
      <section id="curriculum" className={`relative py-12 sm:py-16 2xl:py-20 ${SITE_CONTAINER}`}>
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-10 2xl:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-4xl 2xl:text-5xl font-bold text-[#F4F7F6] mb-2.5">
              Explore the World of Trading
            </h2>
            <p className="font-body text-xs sm:text-sm 2xl:text-base text-[#9FB8B1] max-w-xl mx-auto">
              A focused range of trading masterclasses designed to build strong market understanding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8">
            {tradingCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="academy-glass-card rounded-2xl p-6 sm:p-7 2xl:p-8 flex flex-col items-center text-center justify-between min-h-[195px]"
              >
                <div className="w-full mb-4 flex items-center justify-center">
                  <CategoryVisual type={category.visual} />
                </div>
                <div>
                  <h3 className="font-headline text-base sm:text-lg 2xl:text-xl font-semibold text-[#F4F7F6] mb-1.5">
                    {category.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#9FB8B1] leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. TRADES FUNDAMENTALS (EXACTLY TWO EMPTY 16:9 CARDS, CENTERED)
         ===================================================================== */}
      <section id="sample-videos" className={`relative py-12 sm:py-16 2xl:py-20 ${SITE_CONTAINER}`}>
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-10 2xl:mb-12"
          >
            <h2 className="font-serif text-2xl sm:text-4xl 2xl:text-5xl font-bold text-[#F4F7F6] mb-2.5">
              Learn From Our Expert
            </h2>
            <p className="font-body text-xs sm:text-sm 2xl:text-base text-[#9FB8B1] max-w-xl mx-auto">
              Get an introduction to trading concepts through our sample educational video sessions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {sampleVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="academy-glass-card rounded-2xl p-5 sm:p-6 2xl:p-7 flex flex-col items-center text-center justify-between"
              >
                {/* Empty 16:9 Video Thumbnail Placeholder with Center Play Icon */}
                <div className="w-full aspect-video rounded-xl bg-[#070E0D] border border-[#55CDB3]/20 flex items-center justify-center mb-5">
                  <div className="w-14 h-14 rounded-full border border-white/30 bg-[#0E1E1A]/90 flex items-center justify-center text-[#F4F7F6]">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h3 className="font-headline text-base sm:text-lg 2xl:text-xl font-semibold text-[#F4F7F6] mb-1.5">
                    {video.titlePlaceholder}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#9FB8B1] mb-3.5">
                    {video.descriptionPlaceholder}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F5D327]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{video.durationPlaceholder}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. CONTINUE LEARNING CTA (CENTERED BUTTON ONLY)
         ===================================================================== */}
      <section id="continue-learning" className={`relative py-4 sm:py-6 ${SITE_CONTAINER}`}>
        <div className="w-full flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#55CDB3] hover:bg-[#6BE0C6] text-[#080B0C] font-body text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-[0_6px_24px_rgba(85,205,179,0.3)] hover:shadow-[0_8px_28px_rgba(85,205,179,0.45)] cursor-pointer"
          >
            <span>CONTINUE LEARNING</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>
      </section>

      {/* =====================================================================
          7. FAQ ACCORDION (CENTERED HEADING, CLEAN STACK)
         ===================================================================== */}
      <section id="faq" className={`relative py-12 sm:py-16 pb-16 sm:pb-24 ${SITE_CONTAINER}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#F4F7F6]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-2.5">
            {faqItems.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  data-open={isOpen}
                  className="academy-faq-item rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-body text-xs sm:text-sm font-medium text-[#F4F7F6]">
                      {faq.question}
                    </span>
                    <Plus
                      className={`w-4 h-4 shrink-0 text-[#55CDB3] transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 pt-0 font-body text-xs sm:text-sm text-[#9FB8B1] leading-relaxed border-t border-[#55CDB3]/12">
                          <div className="pt-3">{faq.answer}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
