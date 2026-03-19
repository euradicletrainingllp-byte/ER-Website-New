import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function EuradicleLife() {
  const sectionRef = useRef(null);

  const images = [
    "/Celebrations/compressed-celeb3.jpeg",
    "/Celebrations/Start.jpeg",
    "/Celebrations/compressed-celeb4.jpg",
    "/Celebrations/compressed-celeb5.jpg",
    "/Celebrations/compressed-celeb6.jpg",
    "/Celebrations/compressed-celeb1.jpeg",
  ];

  useGSAP(
    () => {
      gsap.from(".life-animate", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-white)] py-14 sm:py-18 lg:py-24 2xl:py-28 mt-6 max-[660px]:mt-10"
    >
      <div className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-8 xl:px-10">
        <div className="text-center mb-12 lg:mb-16 2xl:mb-20">
          <h1 className="text-h1 sm:text-h2 lg:text-h1 2xl:text-[56px] font-semibold mb-4 life-animate">
            <span className="text-[var(--color-primary-navy)]">LIFE AT </span>
            <span className="text-[var(--color-primary-mauve)]">EURADICLE</span>
          </h1>

          <p className="italic text-body-sm xl:text-base 2xl:text-lg mt-6 max-w-6xl 2xl:max-w-7xl mx-auto leading-relaxed life-animate">
            We believe great work comes from people who feel valued, not burned
            out. At EuRadicle, impact begins with balance, trust, and belonging.
            Our culture champions curiosity, open dialogue, and individuality
            over hierarchy. We create space for growth, shared wins, and
            meaningful pauses, so you can shape leaders and organisations while
            staying true to yourself.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-12 gap-5 xl:gap-6 2xl:gap-7 auto-rows-[260px] lg:auto-rows-[320px] xl:auto-rows-[360px] 2xl:auto-rows-[400px]">
          <div className="col-span-7 row-span-2 overflow-hidden rounded-3xl life-animate">
            <img
              src={images[1]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-5 overflow-hidden rounded-3xl life-animate">
            <img
              src={images[3]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-5 overflow-hidden rounded-3xl life-animate">
            <img
              src={images[0]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-12 row-span-2 overflow-hidden rounded-3xl life-animate">
            <img
              src={images[2]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="col-span-4 row-span-2 overflow-hidden rounded-3xl life-animate">
            <img
              src={images[4]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="col-span-8 row-span-2 overflow-hidden rounded-3xl life-animate">
            <img
              src={images[5]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}