import Image from "next/image";
import styles from "./style.module.css";
import { Button, MarkdownRender, Window } from "@/components";
import { useState } from "react";
import { AboutFrag } from "./aboutFrag";

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
            "https://api.github.com/repos/IgorSprovieri/create-frag-app/contents/readme.md"
          }
        ></MarkdownRender>
      </Window>
      <div className={styles["frag-container"]}>
        <div className={styles["frag-image-container"]}>
          <Image
            src="/frag-components.svg"
            alt="frag-components"
            height={96}
            width={96}
          ></Image>
        </div>
        <p className={styles["section-description"]}>
          Frag Components é uma biblioteca para criação de páginas web que
          utiliza template strings para criação de componentes HTML. A partir da
          versão 1.0.x contará com um gerenciador de estados inspirado ao React
          como useState e useEffect.
        </p>
      </div>
      <Button onClick={() => setWindowOpen(true)}>Conhecer o Projeto</Button>
    </section>
  );
};
