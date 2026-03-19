import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ResourcesSection({ openModal }) {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(blocksRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      });
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full max-w-[95%] min-[600px]:max-w-2xl min-[768px]:max-w-4xl min-[992px]:max-w-5xl min-[1200px]:max-w-6xl mx-auto py-12 px-5 min-[600px]:py-20 min-[768px]:py-20 min-[992px]:py-24 min-[1200px]:py-28 max-[992px]:mt-10"
      >
        <h1 className="text-h1 text-center mb-10 text-[clamp(28px,5vw,56px)] leading-tight">
          Download <span className="text-primary-mauve">Resources</span>
        </h1>

        <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-8">
          <div
            ref={(el) => (blocksRef.current[0] = el)}
            className="bg-bg-muted rounded-2xl p-8 min-[768px]:p-10 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <h2 className="text-h3 mb-4">Brochure</h2>
              <p className="text-body-lg text-primary-navy mb-6 leading-relaxed">
                Get an overview of our consulting solutions,
                leadership programs, and transformation initiatives.
                Download the brochure to learn more.
              </p>
            </div>
            <button
              onClick={() => openModal("brochure")}
              className="inline-block text-center px-6 py-3 rounded-lg bg-primary-mauve text-white font-semibold uppercase tracking-wide hover:opacity-90 transition"
            >
              Download Brochure
            </button>
          </div>

          <div
            ref={(el) => (blocksRef.current[1] = el)}
            className="bg-bg-muted rounded-2xl p-8 min-[768px]:p-10 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <h2 className="text-h3 mb-4">E-Certificates</h2>
              <p className="text-body-lg text-primary-navy mb-6 leading-relaxed">
                Access and download your certificate issued upon successful completion of our programs.
              </p>
            </div>
            <button
              onClick={() => openModal("certificate")}
              className="inline-block text-center px-6 py-3 rounded-lg bg-primary-purple text-white font-semibold uppercase tracking-wide hover:opacity-90 transition"
            >
              Download Certificate
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
