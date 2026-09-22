import type { TextLink } from "../components/linked-text";

export type ResearchArea = {
  slug: string;
  /** Two-digit index shown as a plate number on the card. */
  index: string;
  title: string;
  /** One line used on the home page grid. */
  summary: string;
  /** Full paragraphs used on /research. */
  body: string[];
  /** Short keyword chips. */
  keywords: string[];
  /**
   * Phrases inside `body` to turn into links. `text` must match the body
   * wording exactly; an empty `href` leaves the words as plain text, so you
   * can fill these in one at a time.
   */
  links?: TextLink[];
};

export const researchAreas: ResearchArea[] = [
  {
    slug: "correlated-quantum-states",
    index: "01",
    title: "Correlated quantum states of light and matter",
    summary:
      "Quantum correlations from electronic and vibrational degrees of freedom coupled to light in solid-state systems and molecules.",
    body: [
      "Our research explores fundamental interactions between light and matter in solid-state systems and molecules, with a particular focus on quantum correlations arising from electronic and vibrational degrees of freedom coupled to light. We experimentally investigate quantum coherence, multipartite entanglement, and nonlinear quantum effects in collective exciton-phonon (vibrational) systems confined within high-Q optical cavities. We aim for near-deterministic generation of quantum light-matter states that remain robust against large thermal fluctuations, even above room temperature - with applications in quantum communication, sensing, & imaging in the mid-IR / THz ranges.",
    ],
    keywords: [
      "exciton–phonon coupling",
      "high-Q cavities",
      "multipartite entanglement",
      "photon statistics",
    ],
  },
  {
    slug: "nonequilibrium-condensates",
    index: "02",
    title: "Nonequilibrium Bose–Einstein condensates",
    summary:
      "Light–matter condensates in optical cavities as open quantum systems, and the devices they make possible.",
    body: [
      "Since the pioneering experiments demonstrating Bose-Einstein condensation in ultra-cold atoms, BECs have been realized for photons, magnons, excitons, and cavity polaritons. Light-matter BECs in optical cavities represent a class of nonequilibrium open quantum systems capable of producing persistent macroscopic quantum states, where all particles share the same quantum properties, are indistinguishable, and collectively form a macroscopic coherent matter wave with long-range order. This makes nonequilibrium BECs a versatile platform for exploring the fundamental role of quantum correlations and coherence in condensed matter and molecular systems (see our collaborative project with Los Alamos National Lab).",
      "Over the past decade, advances in light-matter condensation have led to novel architectures for optoelectronic devices, including tunable coherent light sources that do not rely on population inversion, ultrafast all-optical transistors, and logic gates operating at the single-photon level under ambient conditions. Our group is at the forefront of this research, pushing boundaries in the field and collaborating with leading industries to develop next-generation building blocks and interconnects for high-performance computing (see TIA Seed project).",
    ],
    keywords: [
      "polariton condensates",
      "all-optical logic",
      "open quantum systems",
      "thermalisation",
    ],
    links: [
      { text: "Los Alamos National Lab", href: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.186903" },
      { text: "TIA Seed project", href: "https://www.vaikuttavuussaatio.fi/en/funded-projects/tandem-industry-academia-tia-seed-2024/" },
    ],
  },
  {
    slug: "quantum-control-large-masses",
    index: "03",
    title: "Quantum control over large mass motion",
    summary:
      "Hybrid RF and dark optical trapping under ultra-high vacuum, to bring macroscopic particles into the quantum regime.",
    body: [
      "Optical trapping of microscopic particles - such as neutral atoms, ions, and molecules in ultra-high vacuum (UHV) - has transformed AMO and quantum physics, laying the foundation for quantum computing and metrology. Recently, trapping technologies have been extended to macroscopic particles, including nano- and micrometer-sized solid-state objects comprising billions of atoms. The extreme sensitivity of their motion to external forces can be exploited in fundamental physics to search for dark matter, probe physics beyond the Standard Model, and might eventually provide insights into the question of whether the gravitational interaction is fundamentally quantum or not. Beyond fundamental research, it's a platform for sensing applications including gravimeters, pressure sensors, inertial force (acceleration and rotation) sensors, as well as electric and magnetic field sensors.",
      "However, the large size and complexity of macroscopic particles pose significant experimental challenges in bringing their motion into the quantum regime. Various decoherence processes tend to destroy quantum behavior of large masses. Advanced quantum optics methods and real-time optimal control mitigate strong decoherence, enabling the preparation of quantum states of motion, such as squeezed, superposition, or entangled states. We are developing a new hybrid trap that combines radio-frequency (RF) and dark optical trapping under UHV conditions, allowing for precise motion control of large-mass particles while suppressing quantum noise and internal heating - key obstacles to quantum experiments with macroscopic systems, e.g. entanglement generation (see collaborative project with the Aspelmeyer group in Vienna)",
    ],
    keywords: [
      "levitated optomechanics",
      "hybrid RF trap",
      "UHV",
      "decoherence",
    ],
    links: [{ text: "Aspelmeyer group in Vienna", href: "https://cordis.europa.eu/project/id/101030987/reporting" }],
  },
];
