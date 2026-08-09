import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Channel {
  id: string;
  platform: string;
  handle: string;
  url: string;
  description: string;
}

const channels: Channel[] = [
  {
    id: "01",
    platform: "Instagram",
    handle: "@doctorbeat.official",
    url: "https://www.instagram.com/doctorbeat.official/",
    description: "Dokumentasi konser, jadwal panggung, dan rekaman momen visual mendalam.",
  },
  {
    id: "02",
    platform: "TikTok",
    handle: "@doctorbeat.official",
    url: "https://www.tiktok.com/@doctorbeat.official",
    description: "Cuplikan pertunjukan energik, momen di balik layar, dan arsip video dinamis.",
  },
];

export const SocialMediaSection: React.FC = () => {
  return (
    <section className="relative w-full bg-zinc-950 text-zinc-100 py-24 sm:py-32 px-6 sm:px-12 lg:px-24 overflow-hidden selection:bg-zinc-800 selection:text-zinc-100 font-sans">
      
      {/* Ambient Backlight Subtle Vignette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-slate-800/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Editorial Section Header */}
        <div className="mb-16 md:mb-20 pb-8 border-b border-zinc-800/60 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-zinc-500 text-xs font-medium tracking-[0.25em] uppercase block mb-3">
              Kanal Resmi
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-zinc-100">
              Social <span className="italic font-light text-zinc-400">Media</span>
            </h2>
          </div>
          
          <p className="text-zinc-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            Akses langsung ke kanal resmi informasi jadwal pertunjukan, rekaman audiovisual, dan dokumentasi panggung kami.
          </p>
        </div>

        {/* Modern Minimalist List Layout */}
        <div className="flex flex-col">
          {channels.map((channel) => (
            <motion.a
              key={channel.id}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group border-b border-zinc-800/60 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-300 hover:bg-zinc-900/40 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl"
            >
              {/* Identity & Platform */}
              <div className="flex items-baseline gap-6 md:w-5/12">
                <span className="text-xs text-zinc-500 font-mono tracking-wider">
                  {channel.id}
                </span>
                <div>
                  <span className="text-[11px] font-medium tracking-[0.2em] text-zinc-500 uppercase block mb-1">
                    {channel.platform}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-zinc-100 group-hover:text-zinc-300 transition-colors tracking-wide">
                    {channel.handle}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm font-light max-w-sm md:w-5/12 leading-relaxed">
                {channel.description}
              </p>

              {/* Minimalist Action Icon */}
              <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-zinc-400 group-hover:text-zinc-100 md:w-2/12 md:justify-end">
                <span className="uppercase text-[11px] opacity-70 group-hover:opacity-100 transition-opacity">
                  Kunjungi
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialMediaSection;