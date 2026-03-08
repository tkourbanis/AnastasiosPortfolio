export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  github: string;
  caseStudy: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Robotic Arm Design",
    description:
      "Designed and prototyped a 4-DOF robotic arm for pick-and-place operations. Performed static and dynamic structural analysis using FEA to optimize joint geometry and material selection.",
    tools: ["SolidWorks", "MATLAB", "Arduino", "FEA", "3D Printing"],
    image: "",
    github: "#",
    caseStudy: "#",
    category: "Robotics",
  },
  {
    id: 2,
    title: "CFD Airflow Simulation",
    description:
      "Conducted computational fluid dynamics analysis of airflow over an automotive spoiler profile. Optimized geometry to reduce drag coefficient by 18% while maintaining downforce targets.",
    tools: ["ANSYS Fluent", "SolidWorks", "Python", "CFD", "CAD"],
    image: "",
    github: "#",
    caseStudy: "#",
    category: "Fluid Mechanics",
  },
  {
    id: 3,
    title: "3D Printed Gear System",
    description:
      "Engineered a compound planetary gear system for a custom gearbox. Modeled tooth geometry with involute profiles and validated performance under load through iterative prototyping.",
    tools: ["Fusion 360", "GD&T", "3D Printing", "MATLAB", "SolidWorks"],
    image: "",
    github: "#",
    caseStudy: "#",
    category: "Manufacturing",
  },
  {
    id: 4,
    title: "Autonomous Rover Prototype",
    description:
      "Built a fully autonomous rover with obstacle avoidance and path planning for a university design competition. Integrated sensor fusion from LiDAR and ultrasonic modules with a ROS-based control stack.",
    tools: ["ROS", "Python", "SolidWorks", "LiDAR", "Raspberry Pi"],
    image: "",
    github: "#",
    caseStudy: "#",
    category: "Robotics",
  },
];
