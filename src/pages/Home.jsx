import React, { useEffect } from "react";
import Hero from "../sections/Hero";
import Showreel from "../sections/Showreel";
import ImpactSection from "../sections/ImpactSection";
import ImpactStories from "../sections/ImpactStories";
import BlogsSection from "../sections/BlogsSection";
import Testimonials from "../sections/Testimonials";
import LogoSection from "../sections/LogoSection";
import VideoTestimonials from "../sections/VideoTestimonials"

const Home = () => { 
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [])
  return (
    <div className="">
      <Hero />
      <Showreel />
      <ImpactSection />
      <ImpactStories />
      <Testimonials />
      <BlogsSection />
      <LogoSection />
      <VideoTestimonials />
    </div>
  );
};

export default Home;
