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
            Somos un equipo indie centrado en crear experiencias narrativas con estética anime, personajes memorables y mundos visualmente potentes.
          </p>
          <p>
            Esta sección puede crecer con biografías del equipo, fotos, logos, historia del estudio y enlaces al press kit.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-item"><strong>01 · Concept</strong><p>Ideas narrativas, tono visual y diseño de personajes.</p></div>
          <div className="timeline-item"><strong>02 · Prototype</strong><p>Pruebas jugables, UI, rutas y sistemas de diálogo.</p></div>
          <div className="timeline-item"><strong>03 · Release</strong><p>Trailer, screenshots, Steam page, demos y comunidad.</p></div>
        </div>
      </section>
    </main>
  );
}
