import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MapPin, ArrowUpRight, X, Clock, Users, Calendar, CheckCircle2, XCircle, Send } from 'lucide-react';

const categories = ['All', 'Tropical', 'Cultural', 'Coastal', 'Romantic', 'Adventure', 'Wellness'];

const destinations = [
  {
    id: 1,
    title: 'Bali, Indonesia',
    location: 'Southeast Asia',
    price: '$1,299',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    tag: 'Tropical',
    duration: '7 Days / 6 Nights',
    groupSize: '8-12 People',
    details: {
      included: ['Private Pool Villa', 'Balinese Massage', 'Ubud Day Tour', 'Daily Breakfast'],
      notIncluded: ['International Flights', 'Travel Insurance']
    }
  },
  {
    id: 2,
    title: 'Santorini, Greece',
    location: 'Mediterranean',
    price: '$2,450',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    tag: 'Romantic',
    duration: '5 Days / 4 Nights',
    groupSize: '2-4 People',
    details: {
      included: ['Sunset Cruise', 'Wine Tasting Tour', 'Boutique Hotel', 'Luxury Transfers'],
      notIncluded: ['Lunch & Dinner', 'Personal Expenses']
    }
  },
  {
    id: 3,
    title: 'Amalfi Coast, Italy',
    location: 'Western Europe',
    price: '$3,100',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
    tag: 'Coastal',
    duration: '6 Days / 5 Nights',
    groupSize: '6-10 People',
    details: {
      included: ['Positano Villa Stay', 'Boat Tour to Capri', 'Cooking Class', 'Private Driver'],
      notIncluded: ['Airfare', 'Alcoholic Beverages']
    }
  },
  {
    id: 4,
    title: 'Kyoto, Japan',
    location: 'East Asia',
    price: '$2,800',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    tag: 'Cultural',
    duration: '8 Days / 7 Nights',
    groupSize: '10-15 People',
    details: {
      included: ['Ryokan Stay', 'Tea Ceremony', 'Bullet Train Passes', 'Local Heritage Guide'],
      notIncluded: ['Visa Fees', 'Baggage Fees']
    }
  },
  {
    id: 6,
    title: 'Reykjavik, Iceland',
    location: 'Northern Europe',
    price: '$3,500',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800',
    tag: 'Adventure',
    duration: '6 Days / 5 Nights',
    groupSize: '6-8 People',
    details: {
      included: ['Northern Lights Tour', 'Blue Lagoon Access', 'Golden Circle Drive', 'Glacier Hike'],
      notIncluded: ['Winter Gear Rental', 'Specialty Dinners']
    }
  },
  {
    id: 7,
    title: 'Udaipur, India',
    location: 'South Asia',
    price: '$750',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800',
    tag: 'Romantic',
    duration: '4 Days / 3 Nights',
    groupSize: '4-6 People',
    details: {
      included: ['Lake Palace Stay', 'Boat Ride', 'Heritage Walk', 'Rajasthani Thali'],
      notIncluded: ['Internal Flights', 'Alcohol']
    }
  },
  {
    id: 8,
    title: 'Machu Picchu, Peru',
    location: 'South America',
    price: '$1,950',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=800',
    tag: 'Adventure',
    duration: '9 Days / 8 Nights',
    groupSize: '10-14 People',
    details: {
      included: ['Inca Trail Hike', 'Train to Aguas Calientes', 'Pro Trekking Guide', 'Cusco Hotel'],
      notIncluded: ['Hiking Equipment', 'International Airfare']
    }
  }
];

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedDest, setSelectedDest] = useState<typeof destinations[0] | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const filteredDestinations = activeCategory === 'All' 
    ? (isExpanded ? destinations : destinations.slice(0, 4))
    : destinations.filter(d => d.tag === activeCategory);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedDest) return;

    const message = `Hello Apna Safar!%0A%0AInterested in: ${selectedDest.title} package.%0A%0A*Lead Details*%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Destination: ${selectedDest.title}%0A- Price: ${selectedDest.price}%0A%0APlease share the full itinerary and requirements.`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => {
      setShowBookingForm(false);
      setIsSubmitted(false);
      setFormData({ name: '', phone: '' });
    }, 8000);
  };

  return (
    <section id="destinations" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
              Global Collections
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter leading-[1.1]">
              Travel to the most <span className="italic font-serif font-light text-brand-primary">beautiful</span> corners
            </h2>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-brand-primary transition-colors group"
          >
            {isExpanded ? 'Show Less' : 'Explore All'} <ArrowUpRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-45' : ''}`} />
          </button>
        </div>

        {/* Category Tabs */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-brand-primary text-white shadow-lg shadow-blue-500/20' 
                      : 'bg-white text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="premium-card group cursor-pointer border-none"
                onClick={() => setSelectedDest(dest)}
              >
                <div className="relative h-[450px] overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-primary text-white rounded-full text-[9px] font-bold uppercase tracking-widest">
                      {dest.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent group-hover:via-slate-900/40 transition-all duration-500" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(dest.rating) ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`} />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-1 tracking-tight">{dest.title}</h3>
                    <div className="flex items-center gap-1 text-white/60 text-[10px] font-bold uppercase tracking-widest mb-6">
                      <MapPin className="w-3 h-3" />
                      <span>{dest.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="flex flex-col">
                        <span className="text-2xl font-black">{dest.price}</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">Per Person</span>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-primary transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedDest && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
              onClick={() => setSelectedDest(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-white/20"
            >
              <div className="relative h-[300px] shrink-0">
                <img src={selectedDest.image} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
                <button 
                  onClick={() => setSelectedDest(null)}
                  className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all z-20"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-10 left-10 text-white">
                  <span className="px-4 py-1.5 bg-brand-primary text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 inline-block">
                    {selectedDest.tag} Destintation
                  </span>
                  <h2 className="text-5xl font-black tracking-tighter mb-2">{selectedDest.title}</h2>
                  <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                    <MapPin className="w-4 h-4 text-brand-primary" />
                    {selectedDest.location}
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-slate-50 rounded-3xl text-center">
                    <Clock className="w-6 h-6 text-brand-primary mx-auto mb-3" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Duration</span>
                    <span className="text-sm font-bold text-slate-900">{selectedDest.duration}</span>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl text-center">
                    <Users className="w-6 h-6 text-emerald-500 mx-auto mb-3" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Group Size</span>
                    <span className="text-sm font-bold text-slate-900">{selectedDest.groupSize}</span>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl text-center">
                    <Star className="w-6 h-6 text-amber-500 mx-auto mb-3" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Rating</span>
                    <span className="text-sm font-bold text-slate-900">{selectedDest.rating} / 5.0</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      What's Included
                    </h3>
                    <div className="space-y-3">
                      {selectedDest.details.included.map((item, i) => (
                        <div key={i} className="flex gap-3 text-sm text-slate-600 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600">
                        <XCircle className="w-5 h-5" />
                      </div>
                      Not Included
                    </h3>
                    <div className="space-y-3">
                      {selectedDest.details.notIncluded.map((item, i) => (
                        <div key={i} className="flex gap-3 text-sm text-slate-600 font-medium">
                          <XCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Price Starts From</span>
                    <span className="text-4xl font-black text-slate-900">{selectedDest.price}</span>
                  </div>
                  <button 
                    onClick={() => setShowBookingForm(true)}
                    className="px-10 py-5 bg-black text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-brand-primary transition-all shadow-xl"
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showBookingForm && selectedDest && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              onClick={() => setShowBookingForm(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-10"
            >
              <button 
                onClick={() => setShowBookingForm(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Requirement Check</h3>
                <p className="text-sm text-slate-500 font-medium">Please provide your details for the <br/><span className="text-brand-primary font-bold">{selectedDest.title}</span> trip</p>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-900 uppercase font-black tracking-widest px-1">Full Name</label>
                  <input 
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all shadow-inner"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-slate-900 uppercase font-black tracking-widest px-1">WhatsApp Number</label>
                  <input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl text-sm font-bold text-slate-700 outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all shadow-inner"
                    placeholder="+91 00000 00000"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-[#128C7E] transition-all duration-300"
                >
                  {isSubmitted ? 'WhatsApp Opening...' : 'Inquire on WhatsApp'}
                </button>
                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 border border-[#25D366]/20 rounded-2xl animate-pulse">
                    <p className="text-center text-[10px] font-bold text-[#128C7E]">
                      Opening WhatsApp...
                    </p>
                    <p className="mt-2 text-center text-[9px] text-slate-500 font-medium">
                      Redirecting you to our travel designer on WhatsApp.
                    </p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
