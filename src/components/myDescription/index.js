import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import TypeWriter from "react-typewriter";
import { Paragraph } from "../texts";
import { Button } from "../buttons";

export const MyDescription = () => {
  const [isIntersecting, setIsIntersecting] = useState();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    });

    observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref} className={styles["my-description-container"]}>
      <h1 className={styles["my-description-title"]}>
        {isIntersecting ? (
          <TypeWriter typing={1}>
            Olá, Muito prazer! Sou o Igor Sprovieri
          </TypeWriter>
        ) : (
          <></>
        )}
      </h1>
      <Paragraph>
        Programador desde 2013, comecei desenvolvendo jogos com a Unity, onde em
        2020 eu abri meu estúdio de jogos e até 2022 desenvolvi 14 projetos em
        equipe, autorais e de terceiros. Também fui redator por mais de um ano
        do site crieseusjogos.com.br. Após esse período, comecei a me dedicar ao
        desenvolvimento web e hoje atuo como desenvolvedor fullstack com React,
        Next, Typescript e Node.
      </Paragraph>
      <Button
        onClick={() => window.open("https://wa.me/message/AQZS3NOUQULWL1")}
      >
        ENTRAR EM CONTATO
      </Button>
    </div>
  );
};
