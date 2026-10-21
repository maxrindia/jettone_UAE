import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Markets from '../components/Markets';
import JBotSection from '../components/JBotSection';
import Approach from '../components/Approach';
import Insights from '../components/Insights';
import ContactCtaStrip from '../components/ContactCtaStrip';

export default function HomePage() {
  return (
    <>
      <SEO
        title="JETTONE — Smart Wealth. Smarter Future. | Dubai Financial Services"
        description="Investment partnerships, trading consultancy, market analysis and intelligent trading technology — JETTONE, Dubai, UAE."
        path="/"
      />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Three Paths (Three service cards) */}
      <Services />

      {/* 3. Global Markets Grid */}
      <Markets />

      {/* 4. JBot Showcase */}
      <JBotSection />

      {/* 5. Our Approach */}
      <Approach />

      {/* 6. Market Insights (3 placeholder cards) */}
      <Insights />

      {/* 7. Contact CTA strip */}
      <ContactCtaStrip
        title="Start a Conversation with JETTONE."
        subtext="Explore our services and connect with the team."
        ctaText="Enquire Now →"
        ctaLink="/contact"
      />
    </>
  );
}
