export type GameStatus =
  | "released"
  | "in-development"
  | "prototype"
  | "coming-soon";

export type GamePlatform =
  | "windows"
  | "mac"
  | "linux"
  | "web"
  | "android"
  | "ios"
  | "steam"
  | "itch";

export type GameTrailer =
  | {
      type: "youtube";
      url: string;
      embedUrl: string;
      thumbnail?: string;
    }
  | {
      type: "mp4";
      url: string;
      thumbnail?: string;
    };

export type GameMedia = {
  cover: string;
  logo?: string;
  icon?: string;
  hero?: string;
  screenshots?: string[];
  trailer?: GameTrailer;
};

export type GameLinks = {
  steam?: string;
  itch?: string;
  website?: string;
  youtube?: string;
  pressKit?: string;
};

export type Game = {
  id: string;
  slug: string;
  title: string;

  featured: boolean;

  status: GameStatus;
  platforms: GamePlatform[];

  genres: string[];

  shortDescription: string;
  description: string;

  media: GameMedia;

  links: GameLinks;

  releaseYear?: number;
};