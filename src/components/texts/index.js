import styles from "./style.module.css";

export const Paragraph = ({ children, litte, gray }) => {
  const classname = `${styles["paragraph"]} ${
    litte ? styles["paragraph-litte"] : ""
  } ${gray ? styles["paragraph-gray"] : ""}`;

  return <p className={classname}>{children}</p>;
};
