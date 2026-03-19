import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const LabelCard = ({ image, title, link = "#" }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    const line = cardRef.current.querySelector(".scan-line");
    const glow = cardRef.current.querySelector(".line-glow");
    const content = cardRef.current.querySelector(".stat-content");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      [line, glow],
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut",
      }
    )
      .fromTo(
        content,
        { clipPath: "inset(0 100% 0 0%)" },
        { 
          clipPath: "inset(0 0% 0 0%)", 
          duration: 1.2, 
          ease: "power2.inOut" 
        },
        "<"
      )
      .to(glow, { opacity: 0.3, duration: 0.5 });
  }, { scope: cardRef });

  return (
    <div 
      ref={cardRef}
      className="group relative flex flex-col w-full h-full min-h-[420px] bg-bg-white rounded-2xl overflow-hidden border border-brand-400/20 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary-navy/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="relative mb-6">
          <div className="scan-line absolute left-0 -bottom-1 h-0.5 w-full bg-brand-500 z-20 origin-left" />
          <div className="line-glow absolute left-0 -bottom-1 h-1 w-full bg-brand-500 blur-sm z-10 origin-left" />
          
          <div className="stat-content">
            <h3 className="text-h4 text-primary-navy uppercase tracking-tight">
              {title}
            </h3>
          </div>
        </div>

        <div className="mt-auto">
          <a 
            href={link}
            className="inline-flex items-center gap-2 text-subheading-sm text-brand-600 font-bold group/btn"
          >
            <span className="relative overflow-hidden">
              KNOW MORE
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 translate-x-[-101%] group-hover/btn:translate-x-0 transition-transform duration-300" />
            </span>
            <span className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LabelCard;