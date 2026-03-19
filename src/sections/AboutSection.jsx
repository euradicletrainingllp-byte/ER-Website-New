import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const mediaRef = useRef(null);

  const text =
    "EuRadicle is a global talent and capability consulting firm that partners with organizations to build leadership depth, accelerate performance, and enable sustainable transformation. We work at the intersection of strategy, leadership, and human capability, helping enterprises translate intent into execution through consulting-led learning journeys, assessments, and culture-shaping interventions. With consultants and delivery capabilities across the globe, we support organizations across industries in solving complex people and performance challenges. Our work is grounded in real business contexts, driven by data and insight, and designed to create measurable impact by building leaders, teams, and systems that are future-ready, resilient, and aligned to organizational goals.";

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.9,
      });

      tl.from(
        textRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
        },
        "-=0.4"
      );

      tl.from(
        mediaRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 1.2,
        },
        "-=0.6"
      );

      gsap.fromTo(
        textRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full mx-auto pt-20 md:pt-22 xl:pt-24 pb-10 md:pb-14 xl:pb-20 px-4 xl:px-8 2xl:px-12"
    >
      <h1
        ref={titleRef}
        className="text-h1 text-center mb-6 min-[600px]:mb-7 min-[768px]:mb-8 2xl:mb-10 text-[clamp(28px,4vw,64px)] 2xl:text-[72px] leading-tight"
      >
        About <span className="text-primary-mauve">Us</span>
      </h1>

      <p
        ref={textRef}
        className="italic mx-auto mt-2 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl text-md xl:text-lg 2xl:text-xl text-center leading-relaxed text-primary-navy"
      >
        {text}
      </p>

      <div
        ref={mediaRef}
        className="mt-10 min-[768px]:mt-14 2xl:mt-16 w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto aspect-video rounded-2xl xl:rounded-3xl overflow-hidden shadow-xl"
      >
        <img
          src="/Placeholder.jpeg"
          alt="Video Placeholder"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}