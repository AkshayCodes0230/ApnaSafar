import { motion } from 'motion/react';

const galleryPhotos = [
  { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800', size: 'large' },
  { url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1472396961695-1ad4a02f699?auto=format&fit=crop&q=80&w=800', size: 'medium' },
  { url: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=800', size: 'medium' },
  { url: 'https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?auto=format&fit=crop&q=80&w=800', size: 'large' }
];

export default function Gallery() {
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryPhotos.map((photo, index) => {
            const spanClass = 
              photo.size === 'large' ? 'row-span-3 col-span-2 md:col-span-1' :
              photo.size === 'medium' ? 'row-span-2' : 'row-span-1';
              
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${spanClass} relative rounded-3xl overflow-hidden group cursor-pointer`}
              >
                <img 
                  src={photo.url} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="px-6 py-2 bg-white rounded-full text-xs font-bold text-brand-secondary transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    View Moments
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
