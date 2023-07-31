import Image from "next/image";
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
      <div className={styles["c-social-icons"]}>
        <a>
          <Image
            className={styles["c-social-icons__image"]}
            src="/Github.png"
            alt="GitHub"
            width={34}
            height={34}
          />
        </a>
        <a>
          <Image
            className={styles["c-social-icons__image"]}
            src="/Linkedin.png"
            alt="Linkedin"
            width={34}
            height={34}
          />
        </a>
      </div>
    </header>
  );
};
