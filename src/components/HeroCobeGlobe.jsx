import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from '@/components/ui/cobe-globe';
import { GLOBAL_MARKETS, getLiveMarketStatus } from '@/data/marketsData';

// Stable constant references so Globe never re-initializes on re-render
const BASE_COLOR = [0.04, 0.12, 0.08];
const MARKER_COLOR = [0.96, 0.83, 0.15];
const GLOW_COLOR = [0.0, 0.9, 0.46];
const EMPTY_ARCS = [];

/**
 * Computes 2D screen percentage (0..100) and front-facing depth (rotZ)
 * for a geographic [latitude, longitude] point on the 3D unit sphere.
 */
function computeScreenPosition(location, phi, theta) {
  const [lat, lon] = location;
  const radLat = (lat * Math.PI) / 180;
  // Cobe maps longitude with -PI offset
  const radLon = (lon * Math.PI) / 180 - Math.PI;

  const cosLat = Math.cos(radLat);
  const x = -cosLat * Math.cos(radLon);
  const y = Math.sin(radLat);
  const z = cosLat * Math.sin(radLon);

  const cosTheta = Math.cos(theta);
  const sinTheta = Math.sin(theta);
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);

  const rotX = cosPhi * x + sinPhi * z;
  const rotY = sinPhi * sinTheta * x + cosTheta * y - cosPhi * sinTheta * z;
  const rotZ = -sinPhi * cosTheta * x + sinTheta * y + cosPhi * cosTheta * z;

  return {
    x: (rotX * 0.5 + 0.5) * 100,
    y: (-rotY * 0.5 + 0.5) * 100,
    isFront: rotZ > 0.08,
    rotZ,
  };
}

/**
 * Calculates target phi to rotate a city's longitude to front center.
 */
function getTargetPhiForLon(lon) {
  return -(lon * Math.PI) / 180 + Math.PI / 2;
}

export default function HeroCobeGlobe() {
  const [activeCityId, setActiveCityId] = useState('dubai');
  const [currentPhi, setCurrentPhi] = useState(0.606); // Initial phi centered near Dubai
  const [currentTheta, setCurrentTheta] = useState(0.25);
  const [targetPhi, setTargetPhi] = useState(null);
  const [currentTime, setCurrentTime] = useState(() => new Date());

  const currentPhiRef = useRef(0.606);
  const currentThetaRef = useRef(0.25);
  const lastStateUpdateRef = useRef(0);
  const manualLockUntilRef = useRef(0);
  const activeCityIdRef = useRef(activeCityId);
  useEffect(() => {
    activeCityIdRef.current = activeCityId;
  }, [activeCityId]);

  // Update live clock every second for authentic market hours & local time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle continuous rotation updates from Cobe WebGL canvas
  const handleRotation = useCallback((phi, theta) => {
    currentPhiRef.current = phi;
    currentThetaRef.current = theta;

    const now = Date.now();
    // Throttle React state updates to ~100ms so 60fps WebGL animation is completely fluid
    if (now - lastStateUpdateRef.current < 90) {
      return;
    }
    lastStateUpdateRef.current = now;

    // Check which city is at the FRONT FACE of the rotating globe
    if (now > manualLockUntilRef.current) {
      let bestMarket = null;
      let highestDepth = -1;

      for (const market of GLOBAL_MARKETS) {
        const pos = computeScreenPosition(market.location, phi, theta);
        if (pos.isFront && pos.rotZ > highestDepth) {
          highestDepth = pos.rotZ;
          bestMarket = market;
        }
      }

      if (bestMarket && highestDepth > 0.25 && bestMarket.id !== activeCityIdRef.current) {
        activeCityIdRef.current = bestMarket.id;
        setActiveCityId(bestMarket.id);
      }
    }

    // Update screen positions for markers & card
    setCurrentPhi(phi);
    setCurrentTheta(theta);
  }, []);

  // Find the active market metadata
  const activeMarket = useMemo(() => {
    return GLOBAL_MARKETS.find((m) => m.id === activeCityId) || GLOBAL_MARKETS[0];
  }, [activeCityId]);

  // Compute live market status and local time
  const marketStatus = useMemo(() => {
    return getLiveMarketStatus(activeMarket, currentTime);
  }, [activeMarket, currentTime]);

  // Compute screen positions for all markets at current rotation
  const positionsMap = useMemo(() => {
    const map = {};
    for (const market of GLOBAL_MARKETS) {
      map[market.id] = computeScreenPosition(market.location, currentPhi, currentTheta);
    }
    return map;
  }, [currentPhi, currentTheta]);

  // Position of the currently active front-facing market
  const activePosition = positionsMap[activeCityId] || { x: 50, y: 50, isFront: true, rotZ: 1 };

  // Prepare markers for Cobe: Active market is larger and bright gold
  const cobeMarkers = useMemo(() => {
    return GLOBAL_MARKETS.map((m) => {
      const isActive = m.id === activeCityId;
      return {
        id: m.id,
        location: m.location,
        label: m.name,
        size: isActive ? 0.048 : 0.024,
        color: isActive ? [1.0, 0.95, 0.28] : [0.96, 0.83, 0.15],
      };
    });
  }, [activeCityId]);

  // User manually selects a city from the quick chips or globe marker
  const handleSelectCity = useCallback((market) => {
    manualLockUntilRef.current = Date.now() + 7000; // Hold user selection for 7s before auto-tracking resumes
    activeCityIdRef.current = market.id;
    setActiveCityId(market.id);
    setTargetPhi(getTargetPhiForLon(market.location[1]));
  }, []);

  // Compute clamped card position directly attached to active marker
  const cardStyle = useMemo(() => {
    const posX = activePosition.x;
    const posY = activePosition.y;

    // Tightly clamp horizontal position so card never clips or overflows on 320px/360px mobile or 200% zoom
    const clampedX = Math.max(34, Math.min(66, posX));

    // Place card above the marker if in lower half, below if in upper third
    const isAbove = posY > 38;

    return {
      left: `${clampedX}%`,
      ...(isAbove
        ? { bottom: `${Math.max(12, 100 - posY + 5)}%` }
        : { top: `${Math.max(12, posY + 5)}%` }),
      isAbove,
    };
  }, [activePosition.x, activePosition.y]);

  return (
    <div className="relative w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[530px] mx-auto flex flex-col items-center justify-center select-none">
      
      {/* Background Ambient Radial Glow matching JETTONE dark luxury aesthetic */}
      <div className="absolute inset-0 -m-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,230,118,0.18)_0%,rgba(245,211,39,0.14)_45%,transparent_70%)] blur-[70px] pointer-events-none" />

      {/* Decorative Outer Cyber Rings */}
      <div className="absolute inset-2 sm:inset-4 rounded-full border border-[#00E676]/20 animate-[spin_80s_linear_infinite] pointer-events-none" />
      <div className="absolute inset-8 sm:inset-10 rounded-full border border-dashed border-[#F5D327]/25 animate-[spin_55s_linear_infinite_reverse] pointer-events-none" />

      {/* 3D Cobe Globe Canvas Container */}
      <div className="relative z-10 w-full aspect-square flex items-center justify-center">
        
        {/* WebGL Globe (Continuous rotation with stable arrays) */}
        <Globe
          markers={cobeMarkers}
          arcs={EMPTY_ARCS}
          className="w-full h-full"
          markerColor={MARKER_COLOR}
          baseColor={BASE_COLOR}
          glowColor={GLOW_COLOR}
          dark={1}
          mapBrightness={8}
          markerSize={0.028}
          markerElevation={0.015}
          speed={0.0032}
          theta={0.25}
          diffuse={1.6}
          mapSamples={16000}
          targetPhi={targetPhi}
          onRotation={handleRotation}
          showLabels={false}
        />

        {/* Visible Front-Facing Market Markers on the Globe Surface */}
        {GLOBAL_MARKETS.map((market) => {
          const pos = positionsMap[market.id];
          if (!pos || !pos.isFront) return null;
          const isActive = market.id === activeCityId;

          return (
            <div
              key={`marker-${market.id}`}
              onClick={() => handleSelectCity(market)}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                opacity: Math.min(1, Math.max(0, pos.rotZ * 1.8)),
              }}
            >
              {isActive ? (
                /* Active Blinking Radar Beacon on Front-Facing City */
                <div className="relative flex items-center justify-center">
                  <span className="absolute -inset-4 rounded-full bg-[#00E676]/35 animate-ping pointer-events-none" />
                  <span className="absolute -inset-2 rounded-full bg-[#F5D327]/60 animate-pulse pointer-events-none" />
                  <span className="relative block w-3.5 h-3.5 rounded-full bg-[#F5D327] border-2 border-[#04120B] shadow-[0_0_18px_#F5D327]" />
                </div>
              ) : (
                /* Compact Dot & Subtle Hover Label for Other Front Cities */
                <div className="relative flex items-center justify-center">
                  <span className="block w-2 h-2 rounded-full bg-[#F5D327]/80 hover:bg-[#F5D327] hover:scale-125 border border-black/50 transition-all shadow-[0_0_8px_rgba(245,211,39,0.5)]" />
                  <span className="opacity-0 group-hover:opacity-100 absolute -top-5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-black/85 border border-[#00E676]/40 text-[9px] font-mono text-white whitespace-nowrap transition-opacity pointer-events-none">
                    {market.flag} {market.city}
                  </span>
                </div>
              )}
            </div>
          );
        })}

        {/* 3D Landmark Popup Card Attached Directly to Active Market When in Front */}
        <AnimatePresence mode="wait">
          {activePosition && activePosition.isFront && (
            <motion.div
              key={activeMarket.id}
              initial={{ opacity: 0, scale: 0.88, y: cardStyle.isAbove ? 10 : -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: cardStyle.isAbove ? 6 : -6 }}
              transition={{ type: 'spring', stiffness: 380, damping: 26 }}
              className="absolute z-30 pointer-events-auto -translate-x-1/2"
              style={{
                left: cardStyle.left,
                ...(cardStyle.bottom ? { bottom: cardStyle.bottom } : { top: cardStyle.top }),
              }}
            >
              {/* Card Container Matching reference image (media_1792559786998.png) with fluid responsive sizing */}
              <div className="relative flex items-center gap-2 sm:gap-3 p-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-[#061811]/95 border border-[#00E676]/65 shadow-[0_0_24px_rgba(0,230,118,0.35),inset_0_0_12px_rgba(0,230,118,0.08)] backdrop-blur-md w-[min(250px,82vw)] sm:w-auto sm:max-w-[285px]">
                
                {/* Pointer Arrow Stem toward the Marker */}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-x-[5px] sm:border-x-[6px] border-x-transparent ${
                    cardStyle.isAbove
                      ? 'top-full border-t-[5px] sm:border-t-[6px] border-t-[#061811]'
                      : 'bottom-full border-b-[5px] sm:border-b-[6px] border-b-[#061811]'
                  }`}
                />

                {/* Left: 3D Golden Miniature Architectural Landmark Render */}
                <div className="relative w-9 h-13 sm:w-13 sm:h-17 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-lg bg-black/50 border border-[#00E676]/25">
                  <img
                    src={activeMarket.image}
                    alt={activeMarket.landmark}
                    className="w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_10px_rgba(245,211,39,0.6)] scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Right: Market Information & Live Status */}
                <div className="flex flex-col text-left pr-0.5 sm:pr-1 min-w-[110px] sm:min-w-[135px]">
                  
                  {/* City Title with Country Flag */}
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <span className="text-xs sm:text-base leading-none" role="img" aria-label={activeMarket.country}>
                      {activeMarket.flag}
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight leading-tight">
                      {activeMarket.name}
                    </span>
                  </div>

                  {/* Subtitle / Exchange info */}
                  <span className="text-[9px] sm:text-[10.5px] text-[#94A3B8] font-normal leading-tight mt-0.5">
                    {activeMarket.subtitle}
                  </span>

                  {/* Live Market Open / Closed Status Indicator */}
                  <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-1.5">
                    <span
                      className={`inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                        marketStatus.isOpen
                          ? 'bg-[#00E676] shadow-[0_0_8px_#00E676] animate-pulse'
                          : 'bg-[#F59E0B] shadow-[0_0_8px_#F59E0B]'
                      }`}
                    />
                    <span
                      className={`text-[9px] sm:text-[10.5px] font-semibold tracking-wide ${
                        marketStatus.isOpen ? 'text-[#00E676]' : 'text-[#F59E0B]'
                      }`}
                    >
                      {marketStatus.statusText}
                    </span>
                  </div>

                  {/* Live Local Time with Timezone Code e.g. "05:42 PM (GST)" */}
                  <span className="text-[9.5px] sm:text-[10.5px] font-mono text-white/95 tracking-wider mt-0.5 font-medium">
                    {marketStatus.formattedTime}
                  </span>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
