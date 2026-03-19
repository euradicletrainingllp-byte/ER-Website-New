import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import data from "../data/home";

gsap.registerPlugin(useGSAP);

function BlogsSection() {
  const sectionRef = useRef(null);

  const Blogs = [
    {
      title:
        "Why Power Skills Are The New Currency Of Leadership In The Age Of AI",
      imageUrl: "Home/blog1.jpeg",
      path: "power-skills",
    },
    {
      title:
        "From Training Programs To Capability Building: What Organisations Must Rethink",
      imageUrl: "Home/compressed-blog2.png",
      path: "chatai-at",
    },
    {
      title:
        "Psychological Safety, Trust And Performance: The Capability Connection",
      imageUrl: "Home/blog3.jpeg",
      path: "ai-ethics",
    },
  ];

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".blog-card");

      cards.forEach((card) => {
        const img = card.querySelector(".blog-image");

        card.addEventListener("mouseenter", () => {
          gsap.to(img, {
            scale: 1.08,
            duration: 0.6,
            ease: "power3.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(img, {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });
        });
      });
    },
    { scope: sectionRef },
  );

  const slugify = (title) =>
    title
      .toLowerCase()
      .replace(/ai/g, "ai")
      .replace(/[^a-z0-9\s]/g, "")
      .trim()
      .split(" ")
      .slice(0, 2)
      .join("-");

  return (
    <section
    id="blogs"
      ref={sectionRef}
      className="w-full py-20 px-6"
      style={{
        background: "linear-gradient(to bottom left, #E1E8FF, #F9DCED)",
      }}
    >
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
        <h2 className="text-h1 text-center mb-14 normal-case">
          <span className="text-[var(--color-primary-navy)]">INDUSTRY </span>
          <span className="text-[var(--color-primary-mauve)]">INSIGHTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 2xl:gap-12">
          {Blogs.map((blog) => (
            <Link
              key={blog.title}
              to={`/blogs/${blog.path}`}
              className="blog-card bg-[var(--color-bg-white)] rounded-2xl p-3 block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={`/${blog.imageUrl}`}
                  alt={blog.title}
                  className="blog-image w-full h-50 xl:h-56 2xl:h-64 object-cover"
                />
                {/* <span className="absolute top-3 left-3 bg-[var(--color-bg-white)] text-body-xs px-3 py-1 rounded-full">
                  News
                </span> */}
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-body xl:text-lg 2xl:text-xl text-[var(--color-primary-navy)]">
                  {blog.title}
                </p>
                {/* <span className="text-body-xs bg-[var(--color-bg-muted)] px-3 py-1 rounded-full">
                  {blog.date}
                </span> */}
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="flex justify-center mt-12">
          <a
            href="/blogs"
            className="px-6 py-3 rounded-full text-body-sm text-white"
            style={{
              background: "var(--background-image-gradient-main)",
            }}
          >
            See All
          </a>
        </div> */}
      </div>
    </section>
  );
}

export default BlogsSection;
