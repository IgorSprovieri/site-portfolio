import styles from "./style.module.css";

export const H1 = ({ children }) => {
  return <h1 className={styles["h1"]}>{children}</h1>;
};

export const H2 = ({ children }) => {
  return <h2 className={styles["h2"]}>{children}</h2>;
};

export const H3 = ({ children }) => {
  return <h3 className={styles["h3"]}>{children}</h3>;
};

export const Paragraph = ({ children }) => {
  return <p className={styles["paragraph"]}>{children}</p>;
};
