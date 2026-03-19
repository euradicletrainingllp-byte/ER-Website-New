import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Services } from "../data/capabilities";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const detailsRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(
    () => {
      const line = cardRef.current.querySelector(".scan-line");
      const glow = cardRef.current.querySelector(".line-glow");
      const content = cardRef.current.querySelector(".stat-content");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        [line, glow],
        { x: "4rem", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
          delay: index * 0.1,
        }
      )
        .fromTo(
          content,
          { clipPath: "inset(0 0 0 100%)" },
          { clipPath: "inset(0 0 0 0%)", duration: 0.8, ease: "power2.inOut" },
          "<"
        )
        .to(glow, { opacity: 0.3, duration: 0.4 });
    },
    { scope: cardRef }
  );

  useGSAP(
    () => {
      gsap.to(detailsRef.current, {
        height: isHovered ? "auto" : 0,
        opacity: isHovered ? 1 : 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    },
    { dependencies: [isHovered] }
  );

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full border border-brand-400/20 bg-bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden mb-4"
    >
      <div className="px-6 md:px-8 xl:px-12 2xl:px-16 py-6 xl:py-7 2xl:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
        <div className="flex items-center gap-5 xl:gap-7 2xl:gap-8">
          <img
            src={`/Services/${index + 1}.png`}
            alt={service.title}
            className="w-14 h-14 md:w-16 md:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 object-cover shrink-0"
          />

          <div className="relative pl-5 xl:pl-6">
            <div className="scan-line absolute left-0 top-0 h-full w-px bg-brand-500 z-20" />
            <div className="line-glow absolute left-0 top-0 h-full w-[2px] bg-brand-500 blur-[4px] shadow-[0_0_15px_1px_rgba(198,150,189,0.8)] z-10" />

            <div className="stat-content">
              <h3 className="text-h6 xl:text-lg 2xl:text-xl text-primary-navy uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-body-xs xl:text-sm text-brand-600 font-semibold mt-0.5">
                {service.tagline}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`transition-transform duration-500 hidden md:block ${
            isHovered ? "rotate-180" : "rotate-0"
          }`}
        >
          <span className="text-xl xl:text-2xl text-brand-500">↓</span>
        </div>
      </div>

      <div ref={detailsRef} className="h-0 opacity-0 overflow-hidden">
        <div className="px-6 md:px-10 xl:px-16 2xl:px-20 pb-8 xl:pb-10">
          <div className="w-full h-px bg-bg-muted mb-5" />
          <p className="text-body-sm xl:text-base text-primary-navy/70 leading-relaxed max-w-6xl 2xl:max-w-7xl">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <section className="w-full py-12 xl:py-16 2xl:py-20 bg-bg-muted/30">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 xl:px-10 2xl:px-12">
        <div className="mb-10 xl:mb-12 2xl:mb-14">
          <h1 className="text-h2 xl:text-[44px] 2xl:text-[52px] text-primary-navy tracking-tight text-center">
            OUR SERVICE{" "}
            <span className="text-primary-mauve">CATEGORIES</span>
          </h1>
        </div>

        <div className="flex flex-col gap-3 xl:gap-4">
          {Services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;