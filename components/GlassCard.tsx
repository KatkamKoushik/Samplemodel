import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div 
      className={`
        relative overflow-hidden
        backdrop-blur-md
        bg-[#0a192f]/30
        border border-neon/20
        shadow-[0_0_15px_rgba(0,0,0,0.3)]
        rounded-xl
        transition-all duration-300
        ${hoverEffect ? 'hover:border-neon/50 hover:bg-[#0a192f]/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.15)]' : ''}
        ${className}
      `}
    >
      {/* Decorative corner accents - Holo Style */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neon opacity-70 rounded-tl-lg"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neon opacity-70 rounded-tr-lg"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neon opacity-70 rounded-bl-lg"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neon opacity-70 rounded-br-lg"></div>
      
      {/* Scanline overlay for extra texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-0 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;