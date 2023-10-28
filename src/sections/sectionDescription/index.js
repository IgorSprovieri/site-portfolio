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
            {isIntersecting && (
              <TypeWriter typing={1}>
                Olá, Muito prazer! Sou o Igor Sprovieri
              </TypeWriter>
            )}
          </H1>
          <Paragraph>
            Após atuar 3 anos como desenvolvedor de jogos, participando de mais
            de 15 projetos para a Steam, migrei para a área de desenvolvimento
            web e mobile com React, React Native e Node.
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
