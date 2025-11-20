import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [isEntered, setIsEntered] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleEnterSystem = () => {
    setIsEntered(true);
    // Allow the exit animation of Hero to play before showing Dashboard
    setTimeout(() => {
      setShowDashboard(true);
    }, 800);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-void text-white font-mono selection:bg-neon selection:text-void">
      {/* The persistent background layer */}
      <ParticleBackground />

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">
        
        {/* Hero Section - Fades out when entered */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform 
            ${isEntered ? 'opacity-0 scale-110 pointer-events-none blur-sm' : 'opacity-100 scale-100 blur-0'}
          `}
        >
          {!showDashboard && <Hero onEnter={handleEnterSystem} />}
        </div>

        {/* Dashboard Section - Slides in when entered */}
        <div 
          className={`absolute inset-0 transition-all duration-1000 ease-out transform 
            ${showDashboard ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          `}
        >
          {showDashboard && <Dashboard />}
        </div>

      </div>
      
      {/* Global Overlay Vignette for atmosphere */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] z-0 opacity-80"></div>
    </div>
  );
};

export default App;