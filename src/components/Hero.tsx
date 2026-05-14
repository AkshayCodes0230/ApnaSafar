import { motion } from 'motion/react';
import { Search, MapPin, Calendar, Globe, ArrowRight, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[850px] flex items-center overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 z-0 scale-110">
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "linear"
          }}
          src="https://images.unsplash.com/photo-1506929509065-05d113c0c5ad?auto=format&fit=crop&q=80&w=2560" 
          alt="Premium Travel Destination"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Cleaner, more vibrant overlay */}
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-900/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row gap-20 items-center justify-between">
        <div className="max-w-3xl lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-xl">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Explore the 2026 Collection</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl text-white font-black tracking-tighter leading-[0.85] mb-10">
              Unveil <br/>
              <span className="text-brand-primary italic font-serif font-light drop-shadow-sm">Hidden</span> <br/>
              Wonders
            </h1>
            
            <p className="text-white/80 text-xl max-w-lg mb-12 leading-relaxed font-normal">
              Bespoke travel experiences for those who demand the extraordinary. Discover sacred spaces and silent luxuries.
            </p>

            <div className="flex gap-16 items-center">
              <div className="flex flex-col">
                <span className="text-5xl font-black text-white tracking-tighter mb-1">15+</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-black">Years Expert</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-5xl font-black text-white tracking-tighter mb-1">500+</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-black">Global Spots</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Trip Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="w-full lg:w-[420px] bg-white/95 backdrop-blur-xl p-10 rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.3)] border border-white/40"
        >
          <div className="space-y-10">
            <div className="text-center">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-2">Curate Your Trip</h3>
              <p className="text-xs text-slate-500 font-medium italic font-serif">Start your legendary story today</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[9px] text-slate-900 uppercase font-black tracking-[0.2em] flex items-center gap-2 px-2">
                  <MapPin className="w-3 h-3 text-brand-primary" /> Destination
                </label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl text-sm font-bold text-slate-700 appearance-none outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all shadow-inner">
                    <option>Santorini, Greece</option>
                    <option>Maldives Archipelago</option>
                    <option>Swiss Alps, Switzerland</option>
                    <option>Kyoto, Japan</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[9px] text-slate-900 uppercase font-black tracking-[0.2em] flex items-center gap-2 px-2">
                    <Calendar className="w-3 h-3 text-brand-primary" /> Date
                  </label>
                  <div className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl text-sm font-bold text-slate-700 shadow-inner">Aug 12, 2026</div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] text-slate-900 uppercase font-black tracking-[0.2em] flex items-center gap-2 px-2">
                    <Users className="w-3 h-3 text-brand-primary" /> Guests
                  </label>
                  <div className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl text-sm font-bold text-slate-700 shadow-inner">02 Adults</div>
                </div>
              </div>

              <button 
                onClick={() => document.getElementById('upcoming-adventures')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full mt-4 bg-slate-900 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-brand-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
              >
                <Search className="w-4 h-4" /> Check Availability
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[9px] text-white font-black uppercase tracking-[0.5em] [text-orientation:upright] [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  );
}
