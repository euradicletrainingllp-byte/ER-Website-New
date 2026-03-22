import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const container = useRef(null);
  const videoRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const sublineRef = useRef(null);

  const [videoLoaded, setVideoLoaded] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
        .from(badgeRef.current, { y: 20, opacity: 0 }, "-=0.5")
        .from(titleRef.current, { y: 30, opacity: 0 }, "-=0.7")
        .from(sublineRef.current, { y: 20, opacity: 0 }, "-=0.7");
    },
    { scope: container }
  );

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#hero") {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section
      id="hero"
      ref={container}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-bg-dark text-bg-white mt-6 min-[600px]:mt-8 min-[768px]:mt-10 min-[992px]:mt-12"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="Home/Hero section/Hero section pic.webp"
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onCanPlayThrough={() => setVideoLoaded(true)}
          className="h-full w-full object-cover opacity-0"
        >
          <source src="/Home/Hero section/bgVideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-[600px]:px-5 min-[600px]:px-6 min-[768px]:px-8 min-[992px]:px-10 text-center w-full max-w-[95%] min-[600px]:max-w-2xl min-[768px]:max-w-3xl min-[992px]:max-w-5xl mx-auto">
        <div
          ref={badgeRef}
          className="mb-5 min-[600px]:mb-6 min-[768px]:mb-7 min-[992px]:mb-8 flex items-center gap-2 rounded-full border border-bg-white/10 bg-bg-white/10 px-3 py-1 min-[600px]:px-4"
        >
          <span className="text-subheading-xs uppercase tracking-tighter text-[10px] min-[600px]:text-xs min-[768px]:text-sm">
            Truly Transforming
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-h1-spl mb-4 min-[600px]:mb-5 min-[768px]:mb-6 max-w-full min-[600px]:max-w-2xl min-[768px]:max-w-3xl min-[992px]:max-w-4xl text-[clamp(28px,6vw,64px)] leading-[1.5] italic"
        >
          Reimagining Talent <br />
          For A Changing <span className="text-brand-500">World</span>
        </h1>

        <p
          ref={sublineRef}
          className="text-body-lg mb-6 min-[600px]:mb-8 min-[768px]:mb-10 max-w-full min-[600px]:max-w-xl min-[768px]:max-w-2xl text-bg-muted/90 text-[clamp(14px,2.5vw,20px)] leading-relaxed"
        >
          We develop talent that performs with purpose and leads with impact, <br/>
          turning your people into your most enduring edge.
        </p>
      </div>

      <div className="absolute bottom-6 min-[600px]:bottom-7 min-[768px]:bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="h-5 min-[600px]:h-6 w-px bg-bg-white" />
      </div>
    </section>
  );
};

export default Hero;