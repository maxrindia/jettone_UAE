import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sliders,
  History,
  Zap,
  Network,
  Activity,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import DashboardMockup from './DashboardMockup';

const features = [
  {
    icon: Sliders,
    title: 'Custom Strategy Builder',
    description: 'Design multi-condition quantitative logic without coding dependencies.'
  },
  {
    icon: History,
    title: 'Backtesting Engine',
    description: 'Simulate rules across historical market datasets to evaluate execution metrics.'
  },
  {
    icon: Zap,
    title: 'Automated Execution',
    description: 'Rule-driven order routing designed for systematic order precision.'
  },
  {
    icon: Network,
    title: 'Broker Integration',
    description: 'Direct connectivity support for compatible institutional broker APIs.'
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Continuous telemetry, heartbeat verification, and risk parameter observation.'
  }
];

export default function JBotSection() {
  return (
    <section className="relative py-12 sm:py-16 2xl:py-24 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto w-full" id="jbot">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-16 items-center">
        
        {/* Left Column: Eyebrow, Title, Description, 5 Feature Rows, 2 CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          {/* Eyebrow */}
          <span className="text-xs 2xl:text-sm font-semibold tracking-wider uppercase text-[#F5D327] mb-2.5 block">
            JBOT BY JETTONE
          </span>

          {/* Title */}
          <h2 className="font-headline text-3xl sm:text-4xl md:text-[2.6rem] 2xl:text-[3.2rem] font-bold text-white mb-4 leading-tight">
            From Strategy to Automation.
          </h2>

          {/* Description */}
          <p className="font-body text-[#BCE2CD] leading-relaxed mb-6 text-sm md:text-base">
            JBot is JETTONE’s intelligent trading technology platform, engineered to empower traders and institutions to design, test, and deploy systematic algorithmic strategies.
          </p>

          {/* 5 Feature Rows */}
          <div className="space-y-3.5 mb-7">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#14422B] border border-[#2E7A4E]/60 flex items-center justify-center text-[#00E676] shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="font-headline text-sm sm:text-base font-semibold text-white">
                      {feature.title}
                    </h4>
                    <p className="font-body text-xs text-[#BCE2CD] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Two CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                to="/jbot"
                className="relative overflow-hidden group w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#E5B80B] via-[#F5D327] to-[#D9A300] text-[#0B1528] font-body text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_18px_rgba(245,211,39,0.38)] hover:shadow-[0_6px_26px_rgba(245,211,39,0.55)] flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Explore JBot</span>
                <ArrowRight className="w-4 h-4 relative z-10 stroke-[2.5]" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                to="/explore-jbot"
                className="w-full sm:w-auto px-6 py-3 bg-[#0A2619]/90 text-white font-body text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#123E2A] transition-all flex items-center justify-center border border-[#1E4D34]"
              >
                <span>View Features</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Static Dashboard Mockup (Illustrative, labelled) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="lg:col-span-6"
        >
          <DashboardMockup />
        </motion.div>

      </div>
    </section>
  );
}
