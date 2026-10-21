import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '' }) {
  const pageTitle = title.includes('JETTONE') ? title : `${title} | JETTONE`;
  const canonicalUrl = `https://jettone.ai${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
