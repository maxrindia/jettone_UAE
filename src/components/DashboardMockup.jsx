import React from 'react';
import { Activity, ShieldCheck, Terminal, Cpu, Database, Wifi } from 'lucide-react';

export default function DashboardMockup() {
  return (
    <div className="relative w-full rounded-2xl bg-[#071911]/90 border border-[#1E4D34] shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] p-4 sm:p-5 backdrop-blur-xl">
      {/* Demo illustrative banner tag */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1A422D]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00E676] animate-pulse" />
          <span className="text-[11px] font-mono font-bold text-white tracking-wider uppercase">
            JBot Terminal v3.4
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5D327]/15 text-[#F5D327] border border-[#F5D327]/30">
            Engine Connected
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#F5D327]/90 px-2 py-0.5 rounded bg-black/40 border border-[#F5D327]/25">
          Demo — illustrative data only
        </span>
      </div>

      {/* Top Telemetry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3.5">
        <div className="p-2.5 rounded-lg bg-[#0A2418]/80 border border-[#1D4A32]">
          <span className="text-[10px] font-mono text-[#88A896] block">Latency</span>
          <span className="text-xs sm:text-sm font-mono font-bold text-[#00E676]">0.8 ms (STP)</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#0A2418]/80 border border-[#1D4A32]">
          <span className="text-[10px] font-mono text-[#88A896] block">Strategy State</span>
          <span className="text-xs sm:text-sm font-mono font-bold text-[#F5D327]">Rule Monitoring</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#0A2418]/80 border border-[#1D4A32]">
          <span className="text-[10px] font-mono text-[#88A896] block">Execution Mode</span>
          <span className="text-xs sm:text-sm font-mono font-bold text-white">Automated Limit</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#0A2418]/80 border border-[#1D4A32]">
          <span className="text-[10px] font-mono text-[#88A896] block">Risk Engine</span>
          <span className="text-xs sm:text-sm font-mono font-bold text-[#00E676]">Active Guard</span>
        </div>
      </div>

      {/* Simulated Chart Visualizer */}
      <div className="p-3 rounded-xl bg-[#04110B]/90 border border-[#183B29] mb-3.5">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#A8D3BA] mb-2">
          <span className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#00E676]" />
            Multi-Condition Trigger Stream
          </span>
          <span className="text-[#88A896]">Illustrative Sample</span>
        </div>
        <div className="relative h-24 w-full flex items-center">
          <svg className="w-full h-24" viewBox="0 0 400 90" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00E676" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00E676" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Grid Lines */}
            <line x1="0" y1="20" x2="400" y2="20" stroke="#133323" strokeDasharray="3 3" />
            <line x1="0" y1="45" x2="400" y2="45" stroke="#133323" strokeDasharray="3 3" />
            <line x1="0" y1="70" x2="400" y2="70" stroke="#133323" strokeDasharray="3 3" />
            {/* Shaded Area */}
            <path
              d="M0,70 Q60,60 120,40 T240,45 T320,25 T400,30 L400,90 L0,90 Z"
              fill="url(#chartGrad)"
            />
            {/* Animated Path */}
            <path
              d="M0,70 Q60,60 120,40 T240,45 T320,25 T400,30"
              fill="none"
              stroke="#00E676"
              strokeWidth="2"
            />
            {/* Indicator Trigger Node */}
            <circle cx="320" cy="25" r="4" fill="#F5D327" className="animate-ping" />
            <circle cx="320" cy="25" r="3.5" fill="#F5D327" />
          </svg>
        </div>
      </div>

      {/* Simulated Rule Log / Pipeline Feed */}
      <div className="space-y-1.5 font-mono text-[10.5px]">
        <div className="flex items-center justify-between px-2.5 py-1.5 rounded bg-[#092015] border border-[#173F2B] text-[#BCE2CD]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
            Condition Met: EMA 20 / EMA 50 Crossover Check
          </span>
          <span className="text-[#88A896]">Ready</span>
        </div>
        <div className="flex items-center justify-between px-2.5 py-1.5 rounded bg-[#092015] border border-[#173F2B] text-[#BCE2CD]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5D327]" />
            Volume Threshold Filter: Active Confirmation
          </span>
          <span className="text-[#88A896]">Verified</span>
        </div>
        <div className="flex items-center justify-between px-2.5 py-1.5 rounded bg-[#092015] border border-[#173F2B] text-[#BCE2CD]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            API Heartbeat: Connected to supported endpoint
          </span>
          <span className="text-[#88A896]">Synchronized</span>
        </div>
      </div>
    </div>
  );
}
