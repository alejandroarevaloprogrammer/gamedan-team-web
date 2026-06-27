export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk</h1>
        <p>Formulario visual de ejemplo. Más adelante se puede conectar con Formspree, Resend, Netlify Forms o una API propia.</p>
      </section>
      <section className="section contact-layout">
        <div className="info-card">
          <h2>Press, players & publishers</h2>
          <p>Escríbenos para prensa, colaboraciones, publishers, eventos o feedback de demos.</p>
          <div className="contact-actions">
            <a className="text-link" href="mailto:hello@gamedanteam.com">hello@gamedanteam.com</a>
          </div>
        </div>
        <div className="contact-panel">
          <form>
            <input placeholder="Nombre" aria-label="Nombre" />
            <input placeholder="Email" aria-label="Email" type="email" />
            <textarea placeholder="Mensaje" aria-label="Mensaje" />
            <button className="button" type="button">Enviar mensaje</button>
          </form>
        </div>
      </section>
    </main>
  );
}
