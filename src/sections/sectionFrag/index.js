import Image from "next/image";
import styles from "./style.module.css";
import { Button, Window } from "@/components";
import { useState } from "react";

export const SectionFrag = () => {
  const [windowOpen, setWindowOpen] = useState(false);

  return (
    <section className={styles["section-frag"]}>
      <Window
        title={"Frag Components"}
        open={windowOpen}
        setOpen={setWindowOpen}
      ></Window>
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
          Frag Components é um framework que estou desenvolvendo, com foco em
          SSR (Server Side Render) para a criação de MPA&apos;s (Multi Page
          Aplications) através de componentes HTML reutilizáveis
        </p>
      </div>
      <Button onClick={() => setWindowOpen(true)}>Conhecer o Projeto</Button>
    </section>
  );
};
