import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '', keywords }) {
  const pageTitle = title.includes('JETTONE') ? title : `${title} | JETTONE`;
  const canonicalUrl = `https://jettone.ai${path}`;
  const defaultKeywords = 'JETTONE, Dubai financial services, investment partnership, trading consultancy, algorithmic trading, JBot, market analysis, forex trading Dubai, gold trading Dubai, quantitative strategies';

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="JETTONE" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content="JETTONE" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://jettone.ai/jettone-logo.png" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://jettone.ai/jettone-logo.png" />
    </Helmet>
  );
}
