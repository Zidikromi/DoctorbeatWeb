import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion, type Variants } from 'framer-motion';
import 'swiper/css';

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
  index?: number;
}

interface DoctorBeatGalleryProps {
  photos?: PhotoItem[];
}

const DOCTOR_BEAT_PHOTOS: PhotoItem[] = [
  { 
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsayMcTtWzXNcilxK7Bn0zzI9J8Nhq55Toy86AqRMyTk8lGuBwdKagjHZ&s=10", 
    title: "Abbey Road Vibe", 
    location: "London, UK" 
  },
  { 
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y8JL-xi9Mh9wV_hc1l2aUMtRW5flc9iFZejTxPH7Xg&s=10", 
    title: "Live Concert Night", 
    location: "Shea Stadium" 
  },
  { 
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLKN1g8_ztJf3u74q3C5MHKbYXqSRnXy4xr3CDineqg&s=10", 
    title: "Vintage Rock Setup", 
    location: "Cavern Club" 
  },
  { 
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhakH3WZc8uG4u-IDMuE3W0cAEKzEUJWQJk8hWJD9mKymxMahfst8wXt04&s=10", 
    title: "Psychedelic Stage", 
    location: "Studio 2" 
  },
  { 
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BMux_WFqdDS3jeLubQuhy1EdiwueWC_QB4pe50AXYA&s=10", 
    title: "Rooftop Session", 
    location: "Apple Studio" 
  },
  { 
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRJieSQTYI4nU-xSxz9-6_CdNrUbFEZ9SRHa3TPN8DA&s=10", 
    title: "Rock N Roll Revival", 
    location: "Live Tour" 
  },
];

const GAP = 16;
const H = 520;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const PhotoCard: React.FC<PhotoCardProps> = ({ 
  src, 
  title, 
  location, 
  className = "", 
  style = {},
  index
}) => {
  if (!src) return null;

  return (
    <motion.div 
      variants={itemVariants} 
      style={style} 
      className={`group relative overflow-hidden bg-zinc-900 border border-white/10 transition-all duration-500 ${className}`}
    >
      <img 
        src={src} 
        alt={title || "The Beatles Photo"} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100" 
      />
      
      {/* Vignette Shadow Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0d1410] via-transparent to-black/30 opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Index Number Watermark */}
      {typeof index === 'number' && (
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="font-mono text-xs tracking-widest text-white/50 group-hover:text-amber-400 transition-colors">
            // {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      )}

      {/* Information Overaly (Clean & Brutalist) */}
      {title && (
        <div className="absolute bottom-0 inset-x-0 z-10 p-5 sm:p-6 flex items-end justify-between border-t border-white/0 group-hover:border-white/10 transition-colors duration-300">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-3 bg-amber-400" />
              <h4 
                style={{ fontFamily: "'Anton', sans-serif" }} 
                className="text-lg sm:text-xl text-white tracking-wide uppercase leading-none"
              >
                {title}
              </h4>
            </div>
            {location && (
              <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest pl-3">
                {location}
              </p>
            )}
          </div>
          
          <span className="text-amber-400 text-sm font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
            →
          </span>
        </div>
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
    <section className="relative w-full bg-[#0d1410] text-[#f4f1ea] py-24 sm:py-32 overflow-hidden font-sans border-t border-white/10">
      
      {/* Background Subtle Noise Filter */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Header Area */}
      <div className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-white/10 mb-16">
        <div>
         
          <h2 
            style={{ fontFamily: "'Anton', sans-serif" }} 
            className="text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white font-black leading-none"
          >
            DOCTOR BEAT <span className="text-amber-300">RECAP</span>
          </h2>
        </div>

     
      </div>

      {/* Bento Grid Carousel */}
      <div className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={24}
          loop={slides.length > 1}
          speed={800}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          grabCursor={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full overflow-visible!"
        >
          {slides.map((group, slideIndex) => {
            const baseIdx = slideIndex * 3;

            return (
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
                        src={group[0]?.src} 
                        title={group[0]?.title} 
                        location={group[0]?.location} 
                        index={baseIdx}
                        style={{ gridRow: group.length > 1 ? '1/3' : '1/3' }} 
                      />
                      {group[1] && <PhotoCard src={group[1]?.src} title={group[1]?.title} location={group[1]?.location} index={baseIdx + 1} />}
                      {group[2] && <PhotoCard src={group[2]?.src} title={group[2]?.title} location={group[2]?.location} index={baseIdx + 2} />}
                    </div>
                  )}

                  {slideIndex % 3 === 1 && (
                    <div style={{ display: 'grid', gap: GAP, gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1.2fr 1fr', height: H }}>
                      <PhotoCard 
                        src={group[0]?.src} 
                        title={group[0]?.title} 
                        location={group[0]?.location} 
                        index={baseIdx}
                        style={{ gridColumn: '1/3' }} 
                      />
                      {group[1] && <PhotoCard src={group[1]?.src} title={group[1]?.title} location={group[1]?.location} index={baseIdx + 1} />}
                      {group[2] && <PhotoCard src={group[2]?.src} title={group[2]?.title} location={group[2]?.location} index={baseIdx + 2} />}
                    </div>
                  )}

                  {slideIndex % 3 === 2 && (
                    <div style={{ display: 'grid', gap: GAP, gridTemplateColumns: group.length > 2 ? '1fr 1.4fr' : '1fr 1fr', gridTemplateRows: '1fr 1fr', height: H }}>
                      {group[0] && <PhotoCard src={group[0]?.src} title={group[0]?.title} location={group[0]?.location} index={baseIdx} />}
                      {group[1] && <PhotoCard src={group[1]?.src} title={group[1]?.title} location={group[1]?.location} index={baseIdx + 1} />}
                      {group[2] && (
                        <PhotoCard 
                          src={group[2]?.src} 
                          title={group[2]?.title} 
                          location={group[2]?.location} 
                          index={baseIdx + 2}
                          style={{ gridColumn: '1/3' }} 
                        />
                      )}
                    </div>
                  )}
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Minimal Progress Indicator */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <div 
                key={idx}
                className={`h-0.5 transition-all duration-500 ${
                  idx === activeIndex ? 'w-8 bg-amber-400' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>

          <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
            CATALOG {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}