import styles from "./About.module.css";
import AboutCard from "../ui/AboutCard";
import StrengthCard from "../ui/StrengthCard";

function About() {
  return (
    <section id="about">
      <div className={styles.aboutSection}>
        <h2 className={styles.aboutTitle}>About me</h2>
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
        <h4 className={styles.strengthsTitle}>Key Strengths</h4>
        <div className={styles.strengthWrapper}>
          <StrengthCard strength="Clean Code Enthusiast"></StrengthCard>
          <StrengthCard strength="Component-Driven Design"></StrengthCard>
          <StrengthCard strength="React & TypeScript"></StrengthCard>
          <StrengthCard strength="Responsive & Accessible UI"></StrengthCard>
          <StrengthCard strength="Problem-Solving Mindset"></StrengthCard>
          <StrengthCard strength="Continuous Learning & Improvement"></StrengthCard>
        </div>
      </div>
    </section>
  );
}

export default About;
