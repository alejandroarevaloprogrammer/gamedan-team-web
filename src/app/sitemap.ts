import type { MetadataRoute } from "next";

import { brand } from "@/config/brand";
import { getAllGames } from "@/lib/games";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const games = getAllGames();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: brand.website,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${brand.website}/games`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${brand.website}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${brand.website}/contact`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const gamePages: MetadataRoute.Sitemap = games.map(
    (game) => ({
      url: `${brand.website}/games/${game.slug}`,
      changeFrequency:
        game.status === "released" ? "monthly" : "weekly",
      priority: game.featured ? 0.9 : 0.8,
    }),
  );

  const playPages: MetadataRoute.Sitemap = games
    .filter(
      (game) =>
        game.distribution.internalPlayUrl &&
        game.media.html5Entry,
    )
    .map((game) => ({
      url: `${brand.website}/play/${game.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [
    ...staticPages,
    ...gamePages,
    ...playPages,
  ];
}