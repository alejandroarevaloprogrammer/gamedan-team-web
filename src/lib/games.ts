import { games } from "@/data/games";
import type { Game, GameStatus } from "@/types/game";

export function getAllGames(): Game[] {
  return games;
}

export function getFeaturedGame(): Game {
  const featuredGame = games.find((game) => game.featured);

  if (!featuredGame) {
    throw new Error("No featured game found. Set featured: true in src/data/games.ts");
  }

  return featuredGame;
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}

export function getGamesByStatus(status: GameStatus): Game[] {
  return games.filter((game) => game.status === status);
}