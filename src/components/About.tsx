import { motion } from 'motion/react';
import { Award, Globe2, Users2, Map } from 'lucide-react';

const stats = [
  { icon: Globe2, value: '50+', label: 'Countries Covered' },
  { icon: Users2, value: '12k+', label: 'Satisfied Clients' },
  { icon: Map, value: '500+', label: 'Bespoke Tours' },
  { icon: Award, value: '15+', label: 'Design Awards' }
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Images Grid */}
          <div className="w-full lg:w-1/2 relative h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 right-0 w-3/4 h-3/4 rounded-[3rem] overflow-hidden shadow-2xl z-20 border-8 border-slate-50"
            >
              <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1000" 
                alt="Travelers" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Landscape" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-32 h-32 bg-brand-primary rounded-full blur-[60px] opacity-10" />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs block">
                Professional Excellence
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tighter">
                Crafting <span className="italic font-serif font-light text-brand-primary">Unforgettable</span> Memories
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Apna Safar was founded on a simple principle: travel should be extraordinary. 
                We specialize in luxury tourism, bridging the gap between world-class 
                comfort and authentic local experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary border border-slate-100">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <a 
                href="#services"
                className="inline-block px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-brand-primary transition-all shadow-xl shadow-slate-200"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
