import { GameCard } from '@/components/GameCard';
import { games } from '@/components/games';

export default function GamesPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Games library</p>
        <h1>Our games</h1>
        <p>
          The main showcase of Game Dan Team: cover art, trailers, screenshots,
          platforms and wishlist links.
        </p>
      </section>

      <section className="section games-grid">
        {games.map((game) => (
          <GameCard key={game.title} game={game} />
        ))}
      </section>
    </main>
  );
}
