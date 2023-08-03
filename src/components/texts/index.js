import styles from "./style.module.css";

export const H2 = ({ children }) => {
  return <h2 className={styles["h2"]}>{children}</h2>;
};

export const Paragraph = ({ children }) => {
  return <p className={styles["paragraph"]}>{children}</p>;
};
