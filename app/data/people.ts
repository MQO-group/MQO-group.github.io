export type Person = {
  name: string;
  /** Free text — the specific title shown under the name on the card. */
  role: string;
  /** Grouping bucket — see `personGroups` below for display order. */
  group: "lead" | "researcher" | "alumni";
  email?: string;
  phone?: string;
  /**
   * Portrait under /public, e.g. "/people/anton-profile-picture.jpeg".
   * The path must match the file exactly, extension case included — Windows
   * is forgiving about that but the deployed site is not. If the file isn't
   * there yet the card shows the person's monogram instead, so you can add
   * photos one at a time.
   */
  image?: string;
  /** Optional one-line research focus. */
  focus?: string;
  links?: { label: string; href: string }[];
};

/** Section order on /people. An empty group is skipped automatically. */
export const personGroups: { key: Person["group"]; label: string }[] = [
  { key: "lead", label: "Group leader" },
  { key: "researcher", label: "Researchers" },
  { key: "alumni", label: "Alumni" },
];

export const people: Person[] = [
  {
    name: "Anton V. Zasedatelev",
    image: "/people/anton-profile-picture.jpeg",
    role: "Assistant Professor",
    group: "lead",
    email: "anton.zasedatelev@aalto.fi",
    phone: "+358 50 340 6926",
  },
  {
    name: "Vladislav Yu. Shishkov",
    image: "/people/vlad-profile-picture.jpg",
    role: "Postdoctoral Researcher",
    group: "researcher",
    email: "vladislav.shishkov@aalto.fi",
  },
  {
    name: "Mohammad Amini",
    image: "/people/kuhsar-profile-picture.jpg",
    role: "Postdoctoral Researcher",
    group: "researcher",
    email: "mohammad.amini@aalto.fi",
    phone: "+358 50 322 7904",
  },
  {
    name: "Shivam Kumar",
    image: "/people/shivam-kumar.jpg",
    role: "Doctoral Researcher",
    group: "researcher",
    email: "shivam.kumar@aalto.fi",
    phone: "+358 50 478 6001",
  },
  {
    name: "Kelvin Ho",
    image: "/people/kelvin-profile-picture.jpg",
    role: "Doctoral Researcher",
    group: "researcher",
    email: "kelvin.ho@aalto.fi",
    phone: "+358 50 471 1787",
  },
  {
    name: "Lauri Kinnunen",
    image: "/people/lauri-profile-picture.jpg",
    role: "Research Assistant",
    group: "researcher",
    email: "lauri.1.kinnunen@aalto.fi",
    phone: "+358 44 336 0581",
  },
  {
    name: "Arjan Boom",
    image: "/people/arjan-profile-picture.jpeg",
    role: "Research Assistant",
    group: "researcher",
    email: "arjan.boom@aalto.fi",
  },
  {
    name: "Jussi Sukanen-Vilkki",
    image: "/people/jussi-profile-picture.jpeg",
    role: "Research Assistant",
    group: "researcher",
    email: "jussi.sukanen-vilkki@aalto.fi",
  },
  {
    name: "Adrija Chattopadhyay",
    image: "/people/adrija-profile-picture.jpeg",
    role: "Research Assistant",
    group: "researcher",
  },
  {
    name: "Patrick Illetschek",
    image: "/people/patrick-profile-picture.jpeg",
    role: "Research Assistant",
    group: "researcher",
  },
  {
    name: "Emily Haughton",
    image: "/people/emily-profile-picture.jpeg",
    role: "Research Assistant",
    group: "researcher",
  },
  {
    name: "Alexander Becker",
    image: "/people/alexander-profile-picture.jpeg",
    role: "Exchange Student",
    group: "researcher",
    email: "alexander.becker@aalto.fi",
  },

  // ----------------------------------------------------------------- alumni --
  {
    name: "Leoni Wrathall",
    image: "/people/leoni-profile-picture.jpeg",
    role: "Summer Intern 2025",
    group: "alumni",
  },
];
