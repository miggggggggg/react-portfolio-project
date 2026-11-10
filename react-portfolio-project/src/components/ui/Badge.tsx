import styles from "./Badge.module.css";
import type { SkillsItem } from "../../data/skills";

function Badge({ title, description, svgIcon, imgAlt }: SkillsItem) {
  return (
    <div className={styles.badge}>
      <div className={styles.svgContainer}>
        <img src={svgIcon} alt={imgAlt} className={styles.svgIcon} />
      </div>
      <h4 className={styles.skillTitle}>{title}</h4>
      <p className={styles.skillDescription}>{description}</p>
    </div>
  );
}

export default Badge;
