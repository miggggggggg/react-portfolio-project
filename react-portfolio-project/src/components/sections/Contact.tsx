import styles from "./Contact.module.css";
import { useState, useRef, type FormEvent } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

function Contact() {
  const loadingStyle = {
    cursor: "not-allowed",
    background: "linear-gradient(135deg, #ff8c00bd, #cc5500b2)",
  };
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const turnstileRef = useRef(null);

  {
    /*async function onSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch("/api/submit", {
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
    */
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) return;
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
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
    if (res.ok) {
      setStatus("sent");
      e.currentTarget.reset();
    } else {
      setStatus("error");

      console.error("HTTP Status:", res.status);
      console.error("Response:", await res.text());
    }
    // Reset widget because Turnstile tokens are single-use
    turnstileRef.current?.reset();
    setToken("");
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
