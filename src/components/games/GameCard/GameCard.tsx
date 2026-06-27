import type { Game } from "@/types/game";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <article>
      <h3>{game.title}</h3>
    </article>
  );
}
