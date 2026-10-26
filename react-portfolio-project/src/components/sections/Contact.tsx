import styles from "./Contact.module.css";
import { useState, type FormEvent } from "react";

function Contact() {
  const loadingStyle = {
    cursor: "not-allowed",
    background: "linear-gradient(135deg, #ff8c00bd, #cc5500b2)",
  };
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch("https://formspree.io/f/mvgrdglz", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMessage("Submission failed. Please email me directly.");
      }
    } catch {
      setErrorMessage("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact">
      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Get in Touch</h2>
        <form method="POST" onSubmit={onSubmit}>
          <div className={styles.formSection}>
            <label className={styles.contactLabel} htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Full name..."
              type="text"
              onChange={(e) => {
                if (e.currentTarget.validity.patternMismatch) {
                  e.currentTarget.setCustomValidity(
                    "Please enter both your name and surname",
                  );
                } else {
                  e.currentTarget.setCustomValidity("");
                }
              }}
              minLength={2}
              pattern=".*\s+.*"
              className={styles.contactInput}
              required
              disabled={submitted}
            />
            <label className={styles.contactLabel} htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              placeholder="Email address..."
              type="email"
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              onChange={(e) => {
                if (
                  e.currentTarget.validity.typeMismatch ||
                  e.currentTarget.validity.patternMismatch
                ) {
                  e.currentTarget.setCustomValidity(
                    "Please enter a valid email address",
                  );
                } else {
                  e.currentTarget.setCustomValidity("");
                }
              }}
              className={styles.contactInput}
              required
              disabled={submitted}
            />
            <label className={styles.contactLabel} htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject..."
              className={styles.contactInput}
              required
              disabled={submitted}
            />
            <label className={styles.contactLabel} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message..."
              className={`${styles.contactInput} ${styles.messageInput}`}
              minLength={15}
              required
              disabled={submitted}
            />
          </div>
          {submitted ? (
            <h4 className={styles.thankYou}>Message sent, Thank you!</h4>
          ) : loading === true ? (
            <button
              type="submit"
              className={styles.submitBtn}
              style={loadingStyle}
            >
              Processing...
            </button>
          ) : (
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          )}
        </form>
        <p className={styles.beforeEmail}>
          Or,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:miguelbaldacchino625@gmail.com"
            className={styles.email}
          >
            Email Me
          </a>
        </p>
        {errorMessage != "" ? (
          <p className={styles.errorMessage}>{errorMessage}</p>
        ) : undefined}
      </div>
    </section>
  );
}

export default Contact;
