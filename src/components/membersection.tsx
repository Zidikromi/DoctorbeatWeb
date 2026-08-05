import sigit from "../assets/sigit.png";
import gen from "../assets/gen.png";
import duy from "../assets/duy.png";
import budi from "../assets/budi.png";

interface Member {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  lineColor: string;
  hoverGlow: string;
}

const members: Member[] = [
  {
    id: "01",
    name: "SIGIT",
    role: "RHYTHM GUITAR & VOCALS",
    description:
      "The rhythmic soul and acerbic wit. Capturing the raw vocal power and experimental spirit of 1966 Lennon. A performance that balances the avant-garde with pure rock and roll precision.",
    image: sigit,
    bgColor: "bg-[#0d1410]", // Apple Records Dark Slate
    textColor: "text-[#f4f1ea]",
    lineColor: "bg-[#B85B31]", // Autumn Crimson Rust
    hoverGlow: "hover:text-[#B85B31] hover:drop-shadow-[0_0_35px_rgba(184,91,49,0.7)]",
  },
  {
    id: "02",
    name: "GEN GEN",
    role: "LEAD GUITAR & VOCALS",
    description:
      "Melodic exploration and intricate fretwork. Bringing sharp textures and driving soundscapes that define the core harmonic identity of the band.",
    image: gen,
    bgColor: "bg-[#f4f1ea]", // Vintage Cream Paper
    textColor: "text-[#0d1410]",
    lineColor: "bg-[#8B7355]", // Vintage Leather Brown
    hoverGlow: "hover:text-[#8B7355] hover:drop-shadow-[2px_2px_0px_rgba(13,20,16,0.9)]",
  },
  {
    id: "03",
    name: "DUY",
    role: "KEYBOARD & VOCALS",
    description:
      "Harmonic anchor and baroque pop textures. Delivering rich piano arrangements, soaring basslines, and melodic precision that capture the golden studio era.",
    image: duy,
    bgColor: "bg-[#0d1410]",
    textColor: "text-[#f4f1ea]",
    lineColor: "bg-[#D4A373]", // Warm Golden Ochre
    hoverGlow: "hover:text-[#D4A373] hover:drop-shadow-[0_0_35px_rgba(212,163,115,0.7)]",
  },
  {
    id: "04",
    name: "BUDI",
    role: "DRUMS & VOCALS",
    description:
      "Unmistakable pocket rhythm and steady swing. Driving the pulse with energetic backbeats and vintage warmth that keep the crowd moving.",
    image: budi,
    bgColor: "bg-[#f4f1ea]",
    textColor: "text-[#0d1410]",
    lineColor: "bg-[#588157]", // Deep Forest Olive
    hoverGlow: "hover:text-[#588157] hover:drop-shadow-[2px_2px_0px_rgba(13,20,16,0.9)]",
  },
];

export default function BandMembers() {
  return (
    <section className="w-full font-sans overflow-hidden">
      {members.map((member, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={member.id}
            className={`w-full pt-12 md:pt-16 pb-0 px-6 md:px-16 lg:px-24 ${member.bgColor} ${member.textColor} transition-colors duration-500 border-b border-black/10 relative`}
          >
            <div
              className={`max-w-7xl mx-auto flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-end justify-between gap-8 lg:gap-16`}
            >
              {/* Bagian Gambar */}
              <div className="w-full lg:w-1/2 flex justify-center items-end self-end">
                <div className="relative w-full max-w-lg h-95 sm:h-125 lg:h-162.5 flex items-end justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 w-full h-full object-contain object-bottom select-none pointer-events-none block filter brightness-95"
                  />
                </div>
              </div>

              {/* Bagian Teks */}
              <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left py-12 lg:py-24 self-center space-y-6">
                
                {/* Nama Personel dengan Hover Glow Rubber Soul */}
                <h2 
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none uppercase transition-all duration-300 cursor-pointer select-none ${member.hoverGlow}`}
                >
                  {member.name}
                </h2>
                
                {/* Deskripsi */}
                <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl opacity-90">
                  {member.description}
                </p>
                
                {/* Role Accent Bar */}
                <div className="pt-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-6 ${member.lineColor}`} />
                    <span className="text-xs sm:text-sm font-mono tracking-[0.2em] font-semibold uppercase opacity-80">
                      {member.role}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}