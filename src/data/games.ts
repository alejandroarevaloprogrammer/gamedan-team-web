import type { Game } from "@/types/game";

export const games: Game[] = [
  {
    id: "ona-bar",
    slug: "ona-bar",
    title: "Ona Bar",

    featured: true,

    status: "in-development",

    platforms: ["windows"],

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

      screenshots: [
        "/games/ona-bar/screenshots/01.png",
        "/games/ona-bar/screenshots/02.png",
      ],
    },

    distribution: {},
  },

  {
    id: "distance-of-love",
    slug: "distance-of-love",
    title: "Distance of Love",

    featured: false,

    status: "released",

    platforms: ["web"],

    genres: ["Kinetic Novel", "Anime"],

    shortDescription: "A big distance between two hearts.",

    description:
      "They have a long-distance relationship, but is their love strong enough to last? She wants to be with him, although he seems to want to remain just friends. Finding love is possible—you only need to discover who is right for you.",

    media: {
      cover: "/games/distance-of-love/cover.png",

      screenshots: [
        "/games/distance-of-love/screenshots/01.png",
        "/games/distance-of-love/screenshots/02.png",
        "/games/distance-of-love/screenshots/03.png",
        "/games/distance-of-love/screenshots/04.png",
        "/games/distance-of-love/screenshots/05.png",
        "/games/distance-of-love/screenshots/06.png",
      ],
    },

    distribution: {
      itchUrl: "https://gamedanteam.itch.io/distance-of-love",
    },

    releaseDate: "2021",
  },

  {
    id: "downriver-ride",
    slug: "downriver-ride",
    title: "Downriver Ride",

    featured: false,

    status: "in-development",

    platforms: ["windows"],

    genres: ["Retro", "Casual", "Arcade"],

    shortDescription: "Avoid the dangers and collect coins.",

    description:
      "Play smart to survive and achieve the highest score. Collect coins and power-ups while avoiding the dangers along the river, and choose from nine available characters.",

    media: {
      cover: "/games/downriver-ride/cover.png",

      screenshots: [
        "/games/downriver-ride/screenshots/01.png",
        "/games/downriver-ride/screenshots/02.png",
        "/games/downriver-ride/screenshots/03.png",
        "/games/downriver-ride/screenshots/04.png",
        "/games/downriver-ride/screenshots/05.png",
        "/games/downriver-ride/screenshots/06.png",
      ],
    },

    distribution: {},
  },
];