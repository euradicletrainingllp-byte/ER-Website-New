import React, { useState } from "react"
import Journey from "../sections/Journey"
import ContactSection from "../sections/ContactSection"
import emailjs from "@emailjs/browser"

const GetInTouch = () => {

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: ""
  })

  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState({ type: "", message: "" })
  const [loading, setLoading] = useState(false)

  const fields = [
    {
      name: "Name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name"
    },
    {
      name: "Email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email"
    },
    {
      name: "PhoneNumber",
      label: "Mobile Number",
      type: "tel",
      placeholder: "Enter your Mobile Number"
    },
    {
      name: "Message",
      label: "Message",
      type: "textarea",
      placeholder: "Enter your message"
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (value) => {
    setPhone(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setStatus({ type: "", message: "" })

    try {
      await fetch("https://backend.euradicle.com/wp-json/custom/v1/getintouch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: formData.Name,
          meta: {
            full_name: formData.Name,
            email: formData.Email,
            phone_number: phone,
            message: formData.Message
          }
        })
      })
      setStatus({ type: "success", message: "Form submitted successfully" })

      setFormData({
        Name: "",
        Email: "",
        PhoneNumber: "",
        Message: ""
      })

      setPhone("")
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong" })
    }

    setLoading(false)
  }

  return (
    <div>
      <Journey />
      <ContactSection
        imageUrl="/Home/Getintouch.jpg"
        fields={fields}
        show={true}
        formData={formData}
        phone={phone}
        setPhone={handlePhoneChange}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        status={status}
        loading={loading}
      />
    </div>
  )
}

export default GetInTouch