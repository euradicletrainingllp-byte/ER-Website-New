import React from "react";
import CapabilityLayout from "../layouts/CapabilityLayout.jsx";

function CommercialSalesEnablement() {
  return (
    <CapabilityLayout
      title="Commercial & Sales Enablement"
      subtitle="Developing commercial acumen that converts relationships into measurable growth."
      image="/Capabilities/sales internal.avif"
      position="center"
      intro={
        <>
          Sustainable growth requires more than sales targets. It demands strong
          commercial thinking, disciplined execution, and value-driven customer
          engagement. EuRadicle’s Commercial & Sales Enablement capability
          strengthens how sales teams, account managers, and commercial leaders
          approach markets, customers, and channels. By enhancing consultative
          selling skills, negotiation capability, and{" "}
          <span className="whitespace-nowrap">go-to-market</span> effectiveness,
          organizations build commercially agile teams that consistently deliver
          results in competitive environments.
        </>
      }
      cards={[
        {
          heading: "Sales & Trade Promotion Excellence",
          description:
            "Growth thrives on disciplined execution. We align customer insight, trade strategy, and performance focus, equipping sales teams to drive revenue and adapt to evolving markets.",
        },
        {
          heading: "Negotiation & Influence for Sales",
          description:
            "Winning sales requires insight, not just persuasion. We strengthen negotiation and client engagement skills to handle objections confidently, build trust, and close for lasting impact.",
        },
        {
          heading: "go-to-market Strategy & Execution",
          description: (
            <>
              Market success depends on aligned strategy and execution. We
              design channel-focused, insight-led{" "}
              <span className="whitespace-nowrap">go-to-market</span> approaches
              that ensure clear positioning and sustained traction.
            </>
          ),
        },
        {
          heading: "Channel & Retail Effectiveness",
          description:
            "Strong channels deliver strong results. We enhance coordination and ownership across distributors and retailers, driving visibility, reach, and measurable from Ground impact.",
        },
        {
          heading: "Key Account Management Excellence",
          description:
            "Strategic accounts require partnership. We build robust account planning and stakeholder engagement capabilities to deepen relationships and fuel long-term growth.",
        },
        {
          heading: "Solution & Consultative Selling",
          description:
            "Consultative selling starts with understanding. We sharpen diagnosis, tailor solutions, and articulate value clearly, turning prospects into long-term partners.",
        },
      ]}
    />
  );
}

export default CommercialSalesEnablement;
