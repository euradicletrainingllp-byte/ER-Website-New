import CapabilityLayout from "../layouts/CapabilityLayout.jsx";

function LeadershipDevelopment() {
  return (
    <CapabilityLayout
      title="Leadership Development"
      subtitle="Building leaders who think strategically, decide with clarity, and lead through complexity."
      image="/Capabilities/compressed-Leadership development inside picture.png"
      intro="Leadership today requires far more than positional authority. It demands clarity of thought, emotional intelligence, and the ability to engage people through change and complexity. EuRadicle’s Leadership Development offerings are designed to enhance leadership effectiveness across levels by building self-aware, people-centric, and performance-driven leaders. Through leadership development programs, structured leadership journeys, experiential workshops, and coaching interventions, leaders develop practical capabilities that translate directly into improved team performance, stronger engagement, and sustained behavioral change in real business contexts."
      cards={[
        {
          heading: "Managerial & Leadership Journeys",
          description:
            "Leadership is a transition, not a title. We equip leaders to step into greater responsibility with clarity and confidence, strengthening decision-making, people leadership, and performance ownership to lead with lasting impact.",
        },
        {
          heading: "Coaching Mindsets & Conversations",
          description:
            "Leadership evolves from directing to developing. We help leaders adopt a coaching mindset, listening deeply, asking powerful questions, and giving feedback that builds trust, accountability, and high-performing teams.",
        },
        {
          heading: "Team Effectiveness & Collaboration",
          description:
            "High-performing teams thrive on clarity, trust, and shared ownership. We strengthen collaboration and alignment so teams navigate differences, decide better, and deliver consistently in dynamic, cross-functional environments.",
        },
        {
          heading: "Leading Through Change & Influence",
          description:
            "Change tests leadership. We equip leaders to navigate uncertainty with confidence, influence without authority, and guide teams through transformation with clarity, alignment, and sustained momentum.",
        },
      ]}
    />
  );
}

export default LeadershipDevelopment;
