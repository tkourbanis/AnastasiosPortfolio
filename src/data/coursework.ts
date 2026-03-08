export interface Course {
  id: number;
  name: string;
  code: string;
  category: string;
}

export const courses: Course[] = [
  { id: 1,  name: "Thermodynamics",                                      code: "", category: "Thermal & Fluids" },
  { id: 2,  name: "Fluid Mechanics",                                      code: "", category: "Thermal & Fluids" },
  { id: 3,  name: "Thermal Energy Conversion",                            code: "", category: "Thermal & Fluids" },
  { id: 4,  name: "Thermal and Machine Design of Nuclear Power Reactors", code: "", category: "Energy Systems" },
  { id: 5,  name: "Nuclear Reactor Theory and Design",                    code: "", category: "Energy Systems" },
  { id: 6,  name: "Sustainable Energy Systems",                           code: "", category: "Energy Systems" },
  { id: 7,  name: "Machine Design",                                       code: "", category: "Design & Manufacturing" },
  { id: 8,  name: "Mechanics of Solids II",                               code: "", category: "Solid Mechanics" },
];

export const categories = [
  "All",
  "Thermal & Fluids",
  "Energy Systems",
  "Design & Manufacturing",
  "Solid Mechanics",
];
