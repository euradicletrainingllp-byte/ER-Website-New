import React from "react";
import CapabilityLayout from "../layouts/CapabilityLayout.jsx";

function DigitalBusinessTransformation() {
  return (
    <CapabilityLayout
      title="Digital & Business Transformation"
      subtitle="Enabling leaders and teams to navigate change and perform in evolving business environments."
      image="/Capabilities/compressed-DIGITAL & BUSINESS TRANSFORMATION.jpg"
      intro="Organizations today must continuously evolve to stay relevant in an increasingly digital and data-driven world. EuRadicle’s Digital & Business Transformation capability focuses on enabling leaders and teams to think innovatively, leverage emerging technologies, and make informed decisions that drive sustainable business impact. By strengthening digital fluency, design-led thinking, and analytical decision-making, organizations are better equipped to respond to disruption, reimagine processes, and build future-ready ways of working."
      cards={[
        {
          heading: "Design Thinking",
          description:
            "Innovation starts with empathy. We use structured, design-led approaches to spark creative collaboration and build practical solutions grounded in real human needs.",
        },
        {
          heading: "Generative AI Enablement",
          description:
            "AI readiness is a strategic edge. We build digital confidence and responsible adoption, helping teams integrate generative tools to boost efficiency, insight, and innovation while keeping the human touch.",
        },
        {
          heading: "Data-Driven Decision Making",
          description:
            "Great decisions rely on evidence. We strengthen data fluency and analytical thinking so professionals turn insights into clear, strategic action.",
        },
      ]}
    />
  );
}

export default DigitalBusinessTransformation;
