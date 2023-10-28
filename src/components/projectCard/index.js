import { useState } from "react";
import { GitHubButton } from "@/components/buttons";
import styles from "./style.module.css";
import Image from "next/image";
import { Window } from "@/components/window";
import { MarkdownRender } from "@/components/markdownRender";
import { TechIcon } from "../techIcon";

export const ProjectCard = ({
  languages,
  readme,
  imageUrl,
  title,
  description,
}) => {
  const [openWindow, setOpenWindow] = useState();

  return (
    <>
      <Window title="Readme" open={openWindow} setOpen={setOpenWindow}>
        <MarkdownRender url={readme} />
      </Window>
      <div className={styles["project-container"]}>
        <Image
          className={styles["project-image"]}
          src={imageUrl}
          alt="Projeto"
          width={250}
          height={120}
        />
        <h3 className={styles["project-title"]}>{title}</h3>
        <p className={styles["project-paragraph"]}>{description}</p>
        {
          <div className={styles["project-icons-container"]}>
            {languages?.map((language) => (
              <TechIcon key={language} language={language} />
            ))}
          </div>
        }
        <div className={styles["project-buttons-container"]}>
          <GitHubButton onClick={() => setOpenWindow(true)}>
            Ver Readme
          </GitHubButton>
        </div>
      </div>
    </>
  );
};
