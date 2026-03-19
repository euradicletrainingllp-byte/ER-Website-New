import React, { useEffect } from 'react'
import CapabilitiesSection from '../data/CapabilitiesSection'
import OurServices from '../sections/OurServices'

const Capabilities = () => {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  })
  return (
    <div>
      <CapabilitiesSection />
      <OurServices />
    </div>
  )
}

export default Capabilities