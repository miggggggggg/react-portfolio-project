import styles from "./Contact.module.css";
import { useState, useRef, type FormEvent } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!token) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          turnstileToken: token,
        }),
      });

      if (!res.ok) {
        console.error("Worker Status:", res.status);
        console.error("Worker Response:", await res.text());
        setStatus("error");
        return;
      }
      const response = await fetch("https://formspree.io/f/mvgrdglz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        console.error("Formspree Status:", response.status);
        console.error("Formspree Response:", await response.text());

        setErrorMessage("Submission failed. Please email me directly.");
        setStatus("error");
        return;
      }
      setSubmitted(true);
      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Network error. Please try again later.");
      setStatus("error");
    } finally {
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }

      setToken("");
    }
  }

  return (
    <section id="contact">
      <div className={styles.contactSection}>
        <div className={styles.sectionLeft}>
          <h2 className={styles.contactTitle}>Get in Touch</h2>
          <div className={styles.availabilityContainer}>
            <div className={styles.greenCircle}></div>{" "}
            <p>Open to intern/junior front-end opportunities</p>
          </div>
          <p className={styles.belowTitle}>
            Whether you need me to be part of a team, design a project for you,
            or assist with any sort of front-end work, i am always open for
            opportunities.
          </p>
        </div>
        <div className={styles.sectionRight}>
          <form method="POST" onSubmit={onSubmit}>
            <div className={styles.formSection}>
              <label className={styles.contactLabel} htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your full name..."
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
                placeholder="you@example.com"
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
            <div className={styles.formBottom}>
              <Turnstile
                ref={turnstileRef}
                siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                onSuccess={(newToken) => setToken(newToken)}
                onExpire={() => setToken("")}
                onError={() => setToken("")}
              />

              {submitted ? (
                <h4 className={styles.thankYou}>Message sent, Thank you!</h4>
              ) : (
                <button
                  type="submit"
                  disabled={!token || status === "sending"}
                  className={styles.submitBtn}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              )}
            </div>
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
      </div>
    </section>
  );
}

export default Contact;
