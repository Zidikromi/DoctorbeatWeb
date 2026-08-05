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
    <section className="w-full bg-[#0d1410] text-[#f4f1ea] py-24 sm:py-32 px-6 sm:px-12 md:px-20 font-sans border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Minimalist Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
           
            <h2 
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-none"
            >
              OFFICIAL CHANNELS
            </h2>
          </div>
          
          <p className="text-zinc-400 text-sm md:text-base max-w-sm font-light leading-relaxed">
            Kanal resmi informasi jadwal pertunjukan, rekaman audiovisual, dan dokumentasi panggung.
          </p>
        </div>

        {/* Minimalist Tracklist / Brutalist List Layout */}
        <div className="border-t border-white/15">
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
              className="group border-b border-white/15 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-300 hover:bg-white/2 px-2 sm:px-4"
            >
              {/* Number & Platform */}
              <div className="flex items-baseline gap-6 md:w-1/3">
                <span className="font-mono text-xs text-amber-400 font-bold tracking-widest">
                  {channel.id}
                </span>
                <div>
                  <span className="font-mono text-xs tracking-[0.2em] text-zinc-400 uppercase block mb-1">
                    {channel.platform}
                  </span>
                  <h3 
                    style={{ fontFamily: "'Anton', sans-serif" }}
                    className="text-3xl sm:text-4xl text-white group-hover:text-amber-300 transition-colors uppercase tracking-tight"
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
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-zinc-300 group-hover:text-white md:w-1/4 md:justify-end">
                <span className="uppercase transition-opacity duration-300">OPEN</span>
                <span className="text-amber-400 text-lg transition-transform duration-300 group-hover:translate-x-2">
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