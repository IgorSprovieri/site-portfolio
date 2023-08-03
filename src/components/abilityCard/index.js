import styles from "./style.module.css";

export const AbilityCard = ({ children, icons }) => {
  return (
    <div className={styles["ability-container"]}>
      <div className={styles["ability-icons-container"]}>{icons}</div>
      <p className={styles["ability-paragraph"]}>{children}</p>
    </div>
  );
};
