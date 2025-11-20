import React, { useState, useEffect } from 'react';
import GlassCard from './GlassCard';
import { Terminal, ChevronRight, Lock, CheckCircle, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onEnter: () => void;
}

const Hero: React.FC<HeroProps> = ({ onEnter }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  // Target Date: October 15, 2025 (Hypothetical)
  useEffect(() => {
    const targetDate = new Date('2025-10-15T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleEnterSystem = () => {
    setAccessGranted(true);
    // Play access granted animation for 800ms before switching
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <GlassCard className="w-full max-w-2xl p-8 md:p-12 flex flex-col items-center text-center gap-8 border-neon/40">
        
        {/* Status Bar */}
        <div className="w-full flex justify-between items-center text-xs text-neon/60 font-mono border-b border-neon/20 pb-2 mb-2">
          <div className="flex items-center gap-2">
            <Terminal size={14} />
            <span>SYS.SECURE_CONNECTION</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="animate-pulse bg-green-500 w-2 h-2 rounded-full"></span>
            <span>ONLINE</span>
          </div>
        </div>

        {/* Main Title with Glitch Effect */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Terminal Command Line */}
          <div className="w-full text-left pl-2 md:pl-8 mb-4 font-mono text-xs md:text-sm text-neon/80 opacity-80">
            <span className="text-pink-500">root@datascience:~$</span> initiate_sequence --force
            <span className="animate-pulse">_</span>
          </div>

          <h2 className="text-neon text-sm tracking-[0.3em] mb-2 font-display">WELCOME USER</h2>
          <h1 
            className="text-5xl md:text-7xl font-bold font-display text-white glitch-wrapper mb-4" 
            data-text="DATA SCIENCE"
          >
            DATA SCIENCE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-widest border-l-4 border-neon pl-4 inline-block">
            FRESHERS <span className="text-neon font-bold">2025</span>
          </p>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-4 w-full max-w-lg mt-4">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HRS', value: timeLeft.hours },
            { label: 'MIN', value: timeLeft.minutes },
            { label: 'SEC', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white/5 rounded p-2 border border-white/10 backdrop-blur-sm">
              <span className="text-2xl md:text-3xl font-mono font-bold text-white">{String(item.value).padStart(2, '0')}</span>
              <span className="text-[10px] text-neon tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Enter Button */}
        <div className="mt-8 w-full flex justify-center h-16">
          {!accessGranted ? (
            <button 
              onClick={handleEnterSystem}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`
                group relative px-8 py-4 bg-transparent border border-neon 
                text-neon font-display font-bold text-lg tracking-widest uppercase
                transition-all duration-300 overflow-hidden
                hover:bg-neon hover:text-void hover:shadow-[0_0_20px_#64ffda]
              `}
            >
              {/* Button Glitch Overlay on Hover */}
              <span className={`absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full transition-transform duration-300 ${isHovering ? 'translate-x-0' : ''}`}></span>
              
              <div className="relative flex items-center gap-3">
                {isHovering ? <ChevronRight className="animate-pulse" /> : <Lock size={18} />}
                <span>Enter System</span>
              </div>
            </button>
          ) : (
            <div className="flex items-center gap-3 text-neon font-display font-bold text-lg tracking-widest uppercase animate-pulse drop-shadow-[0_0_15px_rgba(100,255,218,0.8)]">
              <ShieldCheck size={24} />
              <span>ACCESS GRANTED</span>
            </div>
          )}
        </div>

        <div className="text-xs text-gray-500 font-mono mt-4">
          ID: 0x9283_ACCESS_GRANTED
        </div>

      </GlassCard>
    </div>
  );
};

export default Hero;