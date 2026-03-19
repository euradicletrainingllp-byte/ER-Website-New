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
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 85%",
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
    { label: "Professionals Trained", value: Impact.speedometer.Professionals_Trained },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-muted)] py-14 px-4 max-[600px]:py-12 max-[600px]:px-5 min-[600px]:py-16 min-[600px]:px-6 min-[768px]:py-18 min-[768px]:px-8 min-[992px]:py-20 min-[992px]:px-10"
    >
      <div className="max-w-[95%] min-[600px]:max-w-2xl min-[768px]:max-w-3xl min-[992px]:max-w-5xl mx-auto text-center">
        <h1 className="text-h1 normal-case mb-2 text-[clamp(28px,5vw,56px)] leading-tight">
          <span className="text-[var(--color-primary-navy)]">
            Our Impact at a{" "}
          </span>
          <span className="text-[var(--color-primary-mauve)]">Glance</span>
        </h1>

        <p className="italic text-body-lg text-[var(--color-primary-navy)] max-w-full min-[600px]:max-w-xl min-[768px]:max-w-2xl min-[992px]:max-w-3xl mx-auto mb-10 min-[600px]:mb-12 min-[768px]:mb-14 text-[clamp(14px,2.5vw,20px)] leading-relaxed">
          The impact of people development shows up over time in decisions made, teams strengthened and organisational cultures shaped.
        </p>

        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[768px]:grid-cols-3 gap-8 min-[768px]:gap-10">
          {stats.map((stat) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);
            const hasPlus = stat.value.includes("+");

            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <div className="text-h1 text-[var(--color-primary-purple)] text-[clamp(32px,6vw,64px)] leading-none">
                  <span
                    className="counter"
                    data-target={numericValue}
                  >
                    0
                  </span>
                  {hasPlus && "+"}
                </div>

                <div className="text-h5 text-[var(--color-primary-mauve)] mt-2 min-[600px]:mt-3 text-[clamp(16px,2.5vw,24px)]">
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
