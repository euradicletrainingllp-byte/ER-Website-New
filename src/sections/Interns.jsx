import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Interns({ interns, info }) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      const ctx = gsap.context(() => {
        ScrollTrigger.matchMedia({
          "(min-width: 640px)": () => {
            const cards = gsap.utils.toArray(".intern-card");

            gsap.from(cards, {
              y: 50,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            });
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-white)] pb-16 sm:pb-24 xl:pb-28 2xl:pb-32"
    >
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-8">
        <div className="text-center mb-12 sm:mb-16 xl:mb-20">
          <h1 className="text-h1 sm:text-h2 xl:text-[44px] 2xl:text-[52px] mb-4">
            <span className="text-[var(--color-primary-navy)]">EARLY </span>
            <span className="text-[var(--color-primary-mauve)]">TALENT</span>
          </h1>

          <div className="italic text-body-sm xl:text-base 2xl:text-lg mt-6 max-w-5xl xl:max-w-6xl mx-auto">
            <p>{info}</p>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-10 xl:space-y-12">
          {interns.map((item, i) => (
            <div
              key={i}
              className="intern-card flex items-center justify-center"
            >
              <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl bg-[var(--color-bg-muted)] rounded-2xl px-4 sm:px-10 xl:px-14 2xl:px-16 py-6 sm:py-8 xl:py-10 shadow-md">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 xl:gap-8">
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-20 h-20 xl:w-24 xl:h-24 rounded-full object-cover flex-shrink-0"
                  />

                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-body sm:text-body-lg xl:text-lg 2xl:text-xl italic text-[var(--color-primary-purple)] leading-relaxed mb-4">
                      "{item.text}"
                    </p>

                    <div>
                      <p className="text-subheading xl:text-lg text-[var(--color-primary-navy)]">
                        {item.name}
                      </p>
                      <p className="text-body-sm xl:text-base text-[var(--color-primary-mauve)] mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}