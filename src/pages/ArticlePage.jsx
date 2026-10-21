import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Share2, Sparkles, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { insightsArticles } from '../data/insightsData';
import ContactCtaStrip from '../components/ContactCtaStrip';

export default function ArticlePage() {
  const { id } = useParams();
  const article = insightsArticles.find((a) => a.id === id);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const otherArticles = insightsArticles.filter((a) => a.id !== id);

  return (
    <>
      <SEO
        title={`${article.title} | JETTONE Insights`}
        description={article.summary}
        path={`/insights/${article.id}`}
      />

      {/* Article Header & Visual */}
      <article className="relative pt-8 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 max-w-5xl mx-auto w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A8D3BA] hover:text-[#F5D327] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Insights</span>
          </Link>
        </div>

        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className={`text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full border ${article.badgeClass}`}>
            {article.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#A8D3BA]">
            <Clock className="w-3.5 h-3.5 text-[#00E676]" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#88A896]">
            <Calendar className="w-3.5 h-3.5 text-[#F5D327]" />
            <span>{article.date}</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-headline text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
          {article.title}
        </h1>

        {/* Summary Lead */}
        <p className="font-body text-base sm:text-lg text-[#BCE2CD] leading-relaxed mb-8 border-l-2 border-[#F5D327] pl-4">
          {article.summary}
        </p>

        {/* Featured Visual */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden mb-10 border border-[#287348]/60 shadow-2xl bg-[#0A2619]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-90 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06140E] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-[#25633F]/60 text-xs font-mono text-[#00E676]">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D327]" />
            <span>JETTONE Market Research Desk</span>
          </div>
        </div>

        {/* Executive Takeaways Box (Concise & High Impact) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0F3524]/90 via-[#0A2619]/90 to-[#123E2A]/90 border border-[#00E676]/40 shadow-lg mb-10 backdrop-blur-xl">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5D327] mb-4">
            Key Strategic Takeaways
          </h2>
          <ul className="space-y-3 font-body text-xs sm:text-sm text-[#E4F5EB]">
            {article.takeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E676] shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body Sections */}
        <div className="space-y-8 font-body text-sm sm:text-base text-[#D1E7DC] leading-relaxed">
          {article.sections.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-white tracking-tight">
                {sec.heading}
              </h2>
              <p className="leading-relaxed text-[#BCE2CD]">
                {sec.body}
              </p>
            </section>
          ))}
        </div>

        {/* Related Articles Navigator */}
        <div className="mt-14 pt-8 border-t border-[#1F5D3B]/50">
          <h3 className="font-headline text-xl font-bold text-white mb-6">
            Continue Reading
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {otherArticles.map((other) => (
              <Link
                key={other.id}
                to={`/insights/${other.id}`}
                className="p-5 rounded-2xl bg-[#092217]/70 border border-[#25633F]/50 hover:border-[#00E676]/60 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className={`inline-block text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border mb-2 ${other.badgeClass}`}>
                    {other.category}
                  </span>
                  <h4 className="font-headline text-base font-semibold text-white group-hover:text-[#F5D327] transition-colors leading-snug">
                    {other.title}
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#00E676] font-semibold mt-4">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* CTA Strip */}
      <ContactCtaStrip
        title="Discuss Strategic Market Perspectives"
        subtext="Connect with our Dubai research and advisory desk for tailored market evaluations."
        ctaText="Connect With Team →"
        ctaLink="/contact"
      />
    </>
  );
}
