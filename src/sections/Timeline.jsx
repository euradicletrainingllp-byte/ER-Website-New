import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

gsap.config({
  autoSleep: 60,
  force3D: true,
});

export default function StoryTimelineSection({ items }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const contentRefs = useRef([]);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(timelineRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });
    },
    { scope: sectionRef },
  );

  useGSAP(
    () => {
      if (!items.length) return;
      ScrollTrigger.clearScrollMemory();
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const getTotalScroll = () => {
          const END_GAP = 30;
          return trackRef.current.scrollWidth - window.innerWidth + END_GAP;
        };

        gsap.to(trackRef.current, {
          x: () => -getTotalScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${getTotalScroll()}`,
            scrub: 0.3,
            pin: true,
            anticipatePin: 1,
            snap: {
              snapTo: 1 / (items.length - 1),
              duration: 0.4,
              delay: 0,
              ease: "none",
              inertia: false,
            },
            onUpdate: (self) => {
              const total = items.length - 1;
              const rawIndex = self.progress * total;
              const index = Math.min(
                total,
                Math.max(0, Math.floor(rawIndex + 0.5)),
              );
              setActiveIndex(index);
            },
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        const getTotalScroll = () => {
          const END_GAP = 30;
          return trackRef.current.scrollWidth - window.innerWidth + END_GAP;
        };

        gsap.to(trackRef.current, {
          x: () => -getTotalScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${getTotalScroll()}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            snap: {
              snapTo: 1 / (items.length - 1),
              duration: 0.4,
              ease: "power3.out",
              inertia: false,
            },
            onUpdate: (self) => {
              const total = items.length - 1;
              const rawIndex = self.progress * total;
              const index = Math.min(
                total,
                Math.max(0, Math.floor(rawIndex + 0.5)),
              );
              setActiveIndex(index);
            },
          },
        });
      });

      return () => {
        mm.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: sectionRef, dependencies: [items.length] },
  );

  useGSAP(
    () => {
      cardsRef.current.forEach((card, i) => {
        const content = contentRefs.current[i];
        if (!card || !content) return;

        if (i === activeIndex) {
          gsap.to(card, {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            duration: 0.7,
            ease: "power3.out",
          });

          gsap.fromTo(
            content,
            { height: 0, opacity: 0, y: 10 },
            {
              height: "auto",
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.inOut",
            },
          );
        } else {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            rotateY: i < activeIndex ? -5 : 5,
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to(content, {
            height: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power3.inOut",
          });
        }
      });
    },
    { dependencies: [activeIndex] },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden min-[768px]:h-screen pt-16 pb-28 min-[768px]:py-0"
      style={{
        background: "linear-gradient(to bottom right, #E4E7FD, #F4DEF0)",
      }}
    >
      <h1
        ref={titleRef}
        className="text-center text-h1 pt-10 min-[600px]:pt-12 min-[768px]:pt-16"
      >
        OUR <span className="text-[var(--color-primary-mauve)]">STORY</span>
      </h1>

      <div
        ref={timelineRef}
        className="relative min-[768px]:absolute top-20 min-[768px]:top-32 left-0 right-0 w-full px-6 min-[440px]:px-8 min-[600px]:px-12 mb-10 min-[768px]:mb-0"
      >
        <div className="flex items-center justify-center pl-2 pr-2 min-[440px]:pl-3 min-[440px]:pr-3 mx-auto max-w-[92%] min-[440px]:max-w-sm min-[600px]:max-w-lg min-[768px]:max-w-4xl min-[1200px]:max-w-5xl">
          {items.map((item, i) => (
            <div key={i} className="flex items-center flex-none min-[600px]:flex-1">
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`z-10 flex h-7 min-[600px]:h-10 px-2 min-[600px]:px-4 min-w-12 min-[600px]:min-w-24 items-center justify-center rounded-full border text-[10px] min-[600px]:text-body-sm font-semibold transition-all duration-500 ${
                    activeIndex === i
                      ? "bg-brand-600 text-white border-transparent scale-110 shadow-lg shadow-brand-600/30"
                      : "bg-[var(--color-bg-white)] text-[var(--color-primary-mauve)] border-brand-600"
                  }`}
                >
                  {item.year}
                </div>
                {activeIndex === i && (
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
                )}
              </div>
              {i !== items.length - 1 && (
                <div className="relative h-px flex-1 mx-0.5 min-[440px]:mx-0.5 min-[600px]:mx-2 bg-brand-600/20 overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-brand-600/60 transition-all duration-500"
                    style={{
                      width: activeIndex > i ? "100%" : "0%",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex flex-row h-full items-center gap-10 min-[768px]:gap-24 px-4 min-[600px]:px-6 min-[768px]:px-24"
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="shrink-0 w-full max-w-md min-[768px]:w-screen min-[768px]:flex min-[768px]:items-center min-[768px]:justify-center rounded-2xl"
            style={{ perspective: "1000px" }}
          >
            <div className="w-full max-w-md rounded-2xl bg-[var(--color-bg-white)] shadow-2xl overflow-hidden">
              <div
                className="h-1.5 w-full transition-all duration-700"
                style={{
                  background:
                    activeIndex === i
                      ? "linear-gradient(to right, #8c668b, #F2B2D7)"
                      : "transparent",
                }}
              />
              <div className="relative flex flex-col p-6 min-[600px]:p-7 min-[768px]:p-8">
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1 pr-4">
                    <p className="text-[18px] min-[600px]:text-xl font-semibold tracking-wide text-[var(--color-primary-mauve)] leading-tight uppercase">
                      {item.title}
                    </p>
                    <h3 className="text-md text-[var(--color-primary-mauve)]">
                      {item.year}
                    </h3>
                  </div>

                  <div className="relative w-24 h-12 min-[600px]:w-32 min-[600px]:h-16 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt=""
                      className={`max-w-none transition-transform duration-500 origin-center ${
                        item.size === "yes"
                          ? "h-10 min-[600px]:h-12 scale-100"
                          : item.size === "hh"
                            ? "h-24 min-[600px]:h-32 scale-[1.5]"
                            : "h-20 min-[600px]:h-28 scale-[1.5]"
                      }`}
                    />
                  </div>
                </div>

                <div
                  ref={(el) => (contentRefs.current[i] = el)}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-body-sm leading-relaxed">
                    {item.text}
                  </p>
                  <hr className="my-4 border-brand-600/30" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}