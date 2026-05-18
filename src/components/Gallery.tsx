import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const galleryPhotos = [
  { url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800', size: 'large', title: 'Taj Mahal, Agra' },
  { url: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&q=80&w=800', size: 'small', title: 'Golden Temple, Amritsar' },
  { url: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&q=80&w=800', size: 'small', title: 'Ganga Ghat, Varanasi' },
  { url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800', size: 'medium', title: 'Beach Life, Goa' },
  { url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800', size: 'medium', title: 'Amer Fort, Jaipur' },
  { url: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=800', size: 'large', title: 'Backwaters, Kerala' }
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof galleryPhotos[0] | null>(null);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
            Visual Journeys
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">
            Capture the <span className="italic font-serif font-light text-brand-primary">essence</span> of travel
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {galleryPhotos.map((photo, index) => {
            const spanClass = 
              photo.size === 'large' ? 'row-span-2 col-span-2 md:col-span-1' :
              photo.size === 'medium' ? 'row-span-1 col-span-1 md:col-span-1' : 'row-span-1';
              
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${spanClass} relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg`}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <Maximize2 className="w-8 h-8 text-white mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-500" />
                  <span className="px-6 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-brand-secondary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Moments
                  </span>
                  <p className="mt-4 text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                    {photo.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
              onClick={() => setSelectedPhoto(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full h-full max-h-[80vh] bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-white/20"
            >
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all z-20"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img 
                src={selectedPhoto.url.replace('w=800', 'w=1600')} 
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-12 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent">
                <span className="text-brand-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">
                  Captured Moment
                </span>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                  {selectedPhoto.title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
