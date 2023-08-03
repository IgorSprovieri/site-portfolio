import { Link } from "react-scroll";
import styles from "./style.module.css";

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
