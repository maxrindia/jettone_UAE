import React, { useEffect, useRef, memo } from 'react';

// Official Global Market Symbols for TradingView Ticker Tape (FTSE removed as requested)
const TV_SYMBOLS = [
  { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
  { proName: 'FOREXCOM:NSXUSD', title: 'Nasdaq 100' },
  { proName: 'FX_IDC:EURUSD', title: 'EUR/USD' },
  { proName: 'TVC:GOLD', title: 'Gold (XAU/USD)' },
  { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin (BTC)' },
  { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum (ETH)' },
  { proName: 'TVC:USOIL', title: 'Brent Crude' },
  { proName: 'TVC:SILVER', title: 'Silver (XAG)' },
  { proName: 'INDEX:NKY', title: 'Nikkei 225' }
];

function TickerBar() {
  const containerRef = useRef(null);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    currentContainer.innerHTML = '';

    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container';
    widgetContainer.style.width = '100%';
    widgetContainer.style.height = '36px';

    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'tradingview-widget-container__widget';
    widgetDiv.style.width = '100%';
    widgetDiv.style.height = '36px';
    widgetContainer.appendChild(widgetDiv);

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: TV_SYMBOLS,
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en'
    });

    widgetContainer.appendChild(script);
    currentContainer.appendChild(widgetContainer);

    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full relative z-30 overflow-hidden bg-[#060D08] border-b border-[#F5D327]/30 h-[36px] flex items-center shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
      {/* Subtle Gold Shimmering Divider Line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5D327]/60 to-transparent pointer-events-none" />

      {/* Pure TradingView Live Streaming Ticker Tape Widget - Vertically Centered */}
      <div ref={containerRef} className="w-full h-[36px] flex items-center overflow-hidden" />
    </div>
  );
}

export default memo(TickerBar);
