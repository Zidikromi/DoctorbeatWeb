import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import pic2022 from "../assets/img/2022.png";
import pic2023 from "../assets/img/2023.jpg";
import pic2024 from "../assets/img/2024.jpg";
import pic2025 from "../assets/img/2025.jpg";
import pic2026 from "../assets/img/2026.jpg";

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
      year: "2025",
      badge: "In Memoriam",
      title: "Berpulangnya Sang Bassist (Oni Nio)",
      description:
        "Tahun penuh duka mendalam bagi keluarga besar Doctor Beat. Berpulangnya Oni Nio, sang bassist sekaligus pilar awal berdirinya band, meninggalkan jejak harmoni dan dedikasi abadi yang akan terus dihidupkan di setiap panggung.",
      mainImage: pic2025,
      items: ["Mengenang Oni Nio", "Pilar Awal Band", "Warisan Musik Abadi"],
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

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    fallbackUrl: string
  ): void => {
    e.currentTarget.src = fallbackUrl;
  };

  return (
    <section className="relative bg-[#09090b] text-[#fafafa] py-20 sm:py-28 px-4 sm:px-8 lg:px-12 overflow-hidden selection:bg-zinc-100 selection:text-zinc-950 font-sans">
      
      {/* Background Soft Monochromatic Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-160 sm:w-240 h-80 bg-zinc-800/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-zinc-800/80">
          <div>
            <span className="text-zinc-400 text-xs font-semibold tracking-[0.25em] uppercase block mb-3 font-sans">
              Archive &mdash; Band Journey
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none font-sans">
              SEJARAH <span className="text-zinc-500">PERJALANAN</span>
            </h2>
          </div>

          {/* Quick Year Selector */}
          <div className="hidden lg:flex items-center gap-1.5 bg-zinc-900/80 p-1.5 rounded-full border border-zinc-800">
            {historyData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => swiperRef?.slideTo(idx)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 font-sans tracking-wide ${
                  activeIndex === idx
                    ? "bg-zinc-100 text-zinc-950 shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>

        {/* Swiper Content */}
        <div className="relative">
          {/* Desktop Navigation Arrows */}
          <div className="hidden sm:flex absolute top-1/2 -left-6 -right-6 -translate-y-1/2 z-30 justify-between pointer-events-none">
            <button
              id="history-prev-btn"
              className="pointer-events-auto w-11 h-11 rounded-full bg-zinc-900/90 hover:bg-zinc-100 border border-zinc-800 hover:border-zinc-100 text-zinc-300 hover:text-zinc-950 flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg group"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              id="history-next-btn"
              className="pointer-events-auto w-11 h-11 rounded-full bg-zinc-900/90 hover:bg-zinc-100 border border-zinc-800 hover:border-zinc-100 text-zinc-300 hover:text-zinc-950 flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg group"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <Swiper
            modules={[Navigation, EffectFade]}
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
            {historyData.map((data: HistoryItem, idx: number) => {
              const isActive = activeIndex === idx;

              return (
                <SwiperSlide key={idx}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    
                    {/* Visual Container */}
                    <div className="lg:col-span-7 relative">
                      <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40">
                        <div className="aspect-16/10 sm:aspect-video w-full overflow-hidden">
                          <img
                            src={data.mainImage}
                            alt={`Doctor Beat ${data.year}`}
                            className={`w-full h-full object-cover filter brightness-90 contrast-110 transition-transform duration-700 ease-out ${
                              data.year === "2025" ? "grayscale" : "grayscale-20"
                            }`}
                            onError={(e) =>
                              handleImageError(
                                e,
                                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"
                              )
                            }
                          />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-[#09090b] via-transparent to-transparent opacity-80 pointer-events-none" />
                      </div>

                      {/* Mobile Arrow Navigation */}
                      <div className="flex sm:hidden justify-between items-center mt-4 px-1">
                        <button
                          onClick={() => swiperRef?.slidePrev()}
                          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white uppercase tracking-wider font-sans"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                          </svg>
                          Sebelumnya
                        </button>
                        <span className="text-xs font-semibold text-zinc-500 font-sans tracking-wide">
                          0{idx + 1} / 0{historyData.length}
                        </span>
                        <button
                          onClick={() => swiperRef?.slideNext()}
                          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white uppercase tracking-wider font-sans"
                        >
                          Selanjutnya
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-5 space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 15,
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="space-y-6"
                      >
                        <div>
                          {/* Year & Badge */}
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl sm:text-6xl font-black text-white leading-none tracking-tight font-sans">
                              {data.year}
                            </span>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider font-sans">
                              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                              {data.badge}
                            </div>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 leading-tight font-sans">
                            {data.title}
                          </h3>
                        </div>

                        <p className="text-zinc-400 text-sm sm:text-base font-normal leading-relaxed font-sans">
                          {data.description}
                        </p>

                        {/* Minimal Pill Tags */}
                        <div className="pt-4 border-t border-zinc-800/80">
                          <div className="flex flex-wrap gap-2">
                            {data.items.map((item, itemIdx) => (
                              <span
                                key={itemIdx}
                                className="text-xs font-semibold text-zinc-400 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-md font-sans tracking-wide"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </div>
    </section>
  );
}