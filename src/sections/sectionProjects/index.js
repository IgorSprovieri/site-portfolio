import { GitHubButton, Window } from "@/components";
import { Projects } from "./projects";
import styles from "./style.module.css";
import { useState } from "react";

export const SectionProjects = () => {
  const [windowOpen, setWindowOpen] = useState(false);

  return (
    <>
      <Window
        title="Repositórios GitHub"
        open={windowOpen}
        setOpen={setWindowOpen}
      ></Window>
      <section className={styles["projects-section"]}>
        <div className={styles["projects-container"]}>
          <Projects></Projects>
        </div>
        <GitHubButton onClick={() => setWindowOpen(true)}>
          Todos os Projetos
        </GitHubButton>
      </section>
    </>
  );
};
