import { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import TypeWriter from "react-typewriter";
import { H1, IsBlue } from "@/components";

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
    <section ref={ref} className={styles["title-section"]} name={name}>
      <H1>
        {"{"}
        {isIntersecting && <TypeWriter typing={1}>{firstText}</TypeWriter>}
      </H1>
      <H1>
        <IsBlue>
          {isIntersecting && <TypeWriter typing={1}>{secondText}</TypeWriter>}
          {"}"}
        </IsBlue>
      </H1>
    </section>
  );
};
