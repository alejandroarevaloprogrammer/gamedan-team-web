"use client";

import {
  type FormEvent,
  useState,
} from "react";

import styles from "./ContactPage.module.css";

type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";

const enquiryOptions = [
  {
    value: "general",
    label: "General Question",
  },
  {
    value: "business",
    label: "Business",
  },
  {
    value: "press",
    label: "Press",
  },
  {
    value: "support",
    label: "Game Support",
  },
  {
    value: "other",
    label: "Other",
  },
] as const;

export function ContactForm() {
  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [subject, setSubject] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!subject) {
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "/contact-api",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error(
          "The message could not be sent.",
        );
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(
          data.message ||
            "The message could not be sent.",
        );
      }

      setStatus("success");
      setSubject("");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Honeypot field for automated spam bots */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className={styles.fieldGrid}>
        <div className={styles.field}>
          <label htmlFor="name">
            Name
            <span aria-hidden="true">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            minLength={2}
            maxLength={80}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">
            Email
            <span aria-hidden="true">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={120}
            required
          />
        </div>
      </div>

      <fieldset className={styles.subjectFieldset}>
        <legend>
          Subject
          <span aria-hidden="true">*</span>
        </legend>

        <div
          className={styles.subjectOptions}
          aria-label="Select an enquiry type"
        >
          {enquiryOptions.map((option) => {
            const isSelected =
              subject === option.value;

            return (
              <label
                className={styles.subjectOption}
                data-selected={isSelected}
                key={option.value}
              >
                <input
                  type="radio"
                  name="subject"
                  value={option.value}
                  checked={isSelected}
                  onChange={() =>
                    setSubject(option.value)
                  }
                  required
                />

                <span>{option.label}</span>
              </label>
            );
          })}
        </div>

        {!subject && (
          <p className={styles.subjectHint}>
            Select one enquiry type.
          </p>
        )}
      </fieldset>

      <div className={styles.field}>
        <label htmlFor="message">
          Message
          <span aria-hidden="true">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={8}
          minLength={10}
          maxLength={2000}
          required
        />
      </div>

      <div className={styles.formFooter}>
        <p className={styles.requiredText}>
          Fields marked with * are required.
        </p>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={
            status === "submitting" ||
            !subject
          }
        >
          {status === "submitting"
            ? "Sending..."
            : "Send Message"}
        </button>
      </div>

      <div
        className={styles.formMessage}
        aria-live="polite"
      >
        {status === "success" && (
          <p className={styles.successMessage}>
            Your message has been sent successfully.
          </p>
        )}

        {status === "error" && (
          <p className={styles.errorMessage}>
            The message could not be sent. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}