import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import heroPic1 from '../assets/heropic1.png';
import heropic3 from '../assets/heropic3.png';

export const HeroSection: React.FC = () => {
  // 1. Mouse Position State & Spring Parallax Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 90, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 90, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  // 2. Generating Floating Stage Dust Particles
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 12 + 8,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generatedParticles);
  }, []);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#f9f8f9] text-white overflow-hidden flex items-center justify-center font-sans selection:bg-[#9DB2C3] selection:text-black perspective-[1000px]"
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-500 opacity-60 hidden md:block"
        style={{
          background: `radial-gradient(800px circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, rgba(157, 178, 195, 0.15), transparent 50%)`
        }}
      />

      {/* Floating Dust / Vintage Stage Atmosphere */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: `${p.y}%`, x: `${p.x}%` }}
            animate={{ 
              opacity: [0.1, 0.6, 0.1], 
              y: [`${p.y}%`, `${(p.y - 20 + 100) % 100}%`],
              x: [`${p.x}%`, `${(p.x + (p.id % 2 === 0 ? 4 : -4) + 100) % 100}%`]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ width: `${p.size}px`, height: `${p.size}px` }}
            className="absolute rounded-full bg-[#3E526D]/30 blur-[1px]"
          />
        ))}
      </div>

      {/* Vintage Grain / Vinyl Film Texture */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Rotating Vinyl Record Watermark in Background (The Beatles Vibe) */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 z-0 opacity-10 pointer-events-none hidden lg:block">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="w-175 h-175 rounded-full border-12 border-zinc-700 bg-[radial-gradient(circle,#18181b_20%,#09090b_80%)] flex items-center justify-center shadow-2xl"
        >
          <div className="w-70 h-70 rounded-full border-2 border-zinc-600/50 flex items-center justify-center">
            <div className="w-30 h-30 rounded-full bg-[#3E526D]/30 border border-[#9DB2C3]/30 flex items-center justify-center">
              <span className="text-[10px] font-mono tracking-widest text-[#9DB2C3]">1960s VINYL</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Image: Responsive Switch (Mobile vs Desktop) */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Tampilan Desktop (md ke atas) */}
          <source media="(min-width: 768px)" srcSet={heroPic1} />
          {/* Tampilan Mobile (di bawah md) */}
          <img
            src={heropic3}
            alt="Tribute to The Beatles"
            className="w-full h-full object-cover object-center"
          />
        </picture>

        {/* Backdrop overlay khusus mobile agar teks lebih terlihat di atas heropic3 */}
        <div className="absolute inset-0 bg-black/35 md:bg-transparent pointer-events-none" />

        {/* Abbey Road Atmospheric Glow Layer */}
        <div className="absolute top-1/4 left-1/4 w-125 h-75 bg-[#3E526D]/10 rounded-full blur-[160px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-75 bg-[#9DB2C3]/10 rounded-full blur-[160px] pointer-events-none" />
      </div>

      {/* 3D Interactive Parallax Card Container */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16"
      >
        <div className="max-w-3xl">

          {/* Typography Layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-0"
          >
            {/* TRIBUTE TO: Putih di Mobile, Kembali ke text-zinc-900 di Desktop */}
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] uppercase tracking-tighter leading-[0.8] font-black text-white md:text-zinc-900 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:drop-shadow-sm"
            >
              TRIBUTE TO
            </h1>
            
            {/* THE BEATLES: Warna & Shadow Terang di Mobile, Kembali ke Style Asli di Desktop */}
            <h1
              style={{ 
                fontFamily: "'Anton', sans-serif",
                WebkitTextStroke: "1.5px #3E526D",
              }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] uppercase tracking-tighter leading-[0.85] font-black text-[#9DB2C3] md:text-transparent md:hover:text-[#3E526D] transition-all duration-700 cursor-default drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] md:drop-shadow-none md:hover:drop-shadow-[0_0_35px_rgba(62,82,109,0.4)]"
            >
              THE BEATLES
            </h1>
          </motion.div>

          {/* Beatles Iconic Quote Subtitle: Teks Terang di Mobile, text-zinc-700 di Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="mt-3 flex items-center gap-3 text-zinc-100 md:text-zinc-700 font-mono text-xs tracking-[0.3em] uppercase font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:drop-shadow-none"
          >
            <span>"ALL YOU NEED IS LOVE & ROCK 'N' ROLL"</span>
          </motion.div>

          {/* Description: Teks Putih Terang di Mobile, text-zinc-700 di Desktop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="mt-6 text-zinc-100 md:text-zinc-700 text-base sm:text-lg md:text-xl max-w-xl font-normal leading-relaxed tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] md:drop-shadow-none"
          >
            Menghidupkan kembali euforia era keemasan musik paling berpengaruh di dunia lewat pertunjukan presisi, estetika vintage otentik, dan energi tanpa kompromi.
          </motion.p>

          {/* Glowing Next-Gen CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="https://wa.me/6282216442245?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20Band%20Tribute%20The%20Beatles."
              className="group relative inline-flex items-center justify-center px-9 py-4 bg-zinc-950 text-white font-bold tracking-[0.15em] text-xs sm:text-sm uppercase rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#3E526D] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] shadow-[0_4px_15px_rgba(0,0,0,0.4)] md:shadow-none"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <span className="relative z-10 flex items-center gap-3">
                Book Band
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </motion.div>

        </div>
      </motion.div>

      {/* Decorative Floating Corner Scroll Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-8 z-30 hidden md:flex items-center gap-4 text-zinc-500 text-[10px] font-mono tracking-[0.3em] uppercase rotate-90 origin-right pointer-events-none"
      >
        <span>Scroll for more</span>
        <div className="w-12 h-px bg-zinc-400 animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;