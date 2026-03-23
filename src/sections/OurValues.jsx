import React, { useEffect, useRef } from "react";
import { FaCog } from "react-icons/fa";

const GEAR_CFG = [];

function GearIcon({ size, dur, rev, op, pos }) {
  return (
    <div
      className={`absolute ${pos} ${op} ${size} pointer-events-none z-0`}
      style={{
        animation: `${rev ? "gearSpinRev" : "gearSpin"} ${dur} linear infinite`,
      }}
    >
      <FaCog className="text-primary-mauve" />
    </div>
  );
}

function EpicLetter({ ch, color, tooltip, tooltipPos }) {
  return (
    <span
      className="relative inline-flex items-center px-1 cursor-default transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:scale-110 group"
      style={{
        color,
        fontSize: "clamp(1.6rem, 4.5vw, 3.2rem)",
        fontWeight: 700,
      }}
    >
      <span
        className={`absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-navy text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30 shadow-xl whitespace-nowrap ${
          tooltipPos === "top" ? "bottom-full mb-3" : "top-full mt-3"
        }`}
      >
        {tooltip}
      </span>
      {ch}
    </span>
  );
}

function ValueItem({ letter, label, color }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center text-center">
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-bold text-xl sm:text-2xl text-white transition-transform duration-300 hover:scale-110 shadow-lg"
        style={{ backgroundColor: color }}
      >
        {letter}
      </div>
      <div
        className="font-bold text-[10px] sm:text-[11px] tracking-[0.15em] uppercase"
        style={{ color }}
      >
        {label}
      </div>
    </div>
  );
}

export default function OurValues() {
  const sectionRef = useRef(null);
  const refs = useRef({});
  const hasAnimated = useRef(false);

  const setRef = (key) => (el) => {
    refs.current[key] = el;
  };

  useEffect(() => {
    const seq = [
      { key: "heading", d: 100 },
      { key: "epic", d: 250 },
      { key: "bulb", d: 450 },
      { key: "cardE", d: 600 },
      { key: "cardI", d: 650 },
      { key: "cardP", d: 750 },
      { key: "cardC", d: 800 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          seq.forEach(({ key, d }) => {
            setTimeout(() => {
              const el = refs.current[key];
              if (el) {
                el.classList.remove("opacity-0", "translate-y-8", "scale-90");
                el.classList.add("opacity-100", "translate-y-0", "scale-100");
              }
            }, d);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const animBase =
    "opacity-0 translate-y-8 scale-90 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";

  return (
    <section
      ref={sectionRef}
      className="bg-white pb-12 sm:pb-16 md:pb-20 lg:pb-24 2xl:pb-28 relative overflow-hidden"
    >
      <style>{`
        @keyframes gearSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes gearSpinRev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      `}</style>

      <div className="mx-auto w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] px-4 md:px-8 lg:px-10 2xl:px-12">
        <div ref={setRef("heading")} className={`text-center ${animBase}`}>
          <h2 className="text-h1 2xl:text-[64px] font-bold text-primary-navy leading-tight">
            OUR <span className="text-primary-mauve">VALUES</span>
          </h2>

          <p className="italic text-body-sm xl:text-base 2xl:text-lg mt-6 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto leading-relaxed">
            At EuRadicle, our values shape how we think, collaborate, and
            deliver. They guide how we approach problems, continuously learn,
            and design solutions that create real-world impact while building
            strong, meaningful client partnerships. For our consultants and
            teams, these values guide how we approach problems, continuously
            learn, and design solutions that create real-world impact. For our
            clients, they translate into thoughtful partnerships,
            context-driven capability solutions, and a commitment to measurable
            outcomes.
          </p>
        </div>

        <div
          ref={setRef("epic")}
          className={`flex justify-center items-center gap-1 mt-6 ${animBase}`}
        >
          <EpicLetter ch="E" color="#2d3047" tooltip="Expertise" tooltipPos="bot" />
          <span className="text-primary-mauve text-6xl mt-4">.</span>
          <EpicLetter ch="P" color="#3e3264" tooltip="Pioneering Spirit" tooltipPos="bot" />
          <span className="text-primary-mauve text-6xl mt-4">.</span>
          <EpicLetter ch="I" color="#736184" tooltip="Impact" tooltipPos="bot" />
          <span className="text-primary-mauve text-6xl mt-4">.</span>
          <EpicLetter ch="C" color="#9b7ba1" tooltip="Client Centricity" tooltipPos="bot" />
        </div>

        <div className="flex flex-col md:grid md:grid-cols-[1fr_clamp(220px,28vw,340px)_1fr] items-center mt-8">
          <div className="flex flex-row md:flex-col gap-6 md:gap-24 items-center justify-between w-full px-2 order-1 lg:order-none">
            <div ref={setRef("cardE")} className={animBase}>
              <ValueItem letter="E" label="Expertise" color="#2d3047" />
            </div>
            <div ref={setRef("cardP")} className={animBase}>
              <ValueItem letter="P" label="Pioneering Spirit" color="#3e3264" />
            </div>
          </div>

          <div
            ref={setRef("bulb")}
            className={`relative flex items-center justify-center order-2 lg:order-none ${animBase}`}
          >
            <img
              src="/Bulb.png"
              alt="EPIC Bulb"
              className="relative z-10 w-[220px] sm:w-[260px] md:w-[300px] lg:w-full h-auto"
            />
          </div>

          <div className="flex flex-row md:flex-col gap-6 md:gap-24 items-center justify-between w-full px-2 mt-4 md:mt-0 order-3 lg:order-none">
            <div ref={setRef("cardI")} className={animBase}>
              <ValueItem letter="I" label="Impact" color="#736184" />
            </div>
            <div ref={setRef("cardC")} className={animBase}>
              <ValueItem letter="C" label="Client Centricity" color="#9b7ba1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
