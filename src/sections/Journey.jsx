import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".jr-text", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".jr-card", {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".jr-cards",
          start: "top 80%",
        },
      });

      gsap.from(".jr-location", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".jr-location-wrap",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-bg-white)]"
    >
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-8 pb-12 xl:pb-16 pt-24 xl:pt-28 2xl:pt-32">
        <h1 className="text-h1 xl:text-[48px] 2xl:text-[56px] jr-text text-[var(--color-brand-600)] mb-4 text-center">
          Begin Your
        </h1>

        <h1 className="text-h1 xl:text-[48px] 2xl:text-[56px] jr-text text-[var(--color-primary-purple)] mb-16 xl:mb-20 text-center">
          Leadership Journey
        </h1>

        <div className="jr-cards grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10 2xl:gap-12">
          <div className="jr-card flex flex-col items-center justify-center rounded-2xl border border-2 border-[var(--color-bg-muted)] bg-[var(--color-bg-white)] p-8 xl:p-10 2xl:p-12 text-center">
            <h3 className="text-h6 xl:text-lg mb-4">Connect With Us</h3>
            <p className="text-body-sm xl:text-base">+91 40310 03306</p>
            <p className="text-body-sm xl:text-base">+91 96611 88313</p>
            <p className="text-body-sm xl:text-base">+1 (713) 429-3753</p>
          </div>

          <div className="jr-card flex flex-col items-center justify-center rounded-2xl border border-2 border-[var(--color-bg-muted)] bg-[var(--color-bg-white)] p-8 xl:p-10 2xl:p-12 text-center">
            <h3 className="text-h6 xl:text-lg mb-4">Email us at</h3>
            <p className="text-body-sm xl:text-base">info@euradicle.com</p>
          </div>

          <div className="jr-card flex flex-col items-center justify-start rounded-2xl border border-2 border-[var(--color-bg-muted)] bg-[var(--color-bg-white)] p-8 xl:p-10 2xl:p-12 text-center">
            <h3 className="text-h6 xl:text-lg mb-6">Find us</h3>

            <div className="jr-location-wrap flex flex-col items-center gap-6 xl:gap-8 w-full">
              <div className="jr-location">
                <p className="text-body-sm xl:text-base">
                  2nd floor Building no: 8-2-120/86/5/B
                  <br />
                  Road No 3, Banjara Hills
                  <br />
                  Hyderabad, Telangana - 500034
                </p>
              </div>

              <div className="w-full h-px bg-[var(--color-bg-muted)]"></div>

              <div className="jr-location">
                <p className="text-body-sm xl:text-base">
                  EuRadicle Learning Inc
                  <br />
                  10301 Northwest Freeway
                  <br />
                  Suite 314, Houston Texas - 77092
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}