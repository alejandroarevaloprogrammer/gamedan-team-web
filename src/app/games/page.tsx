import { GameCard } from '@/components/GameCard';
import { games } from '@/components/games';

export default function GamesPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Games library</p>
        <h1>Our games</h1>
        <p>Aquí irán los juegos como elemento más importante de la web: portada, trailer, screenshots, plataformas y enlaces a wishlist.</p>
      </section>
      <section className="section games-grid">
        {games.map((game) => <GameCard key={game.title} game={game} />)}
      </section>
    </main>
  );
}
