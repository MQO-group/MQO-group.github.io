export type Opening = {
  title: string;
  level: "Postdoctoral" | "Doctoral" | "Master's thesis" | "Research assistant";
  status: "open" | "rolling" | "closed";
  /** Free text, e.g. "15 September 2026" or "Rolling". */
  deadline: string;
  body: string[];
  applyHref?: string;
};

export const openings: Opening[] = [
  {
    title: "Postdoctoral researcher — quantum optomechanics with polaritons",
    level: "Postdoctoral",
    status: "open",
    deadline: "15 September 2026",
    body: [
      "A joint position between the MQO and QNOF labs. The project aims to reach the quantum regime of optomechanics with polaritons in GaAs/AlAs-based microcavities.",
      "The position is full-time and initially funded for two years, with the possibility of extension.",
    ],
    applyHref: "mailto:anton.zasedatelev@aalto.fi",
  },
];

/** Shown on /join regardless of whether any formal opening is listed. */
export const openApplication = {
  heading: "No matching opening?",
  body: "We are always glad to hear from strong candidates in experimental and theoretical quantum optics. Doctoral and master's thesis projects are arranged on a rolling basis — write to Anton with a CV, a transcript, and a short note on which of our research directions interests you and why.",
  email: "anton.zasedatelev@aalto.fi",
};

export const thesisTopics = [
  "Photon correlation measurements on organic polariton condensates",
  "Cavity design and characterisation for high-Q molecular microcavities",
  "Control electronics and feedback for levitated nanoparticle traps",
  "Numerical modelling of open-system polariton dynamics",
];
