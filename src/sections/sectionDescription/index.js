import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import TypeWriter from "react-typewriter";
import { Button, H1, Paragraph } from "@/components";
import Image from "next/image";

export const SectionDescription = () => {
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

  const MyImage = () => {
    return (
      <Image
        src="/My Photo.jpg"
        alt="Igor Sprovieri"
        width={380}
        height={380}
      />
    );
  };

  return (
    <section className={styles["description-section"]}>
      <div className={styles["description-section-container"]}>
        <div ref={ref} className={styles["description-container"]}>
          <H1>
            {isIntersecting ? (
              <TypeWriter typing={1}>
                Olá, Muito prazer! Sou o Igor Sprovieri
              </TypeWriter>
            ) : (
              <></>
            )}
          </H1>
          <Paragraph>
            Programador desde 2013, comecei desenvolvendo jogos com a Unity,
            onde em 2020 eu abri meu estúdio de jogos e até 2022 desenvolvi 14
            projetos em equipe, autorais e de terceiros. Também fui redator por
            mais de um ano do site crieseusjogos.com.br. Após esse período,
            comecei a me dedicar ao desenvolvimento web e hoje atuo como
            desenvolvedor fullstack com React, Next, Typescript e Node.
          </Paragraph>
          <Button
            onClick={() => window.open("https://wa.me/message/AQZS3NOUQULWL1")}
          >
            ENTRAR EM CONTATO
          </Button>
        </div>
        <MyImage></MyImage>
      </div>
    </section>
  );
};
