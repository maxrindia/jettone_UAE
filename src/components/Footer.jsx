import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#06140E] border-t border-[#1F5D3B]/40 pt-10 2xl:pt-14 pb-8 2xl:pb-12">
      <div className="max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1640px] [@media(min-width:2000px)]:max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 flex flex-col gap-8 2xl:gap-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Link to="/">
                <img
                  src="/jettone-logo.png"
                  alt="JETTONE"
                  className="h-6 w-auto object-contain brightness-0 invert"
                />
              </Link>
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
              <Link to="/" className="hover:text-[#F5D327] transition-colors">Home</Link>
              <Link to="/services" className="hover:text-[#F5D327] transition-colors">Trading Services</Link>
              <Link to="/investment-partner" className="hover:text-[#F5D327] transition-colors">Investment Partner</Link>
              <Link to="/trading-consultancy" className="hover:text-[#F5D327] transition-colors">Trading Consultancy</Link>
              <Link to="/jbot" className="hover:text-[#F5D327] transition-colors">JBot Technology</Link>
              <Link to="/explore-jbot" className="hover:text-[#F5D327] transition-colors">Explore JBot</Link>
              <Link to="/insights" className="hover:text-[#F5D327] transition-colors">Insights</Link>
              <Link to="/about" className="hover:text-[#F5D327] transition-colors">About JETTONE</Link>
              <Link to="/contact" className="hover:text-[#F5D327] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Legal & Compliance Column (Zero Fabricated Claims) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-headline font-semibold text-white tracking-wider text-xs uppercase">
              Legal &amp; Compliance
            </span>
            <div className="flex flex-col gap-2 text-xs md:text-sm text-[#BCE2CD]">
              <span className="text-[#88A896]">Institutional Governance</span>
              <span className="text-[#88A896]">Confidentiality Protocols</span>
              <span className="text-[#88A896]">Risk Governance Framework</span>
              <span className="text-[#88A896]">Dubai Financial Ecosystem Standards</span>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#1F5D3B]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#88A896]">
          <p className="text-center md:text-left">
            © 2026 <strong className="text-white font-semibold">JETTONE™</strong>. All rights reserved. Smart Wealth. Smarter Future.
          </p>

          <p className="text-center md:text-right max-w-2xl text-[11px] leading-relaxed text-[#88A896]">
            <em>
              Financial markets involve risk of loss. JETTONE is a financial services company operating across investment partnerships, trading consultancy, and trading technology, and is not a retail broker. Services and instrument availability are subject to individual agreements and applicable regulatory requirements.
            </em>
          </p>
        </div>

      </div>
    </footer>
  );
}
