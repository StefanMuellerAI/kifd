import type { MetadataRoute } from "next";
import { POSITIONEN } from "@/lib/content/positionen";
import { routing } from "@/i18n/routing";

const BASE = "https://kifd.org";

const paths = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/programm", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/partei", changeFrequency: "monthly" as const, priority: 0.8 },
  {
    path: "/selbstkritik",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  { path: "/positionen", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/presse", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/fragen", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/wahlomat", changeFrequency: "monthly" as const, priority: 0.9 },
  {
    path: "/unterstuetzer",
    changeFrequency: "daily" as const,
    priority: 0.8,
  },
  { path: "/ki-ausweis", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/impressum", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly" as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of paths) {
      entries.push({
        url: `${BASE}/${locale}${page.path}`,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, `${BASE}/${l}${page.path}`])
          ),
        },
      });
    }

    for (const pos of POSITIONEN) {
      entries.push({
        url: `${BASE}/${locale}/positionen/${pos.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${BASE}/${l}/positionen/${pos.slug}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
