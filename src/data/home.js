import { path } from "framer-motion/client";

const Hero = {
  title: "THE AI CHANGE LEADERSHIP PATHWAY",
  tag : "Truely Transforming",
    subline:
    "We develop talent that performs with purpose and leads with impact turning your people into your most enduring edge.",
    bgVideoPath: "Home/background.mp4"
};

const Impact = {
    title: "Our Impact at a Glance",
    speedometer : {
        Projects: "500+",
        Clients: "50+",
        Professionals_Trained: "7500+"
    }
}

const Stories = [
  {
    title: "THE AI CHANGE LEADERSHIP PATHWAY",
    tagline:
      "Helping senior leaders lead confidently in an AI-enabled business environment",
    description:
      "A curated leadership experience designed to build clarity, judgement, and readiness for responsible AI adoption.",
    iconUrl: "Home/compressed-AwarenessIcon.jpeg",
    path: "awareness"
  },
  {
    title: "ASPIRE",
    tagline:
      "Enabling women leaders to rise with confidence, clarity, and sustained impact",
    description:
      "A thoughtfully designed leadership journey focused on strengthening presence, decision-making, and personal sustainability for women leaders navigating complex professional and personal realities.",
    iconUrl: "Home/compressed-AspireIcon.jpeg",
    path: "aspire"
  },
  {
    title: "ENTERPRISE CONSULTING",
    tagline:
      "Developing Business Consultants for Strategic Roles",
    description:
      "A high-impact leadership journey designed to help experienced managers and senior leaders transition from functional execution to enterprise-level thinking, influence, and value creation.",
    iconUrl: "Home/compressed-CatalystIcon.jpeg",
    path: "catalyst"
  }
];

const LeaderStory ={ 
  tagline: "Helping senior leaders lead confidently in an AI-enabled business environment",
  subtag: "A curated leadership experience designed to build clarity, judgement, and readiness for responsible AI adoption.",
  paras: [
  "As AI continues to reshape industries, particularly in highly regulated and decision-intensive sectors, senior leaders are increasingly required to take informed positions on AI, often without the time or space to fully explore its implications. EuRadicle designed this leadership pathway to help leaders build clarity, confidence, and perspective while navigating AI-led change.",
  "The engagement focused on AI as a leadership and decision-making challenge, not as a technology topic. Through contextual discussions and real-world scenarios drawn from the financial services environment, leaders explored how AI influences strategy, risk, ethics, governance, and organizational culture.",
  "As part of this pathway, EuRadicle recently delivered a customized leadership intervention for senior leaders that centered on building AI awareness, interpretability, and decision confidence. The learning journey combined virtual and in-person experiences and was shaped entirely around the organization’s industry context and leadership realities.",
  "What set this engagement apart was EuRadicle’s deep customization approach. Case studies, scenarios, and discussions were tailored to the organization’s operating environment, regulatory landscape, and participant roles, ensuring relevance, depth, and application without unnecessary technical complexity.",
],
outcomes : [
  "Clearer understanding of AI concepts and their relevance to leadership decisions",
  "Increased confidence in evaluating AI-driven outputs, risks, and ethical considerations",
  "Greater readiness to lead AI-enabled change and address resistance within teams",
  "A more responsible, bias-aware approach to AI adoption in day-to-day leadership practice"
],
outro: "The pathway enabled leaders to move from awareness to ownership, equipping them to guide AI conversations and initiatives with credibility, judgement, and intent. At EuRadicle, we believe AI awareness is not about mastering tools-it is about developing the judgement to lead responsibly in complexity. This program reflected that belief through its design, facilitation, and outcomes.",
outro: "The pathway enabled leaders to move from awareness to ownership, equipping them to guide AI conversations and initiatives with credibility, judgement, and intent. At EuRadicle, we believe AI awareness is not about mastering tools but it is about developing the judgement to lead responsibly in complexity. This program reflected that belief through its design, facilitation, and outcomes.",
bannerUrl: "/Home/compressed-AwarenessBanner.jpg",
hoveerImages: ["/Home/compressed-AwarenessHover1.jpg", "/Home/compressed-AwarenessHover2.jpg", "/Home/compressed-AwarenessHover3.jpg"]
}

const Aspire = {
 tagline: "Enabling women leaders to rise with confidence, clarity, and sustained impact",
 subtag: "A thoughtfully designed leadership journey focused on strengthening presence, decision-making, and personal sustainability for women leaders navigating complex professional and personal realities.",
 paras: [
  "As organizations accelerate growth and transformation, women leaders are often required to operate at high intensity across multiple roles, professional, personal, and relational. EuRadicle designed ASPIRE as a leadership journey that helps women leaders build confidence, resilience, and leadership presence while staying anchored to what matters most.",
  "The journey was recently delivered as a customized women leadership initiative within the insurance and financial services sector, with two parallel cohorts running simultaneously for different leadership teams. EuRadicle managed the engagement end-to-end, including journey design, coordination, facilitation, and ongoing stakeholder alignment, demonstrating our capability to handle complex, multi-track leadership journeys seamlessly.",
  "The journey blended immersive leadership sessions with back-to-back coaching conversations, creating space for reflection, dialogue, and application. Participants explored leadership confidence, influence, and decision-making, while also addressing a core reality many women leaders face, balancing the three worlds of work, family, and self. Every element of the journey was customized to reflect the organization’s context, leadership expectations, and brand identity, ensuring strong alignment and ownership."
 ],
 outcomes: [
  "Increased leadership confidence and clarity in navigating professional responsibilities",
  "Greater self-awareness around priorities, boundaries, and sustainable performance",
  "Improved ability to balance leadership demands across work, family, and personal identity",
  "Stronger sense of agency, presence, and long-term leadership direction"
 ],
 outro: "The journey created a supportive yet challenging space for women leaders to reflect, recalibrate, and lead with greater intention and confidence. At EuRadicle, we believe leadership development must address both performance and sustainability. Aspire reflects our philosophy of designing leadership journeys that are deeply personalized, context-aware, and human, while being delivered with strong journey governance and execution excellence.",
bannerUrl: "/Home/compressed-AspireBanner.png",
hoveerImages: ["/Home/compressed-AspireHover1.jpeg", "/Home/compressed-AspireHover2.jpeg", "/Home/compressed-AspireHover3.jpeg"]
}

const Catalyst = {
  tagline : "Developing Business Consultants for Strategic Roles",
  subtag: "A high-impact leadership journey designed to help experienced managers and senior leaders transition from functional execution to enterprise-level thinking, influence, and value creation.",
  paras: [
"Enterprise Consulting is EuRadicle’s consultative leadership pathway, built for professionals at a critical career inflection point, where success depends not just on delivery, but on how effectively leaders think, influence, and engage as strategic partners.",
"This journey was delivered under the client-facing name PRYSM – Professional Readiness for Young Strategic Minds, and was designed to enable senior leaders to operate as trusted internal consultants rather than functional specialists.",
"The journey focused on building structured and strategic thinking, audience-centric communication, stakeholder engagement, emotional regulation, personal leadership presence, and a value-driven consultative mindset. Through real business scenarios, reflective dialogue, and practical frameworks, participants explored how to navigate complex stakeholder environments, align diverse perspectives, and drive outcomes with clarity and credibility.",
    "Rather than teaching skills in isolation, Enterprise Consulting integrated strategic thinking, relationship building, influence, and personal leadership into a cohesive readiness journey, ensuring direct translation into day-to-day leadership effectiveness.",
  ],
  outcomes : [
"Sharper strategic and analytical thinking for enterprise-level decision-making",
"Greater confidence in influencing stakeholders across functions and hierarchies",
 "Improved ability to communicate value with clarity, intent, and credibility",   
 "Stronger consultative presence rooted in empathy, insight, and trust",   
 "Enhanced capability to navigate complexity and drive alignment in diverse teams",   
  ],
  outro: "Participants demonstrated a visible movement from solution execution to consultative ownership, along with tangible improvements in decision speed, stakeholder trust, collaboration, and clarity of thinking. At EuRadicle, we view professional readiness as a mindset shift, not a skill checklist. Enterprise Consulting reflects our belief that future-ready leaders create sustained business value by combining structured thinking, emotional intelligence, and consultative influence.",
bannerUrl: "/Home/compressed-PrysmBanner.jpeg",
hoveerImages: ["/Home/compressed-Enterprise3.jpeg", "/Home/compressed-PrysmHover2.jpeg", "/Home/PrysmHover1.jpeg",]
}

const Testimonials = [
  {
    org: "Ashiana Housing Limited",
    logoUrl: "logos/11.png",
    by: "Surbhi Dewaan",
    designation: "Vice President & Head HR",
    testimonial:
      "What truly sets EuRadicle apart is not just the breadth of its programs-from FTM and negotiation to delegation and customer service-but the depth of customization and ownership they bring to every engagement. Over our six-year association, EuRadicle has consistently approached learning as a long-term capability-building partnership rather than a one-time training intervention. The sustained Net Promoter Score of 90% reflects the trust, relevance, and measurable impact they have built with our teams over time."
  },
  {
    org: "LG Electronics Inc.",
    logoUrl: "logos/8.png",
    by: "Nidhi Kakkar",
    designation: "General Manager L&D & HR",
    testimonial:
      "EuRadicle delivered highly impactful training sessions for our SVC team, enabling a stronger customer-centric mindset and more effective engagement with our customers."
  },
  {
    org: "Societe Generale Global Solution Centre Private Limited",
    logoUrl: "logos/21.png",
    by: "Simrat Gahlot",
    designation: "Head Talent Management & Leadership Training",
    testimonial:
      "Participants highly valued the discussion-led approach and personalized focus of the sessions. The facilitators’ contribution to participant development was deeply appreciated and generated strong interest in future interventions. Societe Generale looks forward to continuing its collaboration with EuRadicle."
  },
  {
    org: "Arcesium LLC",
    logoUrl: "logos/4.png",
    by: "Rachel Mathew",
    designation: "Senior Manager L&D",
    testimonial:
      "The detailed Program Impact Report clearly demonstrated the tangible outcomes of the initiative and helped build strong leadership buy-in. The sessions were thoughtfully facilitated, with strong rapport established with participants, and supported by seamless logistics and governance that ensured smooth execution. As learning is a continuous journey, we look forward to conducting a refresher in the coming months and to continued engagements with EuRadicle in 2026."
  },
  {
    org: "Air India Limited",
    logoUrl: "logos/13.png",
    by: "",
    designation: "",
    testimonial:
      "The session was highly engaging and insightful, with excellent energy brought in by the trainer throughout. The program offered diverse perspectives and interactive activities that made learning both practical and impactful. Complex concepts were simplified effectively using real-life analogies, making them easy to understand and apply at work. The trainer’s passion and delivery style were truly commendable. I walked away with valuable insights and would love even more hands-on practice and peer discussions in future sessions. Overall, an excellent program , I look forward to participating in more such trainings."
  },
  {
    org: "Almaha Foods International Private Limited",
    logoUrl: "logos/28.png",
    by: "",
    designation: "",
    testimonial:
      "The training provided a clear and practical understanding of leadership and innovation. The facilitator delivered the concepts with great clarity and energy, making the learning experience both engaging and inspiring. Participants found the session highly valuable and appreciated the motivational approach that made the content relatable and easy to grasp. Overall, it was an excellent learning experience led by a dynamic and impactful trainer."
  },
  {
    org: "Arvind Limited",
    logoUrl: "logos/32.png",
    by: "",
    designation: "",
    testimonial:
      "The program created an engaging and motivating learning environment, making concepts easy to understand and apply. Participants valued the practical insights and real-world relevance, and many expressed the need for such trainings to be conducted regularly and extended to more team members. Overall, the experience was insightful, enriching, and highly appreciated."
  },
  {
    org: "Hindustan Coca Cola Beverages Private Limited",
    logoUrl: "logos/31.png",
    by: "",
    designation: "",
    testimonial:
      "A highly constructive and informative session, delivered with clarity and strong articulation. Participants appreciated the engaging approach and the relevance of the content and examples to real business contexts. Overall, a valuable and impactful learning experience."
  },
  {
    org: "Keller Ground Engineering India PVT. LTD.",
    logoUrl: "logos/26.png",
    by: "",
    designation: "",
    testimonial:
      "A well-structured and thoughtfully designed program that delivered meaningful and practical insights. Participants found the session highly engaging, with interactive activities and clear explanations that deepened their understanding of leadership concepts. The facilitator’s clarity, dedication, and ability to align learning with real workplace needs were especially appreciated. Overall, a powerful and impactful experience that left participants satisfied and better equipped for their professional journey."
  },
  {
    org: "PeepalCo",
    logoUrl: "/logos/peepalco.svg",
    h: 3,
    by: "",
    designation: "",
    testimonial:
      "An engaging and well-delivered session that provided practical frameworks directly applicable at work. Participants appreciated the structured approach, constructive insights, and overall clarity of the program. The experience was both valuable and impactful, reinforcing key concepts in a meaningful way."
  },
  {
    org: "Zscaler Softech India Pvt. Ltd",
    logoUrl: "logos/12.png",
    by: "",
    designation: "",
    testimonial:
      "The program delivered a highly beneficial and enjoyable learning experience. Participants described it as a great overall experience and expressed interest in extending the training across the organization. The session was well received, reinforcing its value and positive impact."
  },
  {
    org: "Pidilite Industries Limited",
    logoUrl: "logos/10.png",
    by: "",
    designation: "",
    testimonial: 
    "The session was well-organized, engaging, and highly relevant to real workplace scenarios. The practical examples and clear demonstrations made the concepts easy to apply. It offered valuable insights into becoming a better manager and leader. I would highly recommend this training and believe it should be conducted regularly."
  },
  {
    org: "Aditya Birla Management Corporation Private Limited",
    logoUrl: "logos/3.png",
    by: "",
    designation: "",
    testimonial: 
    "The session was highly interactive, well-structured, and professionally delivered. I appreciated the structured frameworks and practical insights that helped me think more like an internal consultant. The content and reference materials were clear and useful, making the learning meaningful and engaging. Overall, it was a great session that added real value"
  },
  {
    org: "WE Hub Foundation (initiative of the Government of Telangana)",
    logoUrl: "logos/2.png",
    by: "",
    designation: "",
    testimonial: 
    "The workshop truly opened the world of funding for us and made the fundamentals of fundraising much easier to understand and apply. I found the session highly useful, interactive, and well-organized - especially for founders beginning their fundraising journey. It shifted our mindset toward approaching negotiations with greater clarity and helped us realize the importance of having clear ownership of the fundraising process within the team. Overall, it was a very valuable experience, and I only wish we had more time."
  },
  {
    org: "CISCO Systems India Pvt. Ltd.",
    logoUrl: "logos/23.png",
    by: "",
    designation: "",
    testimonial: 
    "I would describe the experience as well-planned, welcoming, thoughtful, and systematic - brought to life through engaging storytelling. The program was structured in a way that made the learning both meaningful and inspiring. I truly hope we all emerge as transformative leaders after this journey."
  },
  {
    org: "DBS Technology Services India Private Limited",
    logoUrl: "logos/1.png",
    by: "",
    designation: "",
    testimonial: 
    "The program was well-structured and engaging, and it truly enhanced our skills. The flow of the training was seamless, with practical insights that we could immediately apply. It was a highly valuable experience, and I would confidently recommend it to our teams."
  },
  {
    org: "Alfred Karcher SE & Co.KG:",
    logoUrl: "logos/6.png",
    by: "",
    designation: "",
    testimonial: 
    "The culture change programs have left a lasting impact on me and provided pathways to bring alignment within my teams."
  }
];

export {Hero, Impact, Stories, Testimonials, Catalyst, Aspire, LeaderStory};
