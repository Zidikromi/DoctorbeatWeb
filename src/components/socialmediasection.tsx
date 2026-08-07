import React from 'react';
import { motion } from 'framer-motion';

const channels = [
  {
    id: "01",
    platform: "INSTAGRAM",
    handle: "@doctorbeat.official",
    url: "https://www.instagram.com/doctorbeat.official/",
    description: "Recap konser, jadwal gigs, dan galeri foto.",
  },
  {
    id: "02",
    platform: "TIKTOK",
    handle: "@doctorbeat.official",
    url: "https://www.tiktok.com/@doctorbeat.official",
    description: "Cuplikan panggung energik dan dokumentasi video.",
  },
];

export const SocialMediaSection: React.FC = () => {
  return (
    <section className="relative w-full bg-zinc-950 text-[#F4F5F7] py-24 sm:py-32 px-6 sm:px-12 md:px-20 overflow-hidden selection:bg-[#9DB2C3] selection:text-black">
      
      {/* Background Lighting Vignette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-87.5 bg-[#3E526D]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Minimalist Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-800/80">
          <div>
            <span className="text-[#9DB2C3]/80 text-xs font-semibold tracking-[0.2em] uppercase block mb-3 font-sans">
              Connect With Us
            </span>
            <h2 
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-[#F4F5F7] leading-none"
            >
              OFFICIAL <span className="text-[#9DB2C3]">CHANNELS</span>
            </h2>
          </div>
          
          <p className="text-zinc-400 text-sm md:text-base max-w-sm font-light leading-relaxed">
            Kanal resmi informasi jadwal pertunjukan, rekaman audiovisual, dan dokumentasi panggung.
          </p>
        </div>

        {/* Modern Minimalist Interactive List Layout */}
        <div className="border-t border-zinc-800/80">
          {channels.map((channel) => (
            <motion.a
              key={channel.id}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group border-b border-zinc-800/80 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:bg-zinc-900/60 px-4 sm:px-6 rounded-2xl"
            >
              {/* Number & Platform */}
              <div className="flex items-baseline gap-6 md:w-1/3">
                <span className="text-xs text-[#9DB2C3] font-bold tracking-widest font-sans">
                  {channel.id}
                </span>
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase block mb-1 font-sans">
                    {channel.platform}
                  </span>
                  <h3 
                    style={{ fontFamily: "'Anton', sans-serif" }}
                    className="text-3xl sm:text-4xl text-zinc-100 group-hover:text-[#9DB2C3] transition-colors uppercase tracking-tight"
                  >
                    {channel.handle}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm font-light max-w-xs md:w-1/3">
                {channel.description}
              </p>

              {/* Minimal Arrow & Call to Action */}
              <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-zinc-400 group-hover:text-zinc-100 md:w-1/4 md:justify-end font-sans">
                <span className="uppercase transition-opacity duration-300">OPEN</span>
                <span className="text-[#9DB2C3] text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialMediaSection;