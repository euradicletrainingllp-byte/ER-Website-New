import { div } from 'framer-motion/client'
import React from 'react'

const Privacy = () => {
  return (
    <div className='bg-gray-100 flex justify-center py-10 mt-20'>
    <div className="bg-white p-8 shadow-lg max-w-3xl w-full">
      <div className="flex justify-center mb-4 bg-gray-100">
        <a href="">
          <img
            src="/Home/logo.gif"
            alt="EuRadicle Logo"
            className="h-40 pb-2"
          />
        </a>
      </div>

      <h1 className="text-2xl font-bold text-center mb-4 uppercase">
        Privacy Policy
      </h1>

      <div>
        <p className="mb-3 text-justify">
          EuRadicle Training LLP ("we," "our," "us") is committed to protecting
          the privacy and intellectual property (IP) rights of our users,
          clients, and business associates. This Privacy Policy outlines our
          approach to data collection, usage, and the protection of intellectual
          property, ensuring compliance with
          <b> Indian data protection and intellectual property laws</b>,
          including the <b>Copyright Act, 1957</b>, the
          <b>Trademarks Act, 1999</b>, the <b>Patents Act, 1970</b>, and the
          <b>Information Technology (IT) Act, 2000.</b> We may collect personal
          and businessrelated information, such as names, email addresses, phone
          numbers, business documents, proprietary content, trademarks,
          copyrights, patents, and confidential business information through
          website forms, email communications, and user interactions. This
          information is used strictly for service delivery, legal compliance,
          transaction processing, communication, and safeguarding intellectual
          property rights.
        </p>
        <p className="mb-3 text-justify">
          All content, training materials, designs, trademarks, logos, software,
          and proprietary resources provided by Euradicle Training LLP are
          <b> protected under Indian intellectual property laws.</b>
          Unauthorized use, reproduction, distribution, modification, or
          dissemination of our intellectual property without explicit written
          consent is strictly prohibited.
        </p>
        <p className="mb-3 text-justify">
          We implement strict security measures to protect sensitive information
          from unauthorized access, theft, or misuse. Any proprietary
          information shared with Euradicle Training LLP remains confidential
          and may be covered under <b> Non-Disclosure Agreements (NDAs)</b>
          where applicable.
        </p>
        <p className="mb-3 text-justify">
          We do not sell, trade, or transfer personal or intellectual
          property-related information to third parties except under specific
          circumstances, such as when required by law, regulatory authorities,
          or judicial orders, when necessary for business operations or legal
          agreements (e.g., licensing of IP), or to protect our intellectual
          property rights from infringement or unauthorized use. Our website may
          also use cookies and other tracking technologies to enhance user
          experience and monitor website traffic.
        </p>
        <p className="mb-3 text-justify">
          These tools help us protect intellectual property by tracking
          unauthorized access or misuse of content, and users have the option to
          manage their cookie preferences through browser settings.
        </p>

        <p className="mb-3 text-justify">
          Users and business owners have the right to access, modify, or delete
          their personal and intellectual property-related data stored with us.
          They may also report any copyright or trademark infringement
          concerning their intellectual property and seek legal recourse under
          the <b>Copyright Act,1957</b> and
          <b>Trademarks Act,1999 or IT Act, 2000</b> in case of IP rights
          violations. For any concerns regarding intellectual property
          protection, data security, or privacy violations, users may contact
          our designated <b>Grievance Officer</b> via email or phone.
        </p>
        <p className="mb-3 text-justify">
          Euradicle Training LLP complies with all Indian intellectual property
          laws, including the
          <b> Information Technology (IT) Act, 2000,</b> to ensure digital
          protection of IP and data privacy.
        </p>
        <p className="mb-3 text-justify">
          This Privacy Policy may be updated periodically in response to legal
          changes or operational requirements, and updates will be posted on our
          website. Continued use of our services will be considered as
          acceptance of the revised policy. For any further inquiries related to
          this Privacy Policy or intellectual property concerns, users are
          encouraged to reach out to us.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Privacy