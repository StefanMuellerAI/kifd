import type { MetadataRoute } from "next";
import { POSITIONEN } from "@/lib/content/positionen";

const BASE = "https://kifd.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/programm`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/partei`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/selbstkritik`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/positionen`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE}/presse`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE}/fragen`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/unterstuetzer`, changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${BASE}/ki-ausweis`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/impressum`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE}/datenschutz`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const positionPages = POSITIONEN.map((pos) => ({
    url: `${BASE}/positionen/${pos.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...positionPages];
}
