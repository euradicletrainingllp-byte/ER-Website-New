import CapabilityLayout from "../layouts/CapabilityLayout";

export default function DEICultureBuilding() {
  return (
    <CapabilityLayout
      title="DEI & Culture Building"
      subtitle="Creating inclusive, values-driven cultures where trust, belonging, and performance coexist."
      image="/Capabilities/DEI internal.avif"
      position="right"
      intro="Strong organizational cultures are built intentionally through inclusive leadership, shared values, and everyday behaviors. EuRadicle’s DEI & Culture Building capability enables organizations to create environments where individuals feel respected, empowered, and able to perform at their best. By strengthening inclusive leadership practices and cross-cultural effectiveness, organizations foster trust, collaboration, and sustained engagement across diverse workforces."
      cards={[
        {
          heading: "Women in Leadership",
          description:
            "Advancing women in leadership goes beyond skill-building. We strengthen confidence, visibility, and authentic influence, enabling women leaders to navigate organizational dynamics and lead with clarity, credibility, and purpose.",
        },
        {
          heading: "Cross-Cultural Effectiveness",
          description: (
            <>
            Diverse teams thrive on cultural intelligence. We strengthen awareness, adaptability, and <span className="whitespace-nowrap">cross-cultural</span> communication, enabling teams to build trust, collaborate effectively, and perform cohesively across global and diverse environments.
            </>
          )
          },
      ]}
    />
  );
}
