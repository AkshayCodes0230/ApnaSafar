import { Plane, ChevronRight, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] -mr-64 -mb-64" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-8">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg shadow-blue-400/20">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight leading-none uppercase text-white">
                  Apna<span className="text-brand-primary">Safar</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-400">
                  Premium Travel Concierge
                </span>
              </div>
            </a>
            <p className="text-slate-500 leading-relaxed font-light text-sm">
              Crafting extraordinary luxury travel experiences for the modern explorer. 
              Discover the world in total comfort and style.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Destinations', 'Tour Packages', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/50 hover:text-brand-primary transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Email</p>
                  <p className="text-sm font-medium">hello@apnasafar.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Support</p>
                  <p className="text-sm font-medium">support@apnasafar.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Newsletter</h4>
            <p className="text-white/50 text-sm leading-relaxed font-light">
              Subscribe to get latest travel updates and exclusive offers.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 outline-none focus:border-brand-primary transition-colors text-sm"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs">
            © {currentYear} Apna Safar Premium Travel. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-white/30 hover:text-white text-xs transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
