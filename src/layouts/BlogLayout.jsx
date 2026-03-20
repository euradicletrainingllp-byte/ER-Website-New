import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";

gsap.registerPlugin(useGSAP);

function BlogLayout({
  children,
  title,
  subtitle,
  date,
  category,
  image,
  authorName,
  authorRole,
  authorImage,
}) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".blog-back", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".blog-meta",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".blog-title",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        // .from(
        //   ".blog-subtitle",
        //   {
        //     y: 30,
        //     opacity: 0,
        //     duration: 0.7,
        //   },
        //   "-=0.5"
        // )
        .from(
          heroRef.current,
          {
            scale: 1.05,
            opacity: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          ".blog-content > *",
          {
            y: 40,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".blog-author",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const img = heroRef.current;
      img.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.08, duration: 0.6, ease: "power3.out" });
      });
      img.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.6, ease: "power3.out" });
      });
    },
    { scope: containerRef }
  );

  return (
    <section>
      <section
        ref={containerRef}
        className="relative w-full min-h-screen bg-[var(--color-bg-white)] pt-[100px] sm:pt-[110px] md:pt-[120px] pb-44 md:pb-44 px-4 sm:px-6"
      >
        <div className="absolute top-[80px] left-0 w-full h-[50vh] sm:h-[55vh] md:h-[60vh] overflow-hidden">
          <img
            src={image}
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative top-40 md:top-35 max-w-5xl mx-auto">
          <div className="bg-white rounded-[28px] sm:rounded-[32px] md:rounded-[40px] px-5 sm:px-8 md:px-16 py-6 sm:py-8 shadow-xl relative z-10 -mt-[12vh] sm:-mt-[16vh] md:-mt-[18vh]">
            <Link
              to="/"
              state={{ scrollTo: "blogs" }}
              className="blog-back inline-flex items-center text-sm text-[var(--color-primary-mauve)] mb-2"
            >
              ← Back
            </Link>

            <div className="blog-meta flex items-center gap-4 mb-2"></div>

            <h1 className="blog-title text-2xl sm:text-3xl md:text-5xl font-semibold text-[var(--color-primary-navy)] leading-tight">
              {title}
            </h1>

            {/* <p className="blog-subtitle my-4 text-lg text-[var(--color-primary-navy)]/70 max-w-3xl italic">
              {subtitle}
            </p> */}

            <div className="overflow-hidden rounded-[30px]">
              <img
                ref={heroRef}
                src={image}
                alt="Blog"
                className="w-full h-[240px] sm:h-[320px] md:h-[420px] object-cover transition-transform duration-500"
              />
            </div>

            <div
              ref={contentRef}
              className="blog-content mt-12 space-y-8 text-gray-700 text-lg leading-relaxed text-left sm:text-justify"
            >
              {children}
            </div>

            <div className="blog-author mt-16 flex justify-end gap-4 border-t pt-8">
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-primary-navy)]">
                  {authorName}
                </h4>
                <p className="text-sm text-gray-500">{authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default BlogLayout;