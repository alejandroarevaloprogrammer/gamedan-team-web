import Link from 'next/link';
import { GameCard } from '@/components/GameCard';
import { games } from '@/components/games';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Indie studio · Anime visual novels</p>
          <h1>Stories that glow after midnight.</h1>
          <p>
            Game Dan Team crea juegos indie y novelas visuales con estética anime, decisiones emocionales y mundos llenos de color neón.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/games">Ver juegos</Link>
            <Link className="button button-secondary" href="/contact">Contactar</Link>
          </div>
        </div>
        <div className="hero-screen" id="trailer" aria-label="Featured trailer placeholder" />
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Featured games</p>
            <h2>Juegos en desarrollo</h2>
          </div>
          <p>Esta primera versión usa tarjetas visuales temporales. Después puedes sustituirlas por imágenes, key art, screenshots y trailers reales.</p>
        </div>
        <div className="games-grid">
          {games.map((game) => <GameCard key={game.title} game={game} />)}
        </div>
      </section>

      <section className="section feature-row">
        <div className="info-card"><strong>Visual novels</strong><p>Historias con personajes anime, rutas y decisiones.</p></div>
        <div className="info-card"><strong>Indie spirit</strong><p>Pequeño equipo, ideas raras y mucha personalidad.</p></div>
        <div className="info-card"><strong>Retrowave mood</strong><p>Rosas, violetas, cyan neón y fondos nocturnos.</p></div>
      </section>
    </main>
  );
}
