import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BeyondBusiness() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);
  const textRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".bb-fade", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.fromTo(
        wordsRef.current,
        { color: "rgba(0,0,0,0.3)" },
        {
          color: "var(--color-primary-navy)",
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const statement =
    "We believe that growth carries a responsibility to give back to the world that enables it.";

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-white)] overflow-hidden"
    >
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 xl:px-8 2xl:px-12 py-20 xl:py-24 2xl:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-16 2xl:gap-20 items-start">
          <div className="bb-fade">
            <h1 className="text-h1 xl:text-[56px] 2xl:text-[64px] text-[var(--color-primary-mauve)] mb-6 xl:mb-8">
              BEYOND BUSINESS
            </h1>

            <h2
              ref={textRef}
              className="text-h3 xl:text-[28px] 2xl:text-[32px] leading-relaxed"
            >
              {statement.split(" ").map((word, i) => (
                <span
                  key={i}
                  ref={(el) => (wordsRef.current[i] = el)}
                  className="inline-block mr-1"
                  style={{ color: "rgba(0,0,0,0.3)" }}
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>

          <div className="bb-fade italic">
            <p className="text-body xl:text-lg 2xl:text-xl mb-4 leading-relaxed text-center">
              At EuRadicle, every project we deliver, carries a commitment beyond
              business impact. As we help organisations build capability and
              leadership, we also invest in life beyond the workplace,
              supporting environmental sustainability through tree plantation
              and extending care to old age homes and orphanages through
              essential contributions. For us, impact is both immediate and
              long-term creating a greener tomorrow while standing with those
              who need support today. It reflects who we are a firm that
              believes progress matters most when it is shared, intentional, and
              rooted in empathy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}