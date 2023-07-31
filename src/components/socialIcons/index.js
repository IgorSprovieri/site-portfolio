import Image from "next/image";
import styles from "./style.module.css";

export const SocialIcons = ({ src, alt, url }) => {
  return (
    <div className={styles["social-icons-container"]}>
      <a onClick={() => window.open("https://github.com/IgorSprovieri")}>
        <Image
          className={styles["social-icon-image"]}
          src="/Github.png"
          alt="GitHub"
          width={34}
          height={34}
        />
      </a>{" "}
      <a
        onClick={() =>
          window.open("https://www.linkedin.com/in/igor-sprovieri-768b09196/")
        }
      >
        <Image
          className={styles["social-icons-image"]}
          src="/Linkedin.png"
          alt="Linkedin"
          width={34}
          height={34}
        />
      </a>
    </div>
  );
};
