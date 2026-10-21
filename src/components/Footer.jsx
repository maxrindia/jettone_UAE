import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Pixel-perfect official SVG Social Icons
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

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
        
        {/* Main Footer Content: 4 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 sm:col-span-2 flex flex-col gap-4">
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
          <div className="lg:col-span-3 sm:col-span-1 flex flex-col gap-3">
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
              <Link
                to="/insights"
                className="hover:text-[#F5D327] transition-colors"
              >
                Insights
              </Link>
              <Link to="/contact" className="hover:text-[#F5D327] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-3 sm:col-span-1 flex flex-col gap-3">
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

          {/* Social Media Column (Instagram, Facebook, YouTube) */}
          <div className="lg:col-span-2 sm:col-span-2 flex flex-col gap-3">
            <span className="font-headline font-semibold text-white tracking-wider text-xs uppercase">
              Follow Us
            </span>
            <p className="font-body text-xs text-[#88A896] leading-relaxed">
              Stay connected across our official media channels.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/jettone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Follow JETTONE on Instagram"
                className="w-9 h-9 rounded-xl bg-[#0F3524]/80 border border-[#287348]/60 flex items-center justify-center text-[#BCE2CD] hover:text-[#F5D327] hover:border-[#F5D327]/60 hover:shadow-[0_0_14px_rgba(245,211,39,0.25)] hover:scale-105 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/jettone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Follow JETTONE on Facebook"
                className="w-9 h-9 rounded-xl bg-[#0F3524]/80 border border-[#287348]/60 flex items-center justify-center text-[#BCE2CD] hover:text-[#F5D327] hover:border-[#F5D327]/60 hover:shadow-[0_0_14px_rgba(245,211,39,0.25)] hover:scale-105 transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.youtube.com/@jettone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="Subscribe to JETTONE on YouTube"
                className="w-9 h-9 rounded-xl bg-[#0F3524]/80 border border-[#287348]/60 flex items-center justify-center text-[#BCE2CD] hover:text-[#F5D327] hover:border-[#F5D327]/60 hover:shadow-[0_0_14px_rgba(245,211,39,0.25)] hover:scale-105 transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-6 border-t border-[#1F5D3B]/40 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#88A896]">
          <p className="text-center md:text-left shrink-0 text-xs">
            © 2026 <strong className="text-white font-semibold">JETTONE™</strong>. All rights reserved. Smart Wealth. Smarter Future.
          </p>

          <p className="text-center md:text-right text-[10px] sm:text-[10.5px] leading-normal text-[#88A896] tracking-tight whitespace-normal lg:whitespace-nowrap">
            <em>Financial markets involve risk of loss. Services and instrument availability are subject to applicable terms, eligibility and regulatory requirements.</em>
          </p>
        </div>

      </div>
    </footer>
  );
}
