import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion, type Variants } from 'framer-motion';
import 'swiper/css';

import foto1 from '../assets/galeri/1.jpg';
import foto2 from '../assets/galeri/8.jpg';
import foto3 from '../assets/galeri/3.jpg';
import foto7 from '../assets/galeri/4.jpg';
import foto5 from '../assets/galeri/5.jpg';
import foto6 from '../assets/galeri/8.jpg';

export interface PhotoItem {
  type?: 'image' | 'video';
  src?: string;
  embedUrl?: string;
}

interface PhotoCardProps {
  item?: PhotoItem;
  className?: string;
  style?: React.CSSProperties;
}

interface DoctorBeatGalleryProps {
  photos?: PhotoItem[];
}

// Helper untuk mengubah link YouTube/Facebook biasa menjadi Embed URL yang valid
const getFormattedEmbedUrl = (url?: string): string => {
  if (!url) return '';

  // 1. YouTube Short / Watch Link -> Convert to YouTube Embed Link
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    const id = urlParams.get('v');
    return `https://www.youtube.com/embed/${id}`;
  }

  // 2. Facebook Link -> Convert to Facebook Embed Link jika belum di-format
  if (url.includes('facebook.com') && !url.includes('plugins/video.php')) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`;
  }

  return url;
};

const DOCTOR_BEAT_PHOTOS: PhotoItem[] = [
  { type: 'image', src: foto1 },
  { type: 'image', src: foto2 },
  { type: 'image', src: foto3 },
 
  { type: 'image', src: foto7 },
   { 
    type: 'video', 
    embedUrl: "https://youtu.be/bMuLj-RfAGI?si=hdBUoOYI1o_Il_LR" // Bebas masukkan link YouTube/Facebook biasa
  },
  { type: 'image', src: foto5 },
  { type: 'image', src: foto6 },
];

const GAP = 16;
const H = 520;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const PhotoCard: React.FC<PhotoCardProps> = ({ 
  item, 
  className = "", 
  style = {}
}) => {
  if (!item) return null;

  const formattedUrl = getFormattedEmbedUrl(item.embedUrl);

  return (
    <motion.div 
      variants={itemVariants} 
      style={style} 
      className={`group relative overflow-hidden bg-zinc-900 border border-zinc-800/80 rounded-2xl transition-all duration-500 ${className}`}
    >
      {item.type === 'video' && formattedUrl ? (
        <div className="w-full h-full relative bg-black">
          <iframe
            src={formattedUrl}
            className="w-full h-full border-none overflow-hidden"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            title="Doctor Beat Gallery Video"
          />
        </div>
      ) : (
        <>
          <img 
            src={item.src} 
            alt="Doctor Beat Gallery" 
            className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
        </>
      )}
    </motion.div>
  );
};

export default function DoctorBeatGallery({ photos = DOCTOR_BEAT_PHOTOS }: DoctorBeatGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const chunkPhotos = (arr: PhotoItem[], size: number): PhotoItem[][] => {
    const chunks: PhotoItem[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const slides = chunkPhotos(photos, 3);

  return (
    <section className="relative w-full bg-zinc-950 text-[#F4F5F7] py-24 px-4 sm:px-8 lg:px-12 overflow-hidden selection:bg-[#9DB2C3] selection:text-black">
      
      {/* Background Lighting Vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-[#3E526D]/15 blur-[160px] pointer-events-none" />

      {/* Header Area */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800/80 mb-16">
        <div>
          <span className="text-[#9DB2C3]/80 text-xs font-semibold tracking-[0.2em] uppercase block mb-3 font-sans">
            Visual Memories
          </span>
          <h2 
            style={{ fontFamily: "'Anton', sans-serif" }} 
            className="text-5xl sm:text-7xl font-['Anton'] uppercase tracking-tight text-[#F4F5F7] leading-none"
          >
            DOCTOR BEAT <span className="text-[#9DB2C3]">RECAP</span>
          </h2>
        </div>

        <p className="text-zinc-400 text-sm max-w-sm font-light leading-relaxed">
          Dokumentasi momen panggung dan atmosfer vintage dari setiap pertunjukan Doctor Beat.
        </p>
      </div>

      {/* Bento Grid Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={24}
          loop={slides.length > 1}
          speed={800}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          grabCursor={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full overflow-visible!"
        >
          {slides.map((group, slideIndex) => (
            <SwiperSlide key={slideIndex} style={{ width: 'clamp(320px, 75vw, 880px)' }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {slideIndex % 3 === 0 && (
                  <div style={{ display: 'grid', gap: GAP, gridTemplateColumns: group.length > 1 ? '1.4fr 1fr' : '1fr', gridTemplateRows: '1fr 1fr', height: H }}>
                    <PhotoCard 
                      item={group[0]} 
                      style={{ gridRow: group.length > 1 ? '1/3' : '1/3' }} 
                    />
                    {group[1] && <PhotoCard item={group[1]} />}
                    {group[2] && <PhotoCard item={group[2]} />}
                  </div>
                )}

                {slideIndex % 3 === 1 && (
                  <div style={{ display: 'grid', gap: GAP, gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1.2fr 1fr', height: H }}>
                    <PhotoCard 
                      item={group[0]} 
                      style={{ gridColumn: '1/3' }} 
                    />
                    {group[1] && <PhotoCard item={group[1]} />}
                    {group[2] && <PhotoCard item={group[2]} />}
                  </div>
                )}

                {slideIndex % 3 === 2 && (
                  <div style={{ display: 'grid', gap: GAP, gridTemplateColumns: group.length > 2 ? '1fr 1.4fr' : '1fr 1fr', gridTemplateRows: '1fr 1fr', height: H }}>
                    {group[0] && <PhotoCard item={group[0]} />}
                    {group[1] && <PhotoCard item={group[1]} />}
                    {group[2] && (
                      <PhotoCard 
                        item={group[2]} 
                        style={{ gridColumn: '1/3' }} 
                      />
                    )}
                  </div>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Minimal Progress Indicator */}
        <div className="mt-12 flex items-center justify-between border-t border-zinc-800/80 pt-6">
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <div 
                key={idx}
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  idx === activeIndex ? 'w-8 bg-[#9DB2C3]' : 'w-2 bg-zinc-800'
                }`}
              />
            ))}
          </div>

          <span className="text-xs font-sans text-zinc-400 tracking-wider uppercase">
            {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}