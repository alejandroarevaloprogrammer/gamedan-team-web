import Link from 'next/link';
import { GameCard } from '@/components/GameCard';
import { games } from '@/components/games';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy fade-in">
          <p className="eyebrow">Indie studio · Anime visual novels</p>
          <h1>Stories that glow after midnight.</h1>
          <p>
            Game Dan Team creates anime-inspired indie games and visual novels
            about emotional choices, unforgettable characters and neon worlds.
          </p>

          <div className="hero-actions">
            <Link className="button" href="/games">
              View games
            </Link>
            <Link className="button button-secondary" href="/contact">
              Contact us
            </Link>
          </div>
        </div>

        <div className="hero-screen hover-scale" id="trailer" aria-label="Featured trailer placeholder" />
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Featured games</p>
            <h2>Games in development</h2>
          </div>
          <p>
            Visual-first cards prepared for cover art, screenshots, trailers,
            Steam pages and wishlist links.
          </p>
        </div>

        <div className="games-grid">
          {games.map((game) => (
            <GameCard key={game.title} game={game} />
          ))}
        </div>
      </section>

      <section className="section feature-row">
        <div className="info-card">
          <strong>Visual novels</strong>
          <p>Anime-inspired stories with characters, routes and emotional choices.</p>
        </div>

        <div className="info-card">
          <strong>Indie spirit</strong>
          <p>Small team, strange ideas and games with a strong personal identity.</p>
        </div>

        <div className="info-card">
          <strong>Retrowave mood</strong>
          <p>Pink, purple, cyan neon and midnight backgrounds.</p>
        </div>
      </section>
    </main>
  );
}
