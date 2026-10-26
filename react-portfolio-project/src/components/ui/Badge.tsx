import styles from "./Badge.module.css";
import type { SkillsItem } from "../../data/skills";

function Badge({ title, description }: SkillsItem) {
  return (
    <div className={styles.badge}>
      <h4 className={styles.skillTitle}>{title}</h4>
      <p className={styles.skillDescription}>{description}</p>
    </div>
  );
}

export default Badge;
