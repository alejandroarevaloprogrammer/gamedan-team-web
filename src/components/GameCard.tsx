export type Game = {
  title: string;
  genre: string;
  description: string;
  status: string;
  imageGradient: string;
  trailerLabel: string;
};

export function GameCard({ game }: { game: Game }) {
  return (
    <article className="game-card">
      <div className="game-poster" style={{ background: game.imageGradient }}>
        <span className="poster-badge">{game.status}</span>
        <span className="poster-title">{game.title}</span>
      </div>

      <div className="game-card-body">
        <p className="eyebrow">{game.genre}</p>
        <h3>{game.title}</h3>
        <p>{game.description}</p>

        <div className="card-actions">
          <a href="#trailer" className="button button-small">
            {game.trailerLabel}
          </a>
          <a href="#" className="text-link">
            View details
          </a>
        </div>
      </div>
    </article>
  );
}
