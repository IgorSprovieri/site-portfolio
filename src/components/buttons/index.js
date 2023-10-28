import { Link } from "react-scroll";
import styles from "./style.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Button = ({ children, onClick }) => {
  return (
    <button className={styles["button"]} onClick={onClick}>
      {children}
    </button>
  );
};

export const MenuButton = ({ children, scrollTo }) => {
  return (
    <Link
      className={styles.menuButton}
      activeClass="active"
      to={scrollTo}
      spy={true}
      smooth={true}
      offset={0}
      duration={200}
    >
      {children}
    </Link>
  );
};

export const SwitchButton = ({ texts, value, setValue }) => {
  return (
    <div>
      <button
        className={`${styles["switch-left"]} ${
          value === 0
            ? styles["switch-selected"]
            : styles["switch-non-selected"]
        }`}
        onClick={() => setValue(0)}
      >
        {texts[0]}
      </button>
      <button
        className={`${styles["switch-center"]} ${
          value === 1
            ? styles["switch-selected"]
            : styles["switch-non-selected"]
        }`}
        onClick={() => setValue(1)}
      >
        {texts[1]}
      </button>
      <button
        className={`${styles["switch-right"]} ${
          value === 2
            ? styles["switch-selected"]
            : styles["switch-non-selected"]
        }`}
        onClick={() => setValue(2)}
      >
        {texts[2]}
      </button>
    </div>
  );
};

export const WebsiteButton = ({ children, onClick }) => {
  return (
    <button className={styles["icon-button"]} onClick={onClick}>
      <p className={styles["icon-button-text"]}>{children}</p>
      <Image src="/link.svg" alt="Abrir Website" width={24} height={24} />
    </button>
  );
};

export const GitHubButton = ({ children, onClick }) => {
  return (
    <button className={styles["icon-button"]} onClick={onClick}>
      <p className={styles["icon-button-text"]}>{children}</p>
      <Image src="/Github.png" alt="GitHub" width={24} height={24} />
    </button>
  );
};
