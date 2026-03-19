import { useRef, useState, useMemo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser";
import { capabilities } from "../data/capabilities";

function CapabilityLayout({
  title,
  subtitle,
  image,
  position="center",
  intro,
  cards = [],
  children,
}) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const map = {
    left: "object-left",
    right: "object-right",
    center: "object-center",
    bottom: "object-bottom/20",
    top: "object-top",
    top_20: "top/20"
  }

  const formatSlug = (str) =>
    str
      ?.toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const selectedCapability = useMemo(() => {
    if (!slug) return null;
    return capabilities.find((cap) => formatSlug(cap.title) === slug);
  }, [slug]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    capability: "",
    subCapability: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      capability: title || "",
      subCapability: "",
    }));
  }, [title]);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".cap-banner", {
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      if (titleRef.current && title) {
        const text = title;
        titleRef.current.textContent = "";
        tl.to(
          {},
          {
            duration: text.length * 0.04,
            ease: "none",
            onUpdate: function () {
              const progress = Math.floor(this.progress() * text.length);
              titleRef.current.textContent = text.slice(0, progress);
            },
          },
          "-=0.4"
        );
      }

      if (subtitleRef.current && subtitle) {
        const sub = subtitle;
        subtitleRef.current.textContent = "";
        tl.to(
          {},
          {
            duration: sub.length * 0.02,
            ease: "none",
            onUpdate: function () {
              const progress = Math.floor(this.progress() * sub.length);
              subtitleRef.current.textContent = sub.slice(0, progress);
            },
          },
          "-=0.6"
        );
      }

      gsap.from(".cap-content > *", {
        opacity: 0,
        y: 32,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.4,
      });
    },
    { scope: containerRef, dependencies: [title, subtitle] }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://backend.euradicle.com/wp-json/custom/v1/capability",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.fullName,
            meta: {
              full_name: formData.fullName,
              email: formData.email,
              phone_number: formData.phone,
              capability: formData.capability,
              sub_capability: formData.subCapability,
            },
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", message: "Message sent successfully." });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          capability: title || "",
          subCapability: "",
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

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section ref={containerRef} className="bg-[var(--color-bg-white)]">
      <div className="cap-banner relative w-full h-[70vh] overflow-hidden">
        {image && (
          <img
            src={image}
            alt={title}
            className={`absolute inset-0 w-full h-full object-cover ${map[position]}`}
          />
        )}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-10">
          <h1 ref={titleRef} className="text-h1 text-white mb-6 max-w-4xl">
            {selectedCapability?.title || title}
          </h1>
          <p ref={subtitleRef} className="text-body-lg text-white max-w-3xl">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-4">
        <button
          onClick={() => navigate("/capabilities")}
          className="inline-flex items-center gap-2 text-body-sm text-[var(--color-primary-navy)] border border-[var(--color-primary-navy)] px-5 py-2 rounded-full transition-all duration-300 hover:bg-[var(--color-primary-navy)] hover:text-white"
        >
          ← Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto py-16">
        <div className="cap-content text-body text-[var(--color-primary-navy)]">
          {intro && (
            <p className="text-body-lg leading-relaxed max-w-6xl mx-auto text-center mb-28 px-2 ">
              {intro}
            </p>
          )}

          <div className="flex justify-center items-start mb-28">
            <div className="flex flex-wrap justify-center items-start gap-6 max-w-7xl">
              {cards.map((card, index) => (
                <div
                  key={index}
                  onClick={() => toggleCard(index)}
                  className="group w-64 rounded-4xl overflow-hidden bg-gradient-to-b from-[#2D3047] via-[#8c668b] to-[#F2B2D7] transition-all duration-500 hover:shadow-xl cursor-pointer"
                >
                  <div className="p-4 h-[120px] flex items-center justify-center">
                    <h3 className="text-subheading text-white text-center">
                      {card.heading}
                    </h3>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeCard === index
                        ? "max-h-[400px]"
                        : "max-h-0 group-hover:max-h-[400px]"
                    }`}
                  >
                    <div className="px-6 pb-6 text-sm leading-relaxed text-white text-center">
                      {card.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {children}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[var(--color-primary-purple)] text-white text-subheading-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Start A Conversation
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="bg-white rounded-2xl w-full max-w-4xl p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--color-primary-navy)] text-xl"
            >
              ×
            </button>
            <h3 className="text-subheading-lg text-[var(--color-primary-mauve)] mb-6">
              <span className="text-primary-navy">Start a </span>Conversation
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-purple)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-purple)]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-purple)]"
              />
              <input
                type="text"
                name="capability"
                value={formData.capability}
                readOnly
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600"
              />
              <select
                name="subCapability"
                value={formData.subCapability}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-purple)]"
              >
                <option value="">Select Sub Capability</option>
                {cards.map((card, index) => (
                  <option key={index} value={card.heading}>
                    {card.heading}
                  </option>
                ))}
                <option value="Others">Others</option>
              </select>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--color-primary-purple)] text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
              <div className="mt-2 border-t border-gray-100 pt-6 flex flex-wrap items-center gap-4">
                <img
                  src="/Approach/SK.png"
                  alt="Mr. Shahnawaz Khan"
                  className="w-16 h-16 object-cover rounded-full flex-shrink-0 border-2 border-[var(--color-primary-mauve)]/20 shadow-sm"
                />
                <div className="min-w-0">
                  <p className="text-md font-bold text-[var(--color-primary-navy)] leading-snug">
                    Mr. Shahnawaz Khan
                  </p>
                  <p className="text-xs font-medium text-[var(--color-primary-mauve)] uppercase tracking-wider">
                    Founder & Managing Partner
                  </p>
                  <div className="flex flex-col sm:flex-row sm:gap-4 mt-2">
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <span>✉</span> shahnawaz.khan@euradicle.com
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <span>📞</span> India: +91 966 118 8313
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default CapabilityLayout;