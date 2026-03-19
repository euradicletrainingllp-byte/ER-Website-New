import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyEuradicle({ items }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 640px)", () => {
        const section = sectionRef.current;
        const track = trackRef.current;

        const getScrollAmount = () => {
          const trackWidth = track.scrollWidth;
          const sectionWidth = section.clientWidth;
          return Math.max(trackWidth - sectionWidth + 80, 0);
        };

        const ctx = gsap.context(() => {
          gsap.set(track, { x: 0 });

          const tween = gsap.to(track, {
            x: () => -getScrollAmount(),
            ease: "none",
            paused: true,
          });

          ScrollTrigger.create({
            animation: tween,
            trigger: section,
            start: "top-=60 top",
            end: () => `+=${getScrollAmount()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // markers: true
          });

          gsap.fromTo(
            progressRef.current,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top-=60 top",
                end: () => `+=${getScrollAmount()}`,
                scrub: 1,
                invalidateOnRefresh: true,
              },
            }
          );
        }, section);

        return () => ctx.revert();
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[var(--color-bg-white)] px-6 sm:px-12 py-20 overflow-hidden pb-40"
    >
      <div className="text-center mb-16">
        <h1 className="text-h1">
          <span className="text-[var(--color-primary-navy)]">
            WHY JOIN
          </span>{" "}
          <span className="text-[var(--color-primary-mauve)]">
            EURADICLE 
          </span>
          ?
        </h1>
      </div>

      <div className="flex justify-start">
        <div
          ref={trackRef}
          className="flex flex-col sm:flex-row items-stretch gap-10 sm:gap-20"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-full sm:flex-shrink-0 sm:w-[38rem] rounded-3xl bg-white shadow-xl transition-all duration-500 px-8 py-10 flex flex-col justify-center text-center hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-h5 text-[var(--color-primary-mauve)] mb-4">
                {item.title}
              </h3>
              <p className="text-body leading-relaxed max-w-xl mx-auto">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-18 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[var(--color-primary-mauve)]/20 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-[var(--color-primary-mauve)] origin-left scale-x-0"
        />
      </div>
    </section>
  );
}
