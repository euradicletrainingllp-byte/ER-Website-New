import React from "react";
import CapabilityLayout from "../layouts/CapabilityLayout.jsx";

function ConsultingTalentManagement() {
  return (
    <CapabilityLayout
      title="Consulting & Talent Management"
      subtitle="Aligning talent strategy, organizational design, and capability architecture with business ambition."
      image="/Capabilities/C&TM internsl.avif"
      intro="Creating future-ready organizations requires moving beyond transactional HR processes toward strategic, business-aligned talent systems. EuRadicle’s Consulting & Talent Management capability enables organizations to strengthen internal consulting capability, build robust leadership pipelines, and design talent frameworks that support long-term growth. Through consulting programs, advisory interventions, and capability-building workshops, HR teams and leaders develop the confidence to make informed, strategic talent decisions that align people outcomes with business priorities."
      cards={[
        {
          heading: "Internal Consulting & Advisory Skills",
          description:
            "In complex environments, execution isn’t enough. We build a consultative mindset that sharpens problem framing, deepens business diagnosis, and transforms professionals into trusted advisors who influence decisions and drive meaningful impact.",
        },
        {
          heading: "Career & Succession Planning",
          description:
            "Organizational strength grows through intentional succession and clear career pathways. We design structured frameworks that identify potential early, align development with future roles, and reduce leadership risk while boosting engagement and internal mobility.",
        },
        {
          heading: "Onboarding & Continuous Learning Frameworks",
          description:
            "Effectiveness starts at entry and grows through continuous development. We design integrated onboarding and learning ecosystems that accelerate readiness, sustain growth, and help employees adapt and thrive as business demands evolve.",
        },
      ]}
    />
  );
}

export default ConsultingTalentManagement;
