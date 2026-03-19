import React from "react";
import CapabilityLayout from "../layouts/CapabilityLayout.jsx";

function AssessmentDevelopmentCenters() {
  return (
    <CapabilityLayout
      title="Assessment & Development Centers (ACDC)"
      subtitle="Delivering objective, data-driven insights into talent potential and readiness."
      image="/Capabilities/compressed-Assessment & Development Centers inside picture.png"
      intro="Making confident talent decisions requires more than intuition. It requires data-driven insight and contextual understanding. EuRadicle’s Assessment & Development Centers are designed to evaluate readiness, identify potential, and accelerate development through evidence-based assessment approaches. By blending behavioral science, real-world simulations, and business-aligned frameworks, organizations gain clarity on talent strengths, development needs, and future readiness at both individual and cohort levels."
      cards={[
        {
          heading: "Talent Readiness & Development Diagnostics",
          description:
            "Strong talent decisions begin with clear insight. Through structured diagnostics, competency mapping, and behavioral assessments, we evaluate leadership readiness and potential. These diagnostics provide a clear starting point for development planning and leadership pipeline decisions.",
        },
        {
          heading: "Competency Mapping & Assessment Architecture",
          description:
          "Effective assessment centers begin with clearly defined leadership competencies. We work with business leaders to identify critical capabilities and design assessment architectures that align competencies with appropriate evaluation tools such as simulations, interviews, and psychometric instruments."
        },
        {
          heading: "Behavioral & Simulation-Based Leadership Assessment",
          description:
          "Leadership capability is best evaluated through behavior in action. Our assessment centers use role plays, case simulations, in-basket exercises, presentations, and Behavioral Event Interviews (BEI) to observe how individuals think, decide, influence stakeholders, and respond to real business scenarios."
        },
        {
          heading: "Psychometric, 360° Feedback & Talent Insights",
          description:
          "We complement behavioral observations with validated psychometric tools that measure cognitive ability, personality patterns, and decision styles. Combined with 360-degree feedback, assessor observations, competency ratings, and targeted feedback sessions, organizations gain clear guidance for succession planning, capability development, and leadership growth."
        }
      ]}
    />
  );
}

export default AssessmentDevelopmentCenters;
