import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Showreel = () => {
  const container = useRef(null);
  const videoWrapper = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top+=30",
        end: "+=100%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(textRef.current, {
      opacity: 0,
      y: -100,
      ease: "power1.inOut"
    }, 0);

    tl.fromTo(videoWrapper.current, 
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
        ease: "none" 
      }, 
    0);
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full h-screen overflow-hidden bg-bg-white flex flex-col items-center justify-center"
    >
      <div 
        ref={textRef}
        className="absolute top-[8%] z-10 w-full text-center pointer-events-none"
      >
        <h2 className="text-[15vw] leading-none font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-500/40 to-brand-500/10 uppercase">
          Discover Us
        </h2>
      </div>

      <div 
        ref={videoWrapper}
        className="relative z-20 overflow-hidden shadow-2xl flex items-center justify-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-xl"
        >
          <source src="Activity.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Showreel;