import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Clock, X, CheckCircle2, XCircle, Star, Calendar, Users, Send, ArrowLeft, ArrowRight } from 'lucide-react';
import { jsPDF } from 'jspdf';

const upcomingAdventures = [
  {
    id: 1,
    title: 'Kuari Pass',
    location: 'IIT Roorkee | Delhi NCR',
    duration: '4 Days / 3 Nights',
    price: '₹7,500',
    lastDate: '26 May 2026',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    details: {
      matchInfo: 'Kuari Pass Trek',
      rating: 4.8,
      groupSize: '15-20 People',
      gallery: [
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=400'
      ],
      included: ['Transportation (complete trip)', '2 Breakfasts, 2 Dinners & 1 Snack', 'Camping Stay', 'Trained Guide'],
      notIncluded: ['Any other activities not mentioned', 'Personal expenses']
    }
  },
  {
    id: 3,
    title: 'Dharamsala with IPL',
    location: 'Delhi NCR | Roorkee',
    duration: '3 Days / 2 Nights',
    price: '₹14,000',
    lastDate: '30 April 2026',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    details: {
      matchInfo: 'RCB vs PBKS',
      rating: 4.9,
      groupSize: '8-15 People',
      gallery: [
        'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1540749301485-616183bbda35?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=400'
      ],
      included: ['Live IPL Match Tickets', 'Transportation complete trip', 'Riverside Camping', 'Basic First Aid'],
      notIncluded: ['Any other meal than mentioned', 'Personal expenditures']
    }
  },
  {
    id: 4,
    title: 'Manali & Solang',
    location: 'Delhi | Chandigarh',
    duration: '4 Days / 3 Nights',
    price: '₹11,500',
    lastDate: '15 May 2026',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800',
    details: {
      matchInfo: 'Snow Peaks Adventure',
      rating: 4.7,
      groupSize: '20-25 People',
      gallery: [
        'https://images.unsplash.com/photo-1596701062351-845609406568?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=400'
      ],
      included: ['Luxury Volvo A/C Bus', 'Standard Hotel Stay', 'Local Sightseeing', 'Welcome Drinks'],
      notIncluded: ['Adventure sports charges', 'Lunch during travel']
    }
  },
  {
    id: 6,
    title: 'Kasol & Kheerganga',
    location: 'Delhi | Bhuntar',
    duration: '3 Days / 2 Nights',
    price: '₹8,000',
    lastDate: '05 May 2026',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800',
    details: {
      matchInfo: 'Mini Israel Experience',
      rating: 4.8,
      groupSize: '15-20 People',
      gallery: [
        'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1486915307817-2b5bb3b25b9e?auto=format&fit=crop&q=80&w=400'
      ],
      included: ['Kasol Riverside Camping', 'Hot Spring Bath', 'Trek Guide', 'Music Night'],
      notIncluded: ['Porters for personal bags', 'Any liquor/smoke']
    }
  },
  {
    id: 8,
    title: 'Kedarkantha Trek',
    location: 'Dehradun | Sankri',
    duration: '6 Days / 5 Nights',
    price: '₹10,000',
    lastDate: '01 June 2026',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=800',
    details: {
      matchInfo: 'The Best Winter Trek',
      rating: 4.9,
      groupSize: '12-18 People',
      gallery: [
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=400'
      ],
      included: ['Forest Permits', 'Technical Equipment', 'High Altitude Kitchen', 'Safety Oxygen'],
      notIncluded: ['Mules for personal gear', 'Stay in Dehradun']
    }
  },
  {
    id: 9,
    title: 'Rajasthan Heritage',
    location: 'Jaipur | Udaipur',
    duration: '8 Days / 7 Nights',
    price: '₹30,000',
    lastDate: '15 July 2026',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800',
    details: {
      matchInfo: 'Royal Rajputana Journey',
      rating: 4.9,
      groupSize: '10-12 People',
      gallery: [
        'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=400'
      ],
      included: ['Luxury Heritage Stay', 'Desert Safari', 'Folk Performance', 'Private Tours'],
      notIncluded: ['Personal Expenses', 'Medical Insurance']
    }
  },
  {
    id: 10,
    title: 'Rameshwaram (Tamil Nadu)',
    location: 'Madurai | Rameshwaram',
    duration: '5 Days / 4 Nights',
    price: '₹16,000',
    lastDate: '10 June 2026',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800',
    details: {
      matchInfo: 'Spiritual Southern Trail',
      rating: 5.0,
      groupSize: '12-15 People',
      gallery: [
        'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1542144611-13e9259a287c?auto=format&fit=crop&q=80&w=400',
        'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=400'
      ],
      included: ['Pamban Bridge View', 'Ramanathaswamy Temple', 'Dhanushkodi Visit', 'Madurai Meenakshi Visit'],
      notIncluded: ['Bike Fuel', 'Any personal riding gear']
    }
  }
];

export default function UpcomingAdventures() {
  const [selectedAdventure, setSelectedAdventure] = useState<typeof upcomingAdventures[0] | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Keyboard support for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') scroll('left');
      if (e.key === 'ArrowRight') scroll('right');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const generateBrochure = () => {
    if (!selectedAdventure) return;

    const doc = new jsPDF();
    
    // Header background
    doc.setFillColor(15, 23, 42); // slate-900
    doc.rect(0, 0, 210, 40, 'F');
    
    // Logo text
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('APNA SAFAR', 20, 25);
    
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.text('PREMIUM TRAVEL CONCIERGE', 20, 32);
    
    // Trip Title
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text(selectedAdventure.title.toUpperCase(), 20, 60);
    
    // Trip Summary
    doc.setFontSize(11);
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text(`Destination: ${selectedAdventure.location}`, 20, 75);
    doc.text(`Duration: ${selectedAdventure.duration}`, 20, 82);
    doc.text(`Price: ${selectedAdventure.price} (All Inclusive)`, 20, 89);
    doc.text(`Trip Rating: ${selectedAdventure.details.rating}/5.0`, 20, 96);
    
    // Horizontal Line
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.line(20, 105, 190, 105);
    
    // Sections
    let yPos = 120;
    
    // Inclusions
    doc.setFontSize(16);
    doc.setTextColor(16, 185, 129); // emerald-500
    doc.text("PREMIUM INCLUSIONS", 20, yPos);
    yPos += 12;
    
    doc.setFontSize(10);
    doc.setTextColor(51, 65, 85); // slate-700
    selectedAdventure.details.included.forEach(item => {
      doc.text(`• ${item}`, 25, yPos);
      yPos += 8;
    });
    
    yPos += 10;
    
    // Exclusions
    doc.setFontSize(16);
    doc.setTextColor(244, 63, 94); // rose-500
    doc.text("EXCLUSIONS", 20, yPos);
    yPos += 12;
    
    doc.setFontSize(10);
    doc.setTextColor(51, 65, 85);
    selectedAdventure.details.notIncluded.forEach(item => {
      doc.text(`• ${item}`, 25, yPos);
      yPos += 8;
    });
    
    // Footer
    doc.setFillColor(248, 250, 252); // slate-50
    doc.rect(0, 275, 210, 22, 'F');
    
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(`Registration Deadline: ${selectedAdventure.lastDate}`, 20, 282);
    doc.text('Book your journey at www.apnasafar.com | WhatsApp: +91 98765 43210', 20, 289);
    
    doc.save(`${selectedAdventure.title.replace(/\s+/g, '_')}_Brochure.pdf`);
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedAdventure) return;

    const message = `Hello Apna Safar!%0A%0AInterested in: ${selectedAdventure.title} trip.%0A%0A*Booking Details*%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Trip: ${selectedAdventure.title}%0A- Price: ${selectedAdventure.price}%0A- Date: ${selectedAdventure.lastDate}%0A%0APlease confirm my reservation.`;
    
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
    <section id="upcoming-adventures" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-indigo-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            <Calendar className="w-3.5 h-3.5" /> Handpicked Adventures
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            Upcoming <span className="text-brand-primary italic font-serif font-light">Adventures</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            Curated journeys designed to push boundaries and create lasting legends. 
            Join our exclusive small-group expeditions.
          </p>
        </div>

        {/* Carousel Area */}
        <div className="relative group/carousel">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 z-20 hidden lg:block">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl hover:bg-brand-primary hover:text-white transition-all border border-slate-100"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 z-20 hidden lg:block">
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-xl hover:bg-brand-primary hover:text-white transition-all border border-slate-100"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-10 pb-10 custom-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {upcomingAdventures.map((adventure, index) => (
              <motion.div
                key={adventure.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group/card bg-white min-w-[320px] md:min-w-[380px] rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col cursor-pointer transition-all duration-500 snap-center"
                onClick={() => setSelectedAdventure(adventure)}
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img 
                    src={adventure.image} 
                    alt={adventure.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" 
                  />
                  <div className="absolute top-6 right-6 py-2 px-5 bg-white/90 backdrop-blur-md text-brand-secondary font-black rounded-2xl text-sm shadow-xl border border-white/20">
                    {adventure.price}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent opacity-80 group-hover/card:via-slate-900/30 transition-all duration-500" />
                  
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">Limited Spots Available</span>
                    </div>
                    <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover/card:text-brand-primary transition-colors">{adventure.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/70">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-blue-400" />
                          {adventure.location.split('|')[0]}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-emerald-400" />
                          {adventure.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex items-center justify-between bg-slate-50/50">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Registration Ends</span>
                    <span className="text-sm font-bold text-red-500 flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-red-400" />
                      {adventure.lastDate}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover/card:bg-brand-primary group-hover/card:text-white transition-all duration-300 border border-slate-100">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedAdventure && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
              onClick={() => setSelectedAdventure(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-5xl bg-white rounded-[3rem] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-white/20"
            >
              {/* Header Image Part */}
              <div className="relative h-[300px] md:h-[400px] shrink-0">
                <img 
                  src={selectedAdventure.image} 
                  alt={selectedAdventure.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
                <button 
                  onClick={() => setSelectedAdventure(null)}
                  className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all z-20 border border-white/30"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 bg-brand-primary text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20">
                      Private Expedition
                    </span>
                    <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {selectedAdventure.details.rating} Rating
                    </div>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
                    {selectedAdventure.title}
                  </h2>
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">Starting point</span>
                      <span className="text-sm font-bold text-white flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-primary" />
                        {selectedAdventure.location}
                      </span>
                    </div>
                    <div className="w-px h-10 bg-white/20" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-1">Price per person</span>
                      <span className="text-3xl font-black text-white">{selectedAdventure.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Part */}
              <div className="flex-1 overflow-y-auto p-12 space-y-16 custom-scrollbar">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl flex flex-col items-center text-center group hover:bg-blue-50 hover:border-blue-100 transition-all duration-300">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                      <Clock className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Duration</span>
                    <span className="text-lg font-bold text-slate-900">{selectedAdventure.duration}</span>
                  </div>
                  <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl flex flex-col items-center text-center group hover:bg-emerald-50 hover:border-emerald-100 transition-all duration-300">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                      <Users className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Group Size</span>
                    <span className="text-lg font-bold text-slate-900">{selectedAdventure.details.groupSize}</span>
                  </div>
                  <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl flex flex-col items-center text-center group hover:bg-amber-50 hover:border-amber-100 transition-all duration-300">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                      <Calendar className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Next Batch</span>
                    <span className="text-lg font-bold text-slate-900">{selectedAdventure.lastDate}</span>
                  </div>
                </div>

                {/* Photo Gallery */}
                <div className="space-y-4">
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block">
                        Visual Preview
                      </span>
                      <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Experience it <span className="italic font-serif font-light">virtually</span></h3>
                    </div>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-brand-primary transition-colors">
                      View all 12 photos
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedAdventure.details.gallery.map((img, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.05 }}
                        className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 relative group/img"
                      >
                        <img src={img} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Included/Not Included */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      Premium Inclusions
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedAdventure.details.included.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100/50">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                          <span className="text-sm font-medium text-emerald-900">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                        <XCircle className="w-6 h-6" />
                      </div>
                      Exclusions
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedAdventure.details.notIncluded.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-rose-50/50 rounded-2xl border border-rose-100/50">
                          <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                          <span className="text-sm font-medium text-rose-900">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Final Call to Action */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Investment</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-slate-900">{selectedAdventure.price}</span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">All Inclusive</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <button 
                      onClick={() => setShowBookingForm(true)}
                      className="flex-1 md:flex-none px-12 py-5 bg-brand-primary text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
                    >
                      Reserve My Spot
                    </button>
                    <button 
                      onClick={generateBrochure}
                      className="flex-1 md:flex-none px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
                    >
                      Get Brochure
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Form Modal */}
      <AnimatePresence>
        {showBookingForm && selectedAdventure && (
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
              className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden p-10 border border-slate-100"
            >
              <button 
                onClick={() => setShowBookingForm(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Requirement Check</h3>
                <p className="text-sm text-slate-500 font-medium">Please provide your details for the <br/><span className="text-brand-primary font-bold">{selectedAdventure.title}</span> trip</p>
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
                    placeholder="Enter your name"
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
                  className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isSubmitted ? 'WhatsApp Opening...' : 'Reserve on WhatsApp'}
                </button>
                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 border border-[#25D366]/20 rounded-2xl animate-pulse">
                    <p className="text-center text-[10px] font-bold text-[#128C7E]">
                      Opening WhatsApp...
                    </p>
                    <p className="mt-2 text-center text-[9px] text-slate-500 font-medium">
                      Starting your reservation chat on WhatsApp.
                    </p>
                  </div>
                )}
                <p className="text-[9px] text-center text-slate-400 font-medium uppercase tracking-widest mt-6">
                  Secure SSL Encryption • No Hidden Fees
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
