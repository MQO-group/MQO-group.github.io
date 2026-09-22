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
};

export const researchAreas: ResearchArea[] = [
  {
    slug: "correlated-quantum-states",
    index: "01",
    title: "Correlated quantum states of light and matter",
    summary:
      "Quantum correlations from electronic and vibrational degrees of freedom coupled to light in solid-state systems and molecules.",
    body: [
      "Our research explores fundamental interactions between light and matter in solid-state systems and molecules, with a particular focus on quantum correlations arising from electronic and vibrational degrees of freedom coupled to light.",
      "We investigate quantum coherence, multipartite entanglement, and nonlinear quantum effects in collective exciton–phonon (vibrational) systems confined within high-Q optical cavities.",
      "The long-term aim is robust quantum light–matter states that survive above room temperature, opening a route to quantum communication, sensing, and imaging outside the cryostat.",
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
      "Light–matter BECs in optical cavities represent a class of nonequilibrium open quantum systems capable of producing persistent macroscopic quantum states, where all particles share the same quantum properties, are indistinguishable, and collectively form a macroscopic coherent matter wave with long-range order.",
      "Recent advances have led to novel architectures for optoelectronic devices, including tunable coherent light sources that do not rely on population inversion, ultrafast all-optical transistors, and logic gates operating at the single-photon level under ambient conditions.",
      "We study how these condensates form, thermalise, and decohere — and how far their coherence can be pushed while they remain driven and dissipative.",
    ],
    keywords: [
      "polariton condensates",
      "all-optical logic",
      "open quantum systems",
      "thermalisation",
    ],
  },
  {
    slug: "quantum-control-large-masses",
    index: "03",
    title: "Quantum control over large mass motion",
    summary:
      "Hybrid RF and dark optical trapping under ultra-high vacuum, to bring macroscopic particles into the quantum regime.",
    body: [
      "Advanced control methods enable the preparation of quantum states of motion, such as squeezed, superposition, or entangled states — but for masses far beyond the atomic scale, decoherence sets the terms.",
      "We are developing a new hybrid trap that combines radio-frequency (RF) and dark optical trapping under UHV conditions, so that a levitated particle can be held with minimal photon recoil heating while still being read out optically.",
      "The goal is quantum state preparation of genuinely macroscopic objects, and a clean experimental handle on where the quantum-to-classical boundary actually sits.",
    ],
    keywords: [
      "levitated optomechanics",
      "hybrid RF trap",
      "UHV",
      "decoherence",
    ],
  },
];
