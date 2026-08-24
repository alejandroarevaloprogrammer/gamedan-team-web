import type { Game } from "@/types/game";

export const games: Game[] = [
  // ==========================================================
  // ONA BAR
  // ==========================================================

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
      "The place where everything begins. Ona Bar will become a special place for you, where the choices you make can shape your path. Decide what to do, find your own way and discover how your actions may lead you to love.",

    media: {
      cover: "/games/ona-bar/cover.png",

      screenshots: [
        "/games/ona-bar/screenshots/01.png",
        "/games/ona-bar/screenshots/02.png",
      ],
    },

    soundtrack: {
      title: "Development Playlist",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1558097473&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      height: 450,
      externalUrl: "https://soundcloud.com/gamedanteam/sets/ona-bar-ost",
      externalLabel: "SoundCloud",
    },

    distribution: {},
  },

  // ==========================================================
  // END ONA BAR
  // ==========================================================

    // ==========================================================
  // MEMORY HAND
  // ==========================================================

  {
    id: "memory-hand",
    slug: "memory-hand",
    title: "Memory Hand",

    featured: false,

    status: "in-development",

    platforms: ["windows"],

    genres: ["Retro", "Casual", "Memory"],

    shortDescription:
      "Test your memory with a retro rock-paper-scissors challenge.",

    description:
      "Test your memory across 30 levels of this retro-inspired challenge. Memorize the characters, sharpen your concentration and discover a new twist on the classic rock-paper-scissors game.",

    media: {
      cover: "/games/memory-hand/cover.png",

      trailer: {
        type: "youtube",
        url: "https://www.youtube.com/watch?v=tusM0QiwaWw",
        embedUrl:
          "https://www.youtube-nocookie.com/embed/tusM0QiwaWw?rel=0",
      },

      screenshots: [
        "/games/memory-hand/screenshots/01.png",
        "/games/memory-hand/screenshots/02.png",
        "/games/memory-hand/screenshots/03.png",
        "/games/memory-hand/screenshots/04.png",
        "/games/memory-hand/screenshots/05.png",
        "/games/memory-hand/screenshots/06.png",
      ],
    },

    distribution: {},

    soundtrack: {
      title: "Development Playlist",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1226684647&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      height: 450,
      externalUrl: "https://soundcloud.com/gamedanteam/sets/memory-hand-ost",
      externalLabel: "SoundCloud",
    },
  },

  // ==========================================================
  // END MEMORY HAND
  // ==========================================================

  // ==========================================================
  // DOWNRIVER RIDE
  // ==========================================================

  {
    id: "downriver-ride",
    slug: "downriver-ride",
    title: "Downriver Ride",

    featured: false,

    status: "in-development",

    platforms: ["windows"],

    genres: ["Retro", "Casual", "Arcade"],

    shortDescription: "Ride the river, avoid dangers and collect coins.",

    description:
      "Ride down the river, collect coins and power-ups, and avoid the dangers that stand in your way. Survive for as long as you can, aim for the highest score and choose from nine different characters for your next run.",

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

    soundtrack: {
      title: "Development Playlist",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1445646940&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      height: 450,
      externalUrl:
        "https://soundcloud.com/gamedanteam/sets/downriver-ride-ost-wip",
      externalLabel: "SoundCloud",
    },

    distribution: {},
  },

  // ==========================================================
  // END DOWNRIVER RIDE
  // ==========================================================

  // ==========================================================
  // HACKER FRIEND
  // ==========================================================

  {
    id: "hacker-friend",
    slug: "hacker-friend",
    title: "Hacker Friend",

    featured: false,

    status: "in-development",

    platforms: ["web"],

    genres: ["Visual Novel", "Anime"],

    shortDescription: "A close friend by your side.",

    description:
      "Your friend is missing, and it is up to you to find him. Use your hacker skills to follow the trail and overcome the challenges along the way. Your actions could help bring him back, but earning his trust again may prove to be just as important as finding him.",

    media: {
      cover: "/games/hacker-friend/cover.png",

      screenshots: [
        "/games/hacker-friend/screenshots/01.png",
        "/games/hacker-friend/screenshots/02.png",
      ],
    },

    soundtrack: {
      title: "Development Playlist",
      embedUrl:
        "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1421279374&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      height: 450,
      externalUrl:
        "https://soundcloud.com/gamedanteam/sets/hacker-friend-ost",
      externalLabel: "SoundCloud",
    },

    distribution: {},
  },

  // ==========================================================
  // END HACKER FRIEND
  // ==========================================================

  // ==========================================================
  // DISTANCE OF LOVE
  // ==========================================================

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
      "A long-distance relationship puts two hearts to the test. She wants to be with him, while he seems determined to remain just friends. Follow their story as distance, feelings and uncertainty stand between them, and discover whether love can bring them closer together.",

    media: {
      cover: "/games/distance-of-love/cover.png",

      html5Entry:
        "/playable-games/distance-of-love/distanceoflove.html",

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
      internalPlayUrl: "/play/distance-of-love",
      itchUrl: "https://gamedanteam.itch.io/distance-of-love",
    },

    soundtrack: {
      title: "Original Soundtrack",
      embedUrl:
        "https://bandcamp.com/EmbeddedPlayer/album=1559153997/size=large/bgcol=ffffff/linkcol=de270f/tracklist=false/artwork=small/transparent=true/",
      height: 120,
      externalUrl:
        "https://gamedanteam.bandcamp.com/album/distance-of-love-ost",
      externalLabel: "Bandcamp",
    },

    releaseDate: "2021",
  },

  // ==========================================================
  // END DISTANCE OF LOVE
  // ==========================================================

  // ==========================================================
  // AKACRAYON
  // ==========================================================

  {
    id: "akacrayon",
    slug: "akacrayon",
    title: "Akacrayon",

    featured: false,

    status: "released",

    platforms: ["web"],

    genres: ["Visual Novel", "Anime"],

    shortDescription: "Live like a red crayon.",

    description:
      "See life from the perspective of a red crayon as he shares his thoughts and his unusual way of looking at the world. Follow his reflections, discover a different approach to everyday life and perhaps find a new perspective of your own along the way.",

    media: {
      cover: "/games/akacrayon/cover.png",

      html5Entry:
        "/playable-games/akacrayon/akacrayon.html",

      screenshots: [
        "/games/akacrayon/screenshots/01.png",
        "/games/akacrayon/screenshots/02.png",
        "/games/akacrayon/screenshots/03.png",
        "/games/akacrayon/screenshots/04.png",
        "/games/akacrayon/screenshots/05.png",
        "/games/akacrayon/screenshots/06.png",
      ],
    },

    distribution: {
      internalPlayUrl: "/play/akacrayon",
      itchUrl: "https://gamedanteam.itch.io/akacrayon",
    },

    soundtrack: {
      title: "Original Soundtrack",
      embedUrl:
        "https://bandcamp.com/EmbeddedPlayer/album=3574811137/size=large/bgcol=ffffff/linkcol=de270f/tracklist=false/artwork=small/transparent=true/",
      height: 120,
      externalUrl:
        "https://gamedanteam.bandcamp.com/album/akacrayon-ost-2",
      externalLabel: "Bandcamp",
    },

    releaseDate: "2019",
  },

  // ==========================================================
  // END AKACRAYON
  // ==========================================================

  // ==========================================================
  // COVOX PARK
  // ==========================================================

  {
    id: "covox-park",
    slug: "covox-park",
    title: "Covox Park",

    featured: false,

    status: "released",

    platforms: ["web"],

    genres: ["Kinetic Novel", "Anime"],

    shortDescription: "Love never ends.",

    description:
      "A pretty apple is crying, but what could be troubling her? Follow her journey alongside a friend who will stay by her side no matter what. As their adventure unfolds, discover whether friendship can grow into love and where their uncertain path will ultimately lead them.",

    media: {
      cover: "/games/covox-park/cover.png",

      html5Entry:
        "/playable-games/covox-park/covoxpark.html",

      screenshots: [
        "/games/covox-park/screenshots/01.png",
        "/games/covox-park/screenshots/02.png",
        "/games/covox-park/screenshots/03.png",
        "/games/covox-park/screenshots/04.png",
        "/games/covox-park/screenshots/05.png",
        "/games/covox-park/screenshots/06.png",
      ],
    },

    distribution: {
      internalPlayUrl: "/play/covox-park",
      itchUrl: "https://gamedanteam.itch.io/covox-park",
    },

    soundtrack: {
      title: "Original Soundtrack",
      embedUrl:
        "https://bandcamp.com/EmbeddedPlayer/album=3256840304/size=large/bgcol=ffffff/linkcol=de270f/tracklist=false/artwork=small/transparent=true/",
      height: 120,
      externalUrl:
        "https://gamedanteam.bandcamp.com/album/covox-park-ost-3",
      externalLabel: "Bandcamp",
    },

    releaseDate: "2019",
  }

  // ==========================================================
  // END COVOX PARK
  // ==========================================================

];