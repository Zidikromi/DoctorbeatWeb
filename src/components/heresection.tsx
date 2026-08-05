import React from 'react';
import heroPic from '../assets/img/heropic.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center">
      {/* Background Image tanpa zoom berlebih */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPic}
          alt="Tribute to The Beatles"
          className="w-full h-full object-cover object-center opacity-70 transition-transform duration-1000"
        />
        {/* Gradient Overlay agar teks lebih kontras dan sinematik */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent sm:from-black/60 sm:via-transparent" />
      </div>

      {/* Konten Utama (Responsive) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Subtitle kecil opsional untuk mempermanis */}
          <span 
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="block text-gray-300 text-lg sm:text-2xl tracking-widest uppercase mb-2"
          >
            The Ultimate Experience
          </span>

          {/* Judul Besar dengan Font Anton & Efek Tipografi Menumpuk */}
          <h1
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="text-6xl sm:text-8xl md:text-9xl uppercase tracking-wider text-white leading-none drop-shadow-2xl"
          >
            Tribute To <br />
            <span className="text-gray-300">The Beatles</span>
          </h1>

          {/* Deskripsi Singkat / Call to Action */}
          <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-lg font-sans tracking-wide">
            Menghidupkan kembali era keemasan musik legendaris dengan aransemen otentik, penampilan penuh energi, dan dedikasi total.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#gigs"
              className="px-8 py-3.5 bg-white text-black font-bold tracking-widest text-xs sm:text-sm uppercase hover:bg-gray-200 transition-colors rounded-none shadow-lg"
            >
              Lihat Jadwal Gigs
            </a>
            <a
              href="#join"
              className="px-8 py-3.5 border-2 border-white text-white font-bold tracking-widest text-xs sm:text-sm uppercase hover:bg-white hover:text-black transition-colors rounded-none"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};