import React from "react";

const LogoMarqueeColumn = ({ logoIndices, reverse = false }) => {
  return (
    <div className="relative h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden group">
      <div
        className={`flex flex-col gap-4 md:gap-5 items-center will-change-transform group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...logoIndices, ...logoIndices].map((index, idx) => (
          <div key={idx} className="w-full flex items-center justify-center py-2">
            <img
              src={`/logos/${index}.png`}
              alt={`Partner Logo ${index}`}
              loading="lazy"
              className="max-w-[100px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] h-auto transition-transform duration-300 hover:scale-110 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const LogoSection = () => {
  const totalLogos = 33;
  const indices = Array.from({ length: totalLogos }, (_, i) => i + 1).filter(
    (i) => i !== 18 && i !== 19 
  );

  const columns = [
    indices.filter((_, i) => i % 3 === 0),
    indices.filter((_, i) => i % 3 === 1),
    indices.filter((_, i) => i % 3 === 2),
  ];

  return (
    <section className="relative flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 bg-bg-muted/30 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-bg-muted/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-bg-muted/30 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-h1 text-primary-navy tracking-tight text-[clamp(28px,5vw,56px)] leading-tight">
              TRUSTED BY <span className="text-primary-mauve"><br className="block sm:hidden"/>BRANDS </span> AND
              <br className="hidden sm:block"/>
              <span className="text-primary-mauve">INDUSTRIES</span> <br className="block sm:hidden"/>WORLDWIDE
            </h1>
          </div>

          <div className="relative rounded-[28px] p-6 md:p-10 shadow-sm border border-brand-400/10">
            <div className="grid grid-cols-2 lg:hidden">
              <LogoMarqueeColumn logoIndices={columns[0]} reverse={false} />
              <LogoMarqueeColumn logoIndices={columns[1]} reverse={true} />
            </div>

            <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-start">
              <LogoMarqueeColumn logoIndices={columns[0]} reverse={false} />
              <LogoMarqueeColumn logoIndices={columns[1]} reverse={true} />
              <LogoMarqueeColumn logoIndices={columns[2]} reverse={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;