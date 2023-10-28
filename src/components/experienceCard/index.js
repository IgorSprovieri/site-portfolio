import styles from "./style.module.css";

export const ExperienceCard = ({ title, period, children }) => {
  return (
    <div className={styles["experience-container"]}>
      <h3 className={styles["experience-title"]}>{title}</h3>
      <h4 className={styles["experience-period"]}>{period}</h4>
      <p className={styles["experience-description"]}>{children}</p>
    </div>
  );
};
