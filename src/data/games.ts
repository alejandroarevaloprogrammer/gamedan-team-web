import type { Game } from "@/types/game";

export const games: Game[] = [
  {
    id: "ona-bar",
    slug: "ona-bar",
    title: "Ona Bar",

    featured: true,

    status: "in-development",

    platforms: ["windows", "steam"],

    genres: ["Visual Novel", "Anime"],

    shortDescription: "A special and dangerous place.",

    description:
      "The place where everything begins. This cool bar will become a special place for you. Be ready to decide what to do, find your way and discover how your actions may help you find love.",

    media: {
      cover: "/games/ona-bar/cover.png",

      trailer: {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=tusM0QiwaWw",
        embedUrl: "https://www.youtube.com/embed/tusM0QiwaWw",
      },

      screenshots: [],
    },

    links: {
      youtube: "https://www.youtube.com/watch?v=tusM0QiwaWw",
    },
  },

  {
    id: "distance-of-love",
    slug: "distance-of-love",
    title: "Distance of Love",

    featured: false,

    status: "released",

    platforms: ["web", "itch"],

    genres: ["Kinetic Novel", "Anime"],

    shortDescription: "A big distance between two hearts.",

    description:
      "They have a long-distance relationship, but is their love strong enough to last? She wants to be with him, although he seems to want to remain just friends. Finding love is possible—you only need to discover who is right for you.",

    media: {
      cover: "/games/distance-of-love/cover.png",
      screenshots: [],
    },

    links: {
      itch: "https://gamedanteam.itch.io/distance-of-love",
    },
  },

  {
    id: "downriver-ride",
    slug: "downriver-ride",
    title: "Downriver Ride",

    featured: false,

    status: "in-development",

    platforms: ["windows", "steam"],

    genres: ["Retro", "Casual", "Arcade"],

    shortDescription: "Avoid the dangers and collect coins.",

    description:
      "Play smart to survive and achieve the highest score. Collect coins and power-ups while avoiding the dangers along the river, and choose from nine available characters.",

    media: {
      cover: "/games/downriver-ride/cover.png",
      screenshots: [],
    },

    links: {},
  },
];