import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import TypeWriter from "react-typewriter";

export const Title = ({ firstText, secondText, name }) => {
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
    <section ref={ref} className={styles["title-container"]} name={name}>
      <h1 className={styles["title-text"]}>
        {"{"}
        {isIntersecting ? (
          <TypeWriter typing={1}>{firstText}</TypeWriter>
        ) : (
          <></>
        )}
      </h1>
      <h1 className={styles["title-text-blue"]}>
        {isIntersecting ? (
          <TypeWriter typing={1}>{secondText}</TypeWriter>
        ) : (
          <></>
        )}
        {"}"}
      </h1>
    </section>
  );
};
