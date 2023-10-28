import { Paragraph } from "@/components";
import styles from "./style.module.css";

export const AbilityCard = ({ children, icons }) => {
  return (
    <div className={styles["ability-card"]}>
      <div className={styles["ability-card-icons"]}>{icons}</div>
      <Paragraph>{children}</Paragraph>
    </div>
  );
};
