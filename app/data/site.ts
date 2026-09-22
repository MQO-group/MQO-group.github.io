/**
 * Global site facts. Edit here, not in the components.
 */

export const site = {
  name: "Macroscopic Quantum Optics",
  shortName: "MQO",
  tagline: "Quantum optics at large scale and complexity",
  department: "Department of Applied Physics",
  university: "Aalto University",
  url: "https://mqo.aalto.fi",
  description:
    "The Macroscopic Quantum Optics group at Aalto University studies quantum phenomena in large-scale and complex systems using experimental quantum optics in discrete and continuous variables.",
  lead: {
    name: "Anton V. Zasedatelev",
    role: "Assistant Professor",
    email: "anton.zasedatelev@aalto.fi",
    phone: "+358 50 340 6926",
  },
  address: {
    lines: [
      "Department of Applied Physics",
      "Aalto University School of Science",
      "Tekniikantie 17A, 02150 Espoo",
      "Finland",
    ],
  },
  links: {
    aalto:
      "https://www.aalto.fi/en/department-of-applied-physics/macroscopic-quantum-optics-mqo",
    qclm: "https://qclm.aalto.fi",
    linkedin:
          "https://www.linkedin.com/company/macroscopic-quantum-optics/",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/people", label: "People" },
  { href: "/publications", label: "Publications" },
  { href: "/news", label: "News" },
] as const;
