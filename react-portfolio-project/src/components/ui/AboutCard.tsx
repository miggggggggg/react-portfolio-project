import styles from "./AboutCard.module.css";
import type { AboutCardData } from "../../types";

function AboutCard({ title, description }: AboutCardData) {
  return (
    <div className={styles.aboutCard}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.aboutDescription}>{description}</p>
    </div>
  );
}

export default AboutCard;
