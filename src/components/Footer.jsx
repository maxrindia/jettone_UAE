import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#06140E]/95 backdrop-blur-md border-t border-[#1F5D3B]/40 pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/jettone-logo.png"
                alt="JETTONE"
                className="h-6 w-auto object-contain brightness-0 invert"
              />
            </div>

            <p className="font-headline text-lg font-bold text-[#F5D327]">
              Smart Wealth. Smarter Future.
            </p>

            <p className="font-body text-xs md:text-sm text-[#A8D3BA] max-w-sm leading-relaxed">
              Investment partnerships, market insights and trading technology rooted in Dubai for global institutions and forward-looking traders.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-headline font-semibold text-white tracking-wider text-xs uppercase">
              Quick Links
            </span>
            <div className="flex flex-col gap-2 text-xs md:text-sm text-[#BCE2CD]">
              <a href="#services" className="hover:text-[#F5D327] transition-colors">Our Services</a>
              <a href="#markets" className="hover:text-[#F5D327] transition-colors">Global Markets</a>
              <a href="#jbot" className="hover:text-[#F5D327] transition-colors">JBot</a>
              <a href="#insights" className="hover:text-[#F5D327] transition-colors">Insights</a>
              <a href="#contact" className="hover:text-[#F5D327] transition-colors">Contact</a>
            </div>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-headline font-semibold text-white tracking-wider text-xs uppercase">
              Legal &amp; Compliance
            </span>
            <div className="flex flex-col gap-2 text-xs md:text-sm text-[#BCE2CD]">
              <a href="#" className="hover:text-[#F5D327] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#F5D327] transition-colors">Terms &amp; Conditions</a>
              <a href="#" className="hover:text-[#F5D327] transition-colors">Risk Disclosure</a>
              <a href="#" className="hover:text-[#F5D327] transition-colors">DIFC Regulatory Framework</a>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#1F5D3B]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#88A896]">
          <p className="text-center md:text-left">
            © 2026 <strong className="text-white font-semibold">JETTONE™</strong>. All rights reserved. Smart Wealth. Smarter Future.
          </p>

          <p className="text-center md:text-right max-w-xl text-[11px] leading-relaxed text-[#88A896]">
            <em>Financial markets involve risk of loss. Services and instrument availability are subject to applicable terms, eligibility and regulatory requirements.</em>
          </p>
        </div>

      </div>
    </footer>
  );
}
