import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function JourneySection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".journey-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
      }).from(
        ".journey-cta",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <video
        src="/Home/FooterBackground.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h2 className="journey-heading text-h1 text-bg-white tracking-tight leading-tight">
          Start your journey
          <br />
          <span className="text-brand-500">toward lasting growth.</span>
        </h2>

        <div className="journey-cta mt-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-bg-white text-primary-navy text-subheading-sm font-semibold hover:bg-brand-500 hover:text-bg-white transition-all duration-300 shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
