import { useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [downloaded, setDownloaded] = useState<boolean>(false);

  return (
    <section id="hero">
      <header>
        <div className={styles.heroSection}>
          <h1 className={styles.projectTitle}>Miguel Baldacchino</h1>
          <p className={styles.elevatorPitch}>
            I'm a frontend developer focused on writing clean, maintainable code
            and building polished user experiences with React. I use TypeScript
            to create reliable, scalable applications with a strong emphasis on
            code quality and consistency.{" "}
            <a
              className={
                downloaded ? styles.resumeDownloaded : styles.resumeDownload
              }
              onClick={() => setDownloaded(true)}
              href="/Miguel_Baldacchino_Resume.pdf"
              download
            >
              Download My Resume{" "}
              {downloaded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className={styles.checkmark}
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              )}
            </a>
          </p>
          <div className={styles.actionButtonSection}>
            <button
              className={styles.projectsButton}
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView()
              }
            >
              View Projects
            </button>
            <button
              className={styles.contactButton}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Contact Me
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Hero;
