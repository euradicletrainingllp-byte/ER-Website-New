import React, { useEffect } from "react";
import EuradicleLife from "../sections/EuradicleLife";
import Jobs from "../sections/Jobs";
import WhyEuradicle from "../sections/WhyEuradicle";
import Interns from "../sections/Interns";

const GrowWithUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  });
  const interns = [
    {
      text: "What really stood out to me at EuRadicle is how people-focused the culture is. Even during my internship, I never felt like I was “just an intern.” My ideas were heard, my suggestions were considered, and I was included in real discussions. The team is very open and supportive, which made it easy for me to learn and try new things without being afraid of making mistakes. With the guidance and encouragement, I received, I slowly moved from just learning to actually taking ownership of my work. Because of that trust and support, becoming a full-time team member felt like a natural step, and it continues to motivate me to grow and do better every day.",
      name: "Maturi Sevitha",
      role: "Associate - Creative Solutions",
      url: "/Interns/1.png",
    },
    {
      text: "My journey with EuRadicle began as a Finance & Administration Intern, where I gained hands-on exposure to both financial management and administrative operations. During this phase, I worked closely with the leadership and operations teams, supporting financial processes, compliance, vendor coordination, documentation, and day-to-day administrative activities that ensured smooth organizational functioning. This holistic experience helped me understand how financial discipline, structured processes, and efficient administration together enable seamless client delivery and sustainable growth, laying a strong foundation for my professional development and eventually evolving into a full-time role where I continue to strengthen and streamline both finance and administrative operations across the organization.",
      name: "Lokesh Akoju",
      role: "Sr. Associate – Finance & Admin",
      url: "/Interns/2.png",
    },
    {
      text: "I joined EuRadicle as an intern expecting to learn, but it quickly became a phase of accelerated growth and a defining career milestone. From day one, I was trusted with real projects, real clients, and meaningful impact. The vibrant, collaborative culture encouraged creativity and pushed me to think beyond the obvious, while also offering flexibility and genuine support as I balanced academics. Working on innovation-driven projects expanded my perspective across strategy, creativity, and solution design, which eventually led to my transition into a Senior Associate – Content Development & Solutioning. Today, I design research-backed capability programs that solve complex talent challenges for large organizations. At EuRadicle, early talent isn’t just managed it’s mentored, empowered, and accelerated.",
      name: "Saba Siddiqui",
      role: "Sr. Associate – Content Development & Solutioning",
      url: "/Interns/3.png",
    },
  ];
  const items = [
    {
      title: "Work That Shapes Leaders, Not Just Slides",
      text: "At EuRadicle, your work directly influences how professionals think, lead, and grow. Every project you touch contributes to real transformation, across leadership, consulting capability, and organizational impact. This isn’t back-end work; this is front-row participation in shaping future-ready leaders.",
    },
    {
      title: "A Consulting Mindset from Day One",
      text: "You don’t just execute, you think, question, and co-create. We function with a true consulting mindset, encouraging structured thinking, client empathy, and outcome-driven solutions. From strategy discussions to delivery, you’re treated as a problem-solver, not just a role-holder.",
    },
    {
      title: "Learn Fast, Grow Faster",
      text: "Startups teach speed, but we add depth. You’ll gain exposure across consulting, L&D, operations, and client engagement, building skills that compound over time. With high ownership and real accountability, growth here isn’t promised, it’s practiced every day.",
    },
    {
      title: "Global Exposure, Human Culture",
      text: "With a footprint across the U.S., U.A.E., and India, you work in a global context while staying rooted in a people-first culture. We value trust, curiosity, and collaboration, because high performance is sustainable only when humans come first.",
    },
  ];
  const info = `Our Early Talent & Internship programs are built to give emerging professionals 
  more than just exposure, from day one, interns are treated as contributors, 
  gaining hands-on experience across live projects, client engagements, research, facilitation support, and strategic thinking. 
  We create a space where curiosity is encouraged, ownership is trusted, and learning is continuous. 
  Through real responsibility, structured feedback, and close collaboration with experienced consultants, early talent develops the confidence, clarity, 
  and professional maturity needed to transition seamlessly into full-time roles and long-term careers.`;
  return (
    <div>
      <EuradicleLife />
      <Jobs />
      <WhyEuradicle items={items} />
      <Interns interns={interns} info={info} />
    </div>
  );
};

export default GrowWithUs;
