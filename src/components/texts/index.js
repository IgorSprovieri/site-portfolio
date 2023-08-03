import styles from "./style.module.css";

export const Paragraph = ({ children }) => {
  return <p className={styles["paragraph"]}>{children}</p>;
};
