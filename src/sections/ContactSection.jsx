import { useState } from "react";
import FlowButton from "../components/FlowButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function ContactSection({
  imageUrl,
  fields = [],
  header = null,
  show = false,
  handleSubmit = () => {},
  handleChange = () => {},
  phone = "",
  setPhone = () => {},
  formData = {},
  status = { type: "", message: "" },
  loading = false,
}) {
  const socials = [
    {
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/euradicle-training-india/posts/?feedView=all",
    },
    {
      label: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/EuRadicleTrainingIndia/",
    },
    {
      label: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/euradicle/?hl=en",
    },
    {
      label: "YouTube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com/channel/UC5pBaWce56rhEgrfEtj--3g",
    },
  ];

  const [focused, setFocused] = useState(false);

  const isRequired = (field) => field.required !== false;

  const renderLabel = (field) => (
    <label
      htmlFor={field.name}
      className="block text-body-sm font-semibold text-[var(--color-primary-navy)] mb-2"
    >
      {field.label}
      {isRequired(field) && <span className="text-red-500 ml-1">*</span>}
    </label>
  );

  const renderInput = (field) => {
    if (field.type === "textarea") {
      return (
        <textarea
          id={field.name}
          name={field.name}
          value={formData?.[field.name] || ""}
          rows={field.rows || 5}
          placeholder={field.placeholder}
          onChange={handleChange}
          required={isRequired(field)}
          className="w-full rounded-lg border border-[var(--color-brand-400)] p-4 bg-white focus:outline-none focus:border-[var(--color-primary-mauve)] transition"
        />
      );
    }

    if (field.type === "tel") {
      return (
        <div
          className={`relative transition-all duration-300 ${
            focused ? "scale-[1.01]" : ""
          }`}
        >
          <PhoneInput
            country="in"
            value={phone}
            onChange={setPhone}
            enableSearch
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            containerClass="!w-full !relative !overflow-visible"
            dropdownClass="!absolute !z-[9999] !max-h-80 !overflow-auto !shadow-2xl !rounded-xl !bg-white"
            inputClass="!w-full !h-[50px] !bg-white !pl-14"
            buttonClass="!rounded-l-xl !bg-white"
            searchClass="!w-full !p-2"
            inputProps={{
              name: field.name,
              id: field.name,
              required: isRequired(field),
            }}
          />
        </div>
      );
    }

    return (
      <input
        id={field.name}
        name={field.name}
        type={field.type || "text"}
        value={formData?.[field.name] || ""}
        placeholder={field.placeholder}
        onChange={handleChange}
        required={isRequired(field)}
        className="w-full rounded-lg border border-[var(--color-brand-400)] p-3 bg-white focus:outline-none focus:border-[var(--color-primary-mauve)] transition"
      />
    );
  };

  return (
    <section className="w-full bg-[var(--color-bg-white)]">
      {header}

      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-8 pb-10 xl:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10 2xl:gap-14 items-start">
          <div className="w-full h-full overflow-hidden rounded-2xl group order-1 md:order-2">
            <img
              src={imageUrl}
              alt="contact"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative overflow-visible rounded-2xl bg-[var(--color-brand-400)]/10 p-8 xl:p-10 2xl:p-12 space-y-6 xl:space-y-7 w-full order-2 md:order-1"
          >
            {status?.message && (
              <div
                className={`p-4 rounded-lg text-sm font-medium ${
                  status?.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            {fields.map((group, index) => {
              if (Array.isArray(group)) {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8"
                  >
                    {group.map((field) => (
                      <div key={field.name}>
                        {renderLabel(field)}
                        {renderInput(field)}
                      </div>
                    ))}
                  </div>
                );
              }

              return (
                <div key={group.name}>
                  {renderLabel(group)}
                  {renderInput(group)}
                </div>
              );
            })}

            <div className="relative z-0">
              <FlowButton
                text={loading ? "Submitting..." : "Submit"}
                id="contact"
                centered
                className="w-full mt-6 mx-auto"
              />
            </div>
          </form>
        </div>

        {show && (
          <div className="mt-8 flex justify-center gap-2 md:grid md:grid-cols-4 px-4 md:px-12 w-full md:w-max mx-auto">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="scale-75 md:scale-100"
              >
                <FlowButton icon={item.icon} id="contact" arrow={false} />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
