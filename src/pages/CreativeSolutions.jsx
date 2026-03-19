import React from "react";
import CapabilityLayout from "../layouts/CapabilityLayout.jsx";

function CreativeSolutions() {
  return (
    <CapabilityLayout
      title="Creative Solutions"
      subtitle="Designing immersive learning and engagement experiences that turn insight into sustained action."
      image="/Capabilities/creative solution internal.avif"
      position = "bottom"
      intro="Learning experiences must engage the mind, emotion, and application, not just deliver content. EuRadicle’s Creative Solutions capability focuses on designing immersive, learner-centric experiences that drive real capability development. By blending instructional design, storytelling, and operational excellence, organizations create learning journeys that are impactful, scalable, and aligned with business goals."
      cards={[
        {
          heading: "E-Learning & Digital Course Design",
          description:
            "Modern learning demands flexibility and engagement. We design interactive, learner-centric digital experiences that are scalable, accessible, and built to deliver impact-anytime, anywhere.",
        },
        {
          heading: "Storyboarding & Learning Content Development",
          description:
            (<>
              Powerful learning begins with intentional design. We craft <span className="whitespace-nowrap">story-driven</span>, visually engaging content that captures attention, strengthens retention, and translates seamlessly into real-world application.
            </>),
        },
        {
          heading: "Collateral Design & Visual Communication",
          description:
            "Clarity drives impact. We create engaging, brand-aligned visual collateral that enhances understanding, strengthens recall, and elevates the overall learning experience.",
        },
        {
          heading: "Program Management & Learning Operations",
          description:
            "Excellence is orchestrated behind the scenes. We ensure seamless planning, governance, and delivery, turning learning initiatives into consistent, high-impact experiences.",
        },
        {
          heading: "Learning Analytics & Reporting",
          description:
            "Impact must be measurable. We transform learning data into actionable insights, demonstrating effectiveness, ROI, and guiding smarter learning decisions.",
        },
      ]}
    />
  );
}

export default CreativeSolutions;
