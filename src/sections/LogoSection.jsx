import React from "react";
import LogoLoop from "../utils/LogoLoop";

const LogoColumn = ({ logos, direction }) => {
  return (
    <div className="relative h-[320px] sm:h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden">
      <LogoLoop
        logos={logos}
        direction={direction}
        speed={25}
        gap={20}
        pauseOnHover
        scaleOnHover
        fadeOut={false}
        style={{ height: "100%" }}
      />
    </div>
  );
};

const LogoSection = () => {
  const totalLogos = 33;

  const indices = Array.from({ length: totalLogos }, (_, i) => i + 1).filter(
    (i) => i !== 18 && i !== 19
  );

  const buildLogos = (arr) =>
    arr.map((i) => ({
      node: (
        <img
          src={`/logos/${i}.png`}
          alt={`Partner Logo ${i}`}
          loading="lazy"
          className="max-w-[100px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] h-auto object-contain transition-transform duration-300 hover:scale-110"
        />
      ),
    }));

  const columns = [
    indices.filter((_, i) => i % 3 === 0),
    indices.filter((_, i) => i % 3 === 1),
    indices.filter((_, i) => i % 3 === 2),
  ];

  return (
    <section className="relative flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 bg-bg-muted/30 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative z-10 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-h1 text-primary-navy tracking-tight text-[clamp(28px,5vw,56px)] leading-tight">
              TRUSTED BY{" "}
              <span className="text-primary-mauve">
                <br className="block sm:hidden" />
                BRANDS
              </span>{" "}
              AND <br className="hidden sm:block" />
              <span className="text-primary-mauve">INDUSTRIES</span>{" "}
              <br className="block sm:hidden" />
              WORLDWIDE
            </h1>
          </div>

          <div className="relative rounded-[28px] p-6 md:p-10 shadow-sm border border-brand-400/10">
            <div className="grid grid-cols-2 lg:hidden gap-4 justify-items-center">
              <LogoColumn
                logos={buildLogos(columns[0])}
                direction="up"
              />
              <LogoColumn
                logos={buildLogos(columns[1])}
                direction="down"
              />
            </div>

            <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-center justify-items-center">
              <LogoColumn
                logos={buildLogos(columns[0])}
                direction="up"
              />
              <LogoColumn
                logos={buildLogos(columns[1])}
                direction="down"
              />
              <LogoColumn
                logos={buildLogos(columns[2])}
                direction="up"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;