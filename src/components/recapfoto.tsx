import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/free-mode';

import foto1 from '../assets/galeri/1.jpg';
import foto2 from '../assets/galeri/heropic2.png';
import foto3 from '../assets/galeri/3.jpg';
import foto7 from '../assets/galeri/4.jpg';
import foto5 from '../assets/galeri/5.jpg';
import foto6 from '../assets/galeri/8.jpg';

export interface PhotoItem {
  id?: string;
  type?: 'image' | 'video';
  src?: string;
  embedUrl?: string;
  title?: string;
}

interface DoctorBeatGalleryProps {
  photos?: PhotoItem[];
}

const getFormattedEmbedUrl = (url?: string): string => {
  if (!url) return '';

  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    const id = urlParams.get('v');
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes('facebook.com') && !url.includes('plugins/video.php')) {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`;
  }

  return url;
};

const DOCTOR_BEAT_PHOTOS: PhotoItem[] = [
  { id: '1', type: 'image', src: foto1, title: 'Live Performance' },
  { id: '2', type: 'image', src: foto2, title: 'Vintage Stage Vibe' },
  { id: '3', type: 'image', src: foto3, title: 'Acoustic Session' },
  { 
    id: '4', 
    type: 'video', 
    embedUrl: "https://youtu.be/QGcnJKN5oXM",
    title: 'Show Highlights'
  },
  { 
    id: 'fb-reel-1', 
    type: 'video', 
    embedUrl: "https://youtu.be/SI5vjZ57-so", 
    title: 'Facebook Reel Performance'
  },
  { id: '5', type: 'image', src: foto7, title: 'On Stage Action' },
  { id: '6', type: 'image', src: foto5, title: 'Crowd Connection' },
  { id: '7', type: 'image', src: foto6, title: 'Backstage Moment' },
];

export default function DoctorBeatGallery({ photos = DOCTOR_BEAT_PHOTOS }: DoctorBeatGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-zinc-950 text-[#F4F5F7] py-14 px-4 sm:px-8 lg:px-12 overflow-hidden selection:bg-[#9DB2C3] selection:text-black">
      {/* Background Lighting Vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 sm:w-120 h-60 bg-[#3E526D]/15 blur-[120px] pointer-events-none" />

      {/* Header Area Compact */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-zinc-800/80 mb-8">
        <div>
          <span className="text-[#9DB2C3]/80 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase block mb-1 font-sans">
            Visual Archive
          </span>
          <h2 
            style={{ fontFamily: "'Anton', sans-serif" }} 
            className="text-3xl sm:text-5xl font-['Anton'] uppercase tracking-tight text-[#F4F5F7] leading-none"
          >
            DOCTOR BEAT <span className="text-[#9DB2C3]">RECAP</span>
          </h2>
        </div>

        <p className="text-zinc-400 text-xs max-w-xs font-light leading-relaxed font-sans">
          Dokumentasi momen panggung dan atmosfer vintage dari setiap pertunjukan Doctor Beat.
        </p>
      </div>

      {/* Compact Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={1.5}
          spaceBetween={12}
          freeMode={true}
          speed={600}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          grabCursor={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 14,
            },
            1024: {
              slidesPerView: 3.8,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 4.2,
              spaceBetween: 16,
            },
          }}
          className="w-full pb-4"
        >
          {photos.map((item, index) => {
            const formattedUrl = getFormattedEmbedUrl(item.embedUrl);

            return (
              <SwiperSlide key={item.id || index} className="h-auto">
                <div className="group relative w-full aspect-4/3 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/80 transition-all duration-300">
                  {item.type === 'video' && formattedUrl ? (
                    <div className="w-full h-full relative bg-black">
                      <iframe
                        src={formattedUrl}
                        className="w-full h-full border-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen={true}
                        title={item.title || "Gallery Video"}
                      />
                    </div>
                  ) : (
                    <>
                      <img
                        src={item.src}
                        alt={item.title || "Gallery Image"}
                        className="w-full h-full object-cover filter brightness-90 contrast-105 select-none block"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                    </>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Minimal Progress Line Indicator */}
        <div className="mt-4 flex items-center justify-between border-t border-zinc-800/60 pt-4">
          <div className="flex items-center gap-1">
            {photos.map((_, idx) => (
              <motion.div
                key={idx}
                animate={{
                  width: idx === activeIndex ? 18 : 5,
                  backgroundColor: idx === activeIndex ? "#9DB2C3" : "#27272a"
                }}
                transition={{ duration: 0.3 }}
                className="h-1 rounded-full"
              />
            ))}
          </div>

          <span className="text-[10px] sm:text-xs font-sans text-zinc-500 tracking-widest uppercase">
            {String(activeIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}