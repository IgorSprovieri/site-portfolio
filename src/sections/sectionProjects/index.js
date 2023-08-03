import { Projects } from "./projects";
import styles from "./style.module.css";

export const SectionProjects = () => {
  return (
    <section className={styles["projects-section"]}>
      <div className={styles["projects-container"]}>
        <Projects></Projects>
      </div>
    </section>
  );
};
