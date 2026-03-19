import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Impact } from "../data/home";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ImpactSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const counters = gsap.utils.toArray(".counter");

        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-target"), 10);
          const obj = { value: 0 };

          gsap.to(obj, {
            value: target,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 90%",
              once: true,
            },
            onUpdate: () => {
              counter.textContent = Math.floor(obj.value).toLocaleString();
            },
          });
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  const stats = [
    { label: "Projects", value: Impact.speedometer.Projects },
    { label: "Clients", value: Impact.speedometer.Clients },
    {
      label: "Professionals Trained",
      value: Impact.speedometer.Professionals_Trained,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-muted)] py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mb-3 text-[clamp(26px,4.5vw,54px)] leading-tight font-medium">
          <span className="text-[var(--color-primary-navy)]">
            Our Impact at a{" "}
          </span>
          <span className="text-[var(--color-primary-mauve)]">Glance</span>
        </h1>

        <p className="italic text-[var(--color-primary-navy)] opacity-80 mx-auto mb-10 sm:mb-12 md:mb-14 max-w-xs sm:max-w-lg md:max-w-2xl text-[clamp(13px,2.2vw,18px)] leading-relaxed">
          The impact of people development shows up over time in decisions made,
          teams strengthened and organisational cultures shaped.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-6 md:gap-x-10">
          {stats.map((stat) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);
            const hasPlus = stat.value.includes("+");

            return (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-[clamp(34px,6vw,64px)] font-semibold text-[var(--color-primary-purple)] leading-none">
                  <span className="counter" data-target={numericValue}>
                    0
                  </span>
                  {hasPlus && "+"}
                </div>

                <div className="mt-2 sm:mt-3 text-[clamp(15px,2.2vw,22px)] font-medium text-[var(--color-primary-mauve)] text-center max-w-[200px] sm:max-w-none">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;