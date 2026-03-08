export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  dateRange: string;
  description: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Mechanical Engineering Intern",
    company: "Westinghouse Electric Company",
    location: "Burlington, ON, Canada",
    dateRange: "May 2025 – Aug 2025",
    description:
      "Reverse engineered nuclear reactor instrumentation and redesigned key assemblies to improve manufacturability, precision, and maintenance safety for Pressurized Water Reactors.",
    bullets: [
      "Reverse engineered a neutron flux detector for Westinghouse PWRs by creating detailed 3D CAD models of components, subassemblies, and full assemblies in Autodesk Inventor.",
      "Verified CAD models through physical measurements of parts and assemblies, ensuring precise dimensional accuracy and consistency with the original device.",
      "Engineered a robust micro-adjustment mechanism for the limit switches, enhancing precision and improving overall assembly durability and manufacturability.",
      "Optimized the constant torque spring assembly by designing a backplate and a secure constraint system, improving ease of removal and enhancing operational safety during maintenance.",
      "Applied DFMA principles to redesign the transfer assembly housing, achieving a 21% weight reduction while improving structural rigidity and streamlining access for internal servicing.",
    ],
  },
  {
    id: 2,
    role: "Engineering Intern",
    company: "Ontario Power Generation",
    location: "Oshawa, ON, Canada",
    dateRange: "May 2024 – Apr 2025",
    description:
      "Supported project controls and site development activities for the Darlington New Nuclear Project (DNNP), a multi-reactor BWRX-300 SMR initiative.",
    bullets: [
      "Managed Class 3 cost tracking for four BWRX-300 SMRs, supporting funding approval for Reactor 1's lifecycle by building Excel pivot tables that informed executive challenge meetings.",
      "Produced monthly CPI/SPI, milestone, and risk reports, improving schedule alignment across all project phases by maintaining detailed Visio roadmaps.",
      "Assisted in establishing the site coordinate system and positioning monuments, enabling high-precision mapping for construction activities.",
      "Co-founded the DNNP drone team, streamlining site navigation and inspection by piloting a DJI Mini Pro and creating instructional videos to guide personnel to specific site locations.",
    ],
  },
];
