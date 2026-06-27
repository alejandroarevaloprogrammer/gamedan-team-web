export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">About the team</p>
        <h1>Game Dan Team</h1>
      </section>

      <section className="section about-layout">
        <div className="info-card">
          <h2>Indie, anime and neon.</h2>
          <p>
            Game Dan Team is a small indie studio creating anime-inspired
            narrative experiences with memorable characters and expressive worlds.
          </p>
          <p>
            This section can grow with team bios, photos, logos, studio history
            and press kit links.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <strong>01 · Concept</strong>
            <p>Narrative ideas, visual tone and character design.</p>
          </div>

          <div className="timeline-item">
            <strong>02 · Prototype</strong>
            <p>Playable tests, UI, routes and dialogue systems.</p>
          </div>

          <div className="timeline-item">
            <strong>03 · Release</strong>
            <p>Trailer, screenshots, Steam page, demos and community.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
