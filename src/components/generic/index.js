import styles from "./style.module.css";

export const IsBlue = ({ children }) => {
  return <div className={styles["isBlue"]}>{children}</div>;
};

export const ScrollOnMobile = ({ children }) => {
  return <div className={styles["scroll-on-mobile"]}>{children}</div>;
};
