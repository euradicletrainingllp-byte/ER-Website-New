import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showreel = () => {
  const container = useRef(null);
  const videoWrapper = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  const [videoLoaded, setVideoLoaded] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top+=30",
            end: "+=100%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(
          textRef.current,
          {
            opacity: 0,
            y: -100,
            ease: "power1.inOut",
          },
          0,
        );

        tl.fromTo(
          videoWrapper.current,
          {
            width: "40%",
            height: "30%",
            y: "35vh",
            borderRadius: "24px",
          },
          {
            width: "100%",
            height: "100%",
            y: "0vh",
            borderRadius: "0px",
            ease: "none",
          },
          0,
        );
      });

      mm.add("(max-width: 799px)", () => {
        gsap.from(videoWrapper.current, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: videoWrapper.current,
            start: "top 85%",   // animation starts when video enters screen
            toggleActions: "play none none none",
          },
        });

        gsap.from(textRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: container },
  );


  return (
    <section
      ref={container}
      className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-bg-white flex flex-col items-center justify-center"
    >
      <div
        ref={textRef}
        className="absolute top-[5%] md:top-[8%] z-10 w-full text-center pointer-events-none"
      >
        <h2 className="text-[12vw] md:text-[15vw] leading-none font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-500/40 to-brand-500/10 uppercase">
          Discover Us
        </h2>
      </div>

      <div
        ref={videoWrapper}
        className="relative z-20 overflow-hidden shadow-2xl flex items-center justify-center 
        w-[92%] max-w-[600px] aspect-video 
        md:w-auto md:max-w-none md:aspect-auto"
      >
        {/* <img
          src="/Home/Section2/2nd section pic.webp"
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
        /> */}

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => {
            setVideoLoaded(true);
            videoRef.current?.play().catch(() => {});
          }}
          className="w-full h-full object-cover rounded-xl md:rounded-none"
        >
          <source src="/Home/Section2/Activity.webm" type="video/webm" />
          {/* <source src="/Activity.mp4" type="video/mp4" /> */}
        </video>
      </div>
    </section>
  );
};

export default Showreel;
