import styles from "./Contact.module.css";
import { useState, type FormEvent } from "react";

function Contact() {
  const loadingStyle = {
    cursor: "not-allowed",
    background: "linear-gradient(90deg, #2cc2f98f, #7a6ff29c)",
  };
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
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
      console.log("hey");
    }
  }

  return (
    <section id="contact">
      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Get in Touch</h2>
        <form method="POST" onSubmit={onSubmit}>
          <div className={styles.formSection}>
            <label className={styles.contactLabel}>Full Name</label>
            <input
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
            />
            <label className={styles.contactLabel}>Email Address</label>
            <input
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
            />
            <label className={styles.contactLabel}>Subject</label>
            <input
              name="subject"
              type="text"
              placeholder="Subject..."
              className={styles.contactInput}
              required
            />
            <label className={styles.contactLabel}>Message</label>
            <textarea
              name="message"
              placeholder="Message..."
              className={`${styles.contactInput} ${styles.messageInput}`}
              minLength={15}
              required
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
        <p>
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
      </div>
    </section>
  );
}

export default Contact;
