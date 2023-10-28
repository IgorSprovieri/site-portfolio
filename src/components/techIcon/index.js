import styles from "./style.module.css";
import Image from "next/image";

const techIcons = {
  "styled-components": {
    width: 38,
    height: 24,
  },
  vercel: {
    width: 48,
    height: 24,
  },
  postgres: {
    width: 20,
    height: 20,
  },
  express: {
    width: 28,
    height: 24,
  },
  "type-orm": {
    width: 32,
    height: 24,
  },
};

export const TechIcon = ({ language }) => {
  return (
    <Image
      className={styles["tech-icon"]}
      src={
        language === "type-orm"
          ? "/icons/type-orm-icon.png"
          : `/icons/${language}.svg`
      }
      alt="Html"
      width={techIcons[language] ? techIcons[language].width : 24}
      height={techIcons[language] ? techIcons[language].height : 24}
    />
  );
};
