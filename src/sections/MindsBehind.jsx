import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function MindsBehind({ items }) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      cardsRef.current.forEach((card) => {
        const border = card.querySelector(".card-border");

        gsap.set(border, {
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });

        tl.to(border, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
        }).fromTo(
          card,
          { scale: 0.96 },
          {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-white pb-12 sm:pb-16 md:pb-20 lg:pb-24 2xl:pb-28"
    >
      <div className="mx-auto w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 2xl:px-12">
        <div className="text-center">
          <h2 className="text-h1 2xl:text-[64px] font-bold text-primary-navy leading-tight">
            OUR CORE <span className="text-primary-mauve">VERTICALS</span>
          </h2>

          <p className="italic text-body-sm xl:text-base 2xl:text-lg mt-6 max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto leading-relaxed">
            We combine deep expertise, practical experience, and a
            results-driven approach to deliver transformative solutions for our
            clients. Our versatile pool of consultants brings together diverse
            industry knowledge, specialized skills, and a consultative mindset,
            enabling us to address complex business challenges with precision
            and creativity. By leveraging this collective strength, we craft
            strategies that are actionable, impactful, and tailored to each
            organization’s unique context, ensuring sustainable growth and
            measurable outcomes.
          </p>
        </div>

        <div className="mt-12 xl:mt-14 2xl:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 2xl:gap-10 justify-items-center">
          {items.slice(0, 3).map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative rounded-2xl bg-white shadow-lg w-full max-w-md h-full"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="99"
                  height="99"
                  rx="3"
                  ry="3"
                  fill="none"
                  stroke="#9b7ba1"
                  strokeWidth="0.8"
                  className="card-border"
                />
              </svg>

              <div className="relative z-10 overflow-hidden rounded-2xl p-3 sm:p-4 flex flex-col h-full">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-40 sm:h-44 md:h-48 xl:h-56 2xl:h-64 object-cover object-top rounded-xl"
                />

                <div className="mt-4 flex-1 flex flex-col">
                  <h3 className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold text-primary-mauve">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm xl:text-base 2xl:text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {items[3] && (
            <div
              ref={(el) => (cardsRef.current[3] = el)}
              className="relative rounded-2xl bg-white shadow-lg w-full max-w-md h-full"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="99"
                  height="99"
                  rx="3"
                  ry="3"
                  fill="none"
                  stroke="#9b7ba1"
                  strokeWidth="0.8"
                  className="card-border"
                />
              </svg>

              <div className="relative z-10 overflow-hidden rounded-2xl p-3 sm:p-4 flex flex-col h-full">
                <img
                  src={items[3].img}
                  alt=""
                  className="w-full h-40 sm:h-44 md:h-48 xl:h-56 2xl:h-64 object-cover object-top rounded-xl"
                />

                <div className="mt-4 flex-1 flex flex-col">
                  <h3 className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold text-primary-mauve">
                    {items[3].title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm xl:text-base 2xl:text-lg leading-relaxed">
                    {items[3].text}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="hidden lg:flex items-center justify-center">
            <img
              src="/Home/logo.gif"
              alt="logo"
              className="h-92 md:h-90 xl:h-[420px] 2xl:h-[480px] object-contain"
            />
          </div>

          {items[4] && (
            <div
              ref={(el) => (cardsRef.current[4] = el)}
              className="relative rounded-2xl bg-white shadow-lg w-full max-w-md h-full sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:max-w-md lg:justify-self-center"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="99"
                  height="99"
                  rx="3"
                  ry="3"
                  fill="none"
                  stroke="#9b7ba1"
                  strokeWidth="0.8"
                  className="card-border"
                />
              </svg>

              <div className="relative z-10 overflow-hidden rounded-2xl p-3 sm:p-4 flex flex-col h-full">
                <img
                  src={items[4].img}
                  alt=""
                  className="w-full h-40 sm:h-44 md:h-48 xl:h-56 2xl:h-64 object-cover object-top rounded-xl"
                />

                <div className="mt-4 flex-1 flex flex-col">
                  <h3 className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold text-primary-mauve">
                    {items[4].title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm xl:text-base 2xl:text-lg leading-relaxed">
                    {items[4].text}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}