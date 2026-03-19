import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const NotFound = () => {
  const orbsRef = useRef([]);

  useEffect(() => {
    orbsRef.current.forEach((orb, i) => {
      gsap.to(orb, {
        x: () => gsap.utils.random(-120, 120),
        y: () => gsap.utils.random(-120, 120),
        scale: () => gsap.utils.random(0.9, 1.4),
        duration: gsap.utils.random(6, 12),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.15
      });
    });

    gsap.fromTo(
      ".glitch",
      { backgroundPosition: "0% 50%" },
      {
        backgroundPosition: "200% 50%",
        duration: 6,
        repeat: -1,
        ease: "linear"
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[var(--color-bg-dark)] text-white">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            ref={(el) => (orbsRef.current[i] = el)}
            className="particle-orb"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-h1 mb-6 glitch">404</h1>
        <p className="text-body-lg mb-12 text-white/80">
          This page no longer exists in this dimension.
        </p>

        <Link to="/" className="cta-wrapper">
          <div className="cta-button cta-wide">
            <span className="bg-circle" />
            <span className="text">Return Home</span>
            <span className="arrow-wrapper">
              <span className="arrow-icon">→</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
