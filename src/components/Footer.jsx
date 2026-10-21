import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const handleFooterLinkClick = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const main = document.getElementById('main-content');
      if (!main) return;
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        const mainRect = main.getBoundingClientRect();
        const elRect = targetEl.getBoundingClientRect();
        const offset = elRect.top - mainRect.top + main.scrollTop;
        main.scrollTo({ top: Math.max(0, offset - 12), behavior: 'smooth' });
      }
    }
  };

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
              Investment partnerships, market insights and trading technology rooted in Dubai for forward-looking traders and strategic partners.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-headline font-semibold text-white tracking-wider text-xs uppercase">
              Quick Links
            </span>
            <div className="flex flex-col gap-2 text-xs md:text-sm text-[#BCE2CD]">
              <a
                href={location.pathname === '/' ? '#services' : '/#services'}
                onClick={(e) => handleFooterLinkClick(e, '#services')}
                className="hover:text-[#F5D327] transition-colors"
              >
                Our Services
              </a>
              <a
                href={location.pathname === '/' ? '#markets' : '/#markets'}
                onClick={(e) => handleFooterLinkClick(e, '#markets')}
                className="hover:text-[#F5D327] transition-colors"
              >
                Global Markets
              </a>
              <a
                href={location.pathname === '/' ? '#jbot' : '/#jbot'}
                onClick={(e) => handleFooterLinkClick(e, '#jbot')}
                className="hover:text-[#F5D327] transition-colors"
              >
                JBot
              </a>
              <a
                href={location.pathname === '/' ? '#insights' : '/#insights'}
                onClick={(e) => handleFooterLinkClick(e, '#insights')}
                className="hover:text-[#F5D327] transition-colors"
              >
                Insights
              </a>
              <Link to="/contact" className="hover:text-[#F5D327] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-headline font-semibold text-white tracking-wider text-xs uppercase">
              Legal &amp; Compliance
            </span>
            <div className="flex flex-col gap-2 text-xs md:text-sm text-[#BCE2CD]">
              <span className="text-[#88A896]">Privacy Policy</span>
              <span className="text-[#88A896]">Terms &amp; Conditions</span>
              <span className="text-[#88A896]">Risk Disclosure</span>
              <span className="text-[#88A896]">Regulatory Framework</span>
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
