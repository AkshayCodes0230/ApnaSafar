import { motion } from 'motion/react';
import { Calendar, Users, Clock, CheckCircle2, ChevronRight } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Alpine Wonders Retreat',
    duration: '8 Days, 7 Nights',
    groupSize: 'Max 12 People',
    highlights: ['Luxury Chalet Stay', 'Helicopter Glacier Tour', 'Private Ski Lessons'],
    price: '$4,200',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=1200',
    isHot: true
  },
  {
    id: 2,
    title: 'Serengeti Wildlife Safari',
    duration: '6 Days, 5 Nights',
    groupSize: 'Private Group',
    highlights: ['5-Star Tented Camp', 'Hot Air Balloon Safari', 'Professional Guide'],
    price: '$5,800',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200',
    isHot: false
  },
  {
    id: 3,
    title: 'Kyoto Heritage Journey',
    duration: '10 Days, 9 Nights',
    groupSize: 'Max 8 People',
    highlights: ['Traditional Ryokan Stay', 'Tea Ceremony Experience', 'Private Temple Access'],
    price: '$3,950',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200',
    isHot: false
  }
];

export default function Packages() {
  return (
    <section id="packages" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
            Special Tour Packages
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-[1.1]">
            Curated journeys for the <span className="italic font-serif font-light text-brand-primary">exceptional</span> explorer
          </h2>
          <p className="text-slate-500 leading-relaxed font-light">
            We don't just book trips; we craft experiences. Each package is meticulously planned 
            to offer the perfect balance of luxury, adventure, and cultural immersion.
          </p>
        </div>

        <div className="space-y-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-3/5 relative h-[500px] rounded-[3rem] overflow-hidden group border border-slate-100 shadow-xl">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {pkg.isHot && (
                  <div className="absolute top-8 left-8 py-2 px-6 bg-brand-primary text-white font-bold rounded-full text-[10px] tracking-widest shadow-lg shadow-blue-200">
                    BEST SELLER
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/5 space-y-8">
                <h3 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  {pkg.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-6 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-primary">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold text-slate-400">Duration</p>
                      <p className="text-sm font-bold text-slate-900">{pkg.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-primary">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold text-slate-400">Group Size</p>
                      <p className="text-sm font-bold text-slate-900">{pkg.groupSize}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Included Highlights</p>
                  <ul className="grid grid-cols-1 gap-3">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-6">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Starting from</span>
                    <p className="text-3xl font-black text-slate-900">{pkg.price}</p>
                  </div>
                  <button className="px-10 py-4 bg-brand-primary text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2 group">
                    Book Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
