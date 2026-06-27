export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk</h1>
        <p>
          A visual contact section prepared for press, players, publishers,
          collaborations and demo feedback.
        </p>
      </section>

      <section className="section contact-layout">
        <div className="info-card">
          <h2>Press, players & publishers</h2>
          <p>
            Reach out for press, collaborations, publishing opportunities,
            events or feedback.
          </p>

          <div className="contact-actions">
            <a className="text-link" href="mailto:hello@gamedanteam.com">
              hello@gamedanteam.com
            </a>
          </div>
        </div>

        <div className="contact-panel">
          <form>
            <input placeholder="Name" aria-label="Name" />
            <input placeholder="Email" aria-label="Email" type="email" />
            <textarea placeholder="Message" aria-label="Message" />
            <button className="button" type="button">
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
