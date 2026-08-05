import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion, type Variants } from 'framer-motion';
import 'swiper/css';

// ==============================================================================
// INTERFACES & TYPES
// ==============================================================================
export interface PhotoItem {
  src: string;
  title?: string;
  location?: string;
}

interface PhotoCardProps {
  src?: string;
  title?: string;
  location?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface DoctorBeatGalleryProps {
  photos?: PhotoItem[];
}

// ==============================================================================
// FOTO ASLI DOCTOR BEAT (BEATLES TRIBUTE BANDUNG)
// ==============================================================================
const DOCTOR_BEAT_PHOTOS: PhotoItem[] = [
  { 
    src: "https://img.youtube.com/vi/mStpSl0nxJg/maxresdefault.jpg", 
    title: "Live at TP Stage", 
    location: "The Papandayan Hotel" 
  },
  { 
    src: "https://img.youtube.com/vi/KH9-SvpMXqg/maxresdefault.jpg", 
    title: "Live at Summarecon Mall", 
    location: "Bandung" 
  },
  { 
    src: "https://img.youtube.com/vi/0nUH3kEu-1Q/maxresdefault.jpg", 
    title: "Stage Performance", 
    location: "Live Gig" 
  },
  { 
    src: "https://img.youtube.com/vi/mStpSl0nxJg/hqdefault.jpg", 
    title: "Full Set Performance", 
    location: "TP Stage" 
  },
  { 
    src: "https://img.youtube.com/vi/KH9-SvpMXqg/hqdefault.jpg", 
    title: "Beatles Tribute Night", 
    location: "Summarecon Mall" 
  },
  { 
    src: "https://img.youtube.com/vi/0nUH3kEu-1Q/hqdefault.jpg", 
    title: "Doctor Beat On Stage", 
    location: "Bandung" 
  },
];

const GAP = 16;
const H = 480;

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const PhotoCard: React.FC<PhotoCardProps> = ({ 
  src, 
  title, 
  location, 
  className = "", 
  style = {} 
}) => {
  if (!src) return null;

  return (
    <motion.div 
      variants={itemVariants} 
      style={style} 
      className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 ${className}`}
    >
      <img 
        src={src} 
        alt={title || "Doctor Beat Photo"} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />
      
      {/* Title Badge */}
      {title && (
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="backdrop-blur-md bg-black/40 border border-white/15 px-4 py-2.5 rounded-xl flex items-center justify-between">
            <span className="font-anton text-sm text-white tracking-wide uppercase">{title}</span>
            {location && (
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">{location}</span>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function DoctorBeatGallery({ photos = DOCTOR_BEAT_PHOTOS }: DoctorBeatGalleryProps) {
  const chunkPhotos = (arr: PhotoItem[], size: number): PhotoItem[][] => {
    const chunks: PhotoItem[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkPhotos(photos, 3);

  return (
    <section className="w-full bg-zinc-950 text-zinc-100 py-20 overflow-hidden font-anton">
      {/* Header */}
      <div className="px-6 mb-12 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-zinc-800/80 pb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">BANDUNG, ID • BEATLES TRIBUTE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
            DOCTOR BEAT <span className="text-zinc-500">RECAP</span>
          </h2>
        </div>

        <a 
          href="https://www.instagram.com/doctorbeat.official/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 text-xs tracking-wider uppercase transition-all duration-300 hover:border-zinc-500"
        >
          <span>@doctorbeat.official</span>
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3zM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>
          </svg>
        </a>
      </div>

      {/* Carousel Bento Grid */}
      <div className="px-6 max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={20}
          loop={slides.length > 1}
          speed={900}
          autoplay={{ delay: 3800, disableOnInteraction: false }}
          grabCursor={true}
          className="w-full overflow-visible!"
        >
          {slides.map((group, slideIndex) => (
            <SwiperSlide key={slideIndex} style={{ width: 'clamp(340px, 72vw, 840px)' }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.12 }}
              >
                {slideIndex % 3 === 0 && (
                  <div style={{ display: 'grid', gap: GAP, gridTemplateColumns: group.length > 1 ? '1.4fr 1fr' : '1fr', gridTemplateRows: '1fr 1fr', height: H }}>
                    <PhotoCard 
                      src={group[0]?.src} 
                      title={group[0]?.title} 
                      location={group[0]?.location} 
                      style={{ gridRow: group.length > 1 ? '1/3' : '1/3' }} 
                    />
                    {group[1] && <PhotoCard src={group[1]?.src} title={group[1]?.title} location={group[1]?.location} />}
                    {group[2] && <PhotoCard src={group[2]?.src} title={group[2]?.title} location={group[2]?.location} />}
                  </div>
                )}

                {slideIndex % 3 === 1 && (
                  <div style={{ display: 'grid', gap: GAP, gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1.2fr 1fr', height: H }}>
                    <PhotoCard 
                      src={group[0]?.src} 
                      title={group[0]?.title} 
                      location={group[0]?.location} 
                      style={{ gridColumn: '1/3' }} 
                    />
                    {group[1] && <PhotoCard src={group[1]?.src} title={group[1]?.title} location={group[1]?.location} />}
                    {group[2] && <PhotoCard src={group[2]?.src} title={group[2]?.title} location={group[2]?.location} />}
                  </div>
                )}

                {slideIndex % 3 === 2 && (
                  <div style={{ display: 'grid', gap: GAP, gridTemplateColumns: group.length > 2 ? '1fr 1.4fr' : '1fr 1fr', gridTemplateRows: '1fr 1fr', height: H }}>
                    {group[0] && <PhotoCard src={group[0]?.src} title={group[0]?.title} location={group[0]?.location} />}
                    {group[1] && <PhotoCard src={group[1]?.src} title={group[1]?.title} location={group[1]?.location} />}
                    {group[2] && (
                      <PhotoCard 
                        src={group[2]?.src} 
                        title={group[2]?.title} 
                        location={group[2]?.location} 
                        style={{ gridColumn: '1/3' }} 
                      />
                    )}
                  </div>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}