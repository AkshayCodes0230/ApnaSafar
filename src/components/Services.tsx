import { motion } from 'motion/react';
import { ShieldCheck, CalendarCheck, Compass, Briefcase, Headphones, Hotel } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Expert Tour Guiding',
    desc: 'Our local experts bring years of storytelling and regional knowledge to every journey.'
  },
  {
    icon: CalendarCheck,
    title: 'Bespoke Itineraries',
    desc: 'Tailor-made travel plans designed from scratch based on your unique preferences.'
  },
  {
    icon: Hotel,
    title: 'Luxury Stays',
    desc: 'Access to exclusive 5-star hotels, private villas, and high-end boutique retreats.'
  },
  {
    icon: Briefcase,
    title: 'Corporate Travel',
    desc: 'Efficient and premium travel solutions for executive teams and business travelers.'
  },
  {
    icon: ShieldCheck,
    title: 'Travel Insurance',
    desc: 'Comprehensive coverage to ensure peace of mind throughout your global exploration.'
  },
  {
    icon: Headphones,
    title: '24/7 VIP Support',
    desc: 'A dedicated concierge always available to handle any request or need on the road.'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-brand-secondary text-white relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
              Our Premier Services
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
              World-class <span className="italic font-serif font-light text-brand-primary">concierge</span> for every traveler
            </h2>
            <p className="text-slate-400 font-light text-lg">
              We go beyond simple bookings. Apna Safar handles every intricate detail 
              of your trip so you can focus on making memories.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-6"
          >
            <div className="text-right">
              <p className="text-4xl font-bold tracking-tighter">15,000+</p>
              <p className="text-[10px] text-brand-muted font-bold uppercase tracking-widest">Happy Travelers</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-right">
              <p className="text-4xl font-bold tracking-tighter">120+</p>
              <p className="text-[10px] text-brand-muted font-bold uppercase tracking-widest">Global Partners</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
