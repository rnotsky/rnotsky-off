export type UpdateType = "product" | "company";

export type Update = {
  slug: string;
  type: UpdateType;
  label: string;
  title: string;
  description: string;
  date: string;
  featured?: boolean;
};

export const updates: Update[] = [
  {
    slug: "rnotsky-ai",
    type: "product",
    label: "RNOTSKY AI",
    title: "Building the next generation of intelligent technology.",
    description:
      "RNOTSKY AI is being developed to make intelligent technology more accessible, useful, and powerful.",
    date: "September 2026",
    featured: true,
  },

  {
    slug: "rnotsky-vision",
    type: "product",
    label: "RNOTSKY VISION",
    title: "Making machines see and understand.",
    description:
      "Our computer vision technology is focused on helping intelligent systems understand the world around them.",
    date: "August 2026",
  },

  {
    slug: "rnotsky-robotics",
    type: "product",
    label: "RNOTSKY ROBOTICS",
    title: "Intelligence beyond the screen.",
    description:
      "RNOTSKY Robotics explores intelligent machines, autonomous systems, and the future of physical AI.",
    date: "August 2026",
  },

  {
    slug: "building-rnotsky",
    type: "company",
    label: "COMPANY",
    title: "RNOTSKY is building toward a larger vision.",
    description:
      "We are bringing AI, software, computer vision, and robotics together under one technology ecosystem.",
    date: "August 2026",
  },

  {
    slug: "rnotsky-platform",
    type: "company",
    label: "COMPANY",
    title: "The RNOTSKY platform continues to evolve.",
    description:
      "We are building the foundation for products, tools, and intelligent systems designed for the next generation.",
    date: "August 2026",
  },
];