import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser";

export default function Jobs() {
  const sectionRef = useRef(null);
  const fileRef = useRef(null);

  const [selectedRole, setSelectedRole] = useState(null);
  const [isPdfExpanded, setIsPdfExpanded] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const roles = [
    {
      id: "bde-dallas",
      title: "Business Development Executive",
      location: "Dallas, Texas",
      pdfPath: "/JDs/Business Development Executive.pdf",
    },
    {
      id: "ops-hyd",
      title: "Operations - Analyst/Sr. Analyst",
      location: "Hyderabad, India",
      pdfPath: "/JDs/Operations Associate.pdf",
    },
    {
      id: "content-hyd",
      title: "Content & Solutioning - Analyst/Intern",
      location: "Hyderabad, India",
      pdfPath: "/JDs/Content & Solutioning Associate.pdf",
    },
    {
      id: "bde-delhi",
      title: "Business Development Executive",
      location: "Delhi, India",
      pdfPath: "/JDs/Business Development Executive.pdf",
    },
  ];

  useGSAP(
    (context) => {
      const q = context.selector;
      const cards = q(".jobs-card");

      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );

      cards.forEach((card) => {
        const enter = () => {
          gsap.to(card, {
            y: -10,
            scale: 1.03,
            duration: 0.4,
            ease: "power3.out",
          });
        };
        const leave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          });
        };
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        context.add(() => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        });
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedRole(null);
        setIsPdfExpanded(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResumeFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) return;

    setLoading(true);
    setStatus(null);

    try {
      const form = new FormData();
      form.append("file", resumeFile);
      form.append("title", formData.fullName);
      form.append("full_name", formData.fullName);
      form.append("email", formData.email);
      form.append("phone_number", formData.phone);
      form.append("role", selectedRole.title);

      const res = await fetch(
        "https://backend.euradicle.com/wp-json/custom/v1/job",
        {
          method: "POST",
          body: form,
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", message: "Application submitted." });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
        });

        setResumeFile(null);
        fileRef.current.value = "";

        setTimeout(() => {
          setSelectedRole(null);
          setStatus(null);
        }, 1500);
      } else {
        setStatus({ type: "error", message: "Submission failed." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error." });
    }

    setLoading(false);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full bg-[var(--color-bg-muted)] py-16 xl:py-20 2xl:py-24 px-6"
      >
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto text-center">
          <h1 className="text-h1 xl:text-[48px] 2xl:text-[56px] mb-3">
            <span className="text-[var(--color-primary-navy)]">OPEN</span>{" "}
            <span className="text-[var(--color-primary-mauve)]">ROLES</span>
          </h1>

          <p className="text-subheading-lg italic mb-4">
            Work That Shapes You, and the World
          </p>

          <p className="italic text-body-sm xl:text-base mt-6 max-w-5xl xl:max-w-6xl mx-auto">
            Join a global consulting firm where impact is intentional and growth
            is personal. At EuRadicle, curious minds come together in a culture
            of trust, collaboration, and continuous learning, where high
            performance coexists with balance and authenticity. You'll be
            encouraged to think deeply, contribute meaningfully, and take
            ownership of the impact you create. This is a place where your ideas
            matter, your growth is supported, and your individuality is
            respected. Grow with purpose. Lead with intent.
          </p>
        </div>

        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto mt-14 grid md:grid-cols-2 xl:grid-cols-2 gap-8 xl:gap-10">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => {
                setSelectedRole(role);
                setIsPdfExpanded(false);
              }}
              className="jobs-card bg-[var(--color-bg-white)] rounded-2xl p-8 xl:p-10 shadow-lg cursor-pointer transition-all duration-500 border border-transparent hover:border-brand-600"
            >
              <p className="text-subheading text-[var(--color-primary-mauve)] mb-3">
                Open Role
              </p>

              <h3 className="text-h5 xl:text-xl text-[var(--color-primary-navy)]">
                {role.title}
              </h3>

              {role.location && (
                <p className="mt-4 text-body-sm text-[var(--color-primary-mauve)]">
                  {role.location}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {selectedRole &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 flex items-start sm:items-center justify-center z-50 px-3 sm:px-6 py-4 sm:py-6 overflow-y-auto"
            onClick={() => {
              setSelectedRole(null);
              setIsPdfExpanded(false);
            }}
          >
            <div
              className="bg-[var(--color-bg-white)] w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] rounded-2xl p-4 sm:p-6 md:p-8 xl:p-10 relative shadow-xl flex flex-col max-h-[92vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  setSelectedRole(null);
                  setIsPdfExpanded(false);
                }}
                className="absolute top-4 right-6 text-[var(--color-primary-navy)] text-3xl font-light hover:rotate-90 transition-transform duration-300"
              >
                ×
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 xl:gap-12">
                <div className="lg:col-span-7 flex flex-col">
                  <h2 className="text-h3 xl:text-[32px] text-[var(--color-primary-navy)] mb-1">
                    {selectedRole.title}
                  </h2>

                  <p className="text-body-sm text-[var(--color-primary-mauve)] mb-6">
                    {selectedRole.location}
                  </p>

                  <div
                    className="w-full border border-[var(--color-primary-mauve)] rounded-xl overflow-hidden h-[40vh] sm:h-[50vh] lg:h-[65vh]"
                  >
                    <iframe
                      src={selectedRole.pdfPath}
                      className="w-full h-full"
                      title={`${selectedRole.title} Job Description`}
                    />
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-start pt-0 lg:pt-2">
                  <div className="bg-gray-50/50 p-4 sm:p-6 xl:p-8 rounded-2xl border border-gray-100">
                    <h4 className="text-lg font-semibold text-[var(--color-primary-navy)] mb-6">
                      Apply for this position
                    </h4>

                    {status && (
                      <div
                        className={`mb-4 p-3 rounded text-sm ${
                          status.type === "success"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {status.message}
                      </div>
                    )}

                    <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full border border-gray-300 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 bg-white text-sm sm:text-base"
                      />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="w-full border border-gray-300 rounded-xl px-4 py-3.5 bg-white"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        className="w-full border border-gray-300 rounded-xl px-4 py-3.5 bg-white"
                      />

                      <label className="w-full flex items-center justify-between border border-dashed border-gray-400 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 bg-white cursor-pointer text-sm sm:text-base">
                        <span className="text-gray-500 text-sm">
                          Upload Resume (PDF/DOC)
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          Browse
                        </span>
                        <input
                          ref={fileRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                          className="hidden"
                        />
                      </label>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[var(--color-primary-mauve)] text-white py-3 sm:py-4 rounded-xl font-semibold sm:font-bold text-sm sm:text-base tracking-wide hover:shadow-lg"
                      >
                        {loading ? "Submitting..." : "SUBMIT APPLICATION"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}