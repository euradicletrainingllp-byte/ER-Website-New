import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = () => {
  const rawVideos = Array.from(
    { length: 7 },
    (_, i) => `/Testimonial/${i + 1}.mp4`,
  );
  const videos = [...rawVideos, ...rawVideos, ...rawVideos];

  const trackRef = useRef(null);
  const videoRefs = useRef([]);
  const autoRef = useRef(null);
  const animating = useRef(false);

  const [cardWidth, setCardWidth] = useState(320);
  const gap = 20;
  const baseIndex = rawVideos.length;

  const [index, setIndex] = useState(baseIndex);
  const [muted, setMuted] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [pausedVideos, setPausedVideos] = useState(new Set());
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
  const v = videoRefs.current[index];
  if (v) {
    v.currentTime = 0;
  }
}, [index]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth < 768 ? window.innerWidth * 0.8 : 320;
      setCardWidth(width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
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
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => {
        const progress = Math.abs(
          gsap.getProperty(trackRef.current, "x") / totalWidth,
        );
        setIndex(Math.round(progress));
      },
      onComplete: () => {
        let finalIndex = next;
        if (next >= rawVideos.length * 2) finalIndex -= rawVideos.length;
        if (next < rawVideos.length) finalIndex += rawVideos.length;

        if (finalIndex !== next) {
          gsap.set(trackRef.current, { x: -(finalIndex * totalWidth) });
          setIndex(finalIndex);
        }
        animating.current = false;
      },
    });
  };

  useEffect(() => {
    if (hovering) return;
    autoRef.current = setInterval(() => slide(1), 4000);
    return () => clearInterval(autoRef.current);
  }, [hovering, index, cardWidth]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
  if (!pausedVideos.has(i) && v.paused) {
    v.play().catch(() => {});
  }
} else {
        v.pause();
      }
    });
  }, [index, pausedVideos]);

  const togglePlay = (e, i) => {
    e.stopPropagation();
    const v = videoRefs.current[i];
    if (!v) return;
    const newPaused = new Set(pausedVideos);
    if (v.paused) {
      v.play().catch(() => {});
      newPaused.delete(i);
    } else {
      v.pause();
      newPaused.add(i);
    }
    setPausedVideos(newPaused);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted(!muted);
    videoRefs.current.forEach((v) => {
      if (v) v.muted = !muted;
    });
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) slide(1);
    if (touchStart - touchEnd < -50) slide(-1);
    setTouchStart(null);
  };

  return (
    <section className="relative py-12 md:py-24 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-h1 leading-tight">
          <span className="text-[var(--color-primary-navy)]">
            What Our Learners <br />
          </span>
          <span className="text-[var(--color-primary-mauve)]">Are Saying</span>
        </h2>
      </div>

      <div className="relative w-full">
        <button
          onClick={() => slide(-1)}
          className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/80 backdrop-blur shadow-xl items-center justify-center hover:bg-white transition-all border border-gray-100"
        >
          <FiChevronLeft size={28} className="text-[#001f3f]" />
        </button>

        <button
          onClick={() => slide(1)}
          className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/80 backdrop-blur shadow-xl items-center justify-center hover:bg-white transition-all border border-gray-100"
        >
          <FiChevronRight size={28} className="text-[#001f3f]" />
        </button>

        <div
          className="cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex items-center"
            style={{
              gap: `${gap}px`,
              paddingLeft: `calc(50% - ${cardWidth / 2}px)`,
            }}
          >
            {videos.map((src, i) => {
              const isActive = i === index;
              const isPlaying = !pausedVideos.has(i);

              return (
                <div
                  key={i}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="relative shrink-0 transition-all duration-500 ease-out"
                  style={{
                    width: `${cardWidth}px`,
                    aspectRatio: "9/16",
                    transform: isActive ? "scale(1.02)" : "scale(0.9)",
                    opacity: isActive ? 1 : 0.6,
                    filter: isActive ? "blur(0px)" : "blur(1px)",
                    zIndex: isActive ? 20 : 1,
                  }}
                >
                  <div className="w-full h-full rounded-[32px] overflow-hidden shadow-xl bg-black ring-1 ring-black/5">
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={src}
                      muted={muted}
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {isActive && (
                    <div className="absolute bottom-6 left-0 right-0 px-8 flex justify-between items-center z-30">
                      <button
                        onClick={(e) => togglePlay(e, i)}
                        className="w-12 h-12 rounded-full backdrop-blur-md bg-black/40 border border-white/30 text-white flex items-center justify-center hover:bg-black/60 transition-all"
                      >
                        {isPlaying ? (
                          <FaPause size={16} />
                        ) : (
                          <FaPlay size={16} />
                        )}
                      </button>

                      <button
                        onClick={(e) => toggleMute(e)}
                        className="w-12 h-12 rounded-full backdrop-blur-md bg-black/40 border border-white/30 text-white flex items-center justify-center hover:bg-black/60 transition-all"
                      >
                        {muted ? (
                          <FaVolumeMute size={18} />
                        ) : (
                          <FaVolumeUp size={18} />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
