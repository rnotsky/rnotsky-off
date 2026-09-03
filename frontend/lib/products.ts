import {
  AppWindow,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Eye,
  HardDrive,
  LockKeyhole,
  MonitorCog,
  Network,
} from "lucide-react";

export type ProductStatus =
  | "Available"
  | "In Development"
  | "Research"
  | "Coming Soon";

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  status: ProductStatus;
  icon: typeof AppWindow;
  tags: string[];
  href: string;
  featured?: boolean;
};

export const productCategories: ProductCategory[] = [
  {
    id: "apps",
    name: "Apps",
    slug: "apps",
    description:
      "Mobile applications designed to make everyday technology simpler, smarter and more secure.",
    status: "Coming Soon",
    icon: AppWindow,
    tags: ["apps", "mobile", "security"],
    href: "/products/apps",
  },

  {
    id: "software",
    name: "Software",
    slug: "software",
    description:
      "Powerful desktop software built for modern computing, entertainment and productivity.",
    status: "Coming Soon",
    icon: MonitorCog,
    tags: ["software", "windows", "desktop"],
    href: "/products/software",
  },

  {
    id: "ai",
    name: "AI",
    slug: "ai",
    description:
      "Intelligent systems designed to understand, reason, learn and assist.",
    status: "Coming Soon",
    icon: BrainCircuit,
    tags: ["ai", "intelligence", "machine learning"],
    href: "/products/ai",
    featured: true,
  },

  {
    id: "os",
    name: "OS",
    slug: "os",
    description:
      "A new generation of intelligent operating systems for connected computing.",
    status: "Coming Soon",
    icon: Cpu,
    tags: ["os", "platform", "computing"],
    href: "/products/os",
  },

  {
    id: "robotics",
    name: "Robotics",
    slug: "robotics",
    description:
      "Intelligent machines and autonomous systems built for the physical world.",
    status: "Coming Soon",
    icon: Network,
    tags: ["robotics", "robots", "automation"],
    href: "/products/robotics",
  },

  {
    id: "vision",
    name: "Vision",
    slug: "vision",
    description:
      "Computer vision technology that enables machines to see and understand.",
    status: "Coming Soon",
    icon: Eye,
    tags: ["vision", "computer vision", "recognition"],
    href: "/products/vision",
  },

  {
    id: "developer-tools",
    name: "Developer Tools",
    slug: "developer-tools",
    description:
      "APIs, SDKs and tools designed to help developers build with RNOTSKY.",
    status: "Coming Soon",
    icon: Code2,
    tags: ["developers", "api", "sdk"],
    href: "/products/developer-tools",
  },

  {
    id: "security",
    name: "Security",
    slug: "security",
    description:
      "Technology designed to protect identity, data and digital systems.",
    status: "Coming Soon",
    icon: LockKeyhole,
    tags: ["security", "privacy", "authentication"],
    href: "/products/security",
  },

  {
    id: "cloud",
    name: "Cloud",
    slug: "cloud",
    description:
      "Infrastructure for intelligent applications, services and connected systems.",
    status: "Coming Soon",
    icon: Cloud,
    tags: ["cloud", "infrastructure", "hosting"],
    href: "/products/cloud",
  },

  {
    id: "hardware",
    name: "Hardware",
    slug: "hardware",
    description:
      "Physical technology engineered to work with the RNOTSKY ecosystem.",
    status: "Coming Soon",
    icon: HardDrive,
    tags: ["hardware", "devices", "embedded"],
    href: "/products/hardware",
  },
];