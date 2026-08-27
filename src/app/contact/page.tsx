import type { Metadata } from "next";

import { brand } from "@/config/brand";

import { ContactForm } from "./ContactForm";
import styles from "./ContactPage.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GameDan Team for general questions, collaborations, press enquiries and information about our games.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact",
    description:
      "Contact GameDan Team for general questions, collaborations, press enquiries and information about our games.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section
        className={styles.hero}
        aria-labelledby="contact-title"
      >
        <p className="eyebrow">Contact</p>

        <h1 id="contact-title">
          Let&apos;s talk about games.
        </h1>

        <p className={styles.heroText}>
          Contact GameDan Team for general questions,
          collaborations, press enquiries or information about
          our projects.
        </p>
      </section>

      <section
        className={styles.contactSection}
        aria-labelledby="contact-form-title"
      >
        <aside className={styles.information}>
          <div>
            <p className="eyebrow">Get in Touch</p>

            <h2>We would love to hear from you.</h2>

            <p>
              Whether you are a player, developer, creator or
              member of the press, you can send us a message
              using the form.
            </p>
          </div>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>Email</p>

              <a href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
            </div>

            <div className={styles.contactItem}>
              <p className={styles.contactLabel}>
                Typical enquiries
              </p>

              <ul>
                <li>General questions</li>
                <li>Business and collaborations</li>
                <li>Press and content creators</li>
                <li>Game support</li>
              </ul>
            </div>
          </div>
        </aside>

        <div className={styles.formPanel}>
          <div className={styles.formHeader}>
            <p className="eyebrow">Send a Message</p>

            <h2 id="contact-form-title">
              How can we help?
            </h2>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}