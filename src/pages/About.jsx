import React, {useEffect, useLayoutEffect} from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AboutSection from '../sections/AboutSection'
import Timeline from '../sections/Timeline'
import OurApproach from '../sections/OurApproach'
import OurValues from "../sections/OurValues"
import MindsBehind from '../sections/MindsBehind'
import GlobalFootprintsSection from '../sections/GlobalFooterSection'
import BeyondBusiness from '../sections/BeyondBusiness'
import { icon } from 'leaflet'

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }

    const timer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);

    return () => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'auto';
        }
    };
}, []);
    const items = [
      {
        year: "2020",
        title: "The Inception",
        text: "Founded with a clear intent to help organizations build leadership and capability that turns strategy into performance. Beginning with core leadership development and capability-building solutions for global & local organizations, a strong virtual delivery model was established to deliver impact even despite uncertainty of the covid era.",
        logo: "Timeline Logo/2020 - 2021.png",
        size: "yes",
        break: false
      },
      {
        year: "2021",
        title: "Building Resilience",
        text: "Expanded partnerships with enterprise organizations and global industry leaders, while scaling delivery across India. This phase strengthened consultant-led execution and established long-term trust as a partner for complex, large-scale service delivery engagements.",
        logo: "Timeline Logo/2021 - 2023.png",
        size: "no",
        break: false
      },
      {
        year: "2022",
        title: "Gaining Momentum",
        text: "Expanded client footprints as credibility and goodwill grew through human capital and capability consulting engagements delivered across India and Europe, strengthening long-term enterprise relationships.",
        logo: "Timeline Logo/2021 - 2023.png",
        size: "no",
        break: false
      },
      {
        year: "2023",
        title: "The Strategic Shift",
        text: "Transitioned into a capability consulting model. Building specialized teams across consulting, creative solutions, content development, and research in Hyderabad, India to support global operations and enable long-term enterprise engagements beyond standalone engagements.",
        logo: "Timeline Logo/2021 - 2023.png",
        size: "no",
        break: false
      },
      {
        year: "2024",
        title: "Deepening Consulting Impact",
        text: "Strengthened positioning as a trusted consulting partner, delivering leadership journeys, behavioural transformation, and assessment-led development for large organizations and growing enterprises. Expanded global readiness by progressing firm registration in Texas to support a growing US-based client ecosystem.",
        logo: "Timeline Logo/2023 - 2025.png",
        size: "hh",
        break: true
      },
      {
        year: "2025–26",
        title: "Where We Are Today",
        text: "A global talent and capability consulting firm with consultants and delivery capabilities across India, the USA, and the UAE. Work with organizations across industries-including enterprises with Fortune 500 footprints, is guided by three core commitments: End-to-end accountability, deep expertise, and agile, co-created solutions.",
        logo: "Timeline Logo/2023 - 2025.png",
        size: "hh",
        break: false
      },
    ];
    const data = [
            {
              number: "01",
              title: "End-to-End Accountability",
              text: `We own the full capability journey, from business and talent diagnosis through design, delivery, and impact measurement, ensuring learning is embedded into daily work and aligned with business priorities. Through structured governance and analytics, we drive learning transfer, behaviour change, and performance improvement that inform stronger leadership decisions.`,
              iconUrl: "Approach/1.png"
            },
            {
              number: "02",
              title: "Deep Expertise",
              text: `Grounded in leadership development, organisational development, behavioural science, and talent management, our consultants bring both insight and real-world business experience to every engagement. Drawing on neuroscience and behavioural research, we design role-relevant, context-driven capability solutions that equip leaders and teams with the judgement, influence, and decision-making skills needed to perform in complex environments.`,
              iconUrl: "Approach/2.png"
            },
            {
              number: "03",
              title: "Agile Co-Created Solutions",
              text: `Every solution is developed in close collaboration with clients, blending consulting expertise with deep contextual insight. Solutions are co-created to align with business realities, leadership expectations, and organizational culture. From enterprise leadership journeys to capability programs for growing organizations, solutions are tailored to reflect each client’s brand, language, and real-world challenges, driving relevance, ownership, and on-the-job application with measurable impact.`,            iconUrl: "Approach/3.png"
            },
    ];
      const minds = [
    {
      title: "Client Partnerships",
      text: "Focused on building trusted relationships, our sales team works closely with clients to understand their capability needs and shape meaningful engagements from the outset. Their role is to ensure alignment, clarity, and long-term value across every partnership",
      img: "Minds/compressed-Client Partnership..jpg",
    },
    {
      title: "Capability & Insights Lab",
      text: "Anchoring EuRadicle’s thinking, our R&D team continuously explores emerging trends, capability frameworks, and evolving business challenges. Their insights inform solution design and keep our offerings relevant, practical, and future-ready.",
      img: "Minds/compressed-Capability & Insights Lab.jpg",
    },
    {
      title: "Learning Architecture",
      text: "Our content team translates insight into structured learning journeys. They design clear, application-oriented content that reflects our consulting philosophy and supports sustained capability building.",
      img: "Minds/compressed-Learning Architecture.jpg",
    },
    {
      title: "Experience Design Studio",
      text: "Bringing learning to life, our creative solutions team crafts engaging experiences through thoughtful design, formats, and visual storytelling, enhancing participation and reinforcing impact.",
      img: "Minds/compressed-Experience Design Studio.jpg",
    },
    {
      title: "Delivery & Governance",
      text: "Ensuring seamless execution, our operations team anchors every engagement with strong coordination, governance, and quality oversight. They enable consistency and reliability across programs.",
      img: "Minds/compressed-Delivery & Governance.jpg",
    },
  ];

  return (
    <div>
      <AboutSection />
      <Timeline  items={items}/>
      <OurApproach data={data}/>
      <OurValues />
      <MindsBehind items={minds}/>
      <GlobalFootprintsSection />
      <BeyondBusiness />
    </div>
  )
}

export default About