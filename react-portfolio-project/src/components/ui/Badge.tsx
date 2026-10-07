import styles from "./Badge.module.css";
import type { BadgeData } from "../../data/skills";

function Badge({ title, description }: BadgeData) {
  return (
    <div className={styles.badge}>
      <h5 className={styles.skillTitle}>{title}</h5>
      <p className={styles.skillDescription}>{description}</p>
    </div>
  );
}

export default Badge;
