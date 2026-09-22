/* =============================================================================
   Publications — a plain list of links.

   This is the only place publications are defined. Each entry is a title, a
   URL, and a `show` flag. Nothing is fetched or generated: what you put here
   is exactly what appears, in exactly this order.

   TO ADVERTISE A PAPER
     1. Paste its link into `url` (a DOI link, the journal page, arXiv —
        whatever you want people to land on).
     2. Set `show: true`.

   TO TAKE ONE DOWN
     Set `show: false`. The entry stays in the file as a record; it just
     stops appearing on the site. Nothing needs deleting.

   The publications page is currently unlinked from the site navigation, so
   none of this is live yet — it is here so the list is ready when you want
   to switch it back on. Ask and it takes one line.
   ========================================================================== */

export type Publication = {
  /** Link text. Usually the paper's title. */
  title: string;
  /** Where the link points. Empty string means "no link yet". */
  url: string;
  /** Set true to show it on the site. Anything false stays hidden. */
  show: boolean;
  /** Optional, shown as small grey text under the title. */
  authors?: string;
  journal?: string;
  year?: number;
  /** Optional flag for a paper you want pulled out as a highlight. */
  highlight?: boolean;
};

export const publications: Publication[] = [
  {
    title: "Hong-Ou-Mandel interferometry with trapped polariton condensates",
    url: "https://journals.aps.org/prb/abstract/10.1103/nxx1-sc3x",
    show: true,
    authors:
      "S. Baryshev, I. Smirnov, I. Gnusov, T. Cookson, A. Zasedatelev, S. Kilin, P. G. Lagoudakis",
    journal: "Physical Review B",
    year: 2025,
  },
  {
    title: "Temporal bandwidth of consecutive polariton condensation",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.111.L161403",
    show: true,
    authors:
      "M. Misko, A. D. Putintsev, D. Sannikov, A. V. Zasedatelev, U. Scherf, P. G. Lagoudakis",
    journal: "Physical Review B",
    year: 2025,
  },
  {
    title:
      "Steady-state entanglement of interacting masses in free space through optimal feedback control",
    url: "https://journals.aps.org/prresearch/abstract/10.1103/hxc8-fxcb",
    show: true,
    authors:
      "K. Winkler, A. V. Zasedatelev, B. A. Stickler, U. Delić, A. Deutschmann-Olek, M. Aspelmeyer",
    journal: "Physical Review Research",
    year: 2025,
  },
  {
    title: "Non-Hermitian dynamics and non-reciprocity of optically coupled nanoparticles",
    url: "https://www.nature.com/articles/s41567-024-02589-8",
    show: true,
    authors:
      "M. Reisenbauer, H. Rudolph, L. Egyed, K. Hornberger, A. V. Zasedatelev, M. Abuzarli, B. A. Stickler, U. Delić",
    journal: "Nature Physics",
    year: 2024,
    highlight: false,
  },
  {
    title: "Room temperature, cascadable, all-optical polariton universal gates",
    url: "https://www.nature.com/articles/s41467-024-49690-3",
    show: true,
    authors:
      "D. A. Sannikov, A. V. Baranikov, A. D. Putintsev, M. Misko, A. V. Zasedatelev, U. Scherf, P. G. Lagoudakis",
    journal: "Nature Communications",
    year: 2024,
    highlight: false,
  },
  {
    title:
      "Sympathetic mechanism for vibrational condensation enabled by polariton optomechanical interaction",
    url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.186903",
    show: true,
    authors:
      "V. Yu. Shishkov, E. S. Andrianov, S. Tretiak, K. B. Whaley, A. V. Zasedatelev",
    journal: "Physical Review Letters",
    year: 2024,
    highlight: false,
  },
  {
    title: "Photon statistics of organic polariton condensates",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.110.045125",
    show: true,
    authors:
      "A. D. Putintsev, A. V. Zasedatelev, V. Yu. Shishkov, M. Misko, D. A. Sannikov, E. S. Andrianov, Yu. E. Lozovik, U. Scherf, P. G. Lagoudakis",
    journal: "Physical Review B",
    year: 2024,
  },
  {
    title: "Room-temperature optomechanics with light-matter condensates",
    url: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.110.134321",
    show: true,
    authors: "V. Yu. Shishkov, E. S. Andrianov, A. V. Zasedatelev",
    journal: "Physical Review B",
    year: 2024,
  },
  {
    title: "Thermalization rate of polaritons in strongly-coupled molecular systems",
    url: "https://onlinelibrary.wiley.com/doi/10.1515/nanoph-2023-0800",
    show: true,
    authors:
      "E. A. Tereshchenkov, I. V. Panyukov, M. Misko, V. Yu. Shishkov, E. S. Andrianov, A. V. Zasedatelev",
    journal: "Nanophotonics",
    year: 2024,
  },
  {
    title:
      "Ultrafast optical control of polariton energy in an organic semiconductor microcavity",
    url: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/adom.202300262",
    show: true,
    authors:
      "K. E. McGhee, M. Guizzardi, R. Jayaprakash, K. Georgiou, T. Jessewitsch, U. Scherf, G. Cerullo, A. Zasedatelev, T. Virgili, P. G. Lagoudakis, D. G. Lidzey",
    journal: "Advanced Optical Materials",
    year: 2023,
  },
];

/** What the site actually shows — order preserved, hidden entries dropped. */
export const visiblePublications = publications.filter((p) => p.show);
