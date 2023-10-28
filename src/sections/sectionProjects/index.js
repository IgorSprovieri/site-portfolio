import { GitHubButton, Window, ProjectCard } from "@/components";
import styles from "./style.module.css";
import { useState } from "react";

export const SectionProjects = ({ data }) => {
  const [windowOpen, setWindowOpen] = useState(false);

  return (
    <>
      <Window title="Outros Projetos" open={windowOpen} setOpen={setWindowOpen}>
        <div className={styles["list-repos-container"]}>
          {data
            .filter(({ highlight }) => {
              return highlight === false;
            })
            .map(({ docId, name, language, readme, imageUrl, description }) => {
              return (
                <ProjectCard
                  key={docId}
                  title={name}
                  languages={language}
                  readme={readme}
                  imageUrl={imageUrl}
                  description={description}
                />
              );
            })}
        </div>
      </Window>
      <section className={styles["projects-section"]}>
        <div className={styles["projects-container"]}>
          {data
            ?.filter(({ highlight }) => {
              return highlight === true;
            })
            .map(({ docId, name, language, readme, imageUrl, description }) => {
              return (
                <ProjectCard
                  key={docId}
                  title={name}
                  languages={language}
                  readme={readme}
                  imageUrl={imageUrl}
                  description={description}
                />
              );
            })}
        </div>
        <GitHubButton onClick={() => setWindowOpen(true)}>
          Ver Todos os Projetos
        </GitHubButton>
      </section>
    </>
  );
};
