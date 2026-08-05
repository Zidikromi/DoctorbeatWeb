import sigit from "../assets/img/sigit.png";
import gen from "../assets/img/gen.png";
import duy from "../assets/img/duy.png";
import budi from "../assets/img/budi.png";

interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
  lineColor: string;
}

const members: Member[] = [
  {
    id: 1,
    name: "SIGIT",
    role: "RHYTHM GUITAR & VOCALS",
    description:
      "The rhythmic soul and acerbic wit. Capturing the raw vocal power and experimental spirit of 1966 Lennon. A performance that balances the avant-garde with pure rock and roll precision.",
    image: sigit,
    bgColor: "bg-[#121929]",
    textColor: "text-white",
    lineColor: "border-white",
  },
  {
    id: 2,
    name: "GEN GEN",
    role: "LEAD GUITAR & VOCALS",
    description:
      "Melodic exploration and intricate fretwork. Bringing sharp textures and driving soundscapes that define the core harmonic identity of the band.",
    image: gen,
    bgColor: "bg-white",
    textColor: "text-black",
    lineColor: "border-black",
  },
  {
    id: 3,
    name: "DUY",
    role: "Keyboard & Vocals",
    description:
      "Melodic exploration and intricate fretwork. Bringing sharp textures and driving soundscapes that define the core harmonic identity of the band.",
    image: duy,
    bgColor: "bg-[#121929]",
    textColor: "text-white",
    lineColor: "border-white",
  },
  {
    id: 4,
    name: "BUDI",
    role: "DRUMS & VOCALS",
    description:
      "Melodic exploration and intricate fretwork. Bringing sharp textures and driving soundscapes that define the core harmonic identity of the band.",
    image: budi,
    bgColor: "bg-white",
    textColor: "text-black",
    lineColor: "border-black",
  },
];

export default function BandMembers() {
  return (
    <section className="w-full font-sans">
      {members.map((member, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={member.id}
            // Padding atas dibuat sangat kecil agar lebih rapat
            className={`w-full pt-4 md:pt-6 px-6 md:px-16 lg:px-24 ${member.bgColor} ${member.textColor} transition-colors duration-300`}
          >
            <div
              className={`max-w-7xl mx-auto flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center justify-between gap-8 lg:gap-16`}
            >
              {/* Bagian Gambar */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md h-112.5 sm:h-125h-[580px] flex items-end justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-bottom select-none pointer-events-none"
                  />
                </div>
              </div>

              {/* Bagian Teks (Diset ke tengah secara vertikal & padding bawah disesuaikan) */}
              <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left py-8 lg:py-0">
                <h2 className="text-6xl sm:text-7xl md:text-8xl font-normal tracking-wide mb-6 font-['Anton',sans-serif]">
                  {member.name}
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl font-serif leading-relaxed opacity-90 mb-8 max-w-xl">
                  {member.description}
                </p>
                
                <div className="pt-2">
                  <span className={`inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase pb-2 border-b-2 ${member.lineColor}`}>
                    {member.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}