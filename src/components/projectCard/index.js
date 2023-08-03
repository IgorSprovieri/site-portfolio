import { useState } from "react";
import { GitHubButton, IconButton } from "../buttons";
import styles from "./style.module.css";
import Image from "next/image";
import { Window } from "../window";
import ReactMarkdown from "react-markdown";
import { useQuery } from "react-query";
import axios from "axios";
import { MarkdownRender } from "../markdownRender";

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

export const RepositoryCard = ({ repo }) => {
  const [openWindow, setOpenWindow] = useState();

  return (
    <>
      <Window title="Readme" open={openWindow} setOpen={setOpenWindow}>
        <MarkdownRender
          url={`https://api.github.com/repos/IgorSprovieri/${repo.name}/contents/readme.md`}
        ></MarkdownRender>
      </Window>
      <div className={styles["project-container"]}>
        <Image
          className={styles["project-image"]}
          src={"/blank.png"}
          alt={`repo ${repo.name}`}
          width={250}
          height={120}
        />
        <h3 className={styles["project-title"]}>
          {repo.name.lenght < 16 ? repo.name : repo.name.slice(0, 16)}
        </h3>
        <p className={styles["project-paragraph"]}>
          {" "}
          {repo.description || (
            <>
              <br></br>
              <br></br>
            </>
          )}
        </p>

        <div className={styles["project-buttons-container"]}>
          <GitHubButton onClick={() => setOpenWindow(true)}>
            Ver Readme
          </GitHubButton>
        </div>
      </div>
    </>
  );
};
