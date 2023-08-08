import styles from "./style.module.css";

export const Li = ({ children }) => {
  return <li className={styles["li"]}>{children}</li>;
};
