import styles from "./style.module.css";
import Image from "next/image";

export const Html = () => {
  return (
    <Image
      className={styles["tech-icon"]}
      src="/html.svg"
      alt="Html"
      width={24}
      height={24}
    ></Image>
  );
};

export const Css = () => {
  return (
    <Image
      className={styles["tech-icon"]}
      src="/css.svg"
      alt="Css"
      width={24}
      height={24}
    ></Image>
  );
};

export const Js = () => {
  return (
    <Image
      className={styles["tech-icon"]}
      src="/javascript.svg"
      alt="Javascript"
      width={24}
      height={24}
    ></Image>
  );
};

export const React = () => {
  return (
    <Image
      className={styles["tech-icon"]}
      src="/react.svg"
      alt="React"
      width={24}
      height={24}
    ></Image>
  );
};

export const StyledComponents = () => {
  return (
    <Image
      className={styles["tech-icon"]}
      src="/styled-components.svg"
      alt="Styled Components"
      width={38}
      height={24}
    ></Image>
  );
};

export const Vercel = () => {
  return (
    <Image
      className={styles["tech-icon"]}
      src="/vercel.svg"
      alt="Vercel"
      width={48}
      height={24}
    ></Image>
  );
};

export const Node = () => {
  return (
    <Image
      className={styles["tech-icon"]}
      src="/node.svg"
      alt="Node"
      width={24}
      height={24}
    ></Image>
  );
};

export const Typescript = () => {
  return (
    <Image
      className={styles["tech-icon"]}
      src="/typescript.svg"
      alt="Typescript"
      width={24}
      height={24}
    ></Image>
  );
};

export const Postgres = () => {
  return (
    <Image
      className={styles["tech-icon"]}
      src="/postgres.svg"
      alt="Postgres"
      width={20}
      height={20}
    ></Image>
  );
};
export const Express = () => {
  return (
    <Image
      className={styles["tech-icon"]}
      src="/express-mini.svg"
      alt="Express"
      width={28}
      height={24}
    ></Image>
  );
};

export const TypeORM = () => {
  return (
    <Image
      className={styles["tech-icon"]}
      src="/type-orm.png"
      alt="Type ORM"
      width={48}
      height={24}
    ></Image>
  );
};
