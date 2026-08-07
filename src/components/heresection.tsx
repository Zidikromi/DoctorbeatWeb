import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import heroPic from '../assets/heropic.png';

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
      className="relative w-full min-h-screen bg-zinc-950 text-white overflow-hidden flex items-center justify-center font-sans selection:bg-[#9DB2C3] selection:text-black perspective-[1000px]"
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
            className="absolute rounded-full bg-[#9DB2C3]/40 blur-[1px]"
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
          className="w-175 h-175 rounded-full border-12der-zinc-700 bg-[radial-gradient(circle,#18181b_20%,#09090b_80%)] flex items-center justify-center shadow-2xl"
        >
          <div className="w-70 h-70ded-full border-22er-zinc-600/50 flex items-center justify-center">
            <div className="w-30 h-30 rounded-full bg-[#3E526D]/30 border border-[#9DB2C3]/30 flex items-center justify-center">
              <span className="text-[10px] font-mono tracking-widest text-[#9DB2C3]">1960s VINYL</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Image: Infinite Zoom & Cinematic Color Grading */}
      <div className="absolute inset-0 z-0">
        <motion.img
          animate={{ 
            scale: [1, 1.08, 1],
            rotate: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
          src={heroPic}
          alt="Tribute to The Beatles"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-125 saturate-50 hover:saturate-100 transition-all duration-1000"
        />

        {/* Cinematics Lighting Vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)] opacity-90" />

        {/* Abbey Road Atmospheric Glow Layer */}
        <div className="absolute top-1/4 left-1/4 w-125 h-75 bg-[#3E526D]/20 rounded-full blur-[160px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-75 bg-[#9DB2C3]/15 rounded-full blur-[160px] pointer-events-none" />
      </div>


      {/* 3D Interactive Parallax Card Container */}
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16"
      >
        <div className="max-w-4xl">

          {/* Typography Layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-0"
          >
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] uppercase tracking-tighter leading-[0.8] font-black text-[#F4F5F7] drop-shadow-2xl"
            >
              TRIBUTE TO
            </h1>
            
            {/* Interactive Beatles Abbey Road Text (Langsung menyala di HP/Mobile, Hover di Desktop) */}
            <h1
              style={{ 
                fontFamily: "'Anton', sans-serif",
                WebkitTextStroke: "1.5px #9DB2C3",
              }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] uppercase tracking-tighter leading-[0.85] font-black text-[#9DB2C3] md:text-transparent md:hover:text-[#9DB2C3] transition-all duration-700 cursor-default drop-shadow-[0_0_35px_rgba(157,178,195,0.6)] md:drop-shadow-none md:hover:drop-shadow-[0_0_50px_rgba(157,178,195,0.6)]"
            >
              THE BEATLES
            </h1>
          </motion.div>

          {/* Beatles Iconic Quote Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="mt-3 flex items-center gap-3 text-[#9DB2C3]/90 font-mono text-xs tracking-[0.3em] uppercase"
          >
            <span>"ALL YOU NEED IS LOVE & ROCK 'N' ROLL"</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="mt-6 text-zinc-300 text-base sm:text-lg md:text-xl max-w-xl font-light leading-relaxed tracking-wide"
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
              href="https://wa.me/6282216442245?text=Halo,%20saya%20ingin%bertanya mengenai Band Tribute The Beatles."
              className="group relative inline-flex items-center justify-center px-9 py-4 bg-[#9DB2C3] text-zinc-950 font-bold tracking-[0.15em] text-xs sm:text-sm uppercase rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#F4F5F7] hover:shadow-[0_0_40px_rgba(157,178,195,0.5)]"
            >
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
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
        className="absolute bottom-8 right-8 z-30 hidden md:flex items-center gap-4 text-[#9DB2C3]/70 text-[10px] font-mono tracking-[0.3em] uppercase rotate-90 origin-right pointer-events-none"
      >
        <span>Scroll for more</span>
        <div className="w-12 h-px bg-[#9DB2C3]/50 animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;