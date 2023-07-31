import styles from "./style.module.css";

export const Header = () => {
  return (
    <header className={styles["c-header"]}>
      <menu className={styles["c-menu"]}>
        <button className={styles["c-button"]}>Home</button>
        <button className={styles["c-button"]}>Habilidades</button>
        <button className={styles["c-button"]}>Portfólio</button>
        <button className={styles["c-button"]}>Experiências</button>
        <button className={styles["c-button"]}>Frag Components</button>
      </menu>
    </header>
  );
};
