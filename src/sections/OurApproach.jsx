import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function OurApproach({ data }) {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const rowsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      gsap.from(introRef.current, {
        opacity: 0,
        y: isMobile ? 16 : 24,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
        },
      });

      rowsRef.current.forEach((row) => {
        const icon = row.querySelector(".approach-icon");
        const content = row.querySelector(".approach-content");

        gsap.fromTo(
          icon,
          { x: isMobile ? -30 : -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            },
          }
        );

        gsap.fromTo(
          content,
          { x: isMobile ? 30 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 2xl:py-28 overflow-hidden"
    >
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "url('/Hand.png')",
          backgroundSize: "90%"
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] px-6 xl:px-8 2xl:px-12">
        <div ref={introRef} className="text-center">
          <h2 className="text-h1 2xl:text-[64px] font-bold tracking-tight text-primary-navy">
            OUR <span className="text-primary-mauve">APPROACH</span>
          </h2>

          <p className="italic mx-auto mt-2 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl text-sm xl:text-base 2xl:text-lg text-primary-navy">
            Our approach is designed to move organizations beyond isolated
            people development initiatives toward sustainable leadership and
            capability transformation.
          </p>
        </div>

        <div className="mt-10 xl:mt-12 2xl:mt-16 space-y-8 2xl:space-y-12">
          {data.map((item, i) => (
            <div
              key={i}
              ref={(el) => (rowsRef.current[i] = el)}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] xl:grid-cols-[160px_1fr] 2xl:grid-cols-[200px_1fr] gap-6 md:gap-12 xl:gap-14 2xl:gap-16"
            >
              <div className="approach-icon flex items-center justify-center bg-transparent">
                <img
                  src={item.iconUrl}
                  alt={item.title}
                  className="w-14 h-14 md:w-24 md:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 object-contain object-center rounded-xl"
                />
              </div>

              <div className="approach-content">
                <h3 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-primary-mauve">
                  {item.title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-sm xl:text-base 2xl:text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}