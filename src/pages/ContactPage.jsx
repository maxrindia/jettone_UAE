import React from 'react';
import SEO from '../components/SEO';
import ContactWithGlobe from '../components/ui/contact-with-globe';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact JETTONE | Dubai Financial Services"
        description="Get in touch with JETTONE to discuss investment partnerships, trading consultancy or JBot technology — Dubai, UAE."
        path="/contact"
      />
      <ContactWithGlobe />
    </>
  );
}
