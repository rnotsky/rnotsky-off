import type { MetadataRoute } from "next";

const BASE_URL = "https://rnotsky.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/ai",
    "/ceo",
    "/community",
    "/contact",
    "/cookies",
    "/partners",
    "/products",
    "/products/ai",
    "/products/apps",
    "/products/software",
    "/profile",
    "/services",
    "/support",
    "/terms",
    "/updates",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}