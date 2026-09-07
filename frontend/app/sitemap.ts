import type { MetadataRoute } from "next";

const BASE_URL = "https://rnotsky.com";

const routes = [
  {
    path: "",
    priority: 1.0,
  },
  {
    path: "/about",
    priority: 0.8,
  },
  {
    path: "/ai",
    priority: 0.8,
  },
  {
    path: "/ceo",
    priority: 0.7,
  },
  {
    path: "/community",
    priority: 0.7,
  },
  {
    path: "/contact",
    priority: 0.6,
  },
  {
    path: "/cookies",
    priority: 0.3,
  },
  {
    path: "/partners",
    priority: 0.7,
  },
  {
    path: "/products",
    priority: 0.9,
  },
  {
    path: "/products/ai",
    priority: 0.8,
  },
  {
    path: "/products/apps",
    priority: 0.8,
  },
  {
    path: "/products/software",
    priority: 0.8,
  },
  {
    path: "/profile",
    priority: 0.6,
  },
  {
    path: "/services",
    priority: 0.8,
  },
  {
    path: "/support",
    priority: 0.6,
  },
  {
    path: "/terms",
    priority: 0.3,
  },
  {
    path: "/updates",
    priority: 0.8,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    priority,
  }));
}