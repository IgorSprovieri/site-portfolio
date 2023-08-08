import { H2, SocialIcons } from "@/components";
import styles from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <H2>Igor Sprovieri</H2>
      <SocialIcons></SocialIcons>
    </footer>
  );
};
