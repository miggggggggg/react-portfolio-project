import type { StrengthCardData } from "../../types";
import styles from "./StrengthCard.module.css";

function StrengthCard({ strength }: StrengthCardData) {
  return (
    <div className={styles.strengthCard}>
      <h5 className={styles.strength}>{strength}</h5>
    </div>
  );
}

export default StrengthCard;
