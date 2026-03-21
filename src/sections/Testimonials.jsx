import React from "react";
import gsap from "gsap";
import { Testimonials } from "../data/home";

const TestimonialCard = ({ data }) => {
  const isParticipantVoice = !data.by && !data.designation;

  return (
    <div className="testimonial-card snap-x snap-mandatory relative flex-shrink-0 w-full max-w-[480px] min-[800px]:max-w-none bg-bg-white rounded-2xl p-5 sm:p-6 border border-brand-400/20 shadow-[0_10px_30px_-15px_rgba(45,48,71,0.1)] min-h-[460px] flex flex-col gap-3">
      {/* {isParticipantVoice && (
        <img
          src="/ParticipantsVoices.png"
          alt="Participant Voice Logo"
          className="absolute top-4 right-4 w-8 h-8 object-contain opacity-80"
        />
      )} */}

      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-brand-500 text-base">
            ★
          </span>
        ))}
      </div>

      <p className="text-primary-navy/70 italic leading-relaxed text-xs sm:text-base overflow-y-auto pr-1">
        {data.testimonial}
      </p>

      <div className="mt-auto pt-4 border-t border-bg-muted flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-primary-navy text-xs sm:text-sm font-medium">
            {isParticipantVoice ? "Participant's Voice" : data.by}
          </span>

          {!isParticipantVoice && (
            <span className="text-primary-navy text-xs sm:text-sm font-medium">
              {data.designation}
            </span>
          )}

          <span className="text-brand-600 font-semibold tracking-wider text-[11px] sm:text-xs">
            {data.org}
          </span>
        </div>

        {data.logoUrl && (
          <img
            src={data.logoUrl}
            alt={data.org}
            className={`h-18 sm:h-20 object-contain flex-shrink-0 ${
              data.logoUrl === "/logos/peepalco.svg" ? "w-16 sm:w-20" : "w-auto"
            }`}
          />
        )}
      </div>
    </div>
  );
};

const MarqueeRow = ({ items }) => {
  const trackRef = React.useRef(null);
  const animating = React.useRef(false);
  const autoRef = React.useRef(null);

  const gap = 24;
  const baseItems = items;
  const loopItems = [...baseItems, ...baseItems, ...baseItems];

  const [cardWidth, setCardWidth] = React.useState(280);
  const baseIndex = baseItems.length;
  const [index, setIndex] = React.useState(baseIndex);
  const [hovering, setHovering] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState(null);

  React.useEffect(() => {
    const handleResize = () => {
      const width =
        window.innerWidth < 640
          ? window.innerWidth * 0.8
          : window.innerWidth * 0.6;
      setCardWidth(width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const totalWidth = cardWidth + gap;
    gsap.set(trackRef.current, {
      x: -(index * totalWidth),
    });
  }, [cardWidth]);

  const slide = (dir) => {
    if (animating.current) return;
    animating.current = true;

    const totalWidth = cardWidth + gap;
    const next = index + dir;

    gsap.to(trackRef.current, {
      x: -(next * totalWidth),
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        const progress = Math.abs(
          gsap.getProperty(trackRef.current, "x") / totalWidth,
        );
        setIndex(Math.round(progress));
      },
      onComplete: () => {
        let finalIndex = next;

        if (next >= baseItems.length * 2) finalIndex -= baseItems.length;
        if (next < baseItems.length) finalIndex += baseItems.length;

        if (finalIndex !== next) {
          gsap.set(trackRef.current, {
            x: -(finalIndex * totalWidth),
          });
          setIndex(finalIndex);
        }

        animating.current = false;
      },
    });
  };

  React.useEffect(() => {
    if (hovering) return;
    autoRef.current = setInterval(() => slide(1), 3500);
    return () => clearInterval(autoRef.current);
  }, [hovering, index, cardWidth]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;

    if (touchStart - touchEnd > 50) slide(1);
    if (touchStart - touchEnd < -50) slide(-1);

    setTouchStart(null);
  };

  return (
    <div className="relative w-full min-[800px]:hidden py-6 overflow-hidden">
      <div
        className="cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex items-center"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          style={{
            gap: `${gap}px`,
            paddingLeft: `calc(50% - ${cardWidth / 2}px)`,
            paddingRight: `calc(50% - ${cardWidth / 2}px)`,
          }}
        >
          {loopItems.map((item, i) => {
            const isActive = i === index;

            return (
              <div
                key={i}
                className="shrink-0 transition-all duration-500"
                style={{
                  width: `${cardWidth}px`,
                  transform: isActive ? "scale(1)" : "scale(0.92)",
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                <TestimonialCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const MarqueeColumn = ({ items, reverse = false }) => (
  <div className="relative h-[560px] md:h-[640px] lg:h-[680px] overflow-hidden hidden min-[800px]:block">
    <div
      className={`flex flex-col gap-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
    >
      {[...items, ...items].map((item, idx) => (
        <TestimonialCard key={idx} data={item} />
      ))}
    </div>
  </div>
);

const TestimonialsSection = () => {
  const midPoint = Math.ceil(Testimonials.length / 2);
  const leftCol = Testimonials.slice(0, midPoint);
  const rightCol = Testimonials.slice(midPoint);

  return (
    <section className="relative w-full py-12 sm:py-16 px-4 bg-bg-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        @keyframes marquee-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .animate-marquee { animation: marquee 80s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 80s linear infinite; }
        .animate-marquee-x { animation: marquee-x 65s linear infinite; }

        .animate-marquee:hover,
        .animate-marquee-reverse:hover,
        .animate-marquee-x:hover,
        .animate-marquee:active,
        .animate-marquee-reverse:active,
        .animate-marquee-x:active {
        animation-play-state: paused;
        }

        .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -15px rgba(45,48,71,0.2);
          z-index: 10;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-bg-white via-bg-white/80 to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-primary-navy text-h1">
            Trusted by Leaders
            <span className="text-primary-mauve block">
              Across Organizations
            </span>
          </h1>
        </div>

        <MarqueeRow items={Testimonials} />

        <div className="hidden min-[800px]:grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-10">
          <MarqueeColumn items={leftCol} />
          <MarqueeColumn items={rightCol} reverse />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
