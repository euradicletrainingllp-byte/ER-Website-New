import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Catalyst } from "../data/home";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

export default function Story1() {
  const navigate = useNavigate();
  const parasRef = useRef([]);
  const outcomesRef = useRef([]);
  const imagesRef = useRef([]);
  const imagesWrapperRef = useRef(null);
  const taglineRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const wordByWord = (el, text) => {
      const words = text.split(" ");
      el.innerHTML = "";
      words.forEach((word) => {
        const span = document.createElement("span");
        span.textContent = word + " ";
        span.style.opacity = 0;
        span.style.display = "inline-block";
        span.style.transform = "translateY(20px)";
        span.style.marginRight = "8px";
        el.appendChild(span);
      });

      gsap.to(el.children, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    };

    wordByWord(taglineRef.current, Catalyst.tagline);

    parasRef.current.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: { trigger: el, start: "top 85%" },
          duration: 0.8,
          delay: idx * 0.15,
          ease: "power3.out",
        },
      );
    });

    outcomesRef.current.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: { trigger: el, start: "top 85%" },
          duration: 0.8,
          delay: idx * 0.15,
          ease: "power3.out",
        },
      );
    });

    const spread = () => {
      gsap.to(imagesRef.current[0], {
        x: -120,
        y: -90,
        rotate: -12,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(imagesRef.current[1], {
        x: 120,
        y: -90,
        rotate: 12,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(imagesRef.current[2], {
        x: 0,
        y: 120,
        rotate: 0,
        scale: 1.05,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const reset = () => {
      imagesRef.current.forEach((img, idx) =>
        gsap.to(img, {
          x: idx === 0 ? -25 : idx === 1 ? 25 : 0,
          y: idx === 2 ? 18 : 0,
          rotate: idx === 0 ? -6 : idx === 1 ? 6 : 0,
          scale: 0.96,
          duration: 0.5,
          ease: "power3.out",
        }),
      );
    };

    imagesRef.current.forEach((img, idx) => {
      gsap.set(img, {
        x: idx === 0 ? -25 : idx === 1 ? 25 : 0,
        y: idx === 2 ? 18 : 0,
        rotate: idx === 0 ? -6 : idx === 1 ? 6 : 0,
        scale: 0.96,
      });
    });

    ScrollTrigger.create({
      trigger: imagesWrapperRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        spread();
        gsap.delayedCall(1.2, reset);
      },
    });

    imagesRef.current.forEach((el) => {
      el.addEventListener("mouseenter", spread);
      el.addEventListener("mouseleave", reset);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://backend.euradicle.com/wp-json/custom/v1/conversation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.name,
            meta: {
              full_name: formData.name,
              email: formData.email,
              phone_number: formData.number,
            },
          }),
        },
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", message: "Message sent successfully." });

        setFormData({
          name: "",
          email: "",
          number: "",
        });

        setTimeout(() => {
          setIsModalOpen(false);
          setStatus(null);
        }, 1500);
      } else {
        setStatus({
          type: "error",
          message: data.message || "Submission failed",
        });
      }
    } catch (err) {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    }

    setLoading(false);
  };

  return (
    <section className="w-full">
      <div
        className="relative w-full h-[400px] md:h-[500px] mt-[84px] bg-center bg-cover flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${Catalyst.bannerUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4 text-center">
          <h1
            ref={taglineRef}
            className="text-2xl md:text-4xl text-white font-heading max-w-3xl"
          ></h1>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 px-6 py-2 border border-primary-mauve text-primary-mauve hover:bg-mauve hover:text-black transition-all duration-300 rounded-md"
        >
          ← Back
        </button>

        <div className="flex flex-col md:flex-row gap-12 md:gap-6">
          <div
            ref={imagesWrapperRef}
            className="md:w-[40%] flex items-center justify-center relative min-h-[350px]"
          >
            {Catalyst.hoveerImages.map((img, idx) => (
              <img
                key={idx}
                ref={(el) => (imagesRef.current[idx] = el)}
                src={img}
                className={`absolute w-[140px] h-[200px] md:w-[180px] md:h-[280px] rounded-2xl border border-gray-200 shadow-xl cursor-pointer transition-transform duration-100 hover:scale-105 object-cover ${
                  idx === 2 ? "z-20" : "z-10"
                }`}
              />
            ))}
          </div>

          <div className="md:w-[60%] flex flex-col gap-4">
            <h2 className="text-h4 font-heading text-primary-mauve">
              Introduction
            </h2>

            {Catalyst.paras.map((para, idx) => (
              <p
                key={idx}
                ref={(el) => (parasRef.current[idx] = el)}
                className="text-body text-primary-navy"
              >
                {para}
              </p>
            ))}

            <h2 className="mt-6 text-h4 font-heading text-primary-mauve">
              Outcomes
            </h2>

            <ul className="flex flex-col gap-2 list-disc pl-6">
              {Catalyst.outcomes.map((outcome, idx) => (
                <li
                  key={idx}
                  ref={(el) => (outcomesRef.current[idx] = el)}
                  className="text-body text-primary-navy"
                >
                  {outcome}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-body text-primary-navy">{Catalyst.outro}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center text-center gap-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-primary-mauve text-white rounded-md hover:bg-[var(--color-primary-mauve)]/80 transition-all duration-300"
          >
            Start A Conversation
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>

            <p className="text-primary-navy text-h4">
              Start A <span className="text-primary-mauve">Conversation</span>
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
              {status && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    status.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-mauve"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-mauve"
              />

              <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-mauve"
              />

              <p className="text-center text-black/30 italic">
                Our consultant will get in touch with you shortly
              </p>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-primary-mauve text-white py-2 rounded-md hover:bg-[var(--color-primary-mauve)]/80 transition-all duration-300 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
