import styles from "./About.module.css";
import AboutCard from "../ui/AboutCard";
import StrengthCard from "../ui/StrengthCard";

function About() {
  return (
    <section id="about">
      <div className={styles.aboutSection}>
        <span>
          <em>ALWAYS IMPROVING</em>
        </span>
        <div className={styles.titleContainer}>
          <img
            src="dev_pfp.jpg"
            className={styles.devPfp}
            alt="A picture of Miguel Baldacchino"
          />
          <h2 className={styles.aboutTitle}>
            My Journey, <i>so far...</i>
          </h2>
        </div>
        <p className={styles.underTitle}>
          A little about the developer behind the code
        </p>
        <div className={styles.cardWrapper}>
          <div className={styles.aboutCard}>
            <div className={styles.cardTop}>
              <p className={styles.chapter}>01 / THE BEGINNING</p>
              <div className={styles.svgContainer}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M9 31 A15 15 0 0 1 39 31"
                    stroke="#FF963D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <path
                    d="M24 30 V18"
                    stroke="#FF963D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 24 C15 24 13 18 13 14 C21 14 25 18 24 24Z"
                    fill="#FF963D"
                  />
                  <path
                    d="M24 21 C24 14 29 11 35 12 C35 19 30 23 24 24"
                    fill="#FF963D"
                    opacity="0.75"
                  />
                  <path
                    d="M7 32 H41"
                    stroke="#FF963D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 7 V4 M12 12 L10 10 M36 12 L38 10"
                    stroke="#FF963D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.cardMain}>
              <h3>Discovering a hobby..</h3>
              <span className={styles.titleAccent} aria-hidden="true" />
              <p>
                I first discovered coding while I was still in secondary school,
                and I quickly fell in love with it. In early 2025, I started
                exploring the fundamentals of front-end development, and I soon
                realised that building for the web was the direction I wanted to
                pursue.
              </p>
            </div>
          </div>
          <div className={styles.aboutCard}>
            <div className={styles.cardTop}>
              <p className={styles.chapter}>02 / GROWTH</p>
              <div className={styles.svgContainer}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M24 34 C24 26 23 17 24 7"
                    stroke="#FF963D"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 27 C16 27 11 22 10 16 C17 15 23 19 24 27Z"
                    fill="#FF963D"
                    fillOpacity="0.85"
                  />

                  <path
                    d="M24 22 C25 15 31 12 37 13 C37 20 31 24 24 24Z"
                    fill="#FF963D"
                    fillOpacity="0.65"
                  />

                  <path
                    d="M24 15 C18 14 16 10 17 5 C23 5 26 9 24 15Z"
                    fill="#FF963D"
                    fillOpacity="0.65"
                  />

                  <path
                    d="M24 11 C25 5 30 2 35 3 C35 9 30 13 24 13Z"
                    fill="#FF963D"
                  />
                  <path
                    d="M12 35 Q24 31 36 35"
                    stroke="#FF963D"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.cardMain}>
              <h3>Expanding My Skills</h3>
              <span className={styles.titleAccent} aria-hidden="true" />
              <p>
                I spent the rest of 2025 expanding my foundations and
                experimenting with different technologies, before taking my
                learning to another level in 2026 through a range of courses and
                hands-on projects.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.aboutCard}>
          <div className={styles.cardTop}>
            <p className={styles.chapter}>03 / THE FUTURE</p>
            <div className={styles.svgContainer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 40"
                width="48"
                height="48"
                fill="none"
                aria-label="Stage 3 grown plant"
                role="img"
              >
                {/* Main stem */}
                <path
                  d="M24 36 C24 27 24 17 24 5"
                  stroke="#E88A35"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />

                {/* Branches */}
                <g stroke="#E88A35" strokeWidth="1.3" strokeLinecap="round">
                  <path d="M24 15 C20 13 18 11 16 8" />
                  <path d="M24 21 C28 19 30 16 32 13" />
                  <path d="M24 27 C20 25 17 23 14 22" />
                  <path d="M24 31 C28 29 31 27 34 26" />
                </g>

                {/* Leaves */}
                <g fill="#E88A35">
                  <path d="M24 12 C17 3 11 7 15 13 C18 16 22 15 24 12Z" />
                  <path d="M25 17 C29 7 37 7 36 13 C35 18 29 19 25 17Z" />

                  <path d="M23 22 C16 14 9 17 12 23 C15 27 20 26 23 22Z" />
                  <path d="M25 25 C30 17 37 19 36 24 C35 29 29 29 25 25Z" />

                  <path d="M23 30 C17 24 12 27 15 32 C18 35 21 33 23 30Z" />
                </g>
                <path
                  d="M16 37 Q24 40 32 37"
                  stroke="#E88A35"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className={styles.cardMain}>
            <h3>Passion & Goals</h3>
            <span className={styles.titleAccent} aria-hidden="true" />
            <p>
              I'm particularly passionate about React, TypeScript, clean code,
              and building responsive, accessible user interfaces. My long-term
              goal is to continuously push my skills further and become one of
              the strongest front-end developers I can be.
            </p>
          </div>
        </div>
        {/*
        <div className={styles.cardSection}> 
          <AboutCard
            title="Discovering Front-end"
            description="I first discovered coding while I was still in secondary school, and I
          quickly fell in love with it. In
          early 2025, I started exploring
          the fundamentals of front-end development, and I soon realised
          that building for the web was the direction I wanted to pursue."
          ></AboutCard>
          <AboutCard
            title="Expanding My Skills"
            description="I spent the rest of 2025 expanding my foundations and experimenting with different
            technologies, before taking my learning to another level in 2026
          through a range of courses and hands-on projects."
          ></AboutCard>
          <AboutCard
            title="Passion & Goals"
            description="I'm particularly passionate about React, TypeScript, clean code, and
            building responsive, accessible user interfaces.
              My long-term goal is to continuously push my skills further and
              become one of the strongest front-end developers I can be."
          ></AboutCard>
          
        </div>
        */}
        {/* 
        <h4 className={styles.strengthsTitle}>Key Strengths</h4>
        <div className={styles.strengthWrapper}>
          <StrengthCard strength="Clean Code Enthusiast"></StrengthCard>
          <StrengthCard strength="Component-Driven Design"></StrengthCard>
          <StrengthCard strength="React & TypeScript"></StrengthCard>
          <StrengthCard strength="Responsive & Accessible UI"></StrengthCard>
          <StrengthCard strength="Problem-Solving Mindset"></StrengthCard>
          <StrengthCard strength="Continuous Learning & Improvement"></StrengthCard>
        </div>
        */}
      </div>
    </section>
  );
}

export default About;
