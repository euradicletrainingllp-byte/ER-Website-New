import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function ResourcesModal({ modalType, closeModal }) {
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  const [view, setView] = useState(modalType);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [certificateNumber, setCertificateNumber] = useState("");
  const [programAttended, setProgramAttended] = useState("");
  const [programDate, setProgramDate] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [otp, setOtp] = useState("");
  const [leadId, setLeadId] = useState(null);
  const [step, setStep] = useState("form");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState(null);

  useEffect(() => {
    if (!modalRef.current || !modalContentRef.current) return;

    gsap.fromTo(
      modalRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" },
    );

    gsap.fromTo(
      modalContentRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
    );
  }, []);

  const handleClose = () => {
    if (!modalRef.current) return;

    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: closeModal,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (view === "certificate") {
      setLoading(true);
      setStatusMessage(null);
      setStatusType(null);

      const certificate_code = `${firstName
        .trim()
        .replace(/\s+/g, "")}_${lastName
        .trim()
        .replace(/\s+/g, "")}_${certificateNumber.trim()}`;

      try {
        const res = await fetch(
          "https://backend.euradicle.com/wp-json/custom/v1/certificate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ certificate_code }),
          },
        );

        const data = await res.json();

        if (data.success) {
          window.open(data.download_url, "_blank");
          handleClose();
        } else {
          setStatusMessage("Certificate not found");
          setStatusType("error");
        }
      } catch {
        setStatus("Network error");
      }

      setLoading(false);
    }

    if (view === "missing-certificate") {
      setLoading(true);
      setStatusMessage(null);
      setStatusType(null);

      try {
        const res = await fetch(
          "https://backend.euradicle.com/wp-json/custom/v1/missing-certificate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              program_attended: programAttended,
              program_date: programDate,
              organisation,
              department,
              designation,
              email,
              phone,
              query,
            }),
          },
        );

        const data = await res.json();

        if (data.success) {
          setStatusMessage("Request submitted successfully");
          setStatusType("success");
          setTimeout(() => {
            handleClose();
          }, 1500);
        } else {
          setStatusMessage("Submission failed");
          setStatusType("error");
        }
      } catch {
        setStatus("Network error");
      }

      setLoading(false);
    }

    if (view === "brochure") {
      setLoading(true);
      setStatusMessage(null);
      setStatusType(null);

      try {
        const res = await fetch(
          "https://backend.euradicle.com/wp-json/custom/v1/brochure/request",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              full_name: `${firstName} ${lastName}`,
              email,
              phone,
            }),
          },
        );

        const data = await res.json();

        if (data.success) {
          setLeadId(data.lead_id);
          setStep("otp");
        } else {
          setStatusMessage("Failed to send OTP");
          setStatusType("error");
        }
      } catch {
        setStatus("Network error");
      }

      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatusMessage(null);
    setStatusType(null);

    try {
      const res = await fetch(
        "https://backend.euradicle.com/wp-json/custom/v1/brochure/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lead_id: leadId,
            otp,
          }),
        },
      );

      const data = await res.json();

      if (data.success) {
        window.open(data.download_url, "_blank");
        handleClose();
      } else {
        setStatusMessage(data.message);
        setStatusType("error");
      }
    } catch {
      setStatus("Network error");
    }

    setLoading(false);
  };

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] px-4"
    >
      <div
        ref={modalContentRef}
        className="bg-white w-full max-w-lg rounded-2xl p-8 shadow-2xl relative"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-primary-navy text-xl"
        >
          ×
        </button>

        <h3 className="text-h4 mb-6 text-center">
          {view === "brochure"
            ? "Download Brochure"
            : view === "missing-certificate"
              ? "Missing Certificate Request"
              : "Download E-Certificate"}
        </h3>

        {statusMessage && (
          <div
            className={`mb-4 text-center text-sm ${
              statusType === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {statusMessage}
          </div>
        )}
        {modalType === "brochure" && step === "form" && (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="text"
              required
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="text"
              required
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold uppercase tracking-wide bg-primary-mauve"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {modalType === "brochure" && step === "otp" && (
          <form className="space-y-5" onSubmit={handleVerifyOtp}>
            <input
              type="text"
              required
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold uppercase tracking-wide bg-primary-mauve"
            >
              {loading ? "Verifying..." : "Verify & Download"}
            </button>
          </form>
        )}

        {view === "certificate" && (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="text"
              required
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="text"
              required
              placeholder="Certificate Number"
              value={certificateNumber}
              onChange={(e) => setCertificateNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <button
              type="button"
              onClick={() => setView("missing-certificate")}
              className="w-full py-2 text-sm text-primary-purple underline"
            >
              Missing Certificate?
            </button>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold uppercase tracking-wide bg-primary-purple"
            >
              {loading ? "Checking..." : "Download"}
            </button>
          </form>
        )}

        {view === "missing-certificate" && (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="text"
              required
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="text"
              required
              placeholder="Program Attended"
              value={programAttended}
              onChange={(e) => setProgramAttended(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="date"
              required
              value={programDate}
              onChange={(e) => setProgramDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="text"
              required
              placeholder="Organisation"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="text"
              required
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="text"
              required
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <input
              type="text"
              required
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <textarea
              required
              placeholder="Query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold uppercase tracking-wide bg-primary-purple"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
