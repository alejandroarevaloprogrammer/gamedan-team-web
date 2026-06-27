import type { Game } from "@/types/game";

export const games: Game[] = [
  {
    id: "ona-bar",
    slug: "ona-bar",
    title: "Ona Bar",
    featured: true,
    status: "in-development",
    platforms: ["windows"],
    genres: ["Visual Novel", "Anime", "Narrative"],
    shortDescription:
      "A retro anime-inspired visual novel full of memorable characters and meaningful choices.",
    description:
      "Ona Bar is a retro anime-inspired visual novel that focuses on memorable characters, meaningful choices and emotional storytelling.",
    media: {
      cover: "/games/ona-bar/cover.jpg",
      logo: "/games/ona-bar/logo.png",
      icon: "/games/ona-bar/icon.png",
      trailer: {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=tusM0QiwaWw",
        embedUrl: "https://www.youtube.com/embed/tusM0QiwaWw",
      },
      screenshots: [],
    },
    links: {
      website: "/games/ona-bar",
      youtube: "https://www.youtube.com/watch?v=tusM0QiwaWw",
    },
  },
];
