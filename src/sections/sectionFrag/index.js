import Image from "next/image";
import styles from "./style.module.css";
import { Button, MarkdownRender, Window } from "@/components";
import { useState } from "react";

export const SectionFrag = () => {
  const [windowOpen, setWindowOpen] = useState(false);

  return (
    <section className={styles["section-frag"]}>
      <Window
        title={"Frag Components"}
        open={windowOpen}
        setOpen={setWindowOpen}
      >
        <MarkdownRender
          url={
            "https://api.github.com/repos/IgorSprovieri/frag-components/contents/readme.md"
          }
        />
      </Window>
      <div className={styles["frag-container"]}>
        <div className={styles["frag-image-container"]}>
          <Image
            src="projects/frag-components.svg"
            alt="Frag Components"
            height={96}
            width={96}
          />
        </div>
        <p className={styles["frag-description"]}>
          Frag Components é uma biblioteca que desenvolvi para criação de sites.
          Utilizo tecnologias como JSX, virtual DOM, gerenciamento de estado
          local e global.
        </p>
      </div>
      <Button onClick={() => setWindowOpen(true)}>Conhecer o Projeto</Button>
    </section>
  );
};
