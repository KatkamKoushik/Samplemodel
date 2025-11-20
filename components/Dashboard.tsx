import React, { useEffect } from 'react';
import GlassCard from './GlassCard';
import { Users, Code, Cpu, Music, Utensils, Bus, Zap, MapPin } from 'lucide-react';

const Dashboard: React.FC = () => {
  
  // Scroll to top on mount
  useEffect(() => {
    const scrollContainer = document.getElementById('dashboard-container');
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, []);

  const scheduleData = [
    { time: '05:00 PM', title: 'System Initialization', desc: 'Doors Open & Check-in Protocols', icon: <Users size={20} /> },
    { time: '05:30 PM', title: 'Welcome Sequence', desc: 'Introduction by Dept. Head', icon: <Code size={20} /> },
    { time: '06:00 PM', title: 'Keynote Upload', desc: 'Future of Data Science', icon: <Cpu size={20} /> },
    { time: '07:00 PM', title: 'Cultural Algorithms', desc: 'Dance & Music Performances', icon: <Music size={20} /> },
    { time: '08:00 PM', title: 'Refueling Cycle', desc: 'Dinner Buffet Served', icon: <Utensils size={20} /> },
    { time: '09:00 PM', title: 'Transport Extraction', desc: 'Bus Departure (No. 205 & 206)', icon: <Bus size={20} /> },
  ];

  const menuData = [
    { category: 'Initialization (Starter)', items: ['Crispy Corn (Spicy Mode)'] },
    { category: 'Core Processing (Main)', items: ['Chicken Biryani', 'Veg Pulao', 'Mirchi Ka Salan'] },
    { category: 'Coolant (Drinks)', items: ['Welcome Mojito'] },
    { category: 'System Cache (Dessert)', items: ['Vanilla Ice Cream', 'Chocolate Brownie'] },
  ];

  return (
    <div id="dashboard-container" className="w-full h-full overflow-y-auto p-4 md:p-8 pb-20 scroll-smooth">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-end border-b border-neon/20 pb-6 mb-12 gap-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-2 tracking-tighter drop-shadow-[0_0_10px_rgba(100,255,218,0.3)]">
            SYSTEM <span className="text-neon">DASHBOARD</span>
          </h1>
          <p className="text-neon/80 font-mono text-sm tracking-wider">:: AUTHENTICATED USER // ACCESS LEVEL 5</p>
        </div>
        <div className="text-right hidden md:block">
          <div className="text-xs text-gray-500 font-mono">SESSION ID</div>
          <div className="text-neon font-mono">XF-2025-DS</div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto flex flex-col gap-24">
        
        {/* SECTION 1: SCHEDULE */}
        <section className="animate-[fadeIn_0.5s_ease-out]">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-neon/50 flex-grow box-shadow-[0_0_5px_#64ffda]"></div>
            <h2 className="text-3xl font-display text-white tracking-widest">
              <span className="text-neon">01 //</span> SCHEDULE
            </h2>
            <div className="h-px bg-neon/50 flex-grow box-shadow-[0_0_5px_#64ffda]"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {scheduleData.map((item, idx) => (
              <GlassCard 
                key={idx} 
                hoverEffect={true} 
                className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className="p-4 bg-neon/10 rounded-lg text-neon shrink-0 border border-neon/20">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-display font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm font-mono text-gray-300">{item.desc}</p>
                </div>
                <div className="shrink-0">
                  <span className="text-sm font-mono text-neon border border-neon/30 px-3 py-1 rounded bg-[#0a192f]/60 shadow-[0_0_10px_rgba(100,255,218,0.1)]">
                    {item.time}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* SECTION 2: MENU */}
        <section>
          <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-neon/50 flex-grow"></div>
            <h2 className="text-3xl font-display text-white tracking-widest">
              <span className="text-neon">02 //</span> RATIONS
            </h2>
            <div className="h-px bg-neon/50 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.map((section, idx) => (
              <GlassCard key={idx} className="p-8">
                <h3 className="text-xl font-display text-neon mb-6 border-b border-neon/20 pb-2 flex items-center gap-2">
                  <Zap size={18} />
                  {section.category}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((food, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 font-mono text-gray-200 group">
                      <span className="text-neon opacity-50 group-hover:opacity-100 transition-opacity">></span>
                      <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-300">{food}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* SECTION 3: VENUE */}
        <section className="pb-12">
           <div className="flex items-center gap-4 mb-8">
             <div className="h-px bg-neon/50 flex-grow"></div>
            <h2 className="text-3xl font-display text-white tracking-widest">
              <span className="text-neon">03 //</span> COORDINATES
            </h2>
            <div className="h-px bg-neon/50 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             {/* Map Visual */}
             <GlassCard className="lg:col-span-2 p-1 h-[400px]">
                <div className="w-full h-full bg-[#0a0a15]/50 relative rounded overflow-hidden border border-white/5 group/map">
                    {/* Grid */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        opacity: 0.4
                    }}></div>
                    
                    {/* Radar Scan Line */}
                    <div className="absolute inset-0 rounded-full border border-neon/10 top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow origin-center pointer-events-none"
                         style={{ background: 'conic-gradient(from 0deg, transparent 0deg, transparent 340deg, rgba(100, 255, 218, 0.1) 360deg)' }}>
                    </div>

                    {/* Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20">
                        {/* Outer Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-dashed border-neon/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-neon/40 rounded-full animate-pulse"></div>
                        
                        {/* Center Dot */}
                        <div className="relative w-3 h-3 bg-neon rounded-full z-10 shadow-[0_0_20px_#64ffda]"></div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-30">
                            <div className="bg-black/90 backdrop-blur-md border border-neon/50 text-neon px-4 py-2 rounded">
                                <div className="text-[10px] text-gray-400 tracking-widest">TARGET DESTINATION</div>
                                <div className="font-display font-bold text-white">MAIN AUDITORIUM</div>
                            </div>
                            {/* Tooltip Arrow */}
                            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-neon/50 mx-auto mt-[-1px]"></div>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur p-3 border-l-2 border-neon">
                        <h4 className="text-neon font-display text-xs">SECURE LOCATION</h4>
                        <p className="text-[10px] text-gray-400 font-mono">BLOCK C - LEVEL 2</p>
                    </div>
                </div>
             </GlassCard>

             {/* Details Card */}
             <GlassCard className="p-8 flex flex-col gap-8">
                <div>
                    <h3 className="text-lg font-display text-white mb-2 flex items-center gap-2">
                        <MapPin className="text-neon" size={20} /> 
                        <span>TARGET LOCATION</span>
                    </h3>
                    <p className="font-mono text-gray-300 text-sm leading-relaxed pl-7 border-l border-neon/30 ml-2">
                        Main Auditorium,<br/>
                        Block C, 2nd Floor.<br/>
                        <span className="text-neon/60 text-xs">Lat: 12.9716° N, Long: 77.5946° E</span>
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-display text-white mb-2 flex items-center gap-2">
                        <Bus className="text-neon" size={20} /> 
                        <span>EXTRACTION POINT</span>
                    </h3>
                     <p className="font-mono text-gray-300 text-sm leading-relaxed pl-7 border-l border-neon/30 ml-2">
                        College Bus No. 205 & 206<br/>
                        <span className="text-neon">Departure: 09:00 PM</span>
                    </p>
                </div>

                <div className="mt-auto p-4 bg-neon/5 border border-neon/20 rounded text-xs font-mono text-neon/80">
                    WARNING: Transport protocol initiates promptly at 21:00. Do not be late.
                </div>
             </GlassCard>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;