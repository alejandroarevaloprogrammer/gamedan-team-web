import type { Metadata } from "next";
import Link from "next/link";

import { brand } from "@/config/brand";

import styles from "./PrivacyPage.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how GameDan Team handles personal information submitted through this website.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Learn how GameDan Team handles personal information submitted through this website.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className={styles.main}>
      <section
        className={styles.hero}
        aria-labelledby="privacy-title"
      >
        <p className="eyebrow">Legal</p>

        <h1 id="privacy-title">Privacy Policy</h1>

        <p className={styles.heroText}>
          This Privacy Policy explains how {brand.name} handles
          personal information when you use this website or contact us.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Who We Are</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Data controller</h2>

          <p>
            This website is operated by <strong>{brand.name}</strong>.
          </p>

          <p>
            For questions concerning privacy or the processing of
            personal information, you can contact us at{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Contact Form</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Information you provide</h2>

          <p>
            When you use our contact form, we receive the information
            you choose to submit, including your name, email address,
            enquiry type and message.
          </p>

          <p>
            We use this information to receive, review and respond to
            your enquiry and to communicate with you when necessary.
          </p>

          <p>
            Providing this information is voluntary. However, if you
            do not provide the information necessary to understand
            and respond to your enquiry, we may be unable to reply.
          </p>

          <p>
            Please do not include unnecessary sensitive personal
            information in your message.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Legal Basis</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Why we process contact information</h2>

          <p>
            The legal basis for processing information submitted
            through the contact form depends on the nature of your
            enquiry.
          </p>

          <p>
            Where your enquiry concerns a potential service,
            collaboration or other arrangement and you ask us to take
            steps before entering into an agreement, processing may be
            necessary in order to take those steps at your request.
          </p>

          <p>
            For other legitimate enquiries, processing may be based on
            our legitimate interest in receiving, managing and
            responding to communications addressed to us, provided
            that this interest is not overridden by your rights and
            freedoms.
          </p>

          <p>
            Technical information used for spam and abuse prevention
            is processed for our legitimate interest in protecting the
            website, contact form and communications from misuse.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Security</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Spam prevention and technical information</h2>

          <p>
            The contact form uses technical measures designed to
            prevent automated spam and abuse.
          </p>

          <p>
            This includes a hidden anti-bot field and temporary rate
            limiting based on a hashed representation of the IP
            address from which a form submission is made.
          </p>

          <p>
            Rate-limiting information is used for security and abuse
            prevention and is limited to a short technical window.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Messages</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>How contact messages are handled</h2>

          <p>
            Messages submitted through the contact form are delivered
            to us by email so that we can review and respond to your
            enquiry.
          </p>

          <p>
            The website does not use a separate contact database to
            store form submissions.
          </p>

          <p>
            Contact correspondence may be retained for as long as
            reasonably necessary to manage the enquiry, maintain
            relevant records, or comply with applicable obligations.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Recipients</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Who may process your information</h2>

          <p>
            Personal information submitted through the contact form
            may be processed through the technical and email services
            used to operate the website and deliver communications.
          </p>

          <p>
            We do not use contact form information for unrelated
            purposes or sell personal information submitted through
            the form.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">External Media</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Third-party media services</h2>

          <p>
            Some pages contain embedded media from third-party
            services such as YouTube, SoundCloud and Bandcamp.
          </p>

          <p>
            These external media players are blocked until you choose
            to accept external media. If enabled, the relevant
            provider may receive technical information and use
            cookies or similar technologies according to its own
            policies.
          </p>

          <p>
            You can learn more about how external media is handled in
            our <Link href="/cookies">Cookie Policy</Link>.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Your Rights</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Your personal information</h2>

          <p>
            Depending on the applicable data protection law and the
            circumstances of the processing, you may have rights of
            access, rectification, erasure, restriction, objection
            and data portability.
          </p>

          <p>
            To make a privacy-related request, contact us at{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>

          <p>
            If you believe that the processing of your personal
            information infringes applicable data protection law, you
            also have the right to lodge a complaint with the
            competent supervisory authority. In Spain, this is the
            Spanish Data Protection Agency (AEPD).
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className="eyebrow">Updates</p>
        </div>

        <div className={styles.sectionContent}>
          <h2>Changes to this policy</h2>

          <p>
            We may update this Privacy Policy when the website,
            services or applicable requirements change.
          </p>

          <p>
            The latest version will always be published on this page.
          </p>
        </div>
      </section>
    </main>
  );
}