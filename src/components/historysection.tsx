import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import pic2022 from '../assets/img/2022.jpg';
import pic2023 from '../assets/img/2023.jpg';
import pic2024 from '../assets/img/2024.jpg';
import pic2026 from '../assets/img/2026.jpg';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface HistoryItem {
  year: string;
  badge: string;
  title: string;
  description: string;
  mainImage: string;
  items: string[];
}

export default function BandHistory(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  const historyData: HistoryItem[] = [
    {
      year: "2022",
      badge: "Awal Berdiri",
      title: "Lahirnya Doctor Beat di Bandung",
      description:
        "Doctor Beat dibentuk oleh gabungan musisi berpengalaman dari berbagai komunitas musik di Bandung. Berawal dari minat bersama untuk menghidupkan kembali warna musik vintage dari era emas 60-an dan 70-an.",
      mainImage: pic2022,
      items: ["Formasi Musisi Bandung", "Vintage Pop Rock 'n' Roll"],
    },
    {
      year: "2023",
      badge: "Panggung & Media",
      title: "Invasi Panggung & Sorotan Publik",
      description:
        "Aktif menghiasi panggung reguler di TP Stage Hotel Papandayan dan Summarecon Mall Bandung. Energi pertunjukan yang autentik berhasil memikat penikmat musik hingga diliput khusus oleh media Sorot Indonesia.",
      mainImage: pic2023,
      items: ["TP Stage Papandayan", "Ulasan Sorot Indonesia", "Show Reguler Summarecon"],
    },
    {
      year: "2024",
      badge: "Single Perdana",
      title: "Rilisan Single 'Here Comes The Rain'",
      description:
        "Melangkah lebih jauh dengan merilis single orisinal bernuansa retro klasik berjudul 'Here Comes The Rain' yang resmi mengudara di Spotify.",
      mainImage: pic2024,
      items: ["Rilisan Karya Orisinal", "Resmi di Spotify"],
    },
    {
      year: "2026",
      badge: "Konsistensi",
      title: "Ekspansi Pertunjukan",
      description:
        "Doctor Beat terus memperluas ruang tampil dari panggung kafe, gelaran Reuni, hingga festival korporat, menjaga napas harmoni klasik tetap bergelora bagi pendengar lama maupun generasi muda.",
      mainImage: pic2026,
      items: ["Panggung Nasional", "Event Reuni & Festival", "Eksplorasi Setlist"],
    },
  ];

  const handleYearClick = (index: number): void => {
    setActiveIndex(index);
    if (swiperRef) {
      swiperRef.slideTo(index);
    }
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    fallbackUrl: string
  ): void => {
    e.currentTarget.src = fallbackUrl;
  };

  return (
    <section className="relative bg-zinc-950 text-[#F4F5F7] py-24 px-4 sm:px-8 lg:px-12 overflow-hidden selection:bg-[#9DB2C3] selection:text-black">
      {/* Background Lighting Vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-[#3E526D]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-zinc-800/80">
          <div>
            <span className="text-[#9DB2C3]/80 text-xs font-semibold tracking-[0.2em] uppercase block mb-3 font-sans">
              Band Journey & Archive
            </span>
            <h2 className="text-5xl sm:text-7xl font-['Anton'] uppercase tracking-tight text-[#F4F5F7] leading-none">
              SEJARAH <span className="text-[#9DB2C3]">PERJALANAN</span>
            </h2>
          </div>
   
        </div>

        {/* Floating Segmented Year Control */}
        <div className="flex justify-center mb-16">
          <nav className="inline-flex items-center gap-1 bg-zinc-900/90 border border-zinc-800 p-1.5 rounded-2xl backdrop-blur-xl shadow-2xl">
            {historyData.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleYearClick(idx)}
                  className={`relative px-6 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 ${
                    isActive ? "text-zinc-950" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTimelinePill"
                      className="absolute inset-0 bg-[#9DB2C3] rounded-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 font-['Anton'] tracking-wider">{item.year}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Swiper Content */}
        <div className="relative">
          {/* Custom Arrow Navigation */}
          <div className="absolute top-1/2 -left-4 sm:-left-6 -right-4 sm:-right-6 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
            <button
              id="history-prev-btn"
              className="pointer-events-auto w-12 h-12 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-[#9DB2C3] text-zinc-300 hover:text-[#9DB2C3] flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-2xl hover:scale-105 active:scale-95 group"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              id="history-next-btn"
              className="pointer-events-auto w-12 h-12 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-[#9DB2C3] text-zinc-300 hover:text-[#9DB2C3] flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-2xl hover:scale-105 active:scale-95 group"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            onSwiper={(swiper: SwiperClass) => setSwiperRef(swiper)}
            onSlideChange={(swiper: SwiperClass) => setActiveIndex(swiper.activeIndex)}
            navigation={{
              prevEl: "#history-prev-btn",
              nextEl: "#history-next-btn",
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className="w-full"
          >
            {historyData.map((data: HistoryItem, idx: number) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Left Column: Clean Single Image Showcase */}
                  <div className="lg:col-span-7 relative">
                    <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">
                      <div className="aspect-16/10 sm:aspect-video w-full overflow-hidden">
                        <img
                          src={data.mainImage}
                          alt={`Doctor Beat ${data.year}`}
                          className="w-full h-full object-cover filter brightness-90 contrast-110 saturate-75 group-hover:saturate-100 transition-all duration-700 ease-out group-hover:scale-105"
                          onError={(e) =>
                            handleImageError(
                              e,
                              "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"
                            )
                          }
                        />
                      </div>

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Right Column: Editorial Narrative */}
                  <div className="lg:col-span-5 space-y-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="space-y-6"
                      >
                        <div>
                          <div className="inline-block px-3 py-1 rounded-md bg-[#9DB2C3]/10 border border-[#9DB2C3]/20 text-[#9DB2C3] text-xs font-semibold tracking-wider uppercase mb-3">
                            {data.badge}
                          </div>
                          <h3 className="text-3xl sm:text-4xl font-['Anton'] uppercase tracking-wide text-zinc-100 leading-tight">
                            {data.title}
                          </h3>
                        </div>

                        <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
                          {data.description}
                        </p>

                        {/* Highlighted Tags */}
                        <div className="pt-2 border-t border-zinc-800">

                          <div className="flex flex-wrap gap-2">
                            {data.items.map((item, itemIdx) => (
                              <span
                                key={itemIdx}
                                className="text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 px-3.5 py-2 rounded-xl flex items-center gap-2 hover:border-[#9DB2C3]/40 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#9DB2C3]" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}