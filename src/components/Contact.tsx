import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const message = `Hello Apna Safar!%0A%0A*New Trip Inquiry*%0A- Name: ${formData.name}%0A- Email: ${formData.email}%0A- Destination: ${formData.destination}%0A- Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 10000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('srivastava.akshay2000@gmail.com');
    alert('Email address copied!');
  };

  const copyFullDetails = () => {
    const details = `Name: ${formData.name}\nEmail: ${formData.email}\nDestination: ${formData.destination}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(details);
    alert('Inquiry details copied! You can now paste them in your email app.');
  };

  return (
    <section id="contact" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Info Side */}
          <div className="w-full lg:w-2/5 space-y-12">
            <div>
              <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                Ready for your <span className="italic font-serif font-light text-brand-primary">next</span> adventure?
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Contact us today for a free consultation. Our travel designers are ready to 
                craft the perfect itinerary for you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer" onClick={copyEmail}>
                <div className="w-14 h-14 bg-brand-accent/50 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black/40 uppercase tracking-widest">Email Us (Click to Copy)</h4>
                  <p className="text-lg font-bold text-brand-secondary">srivastava.akshay2000@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-brand-accent/50 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black/40 uppercase tracking-widest">Call Us</h4>
                  <p className="text-lg font-bold text-brand-secondary">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 bg-brand-accent/50 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black/40 uppercase tracking-widest">Visit Us</h4>
                  <p className="text-lg font-bold text-brand-secondary">Lucknow, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-brand-accent/30 rounded-[3rem] border border-black/5"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-black/40 uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-4 bg-white rounded-2xl border border-black/5 focus:border-brand-primary outline-none transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-black/40 uppercase tracking-widest">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 bg-white rounded-2xl border border-black/5 focus:border-brand-primary outline-none transition-colors" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black/40 uppercase tracking-widest">Preferred Destination</label>
                  <select 
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-6 py-4 bg-white rounded-2xl border border-black/5 focus:border-brand-primary outline-none transition-colors appearance-none"
                  >
                    <option value="">Select a location</option>
                    <option>Heritage Rajasthan</option>
                    <option>Kerala Backwaters</option>
                    <option>Kashmir Valley</option>
                    <option>Goa Beach Bliss</option>
                    <option>Leh Ladakh Trek</option>
                    <option>Ladakh, India</option>
                    <option>Kasol, India</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-black/40 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your dream trip..." 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 bg-white rounded-2xl border border-black/5 focus:border-brand-primary outline-none transition-colors" 
                  />
                </div>
                <button type="submit" className="w-full py-5 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all duration-300 transform active:scale-95 group">
                  {isSubmitted ? 'WhatsApp Opening...' : 'Send via WhatsApp'} <Send className={`w-5 h-5 transition-transform ${isSubmitted ? 'rotate-12 scale-110' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
                </button>
                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 border border-[#25D366]/20 rounded-2xl">
                    <p className="text-center text-sm font-bold text-[#128C7E]">
                      Opening WhatsApp...
                    </p>
                    <p className="mt-2 text-center text-xs text-slate-500 mb-4">
                      If WhatsApp doesn't open, please click below to copy the message and email it to: 
                      <span className="block font-black text-slate-700 mt-1">srivastava.akshay2000@gmail.com</span>
                    </p>
                    <button 
                      type="button"
                      onClick={copyFullDetails}
                      className="w-full py-3 bg-white border border-brand-primary/20 text-brand-primary rounded-xl text-xs font-bold hover:bg-brand-accent/30 transition-colors"
                    >
                      Copy Inquiry Details to Clipboard
                    </button>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
