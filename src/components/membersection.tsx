import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import sigit from "../assets/sigit.png";
import gen from "../assets/gen.png";
import duy from "../assets/duy.png";
import budi from "../assets/budi.png";
import oni from "../assets/oni.png"; 

interface Member {
  id: string;
  name: string;
  role: string;
  badgeText?: string;
  description: string;
  image: string;
  cardBg: string; 
  badgeBg: string;
  hoverColor: string;
  grayscale?: boolean;
}

const members: Member[] = [
  {
    id: "01",
    name: "SIGIT",
    role: "RHYTHM GUITAR & VOCALS",
    description:
      "The rhythmic soul and acerbic wit. Capturing the raw vocal power and experimental spirit of 1966 Lennon.",
    image: sigit,
    cardBg: "bg-[#f4f1ea]",
    badgeBg: "bg-zinc-900 text-amber-400 border border-amber-400/20",
    hoverColor: "group-hover:text-amber-600",
  },
  {
    id: "02",
    name: "GEN GEN",
    role: "LEAD GUITAR & VOCALS",
    description:
      "Melodic exploration and intricate fretwork. Bringing sharp textures and driving soundscapes that define the core harmonic identity.",
    image: gen,
    cardBg: "bg-[#f4f1ea]",
    badgeBg: "bg-amber-900 text-amber-100",
    hoverColor: "group-hover:text-amber-700",
  },
  {
    id: "03",
    name: "DUY",
    role: "KEYBOARD & VOCALS",
    description:
      "Harmonic anchor and baroque pop textures. Delivering rich piano arrangements, soaring basslines, and melodic precision.",
    image: duy,
    cardBg: "bg-[#f4f1ea]",
    badgeBg: "bg-stone-800 text-stone-200",
    hoverColor: "group-hover:text-stone-700",
  },
  {
    id: "04",
    name: "BUDI",
    role: "DRUMS & VOCALS",
    description:
      "Unmistakable pocket rhythm and steady swing. Driving the pulse with energetic backbeats and vintage warmth.",
    image: budi,
    cardBg: "bg-[#f4f1ea]",
    badgeBg: "bg-emerald-900 text-emerald-100",
    hoverColor: "group-hover:text-emerald-700",
  },
  {
    id: "05",
    name: "ONI NIO",
    role: "FOUNDING MEMBER",
    badgeText: "IN MEMORIAM (2025)",
    description:
      "Eternal sonic pioneer and cornerstone of the band's foundation. His musicality and spirit continue to resonate through every note.",
    image: oni,
    cardBg: "bg-[#e5e2db]",
    badgeBg: "bg-zinc-900 text-zinc-300 border border-zinc-700/50",
    hoverColor: "group-hover:text-zinc-600",
    grayscale: true,
  },
];

export default function BandMembers() {
  return (
    <section className="w-full py-12 px-6 md:px-12 bg-stone-100 relative">
      {/* Overriding Swiper CSS secara langsung dengan Style Tag */}
      <style>{`
        .band-swiper .swiper-pagination-bullet {
          width: 20px !important;
          height: 4px !important;
          border-radius: 2px !important;
          background-color: #d4d4d8 !important; /* Zinc-300 */
          opacity: 0.7 !important;
          transition: all 0.3s ease !important;
        }
        .band-swiper .swiper-pagination-bullet-active {
          width: 40px !important;
          height: 4px !important;
          background-color: #18181b !important; /* Zinc-900 */
          opacity: 1 !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="band-swiper pb-16!"
        >
          {members.map((member) => (
            <SwiperSlide key={member.id} className="h-auto">
              <div className="flex flex-col h-full group cursor-pointer">
                {/* Visual Card / Poster Area */}
                <div
                  className={`relative w-full aspect-3/4 rounded-2xl overflow-hidden shadow-md transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl ${member.cardBg}`}
                >
                  {/* Badge Role / Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md transition-transform duration-300 ${member.badgeBg}`}
                    >
                      {member.badgeText || member.role.split("&")[0].trim()}
                    </span>
                  </div>

                  {/* Foto Personel */}
                  <div className="w-full h-full flex items-end justify-center px-2 pt-2 pb-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-contain object-bottom select-none block transition-all duration-500 ${
                        member.grayscale ? "filter grayscale brightness-90 contrast-110 opacity-90 group-hover:opacity-100" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Deskripsi Teks Bawah Kartu */}
                <div className="mt-4 flex flex-col items-start px-1">
                  <h3
                    style={{ fontFamily: "'Anton', sans-serif" }}
                    className={`text-2xl font-bold tracking-wide text-zinc-900 transition-all duration-300 transform group-hover:translate-x-1 ${member.hoverColor} uppercase`}
                  >
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 line-clamp-3 leading-relaxed font-sans opacity-90 group-hover:opacity-100 transition-opacity">
                    {member.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}