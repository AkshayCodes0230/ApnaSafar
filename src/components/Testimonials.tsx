import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "The trip to the Himalayas was beyond my expectations. Apna Safar handled every detail perfectly, from the luxury cottage stays to the private helicopter tours. Truly a premium experience.",
    author: "Arjun Malhotra",
    role: "Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150"
  },
  {
    text: "I've traveled with many agencies, but the personalization here is unmatched. They really listened to our needs and crafted a Kerala backwater retreat that we'll never forget.",
    author: "Sneha Gupta",
    role: "Design Consultant",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    text: "The Rajasthan desert expedition was seamless, professional, and luxurious. Their 24/7 support came in handy when we wanted to change our itinerary last minute. Exceptional service!",
    author: "Rohan Deshmukh",
    role: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-secondary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 border-2 border-white rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
            Client Stories
          </span>
          <h2 className="text-5xl md:text-6xl font-bold font-sans tracking-tighter">
            What our curious <span className="italic font-serif font-light text-brand-primary">travelers</span> have to say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-10 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-brand-primary mb-6 opacity-50" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                  ))}
                </div>
                <p className="text-xl font-light leading-relaxed italic mb-8">
                  "{t.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border-2 border-brand-primary" />
                <div>
                  <h4 className="font-bold text-white">{t.author}</h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
