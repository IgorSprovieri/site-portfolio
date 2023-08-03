import { IconButton } from "../buttons";
import styles from "./style.module.css";
import Image from "next/image";

export const ProjectCard = ({ src, alt, title, children, Button, Icons }) => {
  return (
    <div className={styles["project-container"]}>
      <Image
        className={styles["project-image"]}
        src={src}
        alt={alt}
        width={250}
        height={120}
      />
      <h3 className={styles["project-title"]}>{title}</h3>
      <p className={styles["project-paragraph"]}>{children}</p>

      <div className={styles["project-icons-container"]}>{Icons}</div>

      <div className={styles["project-buttons-container"]}>{Button}</div>
    </div>
  );
};
