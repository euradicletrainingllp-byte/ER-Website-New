import React, { useEffect, useState } from "react";
import ContactSection from "../sections/ContactSection";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Company: "",
    Designation: "",
    Email: "",
  });

  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const fields = [
    [
      {
        name: "FirstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter your First Name",
      },
      {
        name: "LastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter your Last Name",
      },
    ],
    [
      {
        name: "Company",
        label: "Company",
        type: "text",
        placeholder: "Enter your Company",
        required: false,
      },
      {
        name: "Designation",
        label: "Designation",
        type: "text",
        placeholder: "Enter your Designation",
        required: false,
      },
    ],
    {
      name: "Email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "PhoneNumber",
      label: "Mobile Number",
      type: "tel",
      placeholder: "Enter your mobile number",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await fetch("https://backend.euradicle.com/wp-json/custom/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: `${formData.FirstName} ${formData.LastName}`,
          meta: {
            first_name: formData.FirstName,
            last_name: formData.LastName,
            company: formData.Company,
            organisation: formData.Designation,
            email: formData.Email,
            phone_number: phone,
          },
        }),
      });
      setStatus({ type: "success", message: "Form submitted successfully" });
      setFormData({
        FirstName: "",
        LastName: "",
        Company: "",
        Designation: "",
        Email: "",
      });

      setPhone("");
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong" });
    }

    setLoading(false);
  };

  return (
    <div className="mt-24">
      <ContactSection
        imageUrl="/Home/Getintouch.jpg"
        fields={fields}
        status={status}
        loading={loading}
        header={
          <div className="text-h2 text-primary-navy text-center mb-4">
            CONTACT <span className="text-primary-mauve">US</span>
          </div>
        }
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        phone={phone}
        setPhone={handlePhoneChange}
        formData={formData}
      />
    </div>
  );
};

export default Contact;