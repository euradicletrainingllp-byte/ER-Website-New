import React from "react";
import CapabilityLayout from "../layouts/CapabilityLayout.jsx";

function PowerSkillsDevelopment() {
  return (
    <CapabilityLayout
      title="Power Skills Development"
      subtitle="Strengthening the human capabilities that enable influence, collaboration, and impact."
      image="/Capabilities/compressed-Power Skills Development Inside picture.png"
      intro="Power skills are no longer optional add-ons, they are core capabilities that determine how effectively professionals lead, collaborate, and influence in complex business environments. EuRadicle’s Power Skills Development capability focuses on strengthening human-centered skills that directly impact performance, relationships, and decision quality at work. By enhancing communication, emotional intelligence, influence, and judgment, individuals are enabled to operate with confidence, clarity, and credibility across roles, teams, and stakeholder contexts."
      cards={[
        {
          heading: "Train the Trainer & Learning Facilitation",
          description:
            "Impactful learning depends on powerful delivery. We build facilitation excellence grounded in adult learning, presence, and engagement, enabling trainers to spark dialogue and turn learning into action.",
        },
        {
          heading: "Communication & Interpersonal Excellence",
          description:
            "Workplace impact is shaped by connection. We strengthen clarity, empathy, and relational awareness so professionals build stronger relationships and foster productive, respectful collaboration.",
        },
        {
          heading: "Presentation & Storytelling Skills",
          description:
            "Influence begins with expression. We help professionals craft compelling narratives and present with confidence and authenticity, so their ideas inspire alignment and action.",
        },
        {
          heading: "Negotiation & Stakeholder Management",
          description:
            "Effective negotiation is rooted in understanding. We enhance stakeholder insight and influence strategies to navigate complexity, resolve differences, and build trust-driven outcomes.",
        },
        {
          heading: "Customer Service & Client Experience",
          description:
            "Every interaction shapes the relationship. We cultivate a service mindset grounded in empathy and value creation, building trust, managing expectations, and creating lasting partnerships.",
        },
        {
          heading: "Emotional Intelligence & Self-Mastery",
          description:
            "Personal effectiveness begins within. We strengthen self-awareness, emotional regulation, and empathy, enabling thoughtful responses, balanced decisions, and healthier workplace relationships.",
        },
        {
          heading: "Problem Solving & Decision Making",
          description:
            "Complexity demands clarity. We sharpen problem framing and decision-making under pressure, empowering professionals to move from reactive thinking to confident, well-judged action.",
        },
      ]}
    />
  );
}

export default PowerSkillsDevelopment;
