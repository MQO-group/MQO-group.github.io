export type NewsItem = {
  /** ISO date, e.g. "2026-09-01". Drives ordering and the displayed date. */
  date: string;
  title: string;
  body: string;
  tag?: "Paper" | "Event" | "People" | "Award" | "Lab";
  link?: { href: string; label: string };
  /**
   * Optional thumbnail under /public, e.g. "/news/qclm-ii.jpg".
   * See public/news/README.md. Items without one render as plain text.
   */
  image?: string;
  /** Describe the picture — required whenever `image` is set. */
  imageAlt?: string;
  /** Optional line printed under the thumbnail. */
  imageCaption?: string;
};

/** Newest first. */
export const news: NewsItem[] = [
  {
    date: "2026-09-02",
    title: "QCLM II announced for November 2026",
    tag: "Event",
    body: "The second Quantum Correlated Light and Matter conference will be held at Aalto University's Dipoli building on 3–6 November 2026, organised together with colleagues in Munich and Berlin.",
    link: { href: "https://qclm.aalto.fi", label: "Conference site" },
    image: "/news/qclm-2026.png",
  },
  {
    date: "2026-07-16",
    title: "Summer 2026 interns",
    tag: "People",
    body: "We are pleased to welcome our 2026 summer interns. Left to right in the photo: experimental interns Arjan Boom from Eindhoven University of Technology, working on polariton BEC in metasurfaces with bound states in the continuum, and Lauri Kinnunen from the University of Turku, focusing on high‑vacuum optical trapping of large‑mass particles; followed by theory interns Jussi Sukanen-Vilkki from Aalto University, studying nonequilibrium BEC via Lindblad-to–Fokker–Planck mappings, and Adrija Chattapadhyay from the Indian Institute of Technology Madras, exploring cavity‑controlled chemistry with BEC.",
    image: "/news/interns-2026.jpeg",
  },
  {
    date: "2025-11-05",
    title: "Hong-Ou-Mandel interferometry with trapped polariton condensates",
    tag: "Paper",
    body: "Two-particle interference between spatially separated polariton condensates, published in Physical Review B.",
  },
];
